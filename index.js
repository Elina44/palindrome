function palindrome(userWord) {
    let userWord1 = userWord.replace(/[&#,+()$~%'":*?<>!_\-{}|]/,"");
    let replaceWord = userWord1.split(' ').join('');
    let revWord = replaceWord.split('').reverse().join('');
    if(replaceWord.toLowerCase() == revWord.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("rotor!"));