const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please discribe youre project.',
    },
    {
      type: 'input',
      name: 'contributers',
      message: 'Who contributed to this project?',
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
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);

const generateHTML = (answers) =>
  `# ${answers.title}
     ${answers.description}
     ${answers.contributers}
     ${answers.recoures}
     ${answers.github}
     ${answers.linkedin}
   `;

const init = () => {
  promptUser().then((answers) => {
    try {
      const html = generateHTML(answers);
      fs.writeFileSync('NewReadMe.md', html);
      console.log('Successfully wrote to NewReadMe.md');
    } catch (error) {
      console.log(error);
    }
  });
};

init();