//이전으로 되감아서 컨트롤러 기능을 갖는  '콜백 함수'를 복사하려는 것입니다.
//hello,login라는 컨트롤러 함수를 만들고, 이를 외부에서 사용해준다
//app.js 메인파일: 노드라는 서버에 모든 기본 설정을 여기를 함
"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
       res.render("home/index");
    },
    
    login: (req, res)=> {
        res.render("home/login");
    },

    register:(req, res) =>{
        res.render("home/register");
    }
};

const process = {
    login: (req,res)=>{
        const user = new User(req.body); // User.js에서 유저의 body에 생성자 바디값 넣어줬으니, 이제 여기서 이 유저를 유저라는 인스턴스로 만들 수가 있게 됨.
        const response = user.login();
        return res.json(response); // client한테 제이슨 형태로 응답해줌.
    },

    register: (req,res)=>{
        const user = new User(req.body); // User.js에서 유저의 body에 생성자 바디값 넣어줬으니, 이제 여기서 이 유저를 유저라는 인스턴스로 만들 수가 있게 됨.
        const response = user.register();
        return res.json(response); // client한테 제이슨 형태로 응답해줌.
    },
    //     const id = req.body.id,
    //     psword = req.body.psword;
    
    // console.log(UserStorage.getUsers("id", "psword"));
    //     //이 body값을 잘 파싱해줄수 있도록 모듈을 설치해줘야함
    //     //이 req는 리퀘스트 용청 데이터들을 담아두는 변수이다.
    //     //src/public/js/home login.js에서 body: JSON.stringify(req) <= req 변수에 담아준다고 명시해둠
        
    //     const response = {};
    //     if(users.id.includes(id)) {
    //         const idx = users.id.indexOf(id);
    //         if(users.psword[idx] ===psword){
    //             response.success = true;
    //             return res.json(response);
    //         }
    //     }
    //     response.success =false;
    //     response.msg = "login has failed"
    //     return res.json(response);
    
};
module.exports = {
    output,
    process
};  

//const user = new User(req.body);라는 클래스를 만들때 인스턴스로 만듦
//이 클래스 형태가 req.body를 기본적으로 갖고 있도록 만들어줄거임. 왜? => 클라이언트 유저 특성을 갖도록 만들거기 때문