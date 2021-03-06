const Answers =require('./index.js');

function generateMarkdown(Answers) {
  return `# ${Answers.title}
${Answers.license}
${Answers.description}

## table of contents
-[Instalation](#instalation)
-[Usage](#usage)
-[Contributers](#contributers)
-[Recourses](#Recourses)
-[Github](#Github)
-[Email](#Email)

## Instalation 
${Answers.instalation}
## Usage 
${Answers.usage}
## Contributers 
${Answers.colab}
## tests 
${Answers.test}
## Recourses 
${Answers.recoures}
## Github 
[github](${Answers.github})
## Email 
[Email](${Answers.email})
`
}

module.exports = generateMarkdown;
