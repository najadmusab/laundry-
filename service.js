let currentService = "";

function openForm(service) {
    currentService = service;
    document.getElementById("selectedService").innerText = "Selected: " + service;
    document.getElementById("orderModal").style.display = "flex";
}

function closeForm() {
    document.getElementById("orderModal").style.display = "none";
}

document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let phone = document.getElementById("phone").value;
    let notes = document.getElementById("notes").value;

    let message =
`📌 *New Laundry Order*
-----------------------------------
👤 Name: ${name}
📍 Location: ${location}
📞 Phone: ${phone}
🧼 Service: ${currentService}
📝 Notes: ${notes}
-----------------------------------
RoyalWashing`;

    let whatsapp = "https://wa.me/9526226011?text=" + encodeURIComponent(message);

    window.open(whatsapp, "_blank");

    closeForm();
});
