function caesarCipher(text, shift, decrypt = false) {
    const shifted = shift % 26; // Ensure shift stays within alphabet range (0-25)
    const adjustment = decrypt ? 26 + shifted : shifted; // Adjust for decryption
  
    return text.replace(/\w/g, (char) => {
      const charCode = char.charCodeAt();
      const baseCode = charCode >= 65 && charCode <= 90 ? 65 : 97; // Base code for uppercase (A) or lowercase (a)
  
      // Handle wrapping around the alphabet
      const newCharCode = ((charCode - baseCode + adjustment) % 26) + baseCode;
  
      return String.fromCharCode(newCharCode);
    });
  }
  