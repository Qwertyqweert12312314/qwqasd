const answer1 = prompt('First number', '');
const answer2 = prompt('Second number', '');
const answer3 = prompt('1=- 2=+', '');

if (answer3 == 2) {
    const result = +answer1 + +answer2;
    const a = confirm(`Result ${result}`)
}
else if (answer3 == 1) {
    const result = +answer1 - +answer2;
    const a = confirm(`Result ${result}`)
}