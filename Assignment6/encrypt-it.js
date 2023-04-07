(function() {
    "use strict";
  
    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    window.addEventListener("load", init);
    /**
     * This function retrieves the "Encrypt-it" button and adds a button listener.
     */
    function init() {
      // Note: In this function, we usually want to set up our event handlers
      // for UI elements on the page.
        const button = document.querySelector('button');
        button.addEventListener('click', handleClick);
    }
  
    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).
    function handleClick() {
        const textArea = document.getElementById('input-text');
        const text = textArea.value;
        const result = document.getElementById('result');
        result.innerHTML = shiftCipher(text);
    }

    /**
     * This function shifts any text one character to the left.
     */
    function shiftCipher(text) {
        console.log(text);
        text = text.toLowerCase();
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] < 'a' || text[i] > 'z') {
            result += text[i];
          } else if (text[i] == 'z') {
            result += 'a';
          } else { // letter is between 'a' and 'y'
            let letter = text.charCodeAt(i);
            let resultLetter = String.fromCharCode(letter + 1);
            result += resultLetter;
          }
        }
        return result;
    }
    
  })();