import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "reactifold" is now active!');
  let disposable = vscode.commands.registerCommand(
    "reactifold.produceComponent",
    () => {
      vscode.window.showInformationMessage("Hello World from reactifold!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
