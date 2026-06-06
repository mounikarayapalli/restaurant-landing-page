// ----------------------------------------------------
// Events Slideshow Controller
// ----------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Auto slide change every 5 seconds
let slideTimer = setInterval(function() { plusSlides(1); }, 5000);

function plusSlides(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex += n);
  slideTimer = setInterval(function() { plusSlides(1); }, 5000);
}

function currentSlide(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex = n);
  slideTimer = setInterval(function() { plusSlides(1); }, 5000);
}

function showSlides(n) {
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
  if(slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";  
  }
  if(dots[slideIndex-1]) {
    dots[slideIndex-1].className += " active";
  }
}

// ----------------------------------------------------
// Gallery Filtering
// ----------------------------------------------------
function filterGallery(category) {
  // Update active filter button
  const buttons = document.querySelectorAll('.gallery-filter-group .btn-filter');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked button
  event.currentTarget.classList.add('active');
  
  // Show/hide gallery items
  const items = document.querySelectorAll('.gallery-grid .gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// ----------------------------------------------------
// Lightbox Modal Functions
// ----------------------------------------------------
function openLightbox(imgSrc, title, desc) {
  const modal = document.getElementById("customLightbox");
  const img = document.getElementById("lightboxImg");
  const titleElem = document.getElementById("lightboxTitle");
  const descElem = document.getElementById("lightboxDesc");
  
  img.src = imgSrc;
  titleElem.textContent = title;
  descElem.textContent = desc;
  
  modal.style.display = "flex";
  // Add class to body to prevent background scrolling
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("customLightbox");
  modal.style.display = "none";
  // Restore scrolling
  document.body.style.overflow = "auto";
}

// Close lightbox on pressing 'Escape' key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

// ----------------------------------------------------
// Footer Suggestions Form Handler
// ----------------------------------------------------
function handleFooterSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  const message = event.target.querySelector('textarea').value;
  const subject = encodeURIComponent("Monica's YUMMY - Suggestion/Question");
  const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:rayapallymounika@gmail.com?subject=${subject}&body=${body}`;
  alert('Opening your email client to send the suggestion...');
  event.target.reset();
}

// ----------------------------------------------------
// Interactive Table Booking Handler
// ----------------------------------------------------
let tempSelectedTable = '';

function selectModalTable(element, tableName) {
  const nodes = document.querySelectorAll('.table-node');
  nodes.forEach(node => node.classList.remove('selected'));
  
  element.classList.add('selected');
  tempSelectedTable = tableName;
  
  document.getElementById('confirmTableSelectionBtn').removeAttribute('disabled');
}

function confirmModalTable() {
  if (tempSelectedTable) {
    document.getElementById('ftable').value = tempSelectedTable;
    $('#tableModal').modal('hide');
  }
}

$(document).ready(function() {
  $('#ground-floor-tab').on('click', function() {
    $(this).css('background', '');
    $('#first-floor-tab').css('background', '#666');
  });
  $('#first-floor-tab').on('click', function() {
    $(this).css('background', 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))');
    $('#ground-floor-tab').css('background', '#666');
  });
});

function handleBookingSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('fname').value;
  const phone = document.getElementById('fphone').value;
  const email = document.getElementById('femail').value;
  const guests = document.getElementById('fguests').value;
  const datetime = document.getElementById('fdatetime').value;
  const table = document.getElementById('ftable').value;
  
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const token = 'YM-' + randomNum;
  
  const subject = encodeURIComponent("Monica's YUMMY Dine Divine - Booking Confirmation");
  const body = encodeURIComponent(
    `Dear ${name},\n\n` +
    `Thank you for booking a table with us at Monica's YUMMY Dine Divine!\n\n` +
    `Here are your booking details:\n` +
    `---------------------------------------\n` +
    `Token Code: ${token}\n` +
    `Table Plan: ${table}\n` +
    `Guests: ${guests} Person(s)\n` +
    `Date & Time: ${datetime}\n` +
    `Contact Number: ${phone}\n` +
    `---------------------------------------\n\n` +
    `Please keep this token for offline recognition when you arrive.\n\n` +
    `Warm regards,\n` +
    `Monica's YUMMY Restaurant Team`
  );
  
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
  
  const queryParams = `?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&guests=${encodeURIComponent(guests)}&datetime=${encodeURIComponent(datetime)}&table=${encodeURIComponent(table)}&token=${encodeURIComponent(token)}`;
  
  window.location.href = mailtoUrl;
  
  alert(`Generating your Booking Token: ${token}.\n\nAn email draft confirmation will open in your email client. Click OK to view your booking receipt.`);
  
  setTimeout(function() {
    window.location.href = 'registration_successful.html' + queryParams;
  }, 1000);
}
