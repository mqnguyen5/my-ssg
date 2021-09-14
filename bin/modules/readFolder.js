const fs = require("fs");
var fileModule = require("./readFile");
var html = require("./generateHTML");
var body = "";

module.exports.readFolder = function (path, cssLink, outputContainer) {
  fs.readdir(path, function (err, files) {
    if (err) {
      return console.log(err);
    }

    files.forEach(function (file) {
      var fileName = fileModule.readFile(
        `${path}/${file}`,
        cssLink,
        outputContainer
      );

      var url = `./${encodeURI(fileName)}.html`;

      // index.html body
      body += `<h3><a href=\"${url}\">${fileName}</h3>\n`;
    });

    // create index.html
    html.generateHTML(
      "index",
      cssLink,
      `<h2>Generated Sites</h2>\n${body}`,
      outputContainer
    );
  });
};
