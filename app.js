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


const toTop= document.querySelector(".to-top");
    window.addEventListener("scroll",() =>{
        if(window.pageYOffset >300){
            toTop.classList.add("active")
        }
        else{
            toTop.classList.remove("active")
        }
})

navSlide();