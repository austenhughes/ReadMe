const inquirer = require('inquirer');
const fs = require('fs');
const GenerateMarkdown = require('./generateMarkdown.js');

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
    // {
    //   type: 'input',
    //   name: 'visual',
    //   message: 'link to visual aid : ',
    // },
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
${answers.license}
${GenerateMarkdown}
${answers.description}
## table of contents
${answers.contents}
## instalation 
${answers.instalation}
## usage 
${answers.usage}
## visual aid 
${answers.visual}
## contributer 
${answers.colab}
## tests 
${answers.test}
## recourses 
${answers.recoures}
## github 
[github](${answers.github})
## email 
[Email](${answers.email})
`;

const init = () => {
  questions().then((answers) => {
    try {
      const readMe = writeReadMe(answers);
      fs.writeFileSync('NewReadMe.md', readMe);
    } catch (error) {
      console.log(error);
    }
  });
};

init();

module.exports = ;