function palindrome(mot){
        return ((mot.split("")).reverse().join("")) === mot
}

console.log(palindrome("dfdz"))
