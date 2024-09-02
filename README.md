Refer video : https://youtu.be/W6NZfCO5SIk?si=u5_48LvS633fvpUs
<br>
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
    
3. Node is a program that includes google's V8 JS engine. It's a runtime environment for executing JS code. 
   Example: <br>
   Run the JS file on cmd and it'll produce the output in cmd. <br>
   Syntax : `node <js_filename>`
  
4. Variables : used to store data temporarily (in Programming) <br>
  Previously in the old days before ES6, we use the VAR keyword to declare a variable. But there are issues with VAR keyword. <br>
  Best practice is to use LET (as of now). <br>

5. Constants: Value once stored, cannot be changed. If reassignment is not allowed / not needed --> use `const`. Otherwise, use `let`.

6. Types : types of values that can be assigned to the variables.
  - Primitive types / Value types: Strings, Number, Boolean, Undefined, NULL
  - Reference Types : Objects, Arrays, Function
      - Objects : multiple related variables can be grouped as an object. Makes the code cleaner; Dpt and Bracket notation - Dot is used by convention. If property selected at runtime by the user, we go for Bracket notation. 
      - Functions : a set of statements that performs a task or calculates a value. No semicolon for the function declaration. Parameter : variable at the time of declaration; Argment : Value passed during function call.
      - <p style="color:red;">Template literals can be used to clean up the code</p>

7. Dynamic Typing : One thing that separates JS from other programming types is that JS is a dynamic language. <br>
   Types of Languages: <br>
   - Static (Statically-typed): When a variable is declared, the type of the variable is fixed and it can't be changed. 
   - Dynamic (Dynamically-typed) : When a variable is declared, its type can be changed during run-time.

8. Fun fact, in JS all numeric types come under 'number'. So, 30 is a number; 12.20 is also a number.

9. "undefined" is also a type, but its also a value.