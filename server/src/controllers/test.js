import exec from "child_process";
import fs from "fs";
import path from "path";
import vm from "vm";
import asyncWrapper from "../middleware/async-wrapper.js";

const FOLDER = "src/code";

export const testCode = asyncWrapper(async (req, res) => {
  const { solution } = req.body;
  const __dirname = path.resolve();
  const __filename = path.resolve();
  fs.writeFileSync(path.join(__dirname, FOLDER, "input_code.js"), solution);

  const proc = exec.execFileSync(path.join(__dirname, FOLDER, "input_code.js"));
  const results = proc.toString();
  console.log(results);
  res.send(results);
});
