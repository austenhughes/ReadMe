const inquirer = require('inquirer');
const fs = require('fs');

let licenseInfo= "";
let badge="";
let readMe="";

const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please discribe youre project :',
    },
    {
      type: 'input',
      name: 'instalation',
      message: 'Nesissary instalations : ',
    },
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
        "Eclipse Public License 1.0",
        "GNU Affero General Public Licenese v3.0",
        "GNU Genral Public Licenese v2.0",
        "Mozilla Public License 2.0",
        "The Unlicense"
      ]
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this program?',
    },
    {
      type: 'input',
      name: 'colab',
      message: 'Who contributed to this project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'system tests run : ',
    },
    {
      type: 'input',
      name: 'recoures',
      message: 'What recourses where used in the building of this project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email adress.',
    },
  ]);

const writeReadMe = (answers) =>
`# ${answers.title}
${badge}<br />
## description 
${answers.description}

## table of contents
[Instalation](#instalation)<br />
[Usage](#usage)<br />
[Contributers](#contributers)<br />
[Recourses](#Recourses)<br />
[Github](#Github)<br />
[Email](#Email)<br />

## Instalation 
${answers.instalation}
## Usage 
${answers.usage}
## Contributers 
${answers.colab}
## tests 
${answers.test}
## Recourses 
${answers.recoures}
## Questions? ... find me at : 
## Github 
[${answers.github}](${answers.github})
## Email 
[${answers.email}](${answers.email})
`;

const init = () => {
  questions().then((answers) => {
    try {
      licenseInfo=answers.license;
      getBadge();
      generateFile();
    } catch (error) {
      console.log(error);
    };

    function generateFile(){
      readMe = writeReadMe(answers);
      writeFile();
    };

  });
};

function writeFile(){
  fs.writeFileSync('NewReadMe.md', readMe);
};

init();

function getBadge(){

  switch (licenseInfo) {
      case "Apache License 2.0":
          badge="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
      case "GNU General Public License v3.0":
          badge="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
      case "MIT License":
          badge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;
      case "BSD 2-Clause Simplifid License":
          badge="[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
        break;
      case "BSD 3-Clause New or Revised License":
          badge="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        break;
      case "Boost Software License 1.0":
          badge="[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"          
        break;
      case "Eclipse Public License 1.0":
          badge="[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"          
        break;
      case "GNU Affero General Public Licenese v3.0":
          badge="[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"          
        break;
      case "GNU Genral Public Licenese v2.0":
          badge="[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"          
        break;
      case "Mozilla Public License 2.0":
          badge="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"          
        break;
      case "The Unlicense":
          badge="[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"          
        break;
      default:
          badge="nothing"
    }
}