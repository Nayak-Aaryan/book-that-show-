function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}

function setActive(element) {
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.parentElement.classList.remove("active");
    });
    element.parentElement.classList.add("active");
}

// login and register
const wrapper=document.querySelector(".wrapper");
const registerLink=document.querySelector(".register-link");
const loginLink=document.querySelector(".login-link");

registerLink.onclick =()=> {
    wrapper.classList.add('active');
}

loginLink.onclick =()=> {
    wrapper.classList.remove('active');
}
// movie
function bookNow(button, movieTitle) {
    const movieCard = button.closest('.movie-card');
    const showtimeSelect = movieCard.querySelector('.showtime-select');
    const selectedTime = showtimeSelect.value;
  
    // Redirect with movie and time as query parameters
    const url = `booking.html?movie=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(selectedTime)}`;
    window.location.href = url;
  }
