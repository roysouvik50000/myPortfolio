const typeSpeed = 200; // milliseconds
let i = 0;
function type() {
    if (i < text.length) {
        typeWriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, typeSpeed);
    } else {
        // add cursor after typing completes
        const cursor = document.createElement("span");
        cursor.classList.add("cursor");
        cursor.textContent = "|";
        typeWriter.appendChild(cursor);
    }
}

const typeWriter = document.getElementById("typeWriter");
const text = "Hello, welcome to my website!";

type();



//landing typo animation


const landingText = "<Hello World !! />";
const typingSpeed = 100;
let index = 0;

const typingText = document.getElementById("typingText");
const typingContainer = document.getElementById("typingContainer");
const mainContent = document.getElementById("mainContent");

function typeChar() {
  if (index < landingText.length) {
    typingText.textContent += landingText.charAt(index);
    index++;
    setTimeout(typeChar, typingSpeed);
  } else {
    // After typing finishes, wait 3 seconds then show content
    setTimeout(() => {
      typingContainer.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 1000);
  }
}

typeChar();


//navbar animation

const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;
  let timeout;

  window.addEventListener("scroll", () => {
    clearTimeout(timeout); // Reset timeout on scroll

    // Show navbar when scrolling
    navbar.classList.remove("hide-nav");

    // Hide navbar if user stops scrolling for 1.5s
    timeout = setTimeout(() => {
      navbar.classList.add("hide-nav");
    }, 1500);

    lastScrollY = window.scrollY;
  });


  //show my resume

  function showResume (){
    document.getElementById('resume').style.display='block';
  }
  function clsResume (){
    document.getElementById('resume').style.display='none';
  }