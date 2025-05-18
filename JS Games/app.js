// khizar
// write a function to count the vowels in the word,

// vowels , a , e , i , o , u  ==> HELLO , => 2
let vowels = ["a" , "e" , "i" , "o" ,"u"]
let count = 0 ;
function countvowels(word){
    for(var i = 0 ; i < word.length ; i++){
      if( vowels.includes(word[i])){ 
        count++
      }
    }
}
// 