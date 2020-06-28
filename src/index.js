/*
    **Setup** 
*/
//imports
import "./styles/main.scss";

//links
const screen = document.querySelector('#screen'); //parent to all
const storyText = document.querySelector('#storyText'); //story text
const opt1 = document.querySelector('#opt1'); //option 1 button
const opt2 = document.querySelector('#opt2'); //option 2 button
const reset = document.querySelector('#reset'); //option 2 button

//state of the game
let state;
//contains all the story lines you wish to pursue, add here to add more 'states' to the game
//state works like so
//Starts at 0, depending on what their first choice is, it will add a s1 or s2 indicationg story 1 or story 2
//every action there after adds either a 1 or 2 indicating the choices they have previously made
//so the states life cycle goes like this
// 0 => 0s1 => 0s12 => 0s122 => 0s1221 etc, until reset is pressed and it will revert back to 0.
const storyBook = {
    beginning: {
        story: "Opening screen to game",
        opt1: "Option 1",
        opt2: "Option 2",
        update: function(story, button1, button2) {
            state = "0";
            story.innerText = this.story;
            button1.innerText = this.opt1;
            button2.innerText = this.opt2;
        }
    },
    /*
    ***STORY 1***
    ***STORY 1***
    ***STORY 1***
    */
    "0s1": {
        story: "You are now in story 1 - This will indicate the start of story 1",
        opt1: "Option 1",
        opt2: "Option 2",
        update: function(story, button1, button2) {
            state += "s1";
            story.innerText = this.story;
            button1.innerText = this.opt1;
            button2.innerText = this.opt2;
            
        },
        
        
    },
    "0s11": {
        story: "Storyline 1: opt1 pressed",
        opt1: "Option 1",
        opt2: "Option 2",
        update: function(story, button1, button2) {
            state += 1;
            story.innerText = this.story;
            button1.innerText = this.opt1;
            button2.innerText = this.opt2;
            
        },
    },
    "0s12": {
        story: "Storyline 1: opt2 pressed",
        opt1: "Option 1",
        opt2: "Option 2",
        update: function(story, button1, button2) {
            state += 2;
            story.innerText = this.story;
            button1.innerText = this.opt1;
            button2.innerText = this.opt2;
            
        },
    },
    /*
    ***STORY 2***
    ***STORY 2***
    ***STORY 2***
    */
    "0s2": {
        story: "You are now in story 1 - This will indicate the start of story 1",
        opt1: "Option 1",
        opt2: "Option 2",
        update: function(story, button1, button2) {
            state += "s2";
            story.innerText = this.story;
            button1.innerText = this.opt1;
            button2.innerText = this.opt2;
            
        },
        
    },
    "0s21": {
        story: "Storyline 2: opt1 pressed",
        opt1: "Option 1",
        opt2: "Option 2",
        update: function(story, button1, button2) {
            state += 1;
            story.innerText = this.story;
            button1.innerText = this.opt1;
            button2.innerText = this.opt2;
        },
    },
    "0s22": {
        story: "Storyline 2: opt2 pressed",
        opt1: "Option 1",
        opt2: "Option 2",
        update: function(story, button1, button2) {
            state += 2;
            story.innerText = this.story;
            button1.innerText = this.opt1;
            button2.innerText = this.opt2;
        },
    }
}

//initiation

function initiation() {
    storyBook.beginning.update(storyText, opt1, opt2)
}

//listeners

opt1.addEventListener('click', (e) => checkState(state, e));
opt2.addEventListener('click', (e) => checkState(state, e));
reset.addEventListener('click', resetState)

//takes state as a string, the strings are references to the keys in storyBook and the event of the button that was clicked
function checkState(state, e) {
    //private variable 
    let _state = state;
    //private variable
    let _option;
    // console.log(e.target)
    // console.log(opt2)

    //check which state the game is currently in
    switch(_state) {
        case "0":
            //if option 1 was pressed
            if(e.target == opt1) {
                _option = 1;
                _changeStateStartingState(_option);
                //if option 2 was pressed
            } else if(e.target == opt2) {
                _option = 2;
                // console.log("func checkState, e.target == opt2 before changeStateStartingState")
                _changeStateStartingState(_option);
            } else {
                //in the unlikely event of not being able to check which button was pressed
                _noDetectButtonPress();
            }
            break;
        //originally listed each case scario, but all of it had the same code, so shortened it
        default:
            // pushing e.target to func so can check e.target matches opt1 or opt2 buttons
            // console.log("func checkState, case 0s1, before checkWhichOptChangeState")
            _checkWhichOptChangeState(e.target);
            // console.log("story 1");
            break;

    }
    
    //Change the first state of the game to s1 or s2
    function _changeStateStartingState(option) {
        if(option == 1) {
            storyBook["0s1"].update(storyText, opt1, opt2)
        } else if(option == 2) {
            storyBook["0s2"].update(storyText, opt1, opt2)
        } else {
            console.log("unable to find \"option\" variable value")
        }
        
    }
    //Check which option/button was pressed, then change state to the 'next' state by adding on the option to the existing state
    //For example, if the state is 0s1 and you've just pressed option 1, it will add on 1 to 0s1 to make 0s11
    function _checkWhichOptChangeState(target) {
        // console.log("checkWhichOptChangeState started")
        if(target == opt1) {
            _option = 1;
            // console.log("checkWhichOptChangeState opt 1 pressed before _changeState")
            _changeState(_state, _option);
        } else if(target == opt2) {
            _option = 2;
            // console.log("checkWhichOptChangeState opt 1 pressed before _changeState")
            _changeState(_state, _option);
            
        } else {
            console.log("unable to find which option was pressed");
        }
    }
    //Takes the state and option passed into func and calculates next state, using bracket notation to pass in the newly changed variable calculateState
    function _changeState(_state, _option) {
        const calculateState = _state + _option;
        // console.log("calculateState typeof: " + typeof calculateState)
        // console.log(`option ${_option} was pressed during state:  + ${_state}`);
        // console.log("calculateState: " + calculateState)
        try {
            storyBook[`${calculateState}`].update(storyText, opt1, opt2)
        } catch (error) {
            endOfGame();
        }
        
        
    }

    function _noDetectButtonPress() {
        console.log("unable to detect which button was pressed. Check IDs of buttons")
    }
    // let currentState = _state;
    // return currentState;
}

//Mainly for devs to reset rather than refresh
//however can be used by players to see other story lines
function resetState() {
    storyBook.beginning.update(storyText, opt1, opt2);
    console.clear();
    opt1.style.display = "block";
    opt2.style.display = "block";
}

function endOfGame() {
    console.group("Still in development");
    console.log('End of game')
    console.log('OR')
    console.log('You\'re too fast with your decision making, the developer hasn\'t decided it yet!');
    console.log("Perhaps reset the storyline and try another!");
    console.groupEnd();
    opt1.style.display = 'none';
    opt2.style.display = 'none';
    storyText.innerText = "You've reached the end of the storyline! Reset and explore another!";
}

//Themes -- Just for fun
function terminalColours() {
    screen.style.background = "radial-gradient(circle, rgba(15,155,15,1) 0%, rgba(0,0,0,1) 100%)";
}

initiation();