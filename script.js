// Select all slides of the element with class "slider"
    const slides=document.querySelector(".slider").children; 

// Select the "prev" and "next" buttons for navigating through slides
    const prev=document.querySelector(".prev")
    const next=document.querySelector(".next")

// Initialize the index to track the current slide
    let index=0;

// Event listener for the "prev" button to go to the previous slide
    prev.addEventListener("click",function(){
        prevSlide()
    })

// Event listener for the "next" button to go to the next slide
    next.addEventListener("click",function(){ 
        nextSlide()
    })

// Function to go to the previous slide
    function prevSlide(){
        if(index==0){
            index=slides.length-1;
        }
        else
        {
            index--;
        }
        changeSlide();
    }

// Function to go to the next slide
    function nextSlide(){
        if(index==slides.length-1){
            index=0; 
        }
        else{
            index++
        }

        changeSlide();

    }

// Function to change the current active slide
    function changeSlide(){
            for(let i=0; i<slides.length; i++){
                slides[i].classList.remove("active");
            }
        slides[index].classList.add("active");
    }


// Auto-play functionality to automatically move to the next slide every 4 seconds
    function autoPlay(){
        nextSlide();
    }

// Set an interval to automatically call the autoPlay function every 4 seconds (4000 milliseconds)
    let timer=setInterval(autoPlay,4000); 

// Function to handle the display of different menu sections when tabs are clicked
    function openMenu(evt, menuName) {
  
// Hide all menu sections
    const menuSections = document.getElementsByClassName("menu-section");
    for (let i = 0; i < menuSections.length; i++) {
        menuSections[i].style.display = "none";
    }

// Remove active class from all tabs
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("w3-red");
  }

// Show the selected menu section and highlight the active tab
    document.getElementById(menuName).style.display = "block";
        evt.currentTarget.classList.add("w3-red");
    }

// Default display for the first menu section
    document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("myLink").click();
    });
