import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function NewBlog() {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Public
          </span>
          <br />
          <span>
            <b>Visibility: </b>Public
          </span>
          <br />
          <input
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
          />
          <label htmlFor="file" className="file">
            Upload Image
          </label>
          <br />
          <div className="buttons">
            <button className="bttn">Save as a Draft</button>
            <button className="bttn">Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="technology" id="technology" />
          <label htmlFor="technology">Technology</label>
          <input type="radio" name="cat" value="science" id="science" />
          <label htmlFor="science">Science</label>
          <input
            type="radio"
            name="cat"
            value="architecture"
            id="architecture"
          />
          <label htmlFor="architecture">Architecture</label>
          <input type="radio" name="cat" value="food" id="food" />
          <label htmlFor="food">Food</label>
          <input type="radio" name="cat" value="other" id="other" />
          <label htmlFor="other">Others</label>
        </div>
      </div>
    </div>
  );
}

export default NewBlog;
