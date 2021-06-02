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
      })
      .then((componentName) => {
        if (!componentName) {
          return vscode.window.showErrorMessage("Invalid Component Name");
        }

        const componentUrl: vscode.Uri = vscode.Uri.joinPath(
          uri,
          `${componentName}.tsx`
        );
        const edit: vscode.WorkspaceEdit = new vscode.WorkspaceEdit();
        const position: vscode.Position = new vscode.Position(0, 0);
        const editRange: vscode.Range = new vscode.Range(position, position);
        edit.createFile(componentUrl, { ignoreIfExists: true });
        edit.replace(componentUrl, editRange, "SWAG\nSWAG");
        vscode.workspace.applyEdit(edit);
      });
  },
};
