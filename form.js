
document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    
    const name = document.getElementById("fullname").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    var tiffinCount = document.getElementById("tiffinCount").value;

    // Randomly select a vendor (as an example of form response)
    const randomVendor = vendors[Math.floor(Math.random() * vendors.length)];

    
    document.getElementById("vendorDetails").innerHTML = `
        <p>Thank you, ${name}!</p>
        <p>Your delivery vendor is: ${randomVendor.name}</p>
        <p>Total Tiffins is: ${tiffinCount}
        <p>Contact: ${randomVendor.contact}</p>
        <p>Vendor ID: ${randomVendor.id}</p>
    `;
  });
