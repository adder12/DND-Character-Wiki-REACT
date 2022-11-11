import React from 'react';
import { useEffect } from 'react';

let slideIndex =1;
function Home() {
  
useEffect(()=>{
    showSlides();


}

)




    return (
        <>
            
                 <Heading />
                 <SlideDiv />
       </>
    );
}



  
  
  
  
//   
   
  

  
//   function NavButtons(props) {
//     return <a href={props.link}>{props.name}</a>;
//   }
  
  function Heading() {
    return <h1>DnD Characters</h1>;
  }
  
  function SlideDiv() {
    return (
      <div className="slideshow-container">
       
        <div className="mySlides fade">
          <div class="numbertext">1 / 4</div>
          <img
            src="img/Marissa.png"
            style={{ width: "80%" }}
            alt="Marissa"
          />
          <div class="text">Marissa</div>
        </div>
  
        <div className="mySlides fade">
      <div class="numbertext">2 / 4</div>
      <img src="img/Blaze.png" style={{width:"80%"}} alt="Blaze"/>
      <div class="text">Blaze</div>
    </div>
  
    <div className="mySlides fade">
      <div class="numbertext">3 / 4</div>
      <img src="img/Allie.png" style={{width:"80%"}} alt="Allie"/>
      <div class="text">Allie</div>
    </div>
  
    <div className="mySlides fade">
      <div class="numbertext">4 / 4</div>
      <img src="img/Hera.png" style={{width:"80%"}} alt="Hera"/>
      <div class="text">Hera</div>
    </div>
  
        <button class="prev" onclick="plusSlides(-1)">
          &#10094;
        </button>
        <button class="next" onclick="plusSlides(1)">
          &#10095;
        </button>
      </div>
    );
  }
  

  

  
  function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  
  window.onload = () => {
    showSlides();
  }
  
  // Next/previous controls
  function plusSlides(n) {
    showSlide(slideIndex += n);
  }



  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500); 
  }


export default Home;