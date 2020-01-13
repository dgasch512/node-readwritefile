const fs = require('fs');
const inquirer = require('inquirer')

var questions = [{
  type: 'input',
  name: 'name',
  message: "What's your name?",
},
{
  type: 'input',
  name: 'holiday',
  message: 'What is your favorite holiday?'
}]

inquirer.prompt(questions).then(answers => {
  var writeStream = fs.createWriteStream("newFile.txt");
    writeStream.write(`Hi ${answers['name']}, thanks for dropping in! I like ${answers['holiday']} as well. It's not as good as my birthday though. That's the best!`);
    writeStream.end();
  // console.log(`Hi ${answers['name']}, thanks for dropping in!`)
  // console.log(`I like ${answers['holiday']} as well. It's not as good as my birthday though. That's the best!`)
})