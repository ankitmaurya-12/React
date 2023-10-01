import React, {useState} from "react";
import PropTypes from 'prop-types'


export default function TextForm(props) {
    // const [text, setText] = useState("Enter the text . . .")
    const [text, setText] = useState("")
    
    // text = "New Text";     //Wrong way to change state
    // useText("New Text");     //Correct way to change state


    const handleUpClick =()=>{
        // console.log("Uppercase was Clicked" +text)
        let newtext = text.toUpperCase();
        // setText("You Have clicked on handleUpClick")
        setText(newtext)
    }

    const handleLowerClick =()=>{
        // console.log("Uppercase was Clicked" +text)
        let newtext = text.toLowerCase();
        // setText("You Have clicked on handleUpClick")
        setText(newtext)
    }
    const handleClearClick =()=>{
        setText("");
    }

    const handleOnChnage=(event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    return (
      <>
    <div>
        <h2>
        {props.heading}
        </h2>
      <div className="my-3">
        {/* <label htmlFor="myText" className="form-label">
        Exampe Text Area :
        </label> */}
        <textarea
          value={text}
          onChange={handleOnChnage}
          className="form-control"
          id="myText"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
        </button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
        Convert to Lowercase
        </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
        </button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    
    <div className="container my-3">
        <h2> Your Text summary</h2>
        <p><b> {text.split(" ").length}</b> Words & <b>{text.length}</b> Characters.</p>
        <p> <b>{0.008 * text.split(" ").length} </b> Minutes take to read.</p>
        <h3>Previews</h3>
        <p>{text}</p>
    </div>
    </>
   
  );
}

TextForm.PropTypes={
  heading : PropTypes.string.isRequired,
};

TextForm.defaultProps ={
  heading : "Ankit is Here.",
}
