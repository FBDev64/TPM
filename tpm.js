// NodeJS Terminal

var cmd=require('node-cmd');


const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Terminal Package Manager");
console.log("Type help to display all commands");

rl.on("line", (input) => {
  if (input === "help") {
    help();
  } else if (input === "calculator") {
    calculator();
  } else if (input === "time") {
    time();
  } else if (input === "PC_shutdown") {
    PC_shutdown();
  } else if (input === "PC_restart") {
    PC_restart();
  } else if (input === "IP_address") {
    IP_address();
  } else if (input === "ls") {
    ls();
  } else if (input === "ls -a") {
    ls_a();
  } else if (input === "createF") {
    createFile();
  } else if (input === "deleteF;") {
    deleteFiledeleteFile("old-file.txt");
  } else if (input === "quit") {
    quit();
  } else if (input === "cls") {
    process.stdout.write("\x1b[2J");
  } else if (input === "type;") {
    type();
  } else if (input === "ren;") {
    renameFile(input("old-file.txt", "new-file.txt"));
  } else if (input === "sysInfo") {
    sysinfo();
  } else if (input === "dirTree") {
    tree();
  } else {
    console.log("Invalid command");
  }
});

function help() {
  console.log(
    "help; sysInfo; dirTree; cls; calculator; time; createF; deleteF; ren; type; ls; ls -a; quit."
  );
}

const sysInfo=cmd.run(
	`nitch`
);

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
