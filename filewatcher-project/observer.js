const { constants } = require("buffer");
const fs = require("fs");
const path = require("path");

const folderPath = path.join(`${__dirname}`, "watchedFolder");

const logChanges = function (eventType, filename) {
  const date = new Date();

  const filePath = path.join(folderPath, filename);

  if (eventType === "rename") {
    if (fs.existsSync(filePath)) {
      console.log(`File ${filename} was created or renamed.`);
    } else {
      console.log(`File ${filename} was deleted.`);
    }
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
fs.watch(folderPath, (eventType, filename) => {
  if (filename) {
    logChanges(eventType, filename);
  } else console.log("filename not provided");
});
