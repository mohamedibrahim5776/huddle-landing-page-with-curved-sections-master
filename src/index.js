let regex = /^[a-zA-z]\w+@\w{3,6}\.\w{3,6}/g
let span = document.querySelector ('.span')
let check = function (){
    if (input.value.match(regex)== null) {
        console.log('error')
        span.style.display = 'block'
    } else {
        span.style.display = 'none'
    }
} 
submit.onclick = check
input.onblur = check