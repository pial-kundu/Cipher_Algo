function vigenereCipher(text, key, mode) {
    // Uppercase the text for easier handling
    text = text.toUpperCase();
    key = key.toUpperCase();

    let encryptedText = "";
    let decryptedText = "";

    // Loop through each character in the text
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);

      // Check if character is a letter
      if (charCode >= 65 && charCode <= 90) {
        let shift = key.charCodeAt(i % key.length) - 65; // Get shift value from key

        if (mode === "ENCRYPT") {
          // Encrypt: shift letter by key value
          charCode = (charCode - 65 + shift) % 26 + 65;
        } else if (mode === "DECRYPT") {
          // Decrypt: shift letter back by key value
          charCode = (charCode - 65 - shift + 26) % 26 + 65;
        }
      }

      encryptedText += String.fromCharCode(charCode);
      decryptedText += String.fromCharCode(charCode);
    }

    return mode === "ENCRYPT" ? encryptedText : decryptedText;
  }

  function encrypt() {
    let message = document.getElementById("message").value;
    let key = document.getElementById("key").value;
    let encryptedMessage = vigenereCipher(message, key, "ENCRYPT");
    document.getElementById("output").value = encryptedMessage;
  }

  function decrypt() {
    let message = document.getElementById("message").value;
    let key = document.getElementById("key").value;
    let decryptedMessage = vigenereCipher(message, key, "DECRYPT");
    document.getElementById("output").value = decryptedMessage;
  }