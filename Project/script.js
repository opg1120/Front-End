

// document.addEventListener("DOMContentLoaded", function() {
//     const codeElement = document.getElementById("typing-animation");
//     const text = codeElement.textContent.trim(); // Get the text content inside the <code> tag
//     const htmlTags = codeElement.innerHTML; // Preserve HTML tags

//    // Clear the content inside the <code> tag
  
//     // Array of texts to cycle through for the footer
//     const texts = ["2024", "The Project", "Year of", "IOT"];
//     let index = 0;
  
//     // Function to change the text in the footer
//     function changeText() {
//       // Get the footer element
//       const footerText = document.getElementById("footer-text");
  
//       // Set the text to the current index from the array
//       footerText.textContent = texts[index];
  
//       // Increment index and loop back to 0 if it exceeds the array length
//       index = (index + 1) % texts.length;
//     }
  
//     // Call the changeText function every 3 seconds for the footer text
//     setInterval(changeText, 3000);
  

   

  
  
//     // }

//     let typingIndex = 0;
//     const typingSpeed = 6; // Adjust typing speed (milliseconds)

//     function typeNextCharacter() {
//         const codeElement = document.getElementById("typing-animation");
//         // Append the next character to the typed text
//         codeElement.innerHTML = htmlTags.substring(0, typingIndex) + text.charAt(typingIndex);
        
//         typingIndex++;
//         // if (typingIndex <= text.length) {
//         //     setTimeout(typeNextCharacter, typingSpeed);}
//         // } else {



//         if (typingIndex <= text.length) {
//             setTimeout(typeNextCharacter, typingSpeed);
//         } else {
//             // Typing animation completed, restore the original HTML content
//             codeElement.innerHTML = htmlTags;
//         }
        
//         //     // Typing animation completed, restore the original HTML content
//         //     codeElement.innerHTML = htmlTags;
//         // }
//     }
   

//     typeNextCharacter();
  
   
//     const leftSection = document.querySelector(".left");
//     const rightSection = document.querySelector(".right");

//     // Set content for left and right sections
//     leftSection.innerHTML = leftContent;
//     rightSection.innerHTML = rightContent; 
//   });
  


document.addEventListener("DOMContentLoaded", function()
{
    const codeElement = document.getElementById("typing-animation");
    const text = codeElement.textContent.trim(); // Get the text content inside the <code> tag
    const htmlTags = codeElement.innerHTML; // Preserve HTML tags

    // Clear the content inside the <code> tag
  
    // Array of texts to cycle through for the footer
    const texts = ["2024", "The Project", "Year of", "IOT"];
    let index = 0;
  
    // Function to change the text in the footer
    function changeText() {
      // Get the footer element
      const footerText = document.getElementById("footer-text");
  
      // Set the text to the current index from the array
      footerText.textContent = texts[index];
  
      // Increment index and loop back to 0 if it exceeds the array length
      index = (index + 1) % texts.length;
    }
  
    // Call the changeText function every 3 seconds for the footer text
    setInterval(changeText, 3000);
  
    let typingIndex = 0;
    const typingSpeed = 6; // Adjust typing speed (milliseconds)

    function typeNextCharacter() {
        const codeElement = document.getElementById("typing-animation");
        // Append the next character to the typed text
        codeElement.innerHTML = htmlTags.substring(0, typingIndex) + text.charAt(typingIndex);
        
        typingIndex++;

        if (typingIndex <= text.length) {
            setTimeout(typeNextCharacter, typingSpeed);
        } else {
            // Typing animation completed, restore the original HTML content
            codeElement.innerHTML = htmlTags;
        }
    }
   
    typeNextCharacter();
  
     setInterval(function() {
        const highlightSpans = document.querySelectorAll(".highlight");
        const colors = ["red", "blue", "green","yellow","orange"]; // Add more colors as needed

        // Loop through each highlight span and change its color randomly
        highlightSpans.forEach(function(span) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            span.style.color = randomColor;
        });
    }, 2000);

    // const leftSection = document.querySelector(".left");
    // const rightSection = document.querySelector(".right");

    // Set content for left and right sections
    // leftSection.innerHTML = leftContent;
    // rightSection.innerHTML = rightContent; 


});

