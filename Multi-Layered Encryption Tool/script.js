// script.js

// Vigenère Cipher Implementation
function vigenereCipher(text, keyword, encrypt = true) {
    let result = '';
    keyword = keyword.toUpperCase();
    let keywordIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const upperChar = char.toUpperCase();

        if (upperChar >= 'A' && upperChar <= 'Z') {
            const textCode = upperChar.charCodeAt(0) - 65;
            const keyCode = keyword[keywordIndex % keyword.length].charCodeAt(0) - 65;
            let cipherCode;

            if (encrypt) {
                cipherCode = (textCode + keyCode) % 26;
            } else {
                cipherCode = (textCode - keyCode + 26) % 26;
            }

            // Preserve the original case
            const encryptedChar = String.fromCharCode(cipherCode + 65);
            result += (char === upperChar) ? encryptedChar : encryptedChar.toLowerCase();
            keywordIndex++;
        } else {
            result += char;
        }
    }

    return result;
}

// Columnar Transposition Cipher Implementation
function columnarTransposition(text, keyword, encrypt = true) {
    const numColumns = keyword.length;
    const numRows = Math.ceil(text.length / numColumns);
    const matrix = [];

    // Generate the order of columns based on the keyword
    const order = Array.from(keyword).map((char, index) => ({ char: char, index: index }))
                                 .sort((a, b) => a.char.localeCompare(b.char))
                                 .map(item => item.index);

    if (encrypt) {
        // Fill the matrix row by row
        for (let r = 0; r < numRows; r++) {
            matrix[r] = [];
            for (let c = 0; c < numColumns; c++) {
                const char = text[r * numColumns + c] || '_'; // Use '_' as padding character
                matrix[r][c] = char;
            }
        }

        // Read the matrix column by column based on sorted order
        let result = '';
        for (let i = 0; i < order.length; i++) {
            const col = order[i];
            for (let r = 0; r < numRows; r++) {
                result += matrix[r][col];
            }
        }

        return result;
    } else {
        // Determine number of filled cells in each column
        const totalChars = text.length;
        const fullColumns = totalChars % numColumns;
        const columnsWithExtra = fullColumns === 0 ? numColumns : fullColumns;

        // Calculate the number of characters per column
        const colLengths = new Array(numColumns).fill(numRows);
        if (fullColumns !== 0) {
            for (let i = fullColumns; i < numColumns; i++) {
                colLengths[order[i]] = numRows - 1;
            }
        }

        // Split the ciphertext into segments for each column
        const columns = [];
        let pointer = 0;
        for (let i = 0; i < order.length; i++) {
            const col = order[i];
            const len = colLengths[col];
            columns[col] = text.substring(pointer, pointer + len);
            pointer += len;
        }

        // Reconstruct the matrix row by row
        let result = '';
        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numColumns; c++) {
                const char = columns[c][r] || '';
                if (char !== '_') { // Ignore padding characters
                    result += char;
                }
            }
        }

        return result;
    }
}

// Reverse Text
function reverseText(text) {
    return text.split('').reverse().join('');
}

// Encryption Function
function encryptText(plaintext, vigenereKey) {
    // Step 1: Vigenère Cipher
    const vigenereEncrypted = vigenereCipher(plaintext, vigenereKey, true);

    // Step 2: Columnar Transposition Cipher
    const transposed = columnarTransposition(vigenereEncrypted, vigenereKey, true);

    // Step 3: Reverse Text
    const reversed = reverseText(transposed);

    return reversed;
}

// Decryption Function
function decryptText(ciphertext, vigenereKey) {
    // Step 1: Reverse Text
    const unreversed = reverseText(ciphertext);

    // Step 2: Columnar Transposition Cipher
    const transposed = columnarTransposition(unreversed, vigenereKey, false);

    // Step 3: Vigenère Cipher
    const vigenereDecrypted = vigenereCipher(transposed, vigenereKey, false);

    return vigenereDecrypted;
}

// Copy to Clipboard Function
function copyToClipboard(targetId) {
    const textarea = document.getElementById(targetId);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('Copied to clipboard!');
        } else {
            alert('Failed to copy.');
        }
    } catch (err) {
        alert('Error copying to clipboard.');
    }

    window.getSelection().removeAllRanges(); // Deselect text
}

// Event Listeners
document.getElementById('encrypt-btn').addEventListener('click', () => {
    const plaintext = document.getElementById('plaintext').value;
    const vigenereKey = document.getElementById('vigenere-key').value;

    if (!plaintext || !vigenereKey) {
        alert('Please enter both text and Vigenère keyword for encryption.');
        return;
    }

    const encrypted = encryptText(plaintext, vigenereKey);
    document.getElementById('ciphertext').value = encrypted;
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const ciphertext = document.getElementById('ciphertext-decrypt').value;
    const vigenereKey = document.getElementById('vigenere-key-decrypt').value;

    if (!ciphertext || !vigenereKey) {
        alert('Please enter both text and Vigenère keyword for decryption.');
        return;
    }

    const decrypted = decryptText(ciphertext, vigenereKey);
    document.getElementById('decrypted-text').value = decrypted;
});

// Add event listeners to copy buttons
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        copyToClipboard(targetId);
    });
});
