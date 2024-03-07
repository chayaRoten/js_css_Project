const leave = document.getElementById('leave');

leave.innerHTML = "התנתקות";

leave.onclick = function () {
    localStorage.setItem("id", -1);
}


const userid = localStorage.getItem("id");
const user = JSON.parse(localStorage.getItem(userid));




const detailstext = document.getElementById('detailstext');

const jj = user.countoforders;

detailstext.innerHTML = "כמות הזמנות נוכחית: " + jj;


