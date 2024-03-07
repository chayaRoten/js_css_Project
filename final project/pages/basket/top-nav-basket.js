


const div1 = document.getElementById('div1');
div1.classList = "div1";
const div2 = document.getElementById('div2');
div2.classList = "div2";

const input = document.createElement('input');
input.type = 'search';


//פונקצייה ליצירת ניווט עליון


const nav = function () {

    //יצירת אינפוט לחיפוש

    input.placeholder = 'מה לחפש לך?';
    input.classList = "input";


    //יצירת הלוגו
    const image = document.createElement('img');
    image.src = "/assets/logo.svg";
    image.classList = "image";


    // יצירת האייקון- איש
    const icontopnav = document.createElement('i');
    icontopnav.classList = "icontopnav";
    icontopnav.classList.add("far");
    icontopnav.classList.add("fa-user");


    // יצירת האייקון- עגלה
    const icon2 = document.createElement('i');
    icon2.classList = "icon2";
    icon2.classList.add("fas");
    icon2.classList.add("fa-shopping-cart");


    //יצירת מילה 1
    const text1 = document.createElement('h4');
    text1.innerHTML = "מוצרים";
    text1.classList = "text1";
    text1.src = "/pages/products/index.html";


    //יצירת מילה 2
    const text2 = document.createElement('h4');
    text2.innerHTML = "חדרים";
    text2.classList = "text2";


    // products 1 יצירת קישור
    const aa = document.createElement('a');
    aa.href = "../../pages/buying/buying.html";

    const aa2 = document.createElement('a');
    aa2.href = "../../pages/products/index.html";


    //3
    const aikea = document.createElement('a');
    aikea.href = "../../pages/home/home.html";


    //  basketlink  2 יצירת קישור
    const basketlink = document.createElement('a');
    basketlink.href = "/pages/basket/basket.html";


    div1.appendChild(aikea);

    aikea.appendChild(image);

    div1.appendChild(input);

    const userId = localStorage.getItem("id");

    //בדיקה אם הוא מחובר
    if (userId != null && userId != -1) {
        const login = document.createElement('a');
        login.href = "../log-in/details.html";
        div1.appendChild(login);
        login.appendChild(icontopnav);

    }
    //אם לא
    else {
        const login = document.createElement('a');
        login.href = "../../pages/log-in/form.html";
        div1.appendChild(login);
        login.appendChild(icontopnav);
    }


    div1.appendChild(basketlink);
    basketlink.appendChild(icon2);


    div2.appendChild(aa);
    div2.appendChild(aa2);
    aa.appendChild(text1);
    aa2.appendChild(text2);

    // const pas = document.createElement('h7');
    // pas.innerHTML = "_______________________________________________________________________________________________________________________";
    // div2.appendChild(pas);
    // pas.classList = "pas";
//פס
    const imgtopnav=document.createElement('img');
    imgtopnav.src="../../other/top-nav/1.jpg";
    div2.appendChild(imgtopnav);
    imgtopnav.classList = "imgggg";

}


nav();


//חיפוש


const useridd = localStorage.getItem("id");

if (useridd == -1 || useridd == null) {
    //   pay.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12"><h3>אתה לא מחובר</h3><a href="../../pages/log-in/log-in.html">להתחברות</a> </div>`;
}
else {

    // const abb = function () {


    //     const user10 = JSON.parse(localStorage.getItem(useridd));

    //     const array = user10.arr;

    //     let help = 0;

    //     const dom45 = {
    //         pictures: document.getElementById("picture")
    //     }


    //     //בניית מערך מונים שסופר את כמות ההזמנות של המוצרים
    //     const arrmonimm = [];
    //     arrmonimm.length = 10;
    //     for (let i = 0; i < arrmonimm.length; i++) {
    //         arrmonimm[i] = 0;
    //     }



    //     for (let i = 0; i < array.length; i++) {
    //         arrmonimm[array[i]]++;
    //     }

    //     input.onchange = function () {
    //         pay.innerHTML = "";

    //         dom45.pictures.innerHTML = "";
    //         dom45.pictures.innerHTML += `<div><h1>תוצאות חיפוש עבור:${input.value}</h1> </div>`;
    //         help = 0;
    //         for (let i = 0; i < arrmonimm.length; i++) {
    //             if (arrmonimm[i] > 0) {
    //                 pictures.forEach(user => {
    //                     if (i == user.key && user.name2.includes(input.value)) {
    //                         help = 1;
    //                         dom.pictures.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
    //                     <a href="../buying/buying.html"><img src="/assets/b/${user.src}" width="250px" />
    //                     <h3> ${user.name}</h3>  <h5>${user.name2}</h5> <h5>${user.price}</h5></a><h3>
    //                     <span><button class= "button+ ${user.key}" type="button">+</button> ${arrmonim[i]}
    //                 <button class= "button- ${user.key}" type="button">-</button> </span>:כמות</h3>
    //               <button class= "${user.key}"  type="button">הסרת פריט</button>
    //                 </div>`;
    //                     }
    //                 })
    //             }
    //         }
    //         if (help == 0) {
    //             dom45.pictures.innerHTML = `<div><h1>404, not fount 😒🤤😒</h1> </div>`;
    //         }
    //         input.value = "";

    //         //פונקציה המעדכנת בעת לחיצה על הכפתור את המוצרים שנמחקים מהסל

    //         const button = document.querySelectorAll('button');
    //         button.forEach(bb => {

    //             bb.onclick = function () {
    //                 const userid = localStorage.getItem("id");
    //                 const user2 = JSON.parse(localStorage.getItem(userid));
    //                 var arr = user2.arr;


    //                 if (bb.classList[0] != "button-" && bb.classList[0] != "button+") {

    //                     for (let i = 0; i < arr.length; i++) {
    //                         if (arr[i] == bb.classList.value) {
    //                             arr[i] = -1;
    //                         }
    //                     }

    //                     let j = 0;
    //                     for (let i = 0; i < arr.length; i++) {
    //                         if (arr[i] != -1) {
    //                             arr[j++] = arr[i];
    //                         }
    //                     }

    //                     var arrnew = arr.slice(0, j);

    //                     user2.arr = arrnew;

    //                 }
    //                 else
    //                     if (bb.classList[0] == "button+") {
    //                         arr.push(bb.classList[1]);
    //                         user2.arr = arr;
    //                     }
    //                     else {
    //                         if (bb.classList[0] == "button-") {
    //                             const find = arr.indexOf(bb.classList[1]);
    //                             var a = arr.slice(0, find);
    //                             var b = arr.slice(find + 1, arr.length);
    //                             let k = 0;
    //                             for (let index = 0; index < a.length; index++) {
    //                                 arr[k++] = a[index];
    //                             }
    //                             for (let index = 0; index < b.length; index++) {
    //                                 arr[k++] = b[index];
    //                             }
    //                             var arrnew = arr.slice(0, arr.length - 1);

    //                             user2.arr = arrnew;
    //                         }
    //                     }

    //                 localStorage.setItem(userid, JSON.stringify(user2));
    //                 //שינוי העמוד עפ"י הנתונים שנקלטו
    //     var arr = user2.arr;
    //     //איפוס המערך
    //     for (let i = 0; i < arrmonimm.length; i++) {
    //         arrmonimm[i] = 0;
    //     }

    //     //מילוי מערך מונים
    //     for (let k = 0; k < user2.arr.length; k++) {
    //         arrmonimm[user2.arr[k]]++;
    //     }



    //     dom45.pictures.innerHTML = "";

    //     drawUsers();

    //     // sum=0;
    //     pay.innerHTML="";
    //     // calc();


    //                 // window.location = href = "./basket.html";
    //             }
    //         })

    //     }


    // }
    // abb();
}
