function checknewUser(){
    let person = localStorage.getItem('person')?JSON.parse(localStorage.getItem('person')):null;
    
}

document.addEventListener("DOMContentLoaded",()=>{
    checknewUser();
})