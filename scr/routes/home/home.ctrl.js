//이전으로 되감아서 컨트롤러 기능을 갖는  '콜백 함수'를 복사하려는 것입니다.
//hello,login라는 컨트롤러 함수를 만들고, 이를 외부에서 사용해준다
"use strict";
function hello (req, res) {
   res.render("home/index");
};

function login(req, res) {
    res.render("home/login");
}

module.exports = {
    hello,
    login,
};  