import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import { CommandHandler } from "../types";
import { generateComponentTemplate } from "../utils/component";

const createFileUri = (
  base: vscode.Uri,
  componentName: string,
  extension: string
): vscode.Uri => {
  return vscode.Uri.joinPath(
    base,
    componentName,
    `${componentName}.${extension}`
  );
};

export const produceComponent: CommandHandler = {
  command: "reactifold.produceComponent",
  callback: (uri: vscode.Uri): void => {
    vscode.window
      .showInputBox({
        prompt: "You can name your functional component here.",
        title: "Component Name",
      })
      .then((componentName) => {
        if (!componentName || !uri) {
          return;
        }

        fs.mkdir(path.join(uri.path, componentName), (err) => {
          if (err) {
            console.error(err);
            return vscode.window.showErrorMessage("Error Creating Component");
          }

          const position: vscode.Position = new vscode.Position(0, 0);
          const newFileRange: vscode.Range = new vscode.Range(
            position,
            position
          );

          const componentUrl: vscode.Uri = createFileUri(
            uri,
            componentName,
            "tsx"
          );
          const componentEdit: vscode.WorkspaceEdit =
            new vscode.WorkspaceEdit();

          componentEdit.createFile(componentUrl, { ignoreIfExists: true });
          componentEdit.replace(
            componentUrl,
            newFileRange,
            generateComponentTemplate(componentName)
          );
          vscode.workspace.applyEdit(componentEdit);

          const cssModuleUrl: vscode.Uri = createFileUri(
            uri,
            componentName,
            "module.css"
          );
          const cssModuleEdit: vscode.WorkspaceEdit =
            new vscode.WorkspaceEdit();
          cssModuleEdit.createFile(cssModuleUrl, { ignoreIfExists: true });
          vscode.workspace.applyEdit(cssModuleEdit);
        });
      });
  },
};
