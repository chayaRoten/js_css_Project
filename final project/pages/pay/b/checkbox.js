const userid = localStorage.getItem("id");
const user = JSON.parse(localStorage.getItem(userid));

const name2 = document.getElementById('name');
//מספר כרטיס
const num = document.getElementById('num');
const cvv = document.getElementById('cvv');
const date = document.getElementById('date');




const enable = sessionStorage.getItem("enable");




name2.onkeydown = function (event) {
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


cvv.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid2(event.key)) {
        event.preventDefault();
    }
}

num.onkeydown = function (event) {
    console.log(event);

    if (!isKeyValid2(event.key)) {
        event.preventDefault();
    }
}
date.onkeydown = function (event) {
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

//ממלא את פרטי האשראי למשתמש  -  אם שמור לו

if (user.cvv != null && enable == 1) {
    name2.value = user.idcard;

    num.value = user.cardnuber;

    cvv.value = user.cvv;

    date.value = user.date;
}

//בדיקה האם המתמש רוצה שישמרו לו את פרטי האשראי או לא

const details = document.getElementById('details');

details.onchange = function (event) {
    if (event.target.checked) {
        user.cardnuber = num.value;
        user.cvv = cvv.value;
        user.idcard = name2.value;
        user.date = date.value;
        localStorage.setItem(userid, JSON.stringify(user));
    }


}

//בדיקות תקינות ומעבר עמוד
const paypaysumbit = document.getElementById('paypaysumbit');
paypaysumbit.onclick = function () {
    if (num.value != "" && date.value != "" && cvv.value != "" && name2.value != ""
        && date.value.length == 4 && num.value.length == 16) {
        alert("הזמנתך התקבלה בהצלחה!");
        user.countoforders++;
        user.arr = [];
        localStorage.setItem(userid, JSON.stringify(user));
        window.location.href = "../../home/home.html";

    }
    else {
        alert("אחד הנתונים שגוי או חסר");
    }

}




