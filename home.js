// JavaScript to handle dynamic logo and icon changes based on scroll
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const headerLogo = document.getElementById('headerLogo');
    const headerNav = document.getElementById('headerNav');
  
    // Set initial state for header (black background and white text)
    header.classList.add('bg-black', 'text-white');
    headerLogo.src = headerLogo.dataset.dark; // Dark logo on load
    headerNav.src = headerNav.dataset.light; // Light nav icon on load
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        // Change header background and text color
        header.classList.remove('bg-black', 'text-white');
        header.classList.add('bg-white', 'text-black', 'shadow-lg');
  
        // Change logo to the light version
        headerLogo.src = headerLogo.dataset.light;
  
        // Change nav icon to the dark version
        headerNav.src = headerNav.dataset.dark;
      } else {
        // Revert header background and text color
        header.classList.remove('bg-white', 'text-black', 'shadow-lg');
        header.classList.add('bg-black', 'text-white');
  
        // Change logo to the dark version
        headerLogo.src = headerLogo.dataset.dark;
  
        // Change nav icon to the light version
        headerNav.src = headerNav.dataset.light;
      }
    });
  });
// JavaScript to handle dynamic logo and nav icon changes based on scroll
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const headerLogo = document.getElementById('headerLogo');
    const headerNav = document.getElementById('headerNav');
  
    // Set initial state for header (black background and white text)
    header.classList.add('bg-black', 'text-white');
    headerLogo.src = headerLogo.dataset.dark; // Dark logo on load
    headerNav.src = headerNav.dataset.light; // Light nav icon on load
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        // Change header background and text color
        header.classList.remove('bg-black', 'text-white');
        header.classList.add('bg-white', 'text-black', 'shadow-lg');
  
        // Change logo to the light version
        headerLogo.src = headerLogo.dataset.light;
  
        // Change nav icon to the dark version
        headerNav.src = headerNav.dataset.dark;
      } else {
        // Revert header background and text color
        header.classList.remove('bg-white', 'text-black', 'shadow-lg');
        header.classList.add('bg-black', 'text-white');
  
        // Change logo to the dark version
        headerLogo.src = headerLogo.dataset.dark;
  
        // Change nav icon to the light version
        headerNav.src = headerNav.dataset.light;
      }
    });
  });










  const cardsWrapper = document.querySelector('.cards-wrapper');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  
  let scrollAmount = 0; // Tracks the current scroll position
  const cardWidth = document.querySelector('.card').offsetWidth + 16; // Card width + gap
  const totalCards = document.querySelectorAll('.card').length;
  
  // Next Button Handler
  nextButton.addEventListener('click', () => {
    if (scrollAmount < cardWidth * (totalCards - 4)) { // Adjust to prevent over-scrolling
      scrollAmount += cardWidth;
      cardsWrapper.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  });
  
  // Previous Button Handler
  prevButton.addEventListener('click', () => {
    if (scrollAmount > 0) {
      scrollAmount -= cardWidth;
      cardsWrapper.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  });











  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Adjust the speed of counting (lower = faster)

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target"); // Final number
        const count = +counter.innerText; // Current number

        // Increment value
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment); // Update number
          setTimeout(updateCount, 15); // Animation frame
        } else {
          counter.innerText = target; // Final number
        }
      };

      updateCount();
    });
  });











  // Set default testimonial details (testimonial 1) to be always visible when the page loads
  window.onload = function() {
    const defaultTestimonial = document.querySelector("#testimonials-container img");
    handleImageClick(defaultTestimonial); // Load the first testimonial by default
  };

  // Function to handle image click and update the details section
  function handleImageClick(clickedImage) {
    // Get the name, role, and text data from the clicked image
    const name = clickedImage.getAttribute("data-name");
    const role = clickedImage.getAttribute("data-role");
    const text = clickedImage.getAttribute("data-text");

    // Update the details section with the clicked image's data
    document.getElementById("testimonial-text").innerHTML = text;
    document.getElementById("testimonial-name").innerText = name;
    document.getElementById("testimonial-role").innerText = role;

    // Optionally, you can change the opacity of all images to show which one was clicked
    const images = document.querySelectorAll("#testimonials-container img");
    images.forEach(img => {
      img.classList.add("opacity-50");
    });

    // Remove opacity for the clicked image
    clickedImage.classList.remove("opacity-50");
  }













// employee img start
  
const slider = document.getElementById("image-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const paginationDots = document.getElementById("pagination-dots");

const totalItems = slider.children.length;
const itemsPerPage = 5; // Number of images visible per page
let currentPage = 0;

// Create pagination dots
function createDots() {
  paginationDots.innerHTML = "";
  const totalDots = totalItems - itemsPerPage + 1; // Dynamically adjust dots
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("span");
    dot.className = `w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-300 inline-block cursor-pointer`;
    dot.setAttribute("data-page", i);
    dot.addEventListener("click", () => scrollToPage(i));
    paginationDots.appendChild(dot);
  }
  updateDots();
}

// Update active dot
function updateDots() {
  Array.from(paginationDots.children).forEach((dot, index) => {
    if (index === currentPage) {
      dot.classList.add("bg-blue-500");
      dot.classList.remove("bg-gray-300");
    } else {
      dot.classList.add("bg-gray-300");
      dot.classList.remove("bg-blue-500");
    }
  });
}

// Scroll to specific page
function scrollToPage(page) {
  currentPage = page;
  slider.style.transform = `translateX(-${page * 20}%)`;
  updateDots();
}

// Event listeners for next and previous buttons
nextBtn.addEventListener("click", () => {
  const maxPage = totalItems - itemsPerPage;
  if (currentPage < maxPage) {
    scrollToPage(currentPage + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    scrollToPage(currentPage - 1);
  }
});

// Initialize dots
createDots();



// employee js ends









// new conetnt start here

const sliders = document.querySelector(".newimage");
const totalSlides = sliders.children.length;
const imagesPerSlide = 6; // Number of images to show at once
let currentIndex = 0;

// Clone the first few slides to create a seamless loop effect
for (let i = 0; i < imagesPerSlide; i++) {
  const clone = sliders.children[i].cloneNode(true);
  sliders.appendChild(clone);
}

// Set initial transform to show the first six images
sliders.style.transform = `translateX(0)`;

// Add a sliding function
function slideToNext() {
  currentIndex++;

  // Smooth sliding effect
  const translateXValue = -(currentIndex * (100 / imagesPerSlide));
  sliders.style.transform = `translateX(${translateXValue}%)`;
  sliders.style.transition = `transform 0.5s ease`;

  // Reset to the beginning when the cloned slides are reached
  if (currentIndex === totalSlides) {
    setTimeout(() => {
      sliders.style.transition = `none`; // Disable animation for instant reset
      currentIndex = 0; // Reset index
      sliders.style.transform = `translateX(0%)`;
    }, 500); // Match the transition duration
  }
}

// Start the infinite sliding loop
setInterval(slideToNext, 2000); // Adjust interval as needed




// new content ends here














































  