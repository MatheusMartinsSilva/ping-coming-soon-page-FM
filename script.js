function validate() {
    let mail = document.getElementById('email').value  
    let email = document.getElementById('email')
    let sing_mob = document.querySelector('#validx')
    let sing = document.querySelector('#validy')
    let regex = /^([a-zA-Z0-9\.]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;
    
    if (regex.test(mail)) {
        console.log('valid')
        email.style.border =  '2px solid ligthgary'
        sing.style.color = 'white'
        sing_mob.style.color = 'white'
    }
    else {
        console.log('invalid')
        email.style.border =  '2px solid red'
        sing.style.color = 'red'
        sing_mob.style.color = 'red'
    }
}