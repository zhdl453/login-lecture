"use strict";

const { reduce } = require("async");

//클래스로 만들고, 보통 파일명이랑 같게 해줌. 유저 정도 여기 클래서에 담아줄거인
class UserStorage { //users를 static으로 전역변수로 만들어주면 클래스 UserStorage가 접근가능함. home.ctrl.js파일에서
    //const userStorage = new UserStorage();
    //console.log(UserStorage.users); 이렇게 해줄 필요가 없어짐
   static #users = { //#은닉화 해주는거: private하게 만들어줌
        id: ["zhdl453", "id004", "id005"],
        psword: ["dud4533025", "pw004", "pw005"],
        name: ["이혜영", "사길동", "오길동"]
    };

   static getUsers(...fields){ //#users처럼 은닉화 해주면 home.ctrl.js파일에서 UserStorage.#users를 못들고옴
    //그래서 이렇게 getUsers 메소드 만들어줘서 UserStorage.getUsers로 해줘야함
    //전역변수로 들고왔으니 static getUsers로 맞춰준다 static #users ㅇㅇ
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field)=>{ //newUsers변수에는 fields의 초깃값이 들어가고, field변수에는 나머지값들이 들어감
        if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
    }

    static getUserInfo(id) { //
        const user = this.#users;
        const idx = users.id.indexOf(id); //파라미터로 담아준 id가 여기 담아지고, 그 id의 순차가 idx에 담아짐
        const usersKeys = object.keys(users); //=> [id,psword,name] 이러한 배열이 만들어지고, 
        const userInfo = usersKeys.reduce((newUser,info)=>{ //순차적으로 들어가게됨
            newUser[info] = users[info][idx]; //newUser라는 오브젝트에 키값 info
            return newUser;
            }, {});

            return userInfo; //userInfo에 ["id001","pw001","KIM"], ["id002","pw002","LEE"] 이런식으로 들어감
    }
}

module.exports = UserStorage;

