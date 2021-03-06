function generateMarkdown(answers) {
  return `# ${answers.title}
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
`;
}

module.exports = generateMarkdown;
