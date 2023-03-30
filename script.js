const getMyAge = input => {
     const yourAge = Math.floor((Date.now() - Date.parse(input)) / 31556952000)

     return yourAge
}
getMyAge(1987, 11, 11)