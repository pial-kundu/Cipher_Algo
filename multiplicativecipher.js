function encrypt() {
  var plaintext = document.getElementById("inputText").value.toUpperCase();
  var key = parseInt(document.getElementById("key").value);
  var ciphertext = "";
  
  if (!isCoprime(key, 26)) {
    document.getElementById("output").innerText = "Error: Key must be coprime with 26.";
    return;
  }
  
  for (var i = 0; i < plaintext.length; i++) {
    var charCode = plaintext.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {  // uppercase letters only
      ciphertext += String.fromCharCode(((charCode - 65) * key) % 26 + 65);
    } else {
      ciphertext += plaintext.charAt(i);
    }
  }
  
  document.getElementById("output").innerText = "Encrypted message: " + ciphertext;
}

function decrypt() {
  var ciphertext = document.getElementById("inputText").value.toUpperCase();
  var key = parseInt(document.getElementById("key").value);
  var plaintext = "";
  
  if (!isCoprime(key, 26)) {
    document.getElementById("output").innerText = "Error: Key must be coprime with 26.";
    return;
  }
  
  var inverseKey = getInverse(key, 26);
  
  for (var i = 0; i < ciphertext.length; i++) {
    var charCode = ciphertext.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {  // uppercase letters only
      plaintext += String.fromCharCode(((charCode - 65) * inverseKey) % 26 + 65);
    } else {
      plaintext += ciphertext.charAt(i);
    }
  }
  
  document.getElementById("output").innerText = "Decrypted message: " + plaintext;
}

function isCoprime(a, b) {
  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a === 1;
}

function getInverse(a, m) {
  for (var x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
}