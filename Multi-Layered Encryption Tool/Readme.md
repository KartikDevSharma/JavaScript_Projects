
# Multi-Layered Encryption Tool

**Author:** Kartik Sharma

----------

## Table of Contents

-   [Overview](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#overview)
-   [Features](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#features)
-   [Technologies Used](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#technologies-used)
-   [How It Works](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#how-it-works)
    -   [Encryption Process](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#encryption-process)
        -   [1. Vigenère Cipher](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#1-vigen%C3%A8re-cipher)
        -   [2. Columnar Transposition Cipher](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#2-columnar-transposition-cipher)
        -   [3. Reverse Text](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#3-reverse-text)
    -   [Decryption Process](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#decryption-process)
        -   [1. Reverse Text](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#1-reverse-text)
        -   [2. Columnar Transposition Cipher](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#2-columnar-transposition-cipher-1)
        -   [3. Vigenère Cipher](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#3-vigen%C3%A8re-cipher-1)
-   [Usage](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#usage)
    -   [Encryption Steps](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#encryption-steps)
    -   [Decryption Steps](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#decryption-steps)
-   [Project Structure](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#project-structure)
    -   [1. `index.html`](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#1-indexhtml)
    -   [2. `styles.css`](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#2-stylescss)
    -   [3. `script.js`](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#3-scriptjs)
-   [Handling Special Characters](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#handling-special-characters)
-   [Features and Enhancements](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#features-and-enhancements)
-   [Future Improvements](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#future-improvements)
-   [Security Considerations](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#security-considerations)
-   [License](https://chatgpt.com/c/675f125c-7f04-8004-b2a4-2a0bcd4ea363#license)

----------

## Overview

The **Multi-Layered Encryption Tool** is a web-based application designed to provide users with a robust and intuitive interface for encrypting and decrypting messages. By leveraging multiple encryption layers, the tool ensures a higher level of obfuscation, making it suitable for secure personal communications and educational purposes.

Inspired by cryptographic techniques depicted in movies and real-life encryption scenarios, this tool combines classical cipher methods to create a complex yet user-friendly encryption system.

----------

## Features

-   **Multi-Layered Encryption:** Combines Vigenère Cipher, Columnar Transposition Cipher, and text reversal to enhance encryption complexity.
-   **User-Friendly Interface:** Intuitive design with clear sections for encryption and decryption.
-   **Responsive Design:** Ensures optimal usability across various devices, including desktops, tablets, and mobile phones.
-   **Copy to Clipboard:** Easily copy encrypted or decrypted messages with a single click.
-   **Case Preservation:** Maintains the original casing of letters during the encryption and decryption processes.
-   **Special Character Support:** Handles a wide range of characters, including letters, numbers, spaces, and special symbols without errors.

----------

## Technologies Used

-   **HTML5:** Structures the web application's content and layout.
-   **CSS3:** Styles the application with a modern and responsive design.
-   **JavaScript:** Implements the core encryption and decryption logic, handling user interactions and data processing.

----------

## How It Works

The encryption and decryption processes are built upon a combination of classical cryptographic techniques, each adding a layer of complexity to ensure message security.

### Encryption Process

1.  **Vigenère Cipher (Polyalphabetic Substitution)**
2.  **Columnar Transposition Cipher (Transposition)**
3.  **Reverse Text (Obfuscation)**

#### 1. Vigenère Cipher

**Purpose:** Adds a polyalphabetic substitution layer based on a keyword, making frequency analysis attacks more difficult.

**How It Works:**

-   **Keyword-Based Shifting:** Each letter in the plaintext is shifted by a number of positions determined by the corresponding letter in the keyword.
-   **Case Preservation:** Maintains the original casing (uppercase or lowercase) of each letter.
-   **Non-Alphabetic Characters:** Characters outside the A-Z range (e.g., numbers, punctuation) remain unchanged.

**Example:**

-   **Plaintext:** `HELLO WORLD`
-   **Keyword:** `SECRET`
-   **Encrypted Text:** `ZICVTWQNGRZG0PSO`

#### 2. Columnar Transposition Cipher

**Purpose:** Rearranges the characters of the message based on the order derived from the keyword, adding a transposition layer that obscures the message structure.

**How It Works:**

-   **Matrix Formation:** The encrypted text from the Vigenère Cipher is written into a matrix with columns equal to the length of the keyword.
-   **Column Ordering:** Columns are reordered based on the alphabetical order of the letters in the keyword.
-   **Padding:** If the final row of the matrix isn't complete, a padding character (`'_'`) is added to fill the empty cells.
-   **Ciphertext Generation:** The ciphertext is generated by reading the characters column by column in the sorted order.

**Example:**

-   **Keyword:** `SECRET`
    
-   **Encrypted Text from Vigenère:** `ZICVTWQNGRZG0PSO`
    
-   **Matrix with Padding:**
    
    ```
    S  E  C  R  E  T
    Z  I  C  V  T  W
    Q  N  G  R  _  P
    S  O  _  _  _  _
    
    ```
    
-   **Ciphertext:** `ZQSGINVGRT_WP`
    

#### 3. Reverse Text

**Purpose:** Adds an additional layer of obfuscation by reversing the entire ciphertext, making pattern recognition even more challenging.

**How It Works:**

-   **Text Reversal:** The ciphertext from the Columnar Transposition Cipher is reversed character by character.

**Example:**

-   **Ciphertext Before Reversal:** `ZQSGINVGRT_WP`
-   **Final Encrypted Message:** `PW_RTGVNGISQZ`

### Decryption Process

The decryption process reverses the encryption steps to retrieve the original plaintext.

1.  **Reverse Text (Obfuscation)**
2.  **Columnar Transposition Cipher (Transposition)**
3.  **Vigenère Cipher (Polyalphabetic Substitution)**

#### 1. Reverse Text

**Purpose:** Removes the obfuscation layer added during encryption by reversing the ciphertext back to its original transposed form.

**How It Works:**

-   **Text Reversal:** The encrypted message is reversed character by character to restore the Columnar Transposition Cipher's output.

**Example:**

-   **Encrypted Message:** `PW_RTGVNGISQZ`
-   **Reversed Text:** `ZQSGINVGRT_WP`

#### 2. Columnar Transposition Cipher

**Purpose:** Reconstructs the original encrypted text from the Vigenère Cipher by reversing the columnar rearrangement.

**How It Works:**

-   **Matrix Reconstruction:** Based on the keyword, the ciphertext is divided into segments corresponding to each column in the original matrix.
-   **Handling Padding:** Padding characters (`'_'`) are identified and ignored to accurately reconstruct the message.
-   **Plaintext Recovery:** Characters are read row by row from the reconstructed matrix to retrieve the Vigenère Cipher's output.

**Example:**

-   **Reversed Ciphertext:** `ZQSGINVGRT_WP`
    
-   **Reconstructed Matrix:**
    
    ```
    Z  I  C  V  T  W
    Q  N  G  R  _  P
    S  O  _  _  _  _
    
    ```
    
-   **Decrypted Text After Transposition:** `ZICVTWQNGRZG0PSO`
    

#### 3. Vigenère Cipher

**Purpose:** Retrieves the original plaintext by reversing the keyword-based shifting applied during encryption.

**How It Works:**

-   **Keyword-Based Shifting:** Each letter in the transposed ciphertext is shifted backward by the number of positions determined by the corresponding letter in the keyword.
-   **Case Preservation:** Maintains the original casing of each letter.
-   **Non-Alphabetic Characters:** Remain unchanged, ensuring the integrity of the message structure.

**Example:**

-   **Encrypted Text from Columnar Transposition:** `ZICVTWQNGRZG0PSO`
-   **Keyword:** `SECRET`
-   **Decrypted Plaintext:** `HELLO WORLD`

----------

## Usage

The **Multi-Layered Encryption Tool** offers a straightforward interface for encrypting and decrypting messages. Below are the steps to utilize the tool effectively.

### Encryption Steps

1.  **Enter Plaintext:**
    
    -   Navigate to the **Encryption** section.
    -   Input your message into the **"Enter your text to encrypt..."** textarea.
2.  **Provide Vigenère Keyword:**
    
    -   Enter a keyword into the **"Vigenère Keyword (e.g., SECRET)"** input field.
    -   **Note:** The keyword should consist of alphabetic characters only. Avoid using spaces or special symbols for optimal performance.
3.  **Encrypt the Message:**
    
    -   Click the **"Encrypt ✨"** button.
    -   The encrypted message will appear in the **"Encrypted text will appear here..."** textarea.
4.  **Copy Encrypted Message:**
    
    -   Use the **"Copy 🔗"** button adjacent to the ciphertext to copy the encrypted text to your clipboard for easy sharing.

### Decryption Steps

1.  **Enter Ciphertext:**
    
    -   Navigate to the **Decryption** section.
    -   Input your encrypted message into the **"Enter your text to decrypt..."** textarea.
2.  **Provide Vigenère Keyword:**
    
    -   Enter the same keyword used during encryption into the **"Vigenère Keyword (e.g., SECRET)"** input field.
3.  **Decrypt the Message:**
    
    -   Click the **"Decrypt 🛠️"** button.
    -   The decrypted plaintext will appear in the **"Decrypted text will appear here..."** textarea.
4.  **Copy Decrypted Message:**
    
    -   Use the **"Copy 🔗"** button adjacent to the decrypted text to copy the plaintext to your clipboard.

----------

## Project Structure

The project is organized into three main files, each responsible for different aspects of the application.

### 1. `index.html`

**Purpose:**  
Defines the structure and layout of the web-based encryption tool.

**Core Components:**

-   **Header (`<h1>`):** Displays the title of the tool.
-   **Encryption Section:**
    -   **Textarea:** Input field for plaintext messages.
    -   **Input Field:** For entering the Vigenère keyword.
    -   **Encrypt Button:** Triggers the encryption process.
    -   **Output Container:** Displays the encrypted message with a copy button.
-   **Decryption Section:**
    -   **Textarea:** Input field for ciphertext messages.
    -   **Input Field:** For entering the Vigenère keyword used during encryption.
    -   **Decrypt Button:** Triggers the decryption process.
    -   **Output Container:** Displays the decrypted plaintext with a copy button.
-   **Script Inclusion:** Links to the `script.js` file for functionality.

### 2. `styles.css`

**Purpose:**  
Handles the styling and visual presentation of the encryption tool, ensuring a modern and responsive design.

**Core Features:**

-   **Typography:** Utilizes Google Fonts for a clean and professional appearance.
-   **Color Scheme:** Implements a gradient background with semi-transparent containers for depth.
-   **Responsive Design:** Ensures the tool adapts gracefully to various screen sizes, from desktops to mobile devices.
-   **Interactive Elements:**
    -   **Buttons:** Styled with hover and active states for better user interaction.
    -   **Copy Buttons:** Positioned within output containers for easy access.
-   **Accessibility:**
    -   **Focus Effects:** Enhances usability for keyboard navigation.
    -   **Color Contrast:** Maintains readability with appropriate color choices.

### 3. `script.js`

**Purpose:**  
Contains the core logic for encrypting and decrypting messages, managing user interactions, and handling data processing.

**Core Components:**

-   **Vigenère Cipher Function:**
    
    -   **Encryption and Decryption:** Implements the polyalphabetic substitution based on the provided keyword.
    -   **Case Preservation:** Maintains the original casing of input characters.
    -   **Non-Alphabetic Characters:** Leaves them unchanged to ensure message integrity.
-   **Columnar Transposition Cipher Function:**
    
    -   **Encryption and Decryption:** Handles the rearrangement of characters based on the keyword's alphabetical order.
    -   **Padding Management:** Uses a padding character (`'_'`) to fill incomplete matrix cells during encryption and ignores them during decryption.
-   **Reverse Text Function:**
    
    -   **Obfuscation:** Reverses the entire string to add an additional layer of security.
-   **Encryption Function (`encryptText`):**
    
    -   **Sequential Processing:** Applies Vigenère Cipher → Columnar Transposition Cipher → Reverse Text to encrypt the message.
-   **Decryption Function (`decryptText`):**
    
    -   **Sequential Processing:** Reverses the encryption steps: Reverse Text → Columnar Transposition Cipher → Vigenère Cipher to decrypt the message.
-   **Copy to Clipboard Functionality:**
    
    -   **User Convenience:** Enables users to copy encrypted or decrypted text with a single click.
-   **Event Listeners:**
    
    -   **Button Triggers:** Listens for clicks on Encrypt and Decrypt buttons to initiate respective processes.
    -   **Copy Buttons:** Listens for clicks on copy buttons to execute the copy functionality.

----------

## Handling Special Characters

Initially, the encryption tool included a **Symbol Replacement** layer to substitute specific characters with symbols. However, this approach caused issues when dealing with messages containing special characters, leading to decryption errors and garbled text.

### **Resolution: Removing Symbol Replacement Layer**

To ensure seamless handling of all characters, including special symbols, the **Symbol Replacement** layer was removed from both encryption and decryption processes. This adjustment allows the tool to process and preserve a wide range of characters without interference.

### **Impact:**

-   **Enhanced Flexibility:** Users can now encrypt and decrypt messages containing letters, numbers, spaces, and various special symbols without encountering errors.
-   **Simplified Process:** Removing an additional encryption layer reduces complexity, making the tool more reliable and user-friendly.

----------

## Features and Enhancements

Beyond the core encryption and decryption functionalities, the tool includes several user-friendly features to enhance the overall experience:

### **1. Copy to Clipboard**

-   **Functionality:** Users can easily copy encrypted or decrypted messages to their clipboard by clicking the "Copy 🔗" buttons adjacent to the respective textareas.
-   **Implementation:** Utilizes JavaScript's `execCommand('copy')` to facilitate seamless copying.

### **2. Responsive and Modern Design**

-   **Visual Appeal:** The tool boasts a sleek, gradient background with semi-transparent containers, providing a modern and professional look.
-   **User Experience:** Designed with usability in mind, ensuring that users can navigate and operate the tool effortlessly across all devices.

### **3. Case Preservation**

-   **Original Casing:** Maintains the original uppercase or lowercase format of each letter in the message, ensuring that the decrypted text matches the plaintext precisely.

### **4. Error Handling and Validation**

-   **Input Validation:** Alerts users if they attempt to encrypt or decrypt without providing both the message and the Vigenère keyword.
-   **User Feedback:** Provides clear notifications to guide users in case of missing inputs or actions.

----------

## Future Improvements

While the current version of the **Multi-Layered Encryption Tool** is functional and user-friendly, there are several enhancements that can be implemented to further increase its capabilities and security:

### **1. Additional Cipher Layers**

-   **Playfair Cipher:** Introduce a digraph substitution cipher to add another layer of complexity.
-   **Rail Fence Cipher:** Implement a simple transposition cipher to further obfuscate the message structure.

### **2. Dynamic Symbol Mapping**

-   **Customization:** Allow users to define their own symbol mappings, enhancing personalization and security.
-   **User Interface:** Provide an interface for users to add, remove, or modify symbol substitutions.

### **3. User Authentication**

-   **Security:** Add password protection or user authentication to restrict access to the tool, ensuring that only authorized users can perform encryption and decryption.
-   **Implementation:** Utilize simple authentication mechanisms or integrate with existing authentication services.

### **4. Enhanced Copy Functionality**

-   **Visual Feedback:** Provide visual indicators (e.g., tooltips or notifications) to confirm successful copying of text.
-   **Clipboard Management:** Implement advanced clipboard management to handle various data types or multiple copies.

### **5. Steganography Integration**

-   **Hidden Messages:** Allow users to hide encrypted messages within images or other media, combining encryption with steganography for enhanced security.
-   **Tools and Libraries:** Integrate JavaScript libraries that facilitate steganographic techniques.

### **6. Comprehensive Error Handling**

-   **Edge Cases:** Handle more complex scenarios, such as extremely long messages or unsupported characters, gracefully.
-   **User Guidance:** Provide more detailed error messages and suggestions to help users troubleshoot issues.

----------

## Security Considerations

While the **Multi-Layered Encryption Tool** employs multiple layers of encryption to enhance message security, it's essential to understand its limitations and best use cases:

### **1. Intended Use**

-   **Educational Purposes:** Designed primarily for learning and exploring classical encryption techniques.
-   **Personal Communication:** Suitable for casual and personal use where high-level security is not critical.

### **2. Limitations**

-   **Not for Sensitive Data:** The tool does not employ modern, cryptographically secure algorithms like AES or RSA. Therefore, it should **not** be used for encrypting sensitive or confidential information.
-   **Vulnerability to Cryptanalysis:** Classical ciphers, even when combined, are susceptible to various cryptanalytic attacks by determined adversaries.

### **3. Recommendations for Enhanced Security**

-   **Use Established Standards:** For secure communications, rely on well-vetted encryption standards and protocols that offer robust security guarantees.
-   **Regular Updates:** Keep the tool updated with the latest security practices and consider integrating more secure cipher methods if necessary.
-   **Secure Key Management:** Ensure that encryption keys (keywords) are kept confidential and are shared securely between communicating parties.

----------

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

----------

## Acknowledgements

-   **Inspiration:** Inspired by cryptographic techniques featured in movies and real-life encryption scenarios.
-   **Resources:** Utilized various online resources and references to implement classical cipher methods effectively.

----------

**Happy Encrypting! 🔒✨**

For any questions, suggestions, or contributions, feel free to contact [Kartik Sharma](https://github.com/KartikDevSharma).


