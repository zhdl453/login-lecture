"use strict";

const id = document.querySelector("#id"), //#:태그에 id로 되어있는걸 가지고 왔다라는뜻
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/login",{ 
    method: "POST",
    headers: {
      "Content-Type": "application/json", //데이터 형식이 제이쓴형식이라는것을 알려줌
    }, //두번째 파라미터로 전달할 데이터를 보내줄 수 있음.오브젝트의 형태로 보내줘야함
    body: JSON.stringify(req), //제이슨 데이터 타입을 이용해 데이터를 전달할거니까 제이쓴 형태로 감싸줘야함
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      console.log("hello");
      location.href = "/";
    }else {
      console.log("helloooo");
      alert(res.msg);
    }
  })
  .catch((error) => {
    console.error(new Error("error occurs during login"));
  }); //fetch가 있어야 html에 들어온 데이터를 서버로 전달해줄수 있음
}