import React from "react";
import './write.css'
import write from './5.jpg'

const Write = () =>(
    <div className="write">
        <img className="write-img" src={write} alt='publish'></img>
        <form className="writeForm">
            <div className="writeForm-group">
                <label htmlFor="fileInput">
                <i className=" write-icon fa-solid fa-plus"></i>
                </label>
                <input type='file' id='fileInput' style={{display:'none'}}></input>
                <input type='text' placeholder='Title' className='write-input' autoFocus={true}></input>
            </div>
            <div className="writeForm-group">
                <textarea placeholder="Tell Your Story...."
                type='text'
                className="write-input write-text"
                ></textarea>
            </div>
            <button type="submit" className="submit">publish</button>
        </form>
    </div>
)
export default Write