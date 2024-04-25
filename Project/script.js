



document.addEventListener("DOMContentLoaded", function()
{
    const codeElement = document.getElementById("typing-animation");
    const text = codeElement.textContent.trim(); // Get the text content inside the <code> tag
    const htmlTags = codeElement.innerHTML; // Preserve HTML tags

    //
  
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

    
});

