// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  const str1array=[];
  const str2array=[];
  if(str1.length!==str2.length){
    return false;
  }
  for(let i=0;i<str1.wordlength;i++){
    if(str1array.push(str1.length[i]) === str2array.push(str2.length[i])){
      return true;
    }else{
      return false;
    }
  }

};

module.exports = { checkAnagrams };
