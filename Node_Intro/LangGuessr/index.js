const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];

if (!input) {
    console.log('Please provide a sentence to detect the language.'.yellow);
    process.exit();
}

const langCode = franc(input);
if (langCode === 'und') {
    console.log('No Language Detected. Try Other Sentences.'.red);
} else {
    const language = langs.where('3', langCode);
    if (!language) {
        console.log(`Language code detected: ${langCode}, but no matching language found.`.red);
    } else {
        console.log(`Looks like ${language.name}.`.green);
    }
}