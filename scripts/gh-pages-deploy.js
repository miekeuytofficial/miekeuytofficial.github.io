/* eslint-disable no-console */
import { execa } from "execa";
import * as fs from "fs";
// const execa = require("execa");
// const fs = require("fs");
(async () => {
    try {
        //add  "--orphan" for new
        await execa("git", ["checkout", "--orphan", "gh-pages"]);
        // eslint-disable-next-line no-console
        console.log("Installing dependencies started...");
        await execa("npm", ["install"]);

        console.log("Building started...");
        await execa("npm", ["run", "build"]);
        // Understand if it's dist or build folder
        // const folderName = "dist";
        //  fs.existsSync("dist") ? "dist" : "build";
        await execa("git", ["--work-tree", "dist", "add", "--all"]);
        await execa("git", ["--work-tree", "dist", "commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
        // await execa("rmdir", ["/s", "dist"]);
        console.log("Stashing.....");
        await execa("git", ["stash", "save", "--keep-index", "--include-untracked"]);
        console.log("Removing stash.....");
        await execa("git", ["stash", "drop"]);
        console.log("Changing back to main.....");
        await execa("git", ["checkout", "-f", "main"]);
        console.log("Deleting local gh-pages branch.....");
        await execa("git", ["branch", "-D", "gh-pages"]);
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        process.exit(1);
    }
})();