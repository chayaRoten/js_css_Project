
const change = document.getElementById('change');


const dom = {
  picture: document.getElementById("picture")
}


let picture = [{ name: "default", price: "default", src: "default" }]

$.ajax({
  url: "/../../data/index.json",
  success: (result) => {
    picture = result;
    drawUsers();
  },
  errow: (err) => {
    console.log(err);
  }

});


const drawUsers = () => {
  picture.forEach(user => {
    dom.picture.innerHTML += `<div class=" col-md-3 ">
        <a href="../buying/buying.html"><img class="img_product" src="/assets/a/${user.src}" width="300px" /> </a>
        <a href="../buying/buying.html"><h3> ${user.name}</h3> </a> <h5>${user.text}</h5>
        </div>`;
  });
}






