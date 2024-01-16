// опреднляем элементы
let autoBtn = document.querySelector('.auto-btn');
let manualBtn = document.querySelector('#manualBtn');
let changeOrNot = document.querySelector('.change-or-not');
let doors = document.querySelector('.doors-block');
let door = document.querySelectorAll('.door');

let door1 = document.querySelector('#door1');
let door2 = document.querySelector('#door2');
let door3 = document.querySelector('#door3');

// скрытые елементы сразу с загр.страницы  
changeOrNot.style.display = 'none';
// doors.style.display = 'none';
//--  

// скрываем / показываем элементы
function showElements(btn, show, hide1, hide2) {
    btn.addEventListener('click', function () {
        let time = 100;
        show.style.opacity = '1';
        show.style.transition = '.' + time + 's';
        setTimeout(() => {
            show.style.display = 'flex';
        }, time); // мл/сек

        //-- прячем после нажатия
        hide1.style.display = 'none';
        hide2.style.display = 'none';
    });
}

showElements(autoBtn, changeOrNot, autoBtn, manualBtn);
showElements(manualBtn, doors, autoBtn, manualBtn);

// ручной режим.
let doorsArr = [0, 0, 1];
let arrDoorsRandIndex = [];

//-- приз за дверью
while (doorsArr.length > 0) {
    let doorsArrIndex = Math.floor(Math.random() * doorsArr.length);
    arrDoorsRandIndex.push(doorsArr.splice(doorsArrIndex, 1)[0]);
}

door1.innerHTML = arrDoorsRandIndex[0];
door2.innerHTML = arrDoorsRandIndex[1];
door3.innerHTML = arrDoorsRandIndex[2];

//-- клик по двери
function doorHTML(elem) {
    elem.addEventListener('click', function (e) {
        this.classList.add('selected-door');
        this.style.border = 'solid #fff 7px';
        // randomDoor.classList.contains('selected-door')
    });
}

doorHTML(door1);
doorHTML(door2);
doorHTML(door3);

// ручной режим конец