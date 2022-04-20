'use strict';

let yearOfBirth = prompt('Ввидите год рождения');
let userAge = 2022 - yearOfBirth;
let userCity = null;
let userSport = null;

let archer = {
    name:'Стрельба из лука',
    master:'Виктор Рубан'
};
let boxer = {
    name:'Бокс',
    master:'Владими Кичко'
};
let armwrestling = {
    name:'Армреслинг',
    master:'Максим Битаров'
};

if (yearOfBirth === null) {
    yearOfBirth = 'Жаль, что вы не захотели ввести свой год рождения'
    alert(yearOfBirth);
} else if (yearOfBirth === '') {
    yearOfBirth = 'Жаль, что вы не захотели ввести свой год рождения'
    alert(yearOfBirth);
} else {
    yearOfBirth = +yearOfBirth;

    userCity = prompt('Ваш город');

    if (userCity === null) {
        userCity = 'Жаль, что вы не ввели свой город'
        alert(userCity);
    } else if (userCity === '') {
        userCity = 'Жаль, что вы не ввели свой город'
        alert(userCity);
    } else {
        if (userCity === 'Киев') {
            userCity = 'Ты живешь в столице Украины';
        } else if (userCity === 'Москва') {
            userCity = 'Ты живешь в столице России';
        } else if (userCity === 'Минск') {
            userCity = 'Ты живешь в столице Белоруси';
        } else {
            userCity = `Ты живешь в ${userCity}`
        }


        userSport = prompt('Введите ваш любимый вид спорта');
        if (userSport === null) {
            userSport = 'Жаль, что вы не ввели свой любимый вид спорта'
            alert(userSport);
        } else if (userSport === '') {
            userSport = 'Жаль, что вы не ввели свой любимый вид спорта'
            alert(userSport);
        } else {
            if (userSport === archer.name){
                userSport = `Круто! Хочешь стать ${archer.master}`;
            } if (userSport === boxer.name){
                userSport = `Круто! Хочешь стать ${boxer.master}`;
            } if (userSport === armwrestling.name){
                userSport = `Круто! Хочешь стать ${armwrestling.champion}`;
            }

            alert (`Возраст: ${userAge} \n Город: ${userCity} \n Любимый вид спорта: ${userSport}`);
        }
    }

}
