const url=require('url');
const reqUrl='http://localhost:9000/user?country=India&city=Delhi';

const urlObject=url.parse(reqUrl,true);

console.log(urlObject.host);
console.log(urlObject.pathname);
console.log(urlObject.search);

const queryData=urlObject.query
console.log(queryData.country);
console.log(queryData.city);