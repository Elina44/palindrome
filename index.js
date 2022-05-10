let userWord = " Lav- Al";
let userWord1 = userWord.replace(/[&#,+()$~%'":*?<>!_\-{}|]/,"");
let replaceWord = userWord1.split(' ').join('');
let revWord = replaceWord.split('').reverse().join('');
function palindrome() {
    if(replaceWord.toLowerCase() == revWord.toLowerCase()) {
        console.log("true");
    } else {
        console.log("false");
    }
}

palindrome()