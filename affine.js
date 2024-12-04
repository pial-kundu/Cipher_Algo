  // Function to find modular multiplicative inverse of a number
  function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
        if ((a * x) % m == 1) {
            return x;
        }
    }
    return -1;
}

// Function to encrypt a message using affine cipher
function affineEncrypt(plainText, a, b) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const m = alphabet.length;
    let cipherText = '';

    // Ensure 'a' is coprime with m
    if (gcd(a, m) !== 1) {
        return 'Invalid key. "a" must be coprime with ' + m;
    }

    // Encrypt each letter in the plaintext
    for (let i = 0; i < plainText.length; i++) {
        let charIndex = alphabet.indexOf(plainText[i].toUpperCase());
        if (charIndex !== -1) {
            let encryptedIndex = (a * charIndex + b) % m;
            if (encryptedIndex < 0) {
                encryptedIndex += m;
            }
            cipherText += alphabet[encryptedIndex];
        } else {
            cipherText += plainText[i];
        }
    }
    return cipherText;
}

// Function to decrypt a message using affine cipher
function affineDecrypt(cipherText, a, b) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const m = alphabet.length;
    let plainText = '';

    // Ensure 'a' is coprime with m
    if (gcd(a, m) !== 1) {
        return 'Invalid key. "a" must be coprime with ' + m;
    }

    // Calculate the modular multiplicative inverse of 'a'
    const aInverse = modInverse(a, m);
    if (aInverse === -1) {
        return 'Invalid key. "a" does not have a multiplicative inverse modulo ' + m;
    }

    // Decrypt each letter in the ciphertext
    for (let i = 0; i < cipherText.length; i++) {
        let charIndex = alphabet.indexOf(cipherText[i].toUpperCase());
        if (charIndex !== -1) {
            let decryptedIndex = (aInverse * (charIndex - b)) % m;
            if (decryptedIndex < 0) {
                decryptedIndex += m;
            }
            plainText += alphabet[decryptedIndex];
        } else {
            plainText += cipherText[i];
        }
    }
    return plainText;
}

// Function to find greatest common divisor (GCD)
function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}