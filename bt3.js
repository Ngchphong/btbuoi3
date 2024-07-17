function checkP(str)
{
    str=str.toLowerCase().replace(/\s+/g,'');
    return str===str.split('').reverse().join('');
}
console.log(checkP("hello"));
console.log(checkP("ana"));