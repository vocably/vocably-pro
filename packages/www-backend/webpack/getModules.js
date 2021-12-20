const fs = require('fs');
const path = require('path');

module.exports = (folder) => {
  return fs
    .readdirSync(folder)
    .map((entry) => `${folder}/${entry}`)
    .filter((entry) => fs.lstatSync(entry).isDirectory())
    .reduce(
      (acc, entry) => ({
        ...acc,
        [path.basename(entry)]: entry,
      }),
      {}
    );
};
