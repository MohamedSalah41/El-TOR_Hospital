'use strict';

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

//drop list
function toggleDropdown() {
  var dropdown = document.getElementById("doctorDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}





function signup() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if username already exists
  if (localStorage.getItem(username)) {
    alert('Username already exists. Please choose a different one.');
    return;
  }

  // Save data to local storage
  localStorage.setItem(username, password);
  alert('Sign up successful! You can now log in.');
}

function login() {
  var loginUsername = document.getElementById('loginUsername').value;
  var loginPassword = document.getElementById('loginPassword').value;

  // Check if username exists and password is correct
  var storedPassword = localStorage.getItem(loginUsername);

  if (storedPassword === null || storedPassword !== loginPassword) {
    alert('Invalid username or password. Please try again.');
  } else {
    document.getElementById('message').innerText = 'Login successful!';
  }
}







// login and sign up

function showSignUpForm() {
  document.getElementById('signupForm').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('message').innerText = '';
}

function showLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('message').innerText = '';
}

function signup() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if username already exists
  if (localStorage.getItem(username)) {
    alert('Username already exists. Please choose a different one.');
    return;
  }
  // Save data to local storage
  localStorage.setItem(username, password);
  alert('Sign up successful! You can now log in.');
  showLoginForm(); // Switch to the login form after signing up
}

function login() {
  var loginUsername = document.getElementById('loginUsername').value;
  var loginPassword = document.getElementById('loginPassword').value;

  // Check if username exists and password is correct
  var storedPassword = localStorage.getItem(loginUsername);

  if (storedPassword === null || storedPassword !== loginPassword) {
    alert('Invalid username or password. Please try again.');
  } else {
    document.getElementById('message').innerText = 'Login successful!';
    window.location.href = '/Doctors2.html';
  }
  var userType = document.querySelector('input[name="userType"]:checked').value;
            if (userType === 'patient') {
                // Redirect to the appropriate page for patients
                window.location.href = '/Doctors2.html';
            } else if (userType === 'doctor') {
                // Redirect to the appropriate page for doctors
                window.location.href = '/edit.html';
            }
}

// Initially show the sign-up form
showSignUpForm();









//profile menu
function toggleUserMenu() {
  var menu = document.getElementById('dropdownContent');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function viewUserData() {
  // Replace with your logic to view data
  toggleUserMenu(); // Close the menu after selecting an option
}

function editUserData() {
  // Replace with your logic to edit data
  toggleUserMenu(); // Close the menu after selecting an option
}






//profile data
function saveAppointment() {
  // Get form data
  var patientName = document.getElementById("patient_name").value;
  var appointmentDate = document.getElementById("appointment_date").value;
  var appointmentTime = document.getElementById("appointment_time").value;
  var description = document.getElementById("description").value;
  var selectedDoctor = document.getElementById('doctor').value;
  // Create an object to represent the appointment
  var appointment = {
    patientName: patientName,
    appointmentDate: appointmentDate,
    appointmentTime: appointmentTime,
    description: description,
    selectedDoctor:selectedDoctor
  };

  // Retrieve existing appointments from local storage or initialize an empty array
  var existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

  // Add the new appointment to the array
  existingAppointments.push(appointment);

  // Save the updated array back to local storage
  localStorage.setItem("appointments", JSON.stringify(existingAppointments));

  // Optionally, you can redirect to a confirmation page or display a confirmation message
  alert("Appointment saved successfully!");
}







// function for insurance
function saveAppointment2() {
 
  var hasInsurance = document.getElementById('insurance_yes').checked;
  var price = hasInsurance ? 100 : 200;

  // Update the price field
  document.getElementById('price').value = price;
  console.log("Has Insurance: " + hasInsurance);
  console.log("Price: " + price);
}






// card for doctor ahmed el-shafeai
function toggleZoom(card) {
  // Toggle zoom class on the clicked card
  card.classList.toggle('zoom');

  // Toggle active class on the doctor info
  var doctorInfo = document.querySelector('.doctor-info');
  doctorInfo.classList.toggle('active', card.classList.contains('zoom'));
}






function showContent(tabId) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function(content) {
    content.classList.remove('active');
  });

  // Show the selected tab content
  var selectedTabContent = document.getElementById(tabId);
  if (selectedTabContent) {
    selectedTabContent.classList.add('active');
  }
}
