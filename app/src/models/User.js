"use strict";
const UserStorage = require("./UserStorage");

class User{
    constructor(body) { //생성자 만들때 씀.여기서 body를 받을거임.그래서 constructor(body)만듦
        this.body = body; //그러면 constructor(body)의 body가 => this.body의 (유저의 body)에 들어가는거임
    } 

    login(){
        const body = this.body;
        const {id, psword} = UserStorage.getUserInfo(body.id); //getUsers(id,psword): id랑 psword라는 필드값을 가져오겠다는뜻
         //id,psword만 받아왔음. 이름도 받고싶으면 {id, psword, name}이라고 하면됨.
         if(id){
            if(id === body.id && psword === body.psword){
                return {success:true};//=> UserStorage에 있는 id,pw가 유저가 쓴 id,pw가 같다면
             }
             return {success:false, msg:"비밀번호가 틀렸습니다."};
         }
         return {success:false, msg:"존재하지 않는 아이디입니다."};  
    }// 변수로 받을 수 있지만, 나는 오브젝트로 그냥 바로 id,psword변수에 받아버리기 위해서 const {id,psword}해줌
}
module.exports = User; //밖에서 사용할수 있도록 export해줌

//const user = new User(req.body);라는 클래스를 만들때 인스턴스로 만듦
//이 클래스 형태가 req.body를 기본적으로 갖고 있도록 만들어줄거임. 왜? => 클라이언트 유저 특성을 갖도록 만들거기 때문