const fs = require("fs-extra");
const childProcess = require("child_process");

try {
  // Remove current build
  fs.removeSync("./dist/");

  // Should we use tsc from node_modules/.bin ?
  childProcess.exec("tsc --build tsconfig.json");
  console.log("Finish build");
} catch (err) {
  console.log(err);
}
