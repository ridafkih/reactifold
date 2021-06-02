import * as vscode from "vscode";
import { CommandHandler } from "./types";
import { mapDirectory } from "./util/directoryUtil";

export function activate(context: vscode.ExtensionContext) {
  mapDirectory("commands")
    .then((filePaths) => {
      const commandHandlers: CommandHandler[] = [];
      filePaths.map((filePath) => {
        try {
          const commandHandler: CommandHandler = require(filePath);
          commandHandlers.push(commandHandler);
        } catch (e) {}
      });
      return commandHandlers;
    })
    .then((commands: CommandHandler[]) => {
      const disposables: vscode.Disposable[] = commands.map(
        ({ command, callback }) => {
          console.log(`:: registering command ${command}`);
          return vscode.commands.registerCommand(command, callback);
        }
      );
      context.subscriptions.push(...disposables);
    });
}

export function deactivate() {}
