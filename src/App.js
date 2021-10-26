import "./App.css";
import { useState } from "react";

import Markdown from "markdown-to-jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpandArrowsAlt,
  faExpandAlt,
} from "@fortawesome/free-solid-svg-icons";

import Highlight from "react-highlight";

function App() {
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);
  const [isEditorExpended, setIsEditorExpended] = useState(false);
  const [isPreviewerExpended, setIsPreviewerExpended] = useState(false);
  const [size, setSize] = useState("");
  const [size2, setSize2] = useState("");

  const typing = (e) => {
    setText(e.target.value);
  };

  function ki() {
    setIsEditorExpended(!isEditorExpended);
    setSize(isEditorExpended || "100vh");
  }
  function ki2() {
    setIsPreviewerExpended(!isPreviewerExpended);
    setSize2(isPreviewerExpended || "100vh");
  }

  return (
    <div className="app">
      <div className="desc">
        this freecodecamp challenge made by{" "}
        <a href="" className="ash">
          Ashraf Essaoudi{" "}
        </a>
        , check the project in{" "}
        <a href="" className="ash">
          github
        </a>
      </div>

      <div className="editorContainer" style={{ height: size }}>
        <div className="textAreaTop">
          <span className="title">Editor</span>
          <FontAwesomeIcon
            icon={isEditorExpended ? faExpandAlt : faExpandArrowsAlt}
            className="icon"
            onClick={() => ki()}
          />
        </div>
        <textarea
          name=""
          id=""
          cols="50"
          rows="20"
          value={text}
          onChange={(e) => typing(e)}
        ></textarea>
      </div>

      {/* ////////////////////////////////////////////////////////////////// */}

      <div className="previewContainer" style={{ height: size2 }}>
        <div className="textAreaTop">
          <span className="title">Previewer</span>
          <FontAwesomeIcon
            icon={isPreviewerExpended ? faExpandAlt : faExpandArrowsAlt}
            className="icon"
            onClick={() => ki2()}
          />
        </div>
        <div className="editor">
          <Highlight element="code">
            <Markdown>{text}</Markdown>
          </Highlight>
        </div>
      </div>
    </div>
  );
}

export default App;
