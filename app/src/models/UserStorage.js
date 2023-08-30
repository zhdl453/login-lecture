"use strict";
const fs = require("fs").promises; ////fs가 promise기능 가지고 있어서 이런식으로 불러옴1
const { reduce } = require("async");
//클래스로 만들고, 보통 파일명이랑 같게 해줌. 유저 정도 여기 클래서에 담아줄거인
class UserStorage {
  //users를 static으로 전역변수로 만들어주면 클래스 UserStorage가 접근가능함. home.ctrl.js파일에서
  //const userStorage = new UserStorage();
  //console.log(UserStorage.users); 이렇게 해줄 필요가 없어짐
  static #getUserInfo(data, id){
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id); //파라미터로 담아준 id가 여기 담아지고, 그 id의 순차가 idx에 담아짐
    const usersKeys = Object.keys(users); //=> [id,psword,name] 이러한 배열이 만들어지고,
    const userInfo = usersKeys.reduce((newUser, info) => {
      //순차적으로 들어가게됨
      newUser[info] = users[info][idx]; //newUser라는 오브젝트에 키값 info
      return newUser;
    }, {});

    return userInfo; //userInfo에 ["id001","pw001","KIM"], ["id002","pw002","LEE"] 이런식으로 들어감
}

  static getUsers(...fields) {
    //#users처럼 은닉화 해주면 home.ctrl.js파일에서 UserStorage.#users를 못들고옴
    //그래서 이렇게 getUsers 메소드 만들어줘서 UserStorage.getUsers로 해줘야함
    //전역변수로 들고왔으니 static getUsers로 맞춰준다 static #users ㅇㅇ
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      //newUsers변수에는 fields의 초깃값이 들어가고, field변수에는 나머지값들이 들어감
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      //const user = this.#users; //require에서 promise를 부여했기 때문에 이 fs.reaFile은 promise를 반환하는 애가 됨.
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
    }) //app.js가 있는 경로
      .catch(console.error);
  }

  

  static save(userInfo){
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
  }
}

module.exports = UserStorage;
