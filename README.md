1. The script element
   - The script element, aka the JS Code - can be added in the head or right before the end of the body tag.
   - Best practice is to add the script element right before the end of the body tag.
   - Reason 1:
     - The browser parses the file from top to bottom.
     - If it encounters the JS code at the beginning (head section) -> browser will get busy parsing and executing the JS code
     - Leading to making the screen look blank for sometime before loading the webpage --> bad user experience.
   - Reason 2:
     - Almost always the script would have to talk to the html / css elements that are written before.
     - If the JS script is placed in the head, all of that code to be processed after HTML elements will be parsed before and lead to errors since the HTML elements were unparsed before.
     - Exceptions : when we need to use 3rd party code and that has to be placed in the head section.
    
2. Separation of Content
  - Inline JS Code : writing the JS code within the script tag, inside the html file.
  - Separation of Content: HTML is all about content, JS is all about behavior. 
    
  
