const parser = require('./parser.js');

const cron = parser.parseString('* * * * 1');
if(!Object.keys(cron.errors).length && cron.expressions.length) {
    const interval = cron.expressions[0];
    console.log('next', interval.next());
} else {
    console.log('error')
}
