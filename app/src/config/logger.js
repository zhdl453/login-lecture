const { createLogger, transports,format } = require("winston");
const { combine, timestamp, printf,label, json, simple, colorize } = format;
const printFormat = printf(({timestamp, label, level, message})=>{//사용하고싶은 변수들을 오브젝트로 담아서 보내줄수 있음
    return `${"시간: " + timestamp} [${label}] ${level} : ${message}`;
  }); //json()파일형식은 colorize()랑 같이 붙으면 오류남.
const printLogFormat = combine(
    label({
        label: "백엔드 맛보기"
    }),
  colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd",
  }),
  printFormat
);
const logger = createLogger({
  transports: [
    new transports.File({
      level: "error",
      format: printLogFormat,
    }),
  ],
}); //transports라는 키값에 배열을 넣어줌.

module.exports = logger;
