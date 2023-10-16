function resetForm() {
  document.getElementById("surveyForm").reset();
}

function submitForm() {
  const form = document.getElementById("surveyForm");
  if (form.checkValidity()) {
    const popup = document.getElementById("popup");
    const popupResult = document.getElementById("popupResult");
    const formData = new FormData(form);
    popup.style.display = "block";

    let resultHTML = "<h2>Survey Form Results:</h2>";
    formData.forEach((value, key) => {
      resultHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    });

    popupResult.innerHTML = resultHTML;
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  resetForm();
}
