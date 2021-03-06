const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =require('./generateMarkdown');

let licenseInfo= "";
let badge="";

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
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
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

class Answers {
  constructor(title, description, intalation, license, usage, colab, test, recourses, github, email, bagde){
  this.title = title;
  this.description = description;
  this.intalation = intalation;
  this.license = license;
  this.usage =usage;
  this.colab = colab;
  this.test = test;
  this.recourses = recourses;
  this.github =github;
  this.email = email;
  this.badge = badge;
} 
}

const init = () => {
  questions().then((answers) => {
    try {
      const readMe = generateMarkdown.generateMarkdown(Answers);
      licenseInfo=Answers.license
      fs.writeFileSync('NewReadMe.md', readMe);
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
      default:
          badge="nothing"
          fs.writeFileSync("license.md", badge);
    }
}

module.exports = Answers;