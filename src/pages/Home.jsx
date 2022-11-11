import React from "react";
import { useEffect } from "react";
import "../Embed";
import YoutubeEmbed from "../Embed";
let slideIndex = 1;



function Home() {
  useEffect(() => {
    ShowSlides();
  });

  return (
    <>
      <Heading />
      <SlideDiv />
      <div> <Trailer />
      </div>
     
    </>
  );
}

function Heading() {
  return <h1>DnD Characters</h1>;
}

function SlideDiv() {
  const HandleClick = (value) => {
    PlusSlides(value);
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div class="numbertext">1 / 4</div>
        <img src="img/Marissa.png" style={{ width: "80%" }} alt="Marissa" />
        <div class="text">Marissa</div>
      </div>

      <div className="mySlides fade">
        <div class="numbertext">2 / 4</div>
        <img src="img/Blaze.png" style={{ width: "80%" }} alt="Blaze" />
        <div class="text">Blaze</div>
      </div>

      <div className="mySlides fade">
        <div class="numbertext">3 / 4</div>
        <img src="img/Allie.png" style={{ width: "80%" }} alt="Allie" />
        <div class="text">Allie</div>
      </div>

      <div className="mySlides fade">
        <div class="numbertext">4 / 4</div>
        <img src="img/Hera.png" style={{ width: "80%" }} alt="Hera" />
        <div class="text">Hera</div>
      </div>

      <button class="prev" onClick={(event) => HandleClick()}>
        &#10094;
      </button>
      <button class="next" onClick={(event) => HandleClick()}>
        &#10095;
      </button>
    </div>
  );
}

function Trailer() {
  return (
    <div id="trailer">
      <tr />

      <YoutubeEmbed embedId="IiMinixSXII" />
    </div>
  );
}

function ShowSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.onload = () => {
  ShowSlides();
};

// Next/previous controls
function PlusSlides(n) {
  ShowSlide((slideIndex += n));
}

function ShowSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(ShowSlides, 4000);
}

export default Home;
