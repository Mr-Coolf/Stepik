function testStr(a, b) {
    var result = "";
    result = result.concat(a.toUpperCase(), b.toLowerCase());
    return result;
}

console.log(testStr("Hello", "Wolf!"));