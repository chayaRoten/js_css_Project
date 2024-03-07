const firstname = document.getElementById('user1');

const email1 = document.getElementById('pass2');

const phone = document.getElementById('number');

const id1 = document.getElementById('pass1');

const login = document.getElementById('loginn');



//שליפת נתונים מה localStorage

const correct = function (idd) {

    for (let i = 0; localStorage.key(i) != null; i++) {
        if (localStorage.key(i) == idd) {
            id1.value = "";
        }
    }
}
let v = 0;
login.onclick = function () {
    correct(id1.value);
    if (id1.value == "") {
        alert("הסיסמה קיימת");
    }
    else {
        const user = {
            firstname: firstname.value,
            email: email1.value,
            phone: phone.value,
            id: id1.value,
            arr: [],
            cardnuber: null,
            cvv: null,
            date: null,
            idcard: null,
            countoforders: 0

        }

        localStorage.setItem("id", user.id);
        localStorage.setItem(user.id, JSON.stringify(user));
        window.location.href = "../products/index.html";

    }
}






firstname.onkeydown = function (event) {
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



phone.onkeydown = function (event) {
    console.log(event);

    if (!isKeyValid2(event.key)) {
        event.preventDefault();
    }
}

const isKeyValid2 = function (key) {
    return key >= 0 && key <= 9
        || key === ' '
        || key === 'Backspace'

}


