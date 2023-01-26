const generarNum = (num) => {
    return Math.floor(Math.random() * num);
}
const messages = {
    energizing: ['You got this!', 'Remember to take breaks', 'You are doing great!'],
    luck: ['You are lucky today', 'You are lucky this week', 'You are lucky this month'],
    love: ['You are loved', 'You are loved by your family', 'You are loved by your friends']
};
let result = [];

const messageGenerator = (obj) => {
    let message = '';
    for (let key in obj) {
        let index = generarNum(obj[key].length);
        message = obj[key][index];
        result.push(message);
    }
}

console.log(result);