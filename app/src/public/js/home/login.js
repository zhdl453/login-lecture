"use strict";

const id = document.querySelector("#id"), //#:태그에 id로 되어있는걸 가지고 왔다라는뜻
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
   const req = {
    id: id.value,
    psword: psword.value
   };
   console.log(req);
   // console.log(id.value);
}

   
