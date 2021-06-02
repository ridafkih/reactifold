import * as vscode from "vscode";
import { CommandHandler } from "./types";

import { produceComponent } from "./commands/produceComponent";

export function activate(context: vscode.ExtensionContext) {
  const commands: CommandHandler[] = [produceComponent];

  for (let { command, callback } of commands) {
    console.log(`:: registering ${command}`);
    const disposable: vscode.Disposable = vscode.commands.registerCommand(
      command,
      callback
    );
    context.subscriptions.push(disposable);
  }
}

export function deactivate() {}
