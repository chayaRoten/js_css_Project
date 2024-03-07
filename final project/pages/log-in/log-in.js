

const email = document.getElementById('user');

const id = document.getElementById('pass');

const enter = document.getElementById('enter');



//פונקצייה השומרת את הנתונים של המשתמש
// שקיים במערכת ב local




enter.onclick = function () {

    //בדיקה האם המזהה שכניס המשתמש קיים במערכת ואם לא מציג הודעה ולא מכניס את הנתון

    const userid = id.value;
    const user = JSON.parse(localStorage.getItem(userid));

    if (user === null) {
        alert("אחד מהפרטים שהכנסת שגויים או שאינם קיימים במערכת")
    }
    // אם הסיסמה קיימת הוא בודק את כתובת המייל אם היא קיימת 
    else {
        const useremail = email.value;
        const eemail = user.email;
        if (!(eemail === useremail))
            alert("no!!!!");
        // אם כל הנתונים תקינים הכנס את המזהה הייחודי ל- localStorage
        else {
            localStorage.setItem("id", id.value);
            window.location.href = "/pages/buying/buying.html";
        }
    }



}




