#!/usr/bin/env node
const highlight = require('cli-highlight').highlight;
const axios = require('axios');
const https = require('https');

const args = process.argv.slice(2);

const agent = new https.Agent({  
  rejectUnauthorized: false
});

const getGrepperAnswers = async (searchTerm, callback) => {
    const response = await axios.get(
            `https://www.codegrepper.com/api/get_answers_1.php?v=3&s=${encodeURI(searchTerm)}`, 
            { httpsAgent: agent}
        );
    callback(response);
}

getGrepperAnswers(args.map(e => e.toLowerCase()).join(' '), async (response) => {
    if (response.status !== 200 || !response.data) {
        console.log(`Error ${response.status}`);
        return;
    }
    if (response.data.answers.length < 1) {
        console.log('No results.');
        return;
    }

    // process.stdout.write('\033c');

    const answers = response.data.answers;
    answers.reverse();

    answers.forEach((answer, n) => {
        console.log('');
        console.log('------------------------------------');
        console.log(`${answers.length - n}) Votes: ${answer.up_votes - answer.down_votes}`);
        if (answer.source_url) {
            console.log(answer.source_url);
        }
        console.log('------------------------------------');
        console.log(highlight(answer.answer, {language: answer.language}));
        console.log('');
    });
});

