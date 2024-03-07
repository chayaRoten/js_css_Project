
const yes = document.getElementById('yes');
const no = document.getElementById('no');

const aa = document.createElement('a');
aa.href = "paypay.html";

const olap = document.getElementById('olap');

olap.appendChild(aa);
aa.appendChild(yes);
aa.appendChild(no);



yes.onclick = function () {
    sessionStorage.setItem("enable", "1");

}

no.onclick = function () {
    sessionStorage.setItem("enable", "0");

}







