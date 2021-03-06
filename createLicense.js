const inquirer = require('inquirer');
const fs = require('fs');
const { domainToASCII } = require('url');
// const generateMarkdown =require('./generateMarkdown');

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
        "GNU Genral Public Licenese v2.1",
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
${badge}
${answers.license}
${answers.description}

## table of contents
-[Instalation](#instalation)
-[Usage](#usage)
-[Contributers](#contributers)
-[Recourses](#Recourses)
-[Github](#Github)
-[Email](#Email)

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
## Github 
[github](${answers.github})
## Email 
[Email](${answers.email})
`;

const init = () => {
  questions().then((answers) => {
    try {
      // getBadge();
      licenseInfo=answers.license;
      // readMe = writeReadMe(answers);
      getBadge();
      addWords();
    } catch (error) {
      console.log(error);
    };

    function addWords(){
      readMe = writeReadMe(answers);
      writeFile();
    };

  });
};

function writeFile(){
  fs.writeFileSync('NewReadMe.md', readMe);
  // getBadge();
};

init();

function getBadge(){

  switch (licenseInfo) {

      case "Apache License 2.0":
          badge="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
          fs.writeFileSync("license.md", badge);
        break;
      case "GNU General Public License v3.0":
          badge="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
          fs.writeFileSync("license.md", badge);
        break;
      case "MIT License":
          badge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
          fs.writeFileSync("license.md", badge);
        break;
      case "BSD 2-Clause Simplifid License":
          badge="[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
          fs.writeFileSync("license.md", badge);
        break;
      case "BSD 3-Clquse New or Revised License":
          badge="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
          fs.writeFileSync("license.md", badge);
        break;
      case "Boost Software License 1.0":
          badge="[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"          
          fs.writeFileSync("license.md", badge);
        break;
      case "Eclipse Public License 1.0":
          badge="[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"          
          fs.writeFileSync("license.md", badge);
        break;
      default:
          badge="nothing"
          fs.writeFileSync("license.md", badge);

    }
}

// module.exports = ;