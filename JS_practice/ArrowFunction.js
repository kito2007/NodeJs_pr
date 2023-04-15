const name = 'Max';
var age = 20;
var hasHobbies = true;

function summarizeUser(username, userAge, userHasHobbies){
    return (
        'Name is ' +
        username +
        ', age is' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobbies
    );
}

// 화살표 함수 예시
// 입력 받는 파라미터가 하나일 때 괄호 생략가능
const add = () => 1+2;
const addOne = a => a+1;
const addTwo = (a,b) => a+b;


console.log(add());
console.log(addOne(3));
console.log(addTwo(3,2));
console.log(summarizeUser(name, age, hasHobbies));