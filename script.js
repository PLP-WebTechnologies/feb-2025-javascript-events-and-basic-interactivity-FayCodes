// Event Handling

// Button Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Time to get moving! Start your workout and crush your fitness goals! 💪");
  });
  
  // Hover Effect
  document.getElementById("hoverDiv").addEventListener("mouseover", () => {
    document.getElementById("hoverDiv").style.backgroundColor = "lightcoral";
  });
  document.getElementById("hoverDiv").addEventListener("mouseout", () => {
    document.getElementById("hoverDiv").style.backgroundColor = "lightblue";
  });
  
  // Keypress Detection
  document.getElementById("keypressInput").addEventListener("keyup", (event) => {
    console.log(`Looking for exercises related to: ${event.key}`);
  });
  
  // Secret Action (Double-click or Long Press)
  let pressTimer;
  document.getElementById("secretBtn").addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
      alert("Long Press detected! Here's a surprise tip: Hydrate well before your workout!");
    }, 1000); // 1-second long press
  });
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Double-click detected! Here's a double tip: Stretch before and after your workout!");
  });
  document.getElementById("secretBtn").addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
  });
  
  // Interactive Elements
  
  // Button that changes text and color
  document.getElementById("colorChangeBtn").addEventListener("click", () => {
    document.getElementById("colorChangeBtn").style.backgroundColor = "lightpink";
    document.getElementById("colorChangeBtn").textContent = "I was clicked! Now, keep going!";
  });
  
  // Slideshow
  let images = [
    "https://images.pexels.com/photos/14591593/pexels-photo-14591593.jpeg?auto=compress&cs=tinysrgb&w=600&",
    "https://images.pexels.com/photos/4944973/pexels-photo-4944973.jpeg?auto=compress&cs=tinysrgb&w=600&",
    "https://images.pexels.com/photos/1886487/pexels-photo-1886487.jpeg?auto=compress&cs=tinysrgb&w=600&",
  ];
  let currentImageIndex = 0;
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("image").src = images[currentImageIndex];
  });
  
  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabContents.forEach(content => content.style.display = "none");
      document.getElementById(tab.dataset.content).style.display = "block";
    });
  });
  
  // Form Validation
  
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Required fields
    if (!username || !email || !password) {
      alert("All fields are required to join the fitness community!");
      return;
    }
  
    // Email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Oops! Invalid email format. Please try again.");
      return;
    }
  
    // Password rules (min 8 characters)
    if (password.length < 8) {
      alert("Password must be at least 8 characters long. Stronger passwords = better security!");
      return;
    }
  
    alert("Welcome to the Fitness Community! Let's get stronger together! 💪");
  });
  
  