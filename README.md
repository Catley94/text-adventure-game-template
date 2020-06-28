# Text-adventure-game-template

A template that can be forked and used to create text adventure games.

Currently it is a two optioned game, meaning at any stage there are any two options/paths to take for each scenario, however it has the capability of more.

## How to add your own story line?

To use, everything is stored in the "storyBook" object, this holds the state of the game and what it should be displaying at any given point.

Before explaining how you can add your own storyline, let me explain how the state works.

The game is stored within a string, and will start off with "0", the first decision of the game is the most important one, this decides which story line you want to go down, 1 or 2.

Once the player has decided it will add either s1 or s2 to the state, making it 0s1 or 0s2, from there, every decision made by the player is added to the state, for example, option 1 or option 2 are respectively, 1 and 2. 

As another example to make sure you know what state is, 0s1212 is the same as:
State 0 => player chooses story 1 (option 1) => player chooses option 2 => player chooses option 1 => player chooses option 2.

Now it's up to you, all you need to do is look within the state at the relevant state objects and add your own or change an existing one!

Everything else is done for you, it will autoamatically find what state you're currently on and find the next state available.

## Future features?

I thought about adding different colour schemes to the game, at the moment the background is within src/main.scss under body {} and currently the theme is:
  background: rgb(0,212,255);
  background: radial-gradient(circle, rgba(32,58,67,1) 0%, rgba(15,32,39,1) 70%, rgba(15,32,39,1) 100%);
  
At the bottom of the code you will see a function called "terminalColours" this is an example on how I would change the theme in the future with a button however the button has not been added yet and in order to add it, CSS Grid will need to be updated also.
