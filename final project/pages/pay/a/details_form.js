

const userid = localStorage.getItem("id");
const user = JSON.parse(localStorage.getItem(userid));

const mail = document.getElementById('mail');
mail.value = user.email;


const number = document.getElementById('number');
number.value = user.phone;


const place = document.getElementById('place');

const numofaprtment = document.getElementById('numofaprtment');

const mikod = document.getElementById('mikod');

const city = document.getElementById('city');

const street = document.getElementById('street');

const earth = document.getElementById('earth');




const fullname = document.getElementById('fullname');
fullname.value = user.firstname;


const father = document.getElementById('father');
const ddd = document.getElementById('ddd');
const linkk = document.createElement('a');


//בדיקה האם ישנם פרטי אשראי שמורים במערכת ואם כן מעביר אותו לעמוד שואל אותו אם להתשמש בפרטים
//קודם כל בדיקה האם הפרטים מלאים

ddd.onclick = function () {

    if (fullname.value != 0 && mail.value != 0 && earth.value != 0 && street.value != 0
        && city.value != 0 && mikod.value != 0 && numofaprtment.value != 0 && place.value != 0 && number.value != 0) {

        if (user.cvv != null) {
            linkk.href = "../b/index.html";
            window.location = "../b/index.html";

        }
        else {
            linkk.href = "../b/paypay.html";
            window.location = "../b/paypay.html";
        }
        father.appendChild(linkk);
        linkk.appendChild(ddd);

    }

    else {
        alert("הפרטים שהכנסת אינם מלאים");
    }
}















fullname.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid(event.key)) {
        event.preventDefault();
    }
}

city.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid(event.key)) {
        event.preventDefault();
    }
}

street.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid(event.key)) {
        event.preventDefault();
    }
}

earth.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid(event.key)) {
        event.preventDefault();
    }
}

place.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid(event.key)) {
        event.preventDefault();
    }
}

const isKeyValid = function (key) {
    return key >= 'a' && key <= 'z'
        || (key >= 'A' && key <= 'Z')
        || key === ' '
        || (key >= 'א' && key <= 'ת')
}
