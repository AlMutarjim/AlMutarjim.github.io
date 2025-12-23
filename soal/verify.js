const q = require('./questions.json').filter(x => x.book === '1445');
const broken = q.filter(x => !x.choices.includes(x.answer));
console.log('Remaining broken:', broken.length);
if (broken.length === 0) console.log('All 1445 questions are now valid!');
