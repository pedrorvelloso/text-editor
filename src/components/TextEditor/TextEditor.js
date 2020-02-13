import React, { useMemo, useState, useCallback } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";

import Leaf from "../Leaf";
import { Paragraph, HeadingOne, HeadingTwo, UnorderedList, NumberedList } from "../CodeMarkers";
import Toolbar from "../Toolbar";
import MarkButton from "../MarkButton";
import BlockButton from "../BlockButton";

import { toggleMark } from "../../utils";

import { TextEditorContainer } from "./styles";

const HOTKEYS = {
  "ctrl+b": "bold",
  "ctrl+i": "italic",
  "ctrl+u": "underline",
  "ctrl+`": "code"
};

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }]
    }
  ]);

  const renderElement = useCallback(
    props =>
      ({
        "heading-one": <HeadingOne {...props} />,
        "heading-two": <HeadingTwo {...props} />,
        "unordered-list": <UnorderedList {...props} />,
        "numbered-list": <NumberedList {...props} />,
        "list-item": <li {...props.attributes}>{props.children}</li>
      }[props.element.type] || <Paragraph {...props} />),
    []
  );

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <TextEditorContainer>
      <Slate value={value} onChange={value => setValue(value)} editor={editor}>
        <Toolbar>
          <MarkButton format="bold" />
          <MarkButton format="italic" />
          <MarkButton format="underline" />
          <MarkButton format="code" />
          <BlockButton format="heading-one" />
          <BlockButton format="heading-two" />
          <BlockButton format="unordered-list" />
          <BlockButton format="numbered-list" />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Insert text..."
          autoFocus
          spellCheck={false}
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Slate>
    </TextEditorContainer>
  );
};

export default TextEditor;
