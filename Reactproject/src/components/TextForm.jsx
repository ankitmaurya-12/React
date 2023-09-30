import React, {useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState("Enter the text . . .")
    
    // text = "New Text";     //Wrong way to change state
    // useText("New Text");     //Correct way to change state


    const handleUpClick =()=>{
        // console.log("Uppercase was Clicked" +text)
        let newtext = text.toUpperCase();
        // setText("You Have clicked on handleUpClick")
        setText(newtext)
    }

    const handleOnChnage=(event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }

    return (
    <div>
        <h1>
        {props.heading}
        </h1>
      <div className="mb-3">
        {/* <label htmlFor="myText" className="form-label">
        Exampe Text Area :
        </label> */}
        <textarea
          value={text}
          onChange={handleOnChnage}
          className="form-control"
          id="myText"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
        </button>
    </div>
   
  );
}
