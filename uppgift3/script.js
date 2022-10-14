//Samma sak som uppgift 2 men har password och ifelse-sats för password eftersom man inte kan jämföra med HTML
function validatePass() {
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    
 if (cpass != pass) {
    alert("Confirm the password by typing the same password as before!")
  }
}
