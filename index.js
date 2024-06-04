#! /usr/bin/env node
import inquirer from "inquirer";
class Person {
    personality;
    constructor(p = 'mystery', answer) {
        if (answer === 1) {
            this.personality = 'Extrovert';
        }
        else if (answer === 2) {
            this.personality = 'Introvert';
        }
        else {
            this.personality = p;
        }
    }
    AskQuestion(answer) {
        if (answer === 1) {
            this.personality = 'Extrovert';
        }
        else {
            this.personality = 'Introvert';
        }
    }
    GetPersonality() {
        return this.personality;
    }
}
(async () => {
    let answer1 = await inquirer.prompt([
        {
            name: 'question1',
            message: `Type 1 if you like to talk to others and type 2 if you don't like`,
            type: 'number'
        }
    ]);
    let x = answer1.question1;
    const MyPerson = new Person();
    const AnotherPerson = new Person('mystery', x);
    console.log(`You are : ${AnotherPerson.GetPersonality()}`);
    let answer2 = await inquirer.prompt([
        {
            name: 'question2',
            message: 'What is your name?',
            type: 'string'
        }
    ]);
    console.log(`Your name is ${answer2.question2} and your personality type is : ${MyPerson.GetPersonality()}`);
})();
