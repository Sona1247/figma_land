      
      function initMap() {
        const azerbaijan = { lat:   40.39031076086174 , lng: 49.83018757137912};
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: azerbaijan,
          disableDefaultUI: true
        
        });
        const marker = new google.maps.Marker({
          position: azerbaijan,
          map: map,
        });
        navigator.geolocation.getCurrentPosition(onLocationSuccess);
      }
      
  function onLocationSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
  }
  const hamburger =document.getElementById("hamburger-menu-button")
  const navLinks =document.querySelector(".navbar-second-side")

  hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("show")
  })


  const headerImg = document.querySelector(".imageContent");
  const headerText = document.querySelector(".textContent");
  const headerSide = document.querySelector(".header-side");
  const adviceSide = document.querySelector(".advice-side");
  const computerSideTitle = document.querySelector(".computer-side-title");
  const computerSideSubtitle = document.querySelector(".computer-side-subtitle");
const thirdPartButton = document.querySelector(".thirdPart-button")
const contentSide = document.querySelector(".content-side")
const actionSide = document.querySelector(".action-side")
const partnersSide = document.querySelector(".partners")
const clientSide = document.querySelector(".client")
const fifthPartButton = document.querySelector(".fifth-part button")
const options  = {
  rootMargin: '20px'
}
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
     
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  observer.observe(headerImg);
  observer.observe(headerText);
  observer.observe(headerSide);
  observer.observe(adviceSide);
  observer.observe(computerSideTitle);
  observer.observe(computerSideSubtitle);
  observer.observe(thirdPartButton);
  observer.observe(contentSide);
  observer.observe(actionSide);
  observer.observe(clientSide);
  observer.observe(partnersSide);
  observer.observe(fifthPartButton)