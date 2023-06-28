function myFunction() {
    document.getElementById("navbarNav").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.navbar-toggler')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 
  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });


  var coll = document.getElementsByClassName("button-40");
  var content = document.getElementsByClassName("content1");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        // Set the initial height to 0
        content.style.maxHeight = "0";
        // Animate the transition to the full height
        setTimeout(function() {
          content.style.maxHeight = content.scrollHeight + "px";
        }, 10);
      }
    });
  }

  var buttons = document.querySelectorAll(".col-md-4");

  // Function to update the form based on the clicked button
  function updateForm(event) {
    var clickedButton = event.currentTarget;
    var cardFooter = clickedButton.querySelector(".card-footer");
    var pText = cardFooter.querySelector("p").textContent;
  
    // Update the form elements with the clicked button's data
    document.getElementById("brand").textContent = pText;
  }
  
  // Attach click event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", updateForm);
  });
  
  // Get the first modal
  var modal = document.getElementById("myModal3");
  
  // Get the second modal
  var secondModal = document.getElementById("modal2");
  
  // When the user clicks the button, open the first modal
  buttons.forEach(function (button) {
    button.onclick = function () {
      modal.style.display = "block";
    };
  });
  
  // When the user clicks anywhere outside of the modals, close them
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == secondModal) {
      secondModal.style.display = "none";
    }
  };
  
  // When the user clicks the submit button in the first modal
  var submitButton = document.querySelector("#myModal3 button[type='submit']");
  submitButton.onclick = function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Perform form validation here
    // ...
  
    // If the form is valid, show the second modal
    secondModal.style.display = "block";
    modal.style.display = "none";
  };

  // Get the username from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Find the login span element
const loginSpan = document.getElementById('login');

// Update the login span with the username
if (username) {
    loginSpan.textContent = 'Welcome, ' + username;
}