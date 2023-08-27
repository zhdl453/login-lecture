"use strict";
//modules
const express = require("express");
const app = express();


//routing
const home = require('./routes/home');
//app setting
app.set("views", "./views");
app.set("view engine", "ejs");
//원래 app,get('/',(req,res)=>{} 이런식인데 router 폴더에다가 따로 파일 저장해서 불러올거니까
//const router = express.Router(); 해주고
//app.get()을 -> router.get()로만 바꿔주면 되는데, 이렇게 하면 여기 index.js파일에서만 쓸수 있다.
//그래서 app.js파일에서 app.use('/', home); 해줘가지고 미들웨어 등록하는 메서드 써서 연결해줘야함


app.use('/', home); //use-> method to register a "middle wear":
//'/'를 하면 home 으로 보내준다는 뜻

module.exports = app;
