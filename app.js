const navSlide = () =>{
    const hamburger  = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
   

    hamburger.addEventListener('click' , () =>{
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll(".nav-links").forEach(n =>n.addEventListener("click", ()=>{
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }));
        
   
}

navSlide();