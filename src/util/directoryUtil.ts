import * as fs from "fs";
import * as path from "path";

/**
 * Maps a single-file-deep directory and returns paths.
 * @param directory - The name of the directory.
 * @returns An array of full file paths.
 */
export const mapDirectory = (directory: string): Promise<string[]> => {
  const pathToDirectory: string = path.join(__dirname, directory);
  return new Promise((resolve, reject) => {
    fs.readdir(pathToDirectory, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const fullPaths = files.map((fileName) => {
          return path.join(pathToDirectory, fileName);
        });

        resolve(fullPaths);
      }
    });
  });
};
