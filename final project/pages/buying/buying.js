
const domm = {
    picture: document.getElementById("picture")
}

const iconToBuy = document.getElementById('iconToBuy');
const numItems = document.getElementById('numItems');


let count = 0;


let picture = [{ name: "default", name2: "default", price: "default", src: "default" }]



//פונקצייה לשליפת הנתונים מקובץ json
$.ajax({
    url: "/data/buying.json.json",
    success: (result) => {
        picture = result;
        console.log(picture);
        drawUsers();
    },
    errow: (err) => {
        console.log(err);
    }

});






//פונקציה המציירת את המוצרים עם הפרטים שלהם


const drawUsers = () => {
    picture.forEach(user => {

        domm.picture.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12 ">
        <img class="ee ${user.key}"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px" />
          <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
          <h3> ${user.name}</h3>
            <h5>${user.name2}</h5>
            <h5>${user.price} ש"ח</h5>
                <button id="picturewww" class= "${user.key}" "button" type="button">הוספה לסל</button> <br>
             </div>`;

        sessionStorage.setItem(user.key, JSON.stringify(user));

    })

    const button = document.querySelectorAll('button');

    button.forEach(bb => {

        if (!(bb.classList[0] == 'filter1' || bb.classList[0] == 'filter2' || bb.classList[0] == 'buttondiv4' || bb.classList[0] == "button-" || bb.classList[0] == "button+" || bb.classList[0] == "btn" || bb.classList[0] == "btn-close")) {
            bb.onclick = function () {
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


    )







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