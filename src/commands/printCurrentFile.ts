import * as vscode from "vscode";
import { CommandHandler } from "../types";

export const printCurrentFile: CommandHandler = {
  command: "reactifold.printCurrentFile",
  callback: (uri: vscode.Uri): void => {
    console.log(`URI: ${uri}`);
  },
};
