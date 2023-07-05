function myReplace(str, before, after) {
  var index = str.indexOf(before);
//Here we find the index of the string we need to replace
  if(str[index] == str[index].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  str = str.replace(before,after);
  //return str;
  console.log(str);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
