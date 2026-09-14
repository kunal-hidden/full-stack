/* Dynamic events
Task
When a user interacts with your React app,
 this will trigger events. 
 You've learned how to handle user-generated events, 
 so now you can reinforce what you've learned by practicing event handling.
  To make this more fun, in this exercise,
   you'll be building a simple number-guessing game.

Steps
Step 1
This task’s starting point is the App component’s h1 element that reads: 
“Task: Add a button and handle a click event”.

3456789101112
function App() {
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
    </div>
  );
}

export default App;


Thus, as a first step in this task,
 you’ll need to add a button element, 
 with an opening and a closing button tag. 

Step 2
In between the opening and closing button tags,
 add the following text: Guess the number between 1 and 3. 

Step 3
Inside the opening button tag,
 add the onClick event-handling attribute,
  and pass it the following JSX expression: {handleClick}. 

Step 4
Above the return statement of the App component -
 but still inside the App function - add the handleClick function as you see below: 

123456
  function handleClick() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
Step 5
At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, 
then select New Terminal.Use the npm start command to start the development server.

If you encounter errors like File not found or Unexpected token, in the terminal, stop the server with Ctrl + C and restart it using npm start.

You can now view the App in your lab browser. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.


When your lab browser has launched, enter: http://localhost:3000 in the address bar to see the output.

Ensure the button and prompt are visible. If not, check the component code to confirm everything is rendered correctly.   

Click the button, Enter a number in the prompt dialog, See the generated number and your guess in the alert box. Close the alert and click the button again to play another round. 

Notes:

If you need to restart the lab with fresh files for any reason, first delete all the existing files from the lab environment. Then, click on the Help icon in the top-right corner and select the “Get latest version” option to reload the lab files.

To run this lab locally, you can download the lab files by clicking on the Lab Files icon in the top-right corner. Select all the required files, then click the Download button to save them to your system.

A complete reference solution is provided in the reading material to support your learning. If you face any challenges while working on the lab, you may consult it for guidance. However, it is highly recommended that you first attempt to solve the lab on your own, as this will strengthen your understanding of the concepts and enhance your problem-solving skills.

Tip  
If you’re having trouble with this lab, please review the "User events" video lesson item.  This video covers all of the basics of event handling that you need to solve this ungraded lab.  
 */
function GuessNumber() {
    function handleClick() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>  Guess the number between 1 and 3</button>
    </div>
  );
}

export default  GuessNumber;


