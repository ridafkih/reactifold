import * as vscode from "vscode";
import { mapDirectory } from "./util/directoryUtil";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "reactifold" is now active!');
  let disposable = vscode.commands.registerCommand(
    "reactifold.produceComponent",
    () => {
      mapDirectory("commands").then((e) =>
        vscode.window.showInformationMessage(e.join(", "))
      );
      vscode.window.showInformationMessage("Hello World from reactifold!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
