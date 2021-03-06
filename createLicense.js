const inquirer = require('inquirer');
const fs = require('fs');
let licenseInfo= "";
let badge="";

const questions = () =>
  inquirer.prompt([
    {
      type:'list',
      name:'license',
      message:'select aplicable license : ',
      choices : [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause Simplifid License",
        "BSD 3-Clquse New or Revised License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public Licenese v3.0",
        "GNU Genral Public Licenese v2.0",
        "GNU Genral Public Licenese v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense"
      ]
    },
  ]);

  const init = () => {
    questions().then((answers) => {
      try {
        licenseInfo = answers.license
        fs.writeFileSync('license.md', licenseInfo)
        getBadge();
      } catch (error) {
        console.log(error);
      }
    }); 
  };
  
  init();
  
  function getBadge(){

    switch (licenseInfo) {
        case "Apache License 2.0":
            badge="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            fs.writeFileSync("license2.md", badge);
          break;
        case "GNU General Public License v3.0":
            badge="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            fs.writeFileSync("license2.md", badge);
          break;
        case "MIT License":
            badge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            fs.writeFileSync("license2.md", badge);
          break;
        default:
            badge="nothing"
            fs.writeFileSync("license2.md", badge);
      }
  }
