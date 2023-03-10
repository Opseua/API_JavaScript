const texto1 = '/aaaa/123';
const regex1 = /^\/(\w+)\/(\d+)$/;
const resultado1 = texto1.match(regex1);
console.log(resultado1[1]); // 'aaaa'
console.log(resultado1[2]); // '123'

const texto2 = '/bbbb/1111';
const regex2 = /^\/(\w+)\/(\d+)$/;
const resultado2 = texto2.match(regex2);
console.log(resultado2[1]); // 'bbbb'
console.log(resultado2[2]); // '1111'
