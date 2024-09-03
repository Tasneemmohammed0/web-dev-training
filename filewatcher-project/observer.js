const { constants } = require("buffer");
const fs = require("fs");
const path = require("path");

const folderPath = path.join(`${__dirname}`, "watchedFolder");

const logChanges = function (eventType, filename) {
  const date = new Date();

  if (eventType == "rename") {
    fs.access(folderPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`File ${filename} was deleted`);
      } else {
        console.log(`File ${filename} was renamed or created`);
      }
    });
  } else if (eventType === "change") {
    console.log(`File ${filename} was modified.`);
  } else {
    console.log(`Unknown event type: ${eventType} on file: ${filename}`);
  }

  console.log(
    `event change time: ${date.getHours()} : ${date.getMinutes()}:${date.getSeconds()}`
  );
};

// Folder Monitoring
fs.watch(folderPath, { persistent: true }, (eventType, filename) => {
  if (filename) {
    logChanges(eventType, filename);
  } else console.log("filename not provided");
});
