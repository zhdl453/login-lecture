//app.listen(); 모듈화 최적화해주자 www.js  이파일에
"use strict";
const app = require('../app'); //'../': 상위 폴더로 올라가서 그 레벨단위안에있는 파일 골라준다는 뜻
const PORT = 5501;

app.listen(PORT, () => {
    console.log("server is running");
  });

  //package.json: