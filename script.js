// let userChoice;
// let computerChoice;
// let isWinner = false;

// while (!isWinner) {
//     // Выбор пользователя
//     userChoice = prompt('Выберите камень, ножницы или бумагу');
//     userChoice = userChoice.toLowerCase();
//     console.log('User choice: ', userChoice);

//     // Выбор компьютера
//     let randomNum = Math.floor(Math.random()*3);

//     if (randomNum === 0){
//         computerChoice = 'камень'
//     } else if (randomNum === 1) {
//         computerChoice = 'ножницы'
//     } else {
//         computerChoice = 'бумага'
//     };

//     // Сравнение выбора пользователя и компьютера + определение победителя/проигравшего
//     if (userChoice === 'камень' || userChoice === 'ножницы' || userChoice === 'бумага') {
//         console.log('Computer choice: ' + computerChoice);

//         if (userChoice === computerChoice){
//             alert('Ничья! Попробуй ещё раз!');
//         } else if ((userChoice === 'камень' && computerChoice === 'ножницы') ||
//                     (userChoice === 'ножницы' && computerChoice === 'бумага') ||
//                     (userChoice === 'бумага' && computerChoice === 'камень')) {
//             alert('Ты победил, поздравляем!');
//             isWinner = true;
//         } else {
//             alert('Ты проиграл! Но ничего, в следующий раз всё получится!')
//             isWinner = true;
//         };
//     } else {
//         alert('Я не понимаю что вы ввели:( Введите ваш выбор корректно, пожалуйста!')
//     }
// }


let userChoice;
let computerChoice;
let isWinner = false;
// Зациклим это до тех пор, пока не победим
while(!isWinner){
    // Выбор пользователя
    userChoice=prompt('Введите пожалуйста камень, ножницы или бумагу');
    userChoice=userChoice.toLowerCase();
    // Выбор компьютера
    let randomNum=Math.floor(Math.random()*3);
    // Как работает switch-конструкция (её удобно использовать если if-else большой, интерпретатор быстрее отработает):
    // Ниже везде будут проставлены break для того, чтобы остановить выполнение switchcase. Если этого не сделать, то браузер будет проходить по всем до тех пор, пока не наткнется на break
    switch (randomNum) {
        case 0: {
            computerChoice = 'камень';
            break;
        }
        case 1: {
            computerChoice='ножницы'; 
            break;
        }
        case 2: {
            computerChoice='бумага';
            break;
        }
    }
    console.log('Random num: ', randomNum);
    console.log('Computer choice: ', computerChoice);
    console.log('User choice: ', userChoice);
    // if(randomNum===0){
    //     computerChoice='камень';
    // } else if(randomNum===1){
    //     computerChoice='ножницы'
    // } else {
    //     computerChoice='бумага'
    // }
    // Сравниваем выборы и определяем победителя
    if(userChoice==='камень'||userChoice==='ножницы'||userChoice==='бумага'){
        alert('Computer choice: ' + computerChoice);
        if(userChoice===computerChoice){
            alert('Ничья!');
        } else if((userChoice==='камень' && computerChoice==='ножницы') ||
                (userChoice==='ножницы' && computerChoice==='бумага') ||
                (userChoice==='бумага' && computerChoice==='камень')){
            alert('Победа!');
            isWinner=true;
        } else {
            alert('Проиграл!');
            isWinner=true;
        }
    } else {
        alert('Я немножечко дурак и не понимаю что ты ввёл, поэтому пожалуйста введи корректное значение))')
    }
}

