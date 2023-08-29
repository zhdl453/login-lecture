"use strict";
const UserStorage = require("./UserStorage");

class User{
    constructor(body) { //생성자 만들때 씀.여기서 body를 받을거임.그래서 constructor(body)만듦
        this.body = body; //그러면 constructor(body)의 body가 => this.body의 (유저의 body)에 들어가는거임
    } 

    login(){
         const {id,psword} = UserStorage.getUsers("id","psword"); //getUsers(id,psword): id랑 psword라는 필드값을 가져오겠다는뜻
         console.log(id, psword);
    }// 변수로 받을 수 있지만, 나는 오브젝트로 그냥 바로 id,psword변수에 받아버리기 위해서 const {id,psword}해줌
}
module.exports = User; //밖에서 사용할수 있도록 export해줌

//const user = new User(req.body);라는 클래스를 만들때 인스턴스로 만듦
//이 클래스 형태가 req.body를 기본적으로 갖고 있도록 만들어줄거임. 왜? => 클라이언트 유저 특성을 갖도록 만들거기 때문