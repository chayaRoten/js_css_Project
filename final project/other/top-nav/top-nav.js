

const div1 = document.getElementById('div1');
div1.classList = "div1";
const div2 = document.getElementById('div2');
div2.classList = "div2";

const input = document.createElement('input');
input.type = 'search';


//פונקצייה ליצירת ניווט עליון


const nav = function () {

    //יצירת אינפוט לחיפוש
    input.placeholder = '             מה לחפש לך?                      ';
    input.classList = "input";


    //יצירת הלוגו
    const image = document.createElement('img');
    image.src = "/assets/logo.svg";
    image.classList = "image";


    const aikea = document.createElement('a');
    aikea.href = "../../pages/home/home.html";

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


    //  2 יצירת קישור
    const aa2 = document.createElement('a');
    aa2.href = "../../pages/products/index.html";


    //  basketlink  2 יצירת קישור
    const basketlink = document.createElement('a');
    basketlink.href = "/pages/basket/basket.html";

    //יצירת קישור נכון לאיש- אם הוא מחובר ישנה ניתוב ואם לא יפנה לעמוד של הרשמה

    div1.appendChild(aikea);

    aikea.appendChild(image);


    div1.appendChild(input);

    const login = document.createElement('a');

    const userId = localStorage.getItem("id");

    //בדיקה אם הוא מחובר
    if (userId != null && userId != -1) {

        login.href = "../log-in/details.html";



    }
    //אם לא
    else {

        login.href = "../../pages/log-in/form.html";

    }

    div1.appendChild(login);
    login.appendChild(icontopnav);

    div1.appendChild(basketlink);

    basketlink.appendChild(icon2);

    div2.appendChild(aa);

    div2.appendChild(aa2);

    aa.appendChild(text1);

    aa2.appendChild(text2);


    const imgtopnav = document.createElement('img');
    imgtopnav.src = "../../other/top-nav/1.jpg";
    div2.appendChild(imgtopnav);
    imgtopnav.classList = "imgggg";


}


nav();



//פונקציית חיפוש באתר



input.onchange = function (event) {
    console.log(event.target.value);

    //שליפת הנתונים הנדרשים-
    // בדיקה האם מכילים את הקלט מהמשתמש


    //פונקצייה לשליפת הנתונים מקובץ json

    $.ajax({
        url: "/data/buying.json.json",
        success: (result) => {
            picture = result;
            drawUsers();
        },
        errow: (err) => {
            console.log(err);
        }

    });


    //פונקציה המציירת את המוצרים עם הפרטים שלהם


    const dom = {
        picture: document.getElementById("picture")
    }


    let help = 0;




    const drawUsers = () => {

        dom.picture.innerHTML = " ";
        //בדיקה כמה תוצאות נמצאו
        let sum = 0;
        picture.forEach(user => {

            if (user.name2.includes(input.value)) {
                sum++;
            }
        })



        dom.picture.innerHTML += `<div> 
        <h1> נמצאו  ${sum} תוצאות  עבור: ${input.value}</h1> </div>`;

        picture.forEach(user => {

            if (user.name2.includes(input.value)) {
                help = 1;
                dom.picture.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
              <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px" /> 
              <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
                      <h3> ${user.name}</h3>  <h5>${user.name2}</h5>  <h5>${user.price} ש"ח </h5>
                    <button id="picturewww" class= "${user.key}" "button" type="button">הוספה לסל</button>
                 </div>`;

                sessionStorage.setItem(user.key, JSON.stringify(user));

            }

            const button = document.querySelectorAll('button');


            //פונקציה המעדכנת בעת לחיצה על הכפתור את מספר המוצרים שנכנסו לסל

            button.forEach(bb => {
                if (!(bb.classList[0] == 'filter1' || bb.classList[0] == 'filter2' || bb.classList[0] == 'buttondiv4' || bb.classList[0] == "button-" || bb.classList[0] == "button+")) {
                    bb.onclick = function () {


                        const userId = localStorage.getItem("id");
                        const user2 = JSON.parse(localStorage.getItem(userId));


                        // שליפת המערך של המשתמש הנוכחי
                        //הכנסת בחירת המשתמש למערך

                        const arr = user2.arr;

                        const arrmonim = user2.arrMonim;


                        arr.push(bb.classList.value);

                        user2.arrMonim = arrmonim;

                        user2.arr = arr;

                        localStorage.setItem(userId, JSON.stringify(user2));

                    }
                }
            })
        }
        );
        if (help == 0) {
            dom.picture.innerHTML = `<div>
                      <h1>404, not fount 😒🤤😒</h1>
                 </div>`;

        }
        input.value = "";






        //מילוי הפרטים בחלונית הקופצת

        const tex1_namespan = document.getElementById('tex1_namespan');
        const tex2_namespan = document.getElementById('tex2_namespan');
        const tex3_namespan = document.getElementById('tex3_namespan');
        const imgbuying = document.getElementById('imgbuying');


        const imgall = document.querySelectorAll('img');
        imgall.forEach(ff => {
            ff.onclick = function () {

                const userkey = JSON.parse(sessionStorage.getItem(ff.classList[1]));
                console.log(userkey);
                tex1_namespan.innerHTML = userkey.name;
                tex2_namespan.innerHTML = userkey.name2;
                tex3_namespan.innerHTML = userkey.price;
                imgbuying.src = `/assets/c/${userkey.src}`;

            }
        })

    }


}

















//מסננים

//בניית המסננים
const div3 = document.getElementById('div3');
div3.classList = "div3";

//כיתוב סנן לפי
const textfilter = document.createElement('h3');
textfilter.innerHTML = "סנן לפי:"
textfilter.classList = "textfilter";
div3.appendChild(textfilter);

//מסנן מהנמוך לגבוהה
const filter1 = document.createElement('button');
filter1.innerHTML = "מחיר מהנמוך לגבוה"
filter1.classList = "filter1";
div3.appendChild(filter1);

//מסנן מהגבוה לנמוך
const filter2 = document.createElement('button');
filter2.innerHTML = "מחיר מהגבוה לנמוך"
filter2.classList = "filter2";
div3.appendChild(filter2);




const domfilter = {
    picturefilter: document.getElementById("picture")
}

let picturefilter = [{ name: "default", name2: "default", price: "default", src: "default" }]


// לחיצה על מסנן ראשון

filter1.onclick = function () {

    domfilter.picturefilter.innerHTML = " ";


    //פונקצייה לשליפת הנתונים מקובץ json
    $.ajax({
        url: "/data/low_to_high.json",
        success: (result) => {
            picturefilter = result;
            console.log(picturefilter);
            drawUsers();
        },
        errow: (err) => {
            console.log(err);
        }

    });





    //פונקציה המציירת את המוצרים עם הפרטים שלהם


    const drawUsers = () => {
        
        picturefilter.forEach(user => {

            domfilter.picturefilter.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12 ">
          <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px" /> 
          <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
                  <h3> ${user.name}</h3>
                   <h5>${user.name2}</h5>
                    <h5>${user.price} ש"ח</h5>
                <button id="picturewww" class= "${user.key}" "button" type="button">הוספה לסל</button>
             </div>`;
            sessionStorage.setItem(user.key, JSON.stringify(user));

        })


        //פונקציה המעדכנת בעת לחיצה על הכפתור את מספר המוצרים שנכנסו לסל


        const buttonfilter = document.querySelectorAll('button');


        buttonfilter.forEach(bb => {
            if (!(bb.classList[0] == 'filter1' || bb.classList[0] == 'filter2' || bb.classList[0] == 'buttondiv4' || bb.classList[0] == "button-" || bb.classList[0] == "button+")) {
                bb.onclick = function () {

                    console.log(bb.classList[0]);

                    if (!(bb.classList[0] == 'filter1' || bb.classList[0] == 'filter2' || bb.classList[0] == 'buttondiv4')) {
                        const userId = localStorage.getItem("id");
                        if (userId == -1 || userId == null)
                            alert("אין אפשרות להוסיף לסל ללא כניסה");
                        else {

                            const user2 = JSON.parse(localStorage.getItem(userId));


                            // שליפת המערך של המשתמש הנוכחי
                            //הכנסת בחירת המשתמש למערך

                            const arr = user2.arr;

                            const arrmonim = user2.arrMonim;


                            arr.push(bb.classList.value);

                            user2.arrMonim = arrmonim;

                            user2.arr = arr;

                            localStorage.setItem(userId, JSON.stringify(user2));
                        }

                    }

                }
            }

        })

        //מילוי הפרטים בחלונית הקופצת

        const tex1_namespan = document.getElementById('tex1_namespan');
        const tex2_namespan = document.getElementById('tex2_namespan');
        const tex3_namespan = document.getElementById('tex3_namespan');
        const imgbuying = document.getElementById('imgbuying');


        const imgall = document.querySelectorAll('img');
        imgall.forEach(ff => {
            ff.onclick = function () {

                const userkey = JSON.parse(sessionStorage.getItem(ff.classList[1]));
                console.log(userkey);
                tex1_namespan.innerHTML = userkey.name;
                tex2_namespan.innerHTML = userkey.name2;
                tex3_namespan.innerHTML = userkey.price;
                imgbuying.src = `/assets/c/${userkey.src}`;

            }
        })

    }
}







//לחיצה על מסנן שני גבוהה לנמוך

filter2.onclick = function () {
    domfilter.picturefilter.innerHTML = " ";


    //פונקצייה לשליפת הנתונים מקובץ json
    $.ajax({
        url: "/data/high_to_low.json",
        success: (result) => {
            picturefilter = result;
            console.log(picturefilter);
            drawUsers();
        },
        errow: (err) => {
            console.log(err);
        }

    });





    //פונקציה המציירת את המוצרים עם הפרטים שלהם


    const drawUsers = () => {
        picturefilter.forEach(user => {

            domfilter.picturefilter.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12 ">
          <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px" /> 
          <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
                  <h3> ${user.name}</h3>
                   <h5>${user.name2}</h5>
                    <h5>${user.price} ש"ח</h5>
                <button id="picturewww" class= "${user.key}" "button" type="button">הוספה לסל</button>
             </div>`;

            sessionStorage.setItem(user.key, JSON.stringify(user));


        })


        //פונקציה המעדכנת בעת לחיצה על הכפתור את מספר המוצרים שנכנסו לסל


        const buttonfilter = document.querySelectorAll('button');


        buttonfilter.forEach(bb => {
            if (!(bb.classList[0] == 'filter1' || bb.classList[0] == 'filter2' || bb.classList[0] == 'buttondiv4' || bb.classList[0] == "button-" || bb.classList[0] == "button+")) {
                bb.onclick = function () {

                    console.log(bb.classList[0]);

                    if (!(bb.classList[0] == 'filter1' || bb.classList[0] == 'filter2' || bb.classList[0] == 'buttondiv4')) {
                        const userId = localStorage.getItem("id");
                        if (userId == -1 || userId == null)
                            alert("אין אפשרות להוסיף לסל ללא כניסה");
                        else {

                            const user2 = JSON.parse(localStorage.getItem(userId));


                            // שליפת המערך של המשתמש הנוכחי
                            //הכנסת בחירת המשתמש למערך

                            const arr = user2.arr;

                            const arrmonim = user2.arrMonim;


                            arr.push(bb.classList.value);

                            user2.arrMonim = arrmonim;

                            user2.arr = arr;

                            localStorage.setItem(userId, JSON.stringify(user2));
                        }

                    }

                }
            }

        })


        //מילוי הפרטים בחלונית הקופצת

        const tex1_namespan = document.getElementById('tex1_namespan');
        const tex2_namespan = document.getElementById('tex2_namespan');
        const tex3_namespan = document.getElementById('tex3_namespan');
        const imgbuying = document.getElementById('imgbuying');


        const imgall = document.querySelectorAll('img');
        imgall.forEach(ff => {
            ff.onclick = function () {

                const userkey = JSON.parse(sessionStorage.getItem(ff.classList[1]));
                console.log(userkey);
                tex1_namespan.innerHTML = userkey.name;
                tex2_namespan.innerHTML = userkey.name2;
                tex3_namespan.innerHTML = userkey.price;
                imgbuying.src = `/assets/c/${userkey.src}`;

            }
        })

    }
}



