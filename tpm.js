// NodeJS Terminal

const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO : exécuter avec node tpm.js

console.log("Terminal Package Manager");
console.log("Type help; to display all commands");

rl.on("line", (input) => {
  if (input === "help;") {
    help();
  } else if (input === "calculator;") {
    calculator();
  } else if (input === "time;") {
    time();
  } else if (input === "PC_shutdown;") {
    PC_shutdown();
  } else if (input === "PC_restart;") {
    PC_restart();
  } else if (input === "IP_address;") {
    IP_address();
  } else if (input === "ls;") {
    ls();
  } else if (input === "ls -a;") {
    ls_a();
  } else if (input === "createF;") {
    createFile();
  } else if (input === "deleteF;") {
    deleteFiledeleteFile("old-file.txt");
  } else if (input === "quit;") {
    quit();
  } else if (input === "cls;") {
    process.stdout.write("\x1b[2J");
  } else if (input === "type;") {
    type();
  } else if (input === "ren;") {
    renameFile(input("old-file.txt", "new-file.txt"));
  } else if (input === "sysInfo;") {
    sysinfo();
  } else if (input === "dirTree;") {
    tree();
  } else {
    console.log("Invalid command ;");
  }
});

function help() {
  console.log(
    "help; sysInfo; dirTree; cls; calculator; time; createF; deleteF; ren; type; ls; ls -a; quit;"
  );
}

function sysinfo() {
  const os = require("os");
  console.log(`
    System Information
    --------------------
    OS Name: ${os.platform}
    OS Version: ${os.release}
    Hostname: ${os.hostname}
    IP Address: ${os.networkInterfaces()[0].addresses[0].address}
  `);
}

function tree(path) {
  const os = require("os");
  const fs = require("fs");

  const dirs = [];
  const files = [];

  function recurse(dir) {
    const entries = fs.readdirSync(dir);
    entries.forEach((entry) => {
      const path = `${dir}/${entry}`;
      const stat = fs.statSync(path);

      if (stat.isDirectory()) {
        dirs.push(path);
        recurse(path);
      } else {
        files.push(path);
      }
    });
  }

  recurse(path || ".");

  const maxDepth = Math.max(...dirs.map((dir) => dir.split("/").length));

  function printNode(node, depth) {
    const padding = Array(depth + 1)
      .fill("   ")
      .join("");
    console.log(`${padding}${node}`);

    if (dirs.includes(node)) {
      dirs.forEach((dir) => {
        printNode(dir, depth + 1);
      });
    } else {
      files.forEach((file) => {
        console.log(`${padding}- ${file}`);
      });
    }
  }

  printNode(".", 0);
}

function calculator() {
  rl.question("Number One: ", (num1) => {
    rl.question("Operator: ", (op) => {
      rl.question("Number Two: ", (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (op === "+") {
          console.log(num1 + num2);
        } else if (op === "-") {
          console.log(num1 - num2);
        } else if (op === "/") {
          console.log(num1 / num2);
        } else if (op === "*") {
          console.log(num1 * num2);
        } else {
          console.log("Invalid");
        }

        rl.prompt();
      });
    });
  });
}

function time() {
  console.log("Date and time: " + new Date());
  rl.prompt();
}

function createFile() {
  rl.question("Enter the path and name of the file to create: ", (path) => {
    fs.writeFile("myFile.txt", function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
}

function deleteFile(fileName) {
  const fs = require("fs");

  fs.unlink(fileName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File deleted!");
    }
  });
}

function renameFile(oldFileName, newFileName) {
  const fs = require("fs");

  fs.rename(oldFileName, newFileName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File renamed!");
    }
  });

}

function ls() {
  console.log("Files and Directories in 'C:/':");
  fs.readdir("C:/", (err, files) => {
    if (err) {
      console.error(err);
      rl.prompt();
      return;
    }
    files.forEach((file) => {
      console.log(file);
    });
    rl.prompt();
  });
}

function ls_a() {
  rl.question("Enter The Directory Path To Read: ", (directoryPath) => {
    console.log(`Files and directories in '${directoryPath}':`);
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error(err);
        rl.prompt();
        return;
      }
      files.forEach((file) => {
        console.log(file);
      });
      rl.prompt();
    });
  });
}

function type(path) {
  const fileInfo = fs.statSync(path);
  const extension = fileInfo.name.split(".").pop();
  return extension;
}

function quit() {
  console.log("End of program");
  process.exit(0);
}
