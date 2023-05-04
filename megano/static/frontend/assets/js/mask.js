var phoneInput = document.querySelector("#phone-input");
var iti = window.intlTelInput(phoneInput, {
    initialCountry: "ru",
    preferredCountries: ["ru"],
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});

phoneInput.addEventListener("input", function() {
    var phoneNumber = iti.getNumber(intlTelInputUtils.numberFormat.E164);
    var formattedPhoneNumber = iti.formatNumber("+7 (___) ___-__-__");
    if (phoneNumber) {
        phoneInput.value = formattedPhoneNumber.slice(0, phoneNumber.length + 4);
    } else {
        phoneInput.value = formattedPhoneNumber;
    }
});

phoneInput.addEventListener("keypress", function(event) {
    if (phoneInput.value.length >= 10 && event.keyCode !== 8) {
        event.preventDefault();
    }
});
