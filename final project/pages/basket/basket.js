
const dom = {
  pictures: document.getElementById("picture")
}

const pay = document.getElementById("sum");

//שליפת הנתונים
const userId = localStorage.getItem("id");


//בדיקה האם יש משתמש מחובר
if (userId == -1 || userId == null) {
  pay.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12"><h3>אתה לא מחובר</h3><a href="../log-in/form.html">להתחברות</a> </div>`;
}
else {

  const user = JSON.parse(localStorage.getItem(userId));
  const arrr = user.arr;




  let pictures = [{ name: "default", name2: "default", price: "default", src: "default" }]



  $.ajax({
    url: "/data/buying.json.json",
    success: (result) => {
      pictures = result;
      drawUsers();
    },
    errow: (err) => {
      console.log(err);
    }

  });


  //פונקציה המציירת את המוצרים עם הפרטים שלהם

  let count = 1;
  var arrmonim = [];
  arrmonim.length = 60;

  //בניית מערך מונים שסופר אץ כמות ההזמנות של המוצרים


  //איפוס המערך
  for (let i = 0; i < arrmonim.length; i++) {
    arrmonim[i] = 0;
  }



  //מילוי מערך מונים
  for (let k = 0; k < user.arr.length; k++) {
    arrmonim[user.arr[k]]++;
  }


  //יצירת התמונות
  const drawUsers = () => {

    for (let i = 0; i < arrmonim.length; i++) {
      if (arrmonim[i] > 0) {


        pictures.forEach(user => {
          if (user.key == i) {
            //בדיקה מהי כמות המופעים של המוצר


            dom.pictures.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
          <img class="ee ${user.key}"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px" />
           <img class="neww ${user.key}"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
                  <h3> ${user.name}</h3>  <h5>${user.name2}</h5> <h5>ש"ח ${user.price} </h5>
                  <h3>
                  <span>
                  <button class= "button+ ${user.key}" type="button">+</button>
                   ${arrmonim[i]}
                   <button class= "button- ${user.key}" type="button">-</button>
                   </span>:כמות</h3>
                  <button id="picturewww" class= "${user.key}"  type="button">הסרת פריט</button>
             </div>`;
            sessionStorage.setItem(user.key, JSON.stringify(user));
          }

          search();



          const button = document.querySelectorAll('button');

          //פונקציה המעדכנת בעת לחיצה על הכפתור את המוצרים שנמחקים מהסל



          button.forEach(bb => {


            if (!(bb.classList[0] == 'filter1' || bb.classList[0] == 'filter2' || bb.classList[0] == 'buttondiv4')) {
              bb.onclick = function () {

                const userid = localStorage.getItem("id");
                const user2 = JSON.parse(localStorage.getItem(userid));
                var arr = user2.arr;


                if (bb.classList[0] != "button-" && bb.classList[0] != "button+") {

                  for (let i = 0; i < arr.length; i++) {
                    if (arr[i] == bb.classList.value) {
                      arr[i] = -1;
                    }
                  }

                  let j = 0;
                  for (let i = 0; i < arr.length; i++) {
                    if (arr[i] != -1) {
                      arr[j++] = arr[i];
                    }
                  }

                  var arrnew = arr.slice(0, j);

                  user2.arr = arrnew;

                }

                else
                  if (bb.classList[0] == "button+") {
                    arr.push(bb.classList[1]);
                    user2.arr = arr;
                  }

                  else {
                    if (bb.classList[0] == "button-") {



                      const find = arr.indexOf(bb.classList[1]);

                      var a = arr.slice(0, find);
                      var b = arr.slice(find + 1, arr.length);
                      let k = 0;
                      for (let index = 0; index < a.length; index++) {
                        arr[k++] = a[index];
                      }
                      for (let index = 0; index < b.length; index++) {
                        arr[k++] = b[index];
                      }
                      var arrnew = arr.slice(0, arr.length - 1);

                      user2.arr = arrnew;



                    }
                  }



                localStorage.setItem(userid, JSON.stringify(user2));

                //שינוי העמוד עפ"י הנתונים שנקלטו
                var arr = user2.arr;
                //איפוס המערך
                for (let i = 0; i < arrmonim.length; i++) {
                  arrmonim[i] = 0;
                }

                //מילוי מערך מונים
                for (let k = 0; k < user2.arr.length; k++) {
                  arrmonim[user2.arr[k]]++;
                }



                dom.pictures.innerHTML = "";

                drawUsers();

                sum = 0;
                pay.innerHTML = "";
                calc();

                search();
              }
            }


          })
        })
      }
    }


    //מילוי הפרטים בחלונית הקופצת

    const tex1_namespan = document.getElementById('tex1_namespan');
    const tex2_namespan = document.getElementById('tex2_namespan');
    const tex3_namespan = document.getElementById('tex3_namespan');
    const imgbuying = document.getElementById('imgbuying');


    const imgall = document.querySelectorAll('img');
    imgall.forEach(ff => {
      ff.onclick = function () {
        console.log(ff.classList[1]);
        const userkey = JSON.parse(sessionStorage.getItem(ff.classList[1]));
        console.log(userkey);
        tex1_namespan.innerHTML = userkey.name;
        tex2_namespan.innerHTML = userkey.name2;
        tex3_namespan.innerHTML = userkey.price;
        imgbuying.src = `/assets/c/${userkey.src}`;

      }
    })



  }

  const search = function () {


    const user10 = JSON.parse(localStorage.getItem(useridd));

    const array = user10.arr;

    let help = 0;

    const dom45 = {
      pictures: document.getElementById("picture")
    }


    //בניית מערך מונים שסופר את כמות ההזמנות של המוצרים
    const arrmonimm = [];
    arrmonimm.length = 61;
    for (let i = 0; i < arrmonimm.length; i++) {
      arrmonimm[i] = 0;
    }



    for (let i = 0; i < array.length; i++) {
      arrmonimm[array[i]]++;
    }



    input.onchange = function () {
      pay.innerHTML = "";
      let sum = 0;
      for (let i = 0; i < arrmonimm.length; i++) {
        if (arrmonimm[i] > 0) {
          pictures.forEach(user => {
            if (i == user.key && user.name2.includes(input.value)) {
              sum++;
            }
          })
        }
      }

      dom45.pictures.innerHTML = "";
      dom45.pictures.innerHTML += `<div><h1> נמצאו  ${sum} תוצאות  עבור: ${input.value}</h1> </div>`;
      help = 0;
      for (let i = 0; i < arrmonimm.length; i++) {
        if (arrmonimm[i] > 0) {
          pictures.forEach(user => {
            if (i == user.key && user.name2.includes(input.value)) {
              help = 1;
              dom.pictures.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
                  <img class="ee ${user.key}"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px" /> 
                  <img class="neww ${user.key}"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
                  <h3> ${user.name}</h3>  <h5>${user.name2}</h5> <h5>${user.price} ש"ח </h5><h3>
                  <span><button class= "button+ ${user.key}" type="button">+</button> ${arrmonim[i]}
              <button class= "button- ${user.key}" type="button">-</button> </span>:כמות</h3>
            <button id="picturewww" class= "${user.key}"  type="button">הסרת פריט</button> 
              </div>`;
              sessionStorage.setItem(user.key, JSON.stringify(user));
            }
          })
        }
      }

      //מילוי הפרטים בחלונית הקופצת

      const tex1_namespan = document.getElementById('tex1_namespan');
      const tex2_namespan = document.getElementById('tex2_namespan');
      const tex3_namespan = document.getElementById('tex3_namespan');
      const imgbuying = document.getElementById('imgbuying');


      const imgall = document.querySelectorAll('img');
      imgall.forEach(ff => {
        ff.onclick = function () {
          console.log(ff.classList[1]);
          const userkey = JSON.parse(sessionStorage.getItem(ff.classList[1]));
          console.log(userkey);
          tex1_namespan.innerHTML = userkey.name;
          tex2_namespan.innerHTML = userkey.name2;
          tex3_namespan.innerHTML = userkey.price;
          imgbuying.src = `/assets/c/${userkey.src}`;

        }
      })
      if (help == 0) {
        dom45.pictures.innerHTML = `<div><h1>404, not fount 😒🤤😒</h1> </div>`;
      }
      input.value = "";

      //פונקציה המעדכנת בעת לחיצה על הכפתור את המוצרים שנמחקים מהסל

      const button = document.querySelectorAll('button');
      button.forEach(bb => {
        if (!(bb.classList[0] == 'filter1' || bb.classList[0] == 'filter2' || bb.classList[0] == 'buttondiv4')) {
          bb.onclick = function () {
            const userid = localStorage.getItem("id");
            const user2 = JSON.parse(localStorage.getItem(userid));
            var arr = user2.arr;


            if (bb.classList[0] != "button-" && bb.classList[0] != "button+") {

              for (let i = 0; i < arr.length; i++) {
                if (arr[i] == bb.classList.value) {
                  arr[i] = -1;
                }
              }

              let j = 0;
              for (let i = 0; i < arr.length; i++) {
                if (arr[i] != -1) {
                  arr[j++] = arr[i];
                }
              }

              var arrnew = arr.slice(0, j);

              user2.arr = arrnew;

            }
            else
              if (bb.classList[0] == "button+") {
                arr.push(bb.classList[1]);
                user2.arr = arr;
              }
              else {
                if (bb.classList[0] == "button-") {
                  const find = arr.indexOf(bb.classList[1]);
                  var a = arr.slice(0, find);
                  var b = arr.slice(find + 1, arr.length);
                  let k = 0;
                  for (let index = 0; index < a.length; index++) {
                    arr[k++] = a[index];
                  }
                  for (let index = 0; index < b.length; index++) {
                    arr[k++] = b[index];
                  }
                  var arrnew = arr.slice(0, arr.length - 1);

                  user2.arr = arrnew;
                }
              }

            localStorage.setItem(userid, JSON.stringify(user2));
            //שינוי העמוד עפ"י הנתונים שנקלטו

            var arr = user2.arr;
            //איפוס המערך
            for (let i = 0; i < arrmonimm.length; i++) {
              arrmonimm[i] = 0;
            }

            //מילוי מערך מונים
            for (let k = 0; k < user2.arr.length; k++) {
              arrmonimm[user2.arr[k]]++;
            }



            dom45.pictures.innerHTML = "";

            drawUsers();
            pay.innerHTML = "";

          }
        }
      })

    }


  }



  //חישוב הסכום הנוכחי

  $.ajax({
    url: "/data/buying.json.json",
    success: (result) => {
      pictures = result;
      calc();
    },
    errow: (err) => {
      console.log(err);
    }
  });



  // חישוב סכום נוכחי והצגתו למשתמש
  const calc = function () {
    let sum = 0;
    for (let i = 0; i < arrmonim.length; i++) {
      if (arrmonim[i] > 0) {
        pictures.forEach(user => {
          if (user.key == i) {
            sum += (user.price * arrmonim[i]);

          }
        })
      }
    }
    if (sum == 0)
      pay.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12"><h3> לא קיימים מוצרים בסל עבורך  </h3><a href="../products/index.html"> להוספת מוצרים</a> </div>`;
    else {
      pay.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12"><h3> סה"כ לתשלום:${sum} ש"ח</h3> 
    <a href="../../pages/pay/a/pay.html"><button type="button">לתשלום</button> </a></div>`;

    }

  }

}
