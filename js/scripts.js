$(document).ready(function() {
  $("#contact-form").submit(function(event) {
    event.preventDefault();
    const fname = $("#fname-input").val();
    const lname = $("#lname-input").val();
    const address = $("#address-input").val();
    const city = $("#city-input").val();
    const state = $("#state-input").val();
    const phoneNumber = $("#telephone-input").val();

    const newCard = `
    <div class="contact-card card-hidden container"> 
      <h3>Name: ${fname + " " + lname}</h3>
      <p>Address: ${address}</p>
      <p>City: ${city}</p>
      <p>State: ${state}</p>
      <p>Phone #: ${phoneNumber}</p>
    </div>`;

    $(".contact-display").append(newCard);

    $(".contact-display .contact-card").last().click(function() {
      $("p", this).slideToggle();
    });
  });
});