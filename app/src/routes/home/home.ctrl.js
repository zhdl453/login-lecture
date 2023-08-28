//이전으로 되감아서 컨트롤러 기능을 갖는  '콜백 함수'를 복사하려는 것입니다.
//hello,login라는 컨트롤러 함수를 만들고, 이를 외부에서 사용해준다
"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
       res.render("index");
    },
    
    login: (req, res)=> {
        res.render("login");
    }
};

const process = {
    login: (req,res)=>{
        const id = req.body.id,
        psword = req.body.psword;
    
    console.log(UserStorage.getUsers("id", "psword"));
        //이 body값을 잘 파싱해줄수 있도록 모듈을 설치해줘야함
        //이 req는 리퀘스트 용청 데이터들을 담아두는 변수이다.
        //src/public/js/home login.js에서 body: JSON.stringify(req) <= req 변수에 담아준다고 명시해둠
        
        const response = {};
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] ===psword){
                response.success = true;
                return res.json(response);
            }
        }
        response.success =false;
        response.msg = "login has failed"
        return res.json(response);
    },
};
module.exports = {
    output,
    process
};  