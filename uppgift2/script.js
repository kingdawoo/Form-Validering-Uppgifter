//Tar värden från HTML form som användaren inmatar
function validateForm() {
      let user = document.getElementById('user').value;
      let pass = document.getElementById('pass').value;
      let cpass = document.getElementById('cpass').value;
      let mail = document.getElementById('mail').value;
      let check = document.getElementById('check').checked;

    //Värden går igenom ifelse-satsen för att se om vilkoren stämmer
    if (user == "" || pass == "" || cpass == "" || mail == "") {
      alert("Fill in all the blanks!");
    } else if (pass.length < 6) {
      alert("Password must be more than 6 letters and/or numbers!")
    } else if (cpass != pass) {
      alert("Confirm the password by typing the same password as before!")
    } else if (check == false) {
      alert("You must agree with the terms and services to continue!")
    } else if (!mail.includes("@")) {
      alert("Incorrect email!")
    //Om allt är rätt skickas användaren till en ny HTML sida där de tackas
    //för registrering
    } else {
      document.getElementById('myform').action = "complete.html";
    }
    
    //Gör att funktionen stoppar
    return false;
}

