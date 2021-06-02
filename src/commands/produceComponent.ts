import * as vscode from "vscode";
import { CommandHandler } from "../types";

export const produceComponent: CommandHandler = {
  command: "reactifold.produceComponent",
  callback: (): void => {
    vscode.window
      .showInputBox({
        prompt: "You can name your functional component here.",
        title: "Component Name",
        validateInput: (token: string) => {
          return !token ? "Enter a valid component name" : null;
        },
      })
      .then((value) => {
        console.log(value);
      });
  },
};
