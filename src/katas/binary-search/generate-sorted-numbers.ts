const fs = require("fs");

fs.writeFileSync(
  `${__dirname}/sorted-numbers.json`,
  JSON.stringify(Array.from({ length: 100000 }, (_, i) => i + 2))
);
