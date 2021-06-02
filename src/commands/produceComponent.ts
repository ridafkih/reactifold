import * as path from "path";
import * as vscode from "vscode";
import { CommandHandler } from "../types";

export const produceComponent: CommandHandler = {
  command: "reactifold.produceComponent",
  callback: (uri: vscode.Uri): void => {
    vscode.window
      .showInputBox({
        prompt: "You can name your functional component here.",
        title: "Component Name",
        validateInput: (token: string) => {
          return !token ? "Enter a valid component name" : null;
        },
      })
      .then((componentName) => {
        const componentUrl: vscode.Uri = vscode.Uri.joinPath(
          uri,
          `${componentName}.jsx`
        );
        const edit: vscode.WorkspaceEdit = new vscode.WorkspaceEdit();
        edit.createFile(componentUrl, { ignoreIfExists: true });
      });
  },
};
