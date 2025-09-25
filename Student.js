// let studentInformation = [];

// class Student{
//     constructor(studentObj){
//         this.studentObj = studentObj;
//     }

//     Add(studentObj){
//         this.studentObj = studentObj;
//     }

//     Display(){
//         console.log(this.studentObj);
//     }
// }

// let idElement = document.querySelector('.js-input-id-text');
// let nameElement = document.querySelector('.js-input-name-text');
// let programElement = document.querySelector('.js-input-program-text');
// let ageElement = document.querySelector('.js-input-age-text');
// let addressElement = document.querySelector('.js-input-address-text');

// let submitButton = document.querySelector('.js-submit');
// let displayButton = document.querySelector('.js-display');

// submitButton.addEventListener('click', () => {
//     let studentObj = {
//         id: idElement.value,
//         name: nameElement.value,
//         program: programElement.value,
//         age: ageElement.value,
//         address: addressElement.value
//     };
//     const student = new Student(studentObj);
//     studentInformation.push(studentObj);

//     student.Display();
//     console.log(studentInformation);
// });

// displayButton.addEventListener('click', () => {
//     let HTML = '';
//     studentInformation.forEach((student, index) => {
//         HTML +=`
//         ID: ${studentInformation[index]['id']} <br>
//         Name: ${studentInformation[index]['name']} <br>
//         Program: ${studentInformation[index]['program']} <br>
//         Age: ${studentInformation[index]['age']} <br>
//         Address: ${studentInformation[index]['address']}
//         <br>
//         <br>
//         `
        
//     });
//     document.querySelector('.js-display-text').innerHTML = HTML;
//     ;
// });

import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import satsun from './util/isWeekend.js';

const today = dayjs();
// const nextMonth = today.add(1, 'month');
// const getBackMonth = nextMonth.subtract(1, 'M');
// const nextMonthFormatted = getBackMonth.format('dddd');

// console.log(nextMonthFormatted);

console.log(satsun(today));