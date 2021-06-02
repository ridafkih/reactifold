import * as vscode from "vscode";

export const produceComponent = {
  command: "reactifold.produceComponent",
  callback: (): void => {
    const componentNameInput: vscode.InputBox = vscode.window.createInputBox();
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
