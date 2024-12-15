function logout(){
    localStorage.setItem('loginUser' , false)
    window.location.reload()
}


window.onload = function() {
    var userLoginCheck = localStorage.getItem('loginUser')
    if(userLoginCheck == 'false') {
        window.location.href = 'login.html'
    }
}