// The disk storage engine gives you full control on storing files to disk.
// There are two options available, destination and filename. They are both functions that determine where the file should be stored.
const multer = require("multer")
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});