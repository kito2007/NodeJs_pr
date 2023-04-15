const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    },// 화살표 함수 사용시, this는 전역변수를 참조하기 때문에 'Hi, I am undefined'가 출력된다.
    greet2: function() {
        console.log('Hi, I am ' + this.name);
    },
    greet3() {
        console.log('Hi, this is greet3 function, my name is ' + this.name);
    }
}

person.greet(); // name은 undefined
person.greet2(); // 정상적으로 name 변수에 저장된 Max 출력

// 전역변수를 참조할 때는 화살표 함수 안에서 this를 사용해도 되지만
// 객체 멤버를 사용할 때는 기본 함수형태나 함수 형태 없이 함수 본문만 선언한 형태로 구현한다.

person.greet3();


const hobbies = ['Sports', 'Cooking'];

// for(let hobby of hobbies){
//     console.log(hobby);
// }

console.log(hobbies.map( (hobby) => 'Hobby is ' + hobby));
console.log(hobbies);