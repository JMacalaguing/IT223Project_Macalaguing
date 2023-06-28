function setupModal(firstModalId, secondModalId, submitBtnId) {
  // Get the modal elements
  var firstModal = document.getElementById(firstModalId);
  var secondModal = document.getElementById(secondModalId);

  // Get the button elements
  var submitBtn = document.getElementById(submitBtnId);

  // Open the second modal and close the first modal on submit button click
  submitBtn.onclick = function () {
    $("#"+firstModalId).modal("hide");
    secondModal.style.display = "block";
    console.log("modalId: "+firstModalId);
  };

  // Close the second modal when the close button is clicked
  var closeBtn = document.querySelector("#" + secondModalId + " .close");
  closeBtn.onclick = function () {
    secondModal.style.display = "none";
  };

  // Close the second modal when the user clicks outside the modal
  window.onclick = function (event) {
    if (event.target == secondModal) {
      secondModal.style.display = "none";
      console.log("secondmodalId: "+secondModalId);
    }
  };
}

// Set up modal 1
setupModal("myModal", "secondModal3", "submitBtn");

// Set up modal 2
setupModal("myModal2", "secondModal3", "submitBtn2");

// Set up modal 3
setupModal("myModal3", "secondModal3", "submitBtn3");
