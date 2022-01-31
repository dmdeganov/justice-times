import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddArticle.scss";
import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../slices/articleSlice";

export default function TextEditor() {
  const dispatch = useDispatch();
  const authorId = useSelector((state) => state.users.currentUserId);
  const { firstname, lastname } = useSelector((state) =>
    state.users.users.find((user) => user._id === authorId)
  );

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => setEditorState(editorState);

  const publishArticle = (e) => {
    e.preventDefault();

    const [{ value: title }, { value: category }] = e.target;
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    dispatch(
      addArticle({
        title,
        category,
        text,
        authorId,
        author: `${firstname} ${lastname}`,
      })
    );
    console.log(title, category, text);
  };

  return (
    <main>
      <h1>Add article</h1>

      <form onSubmit={publishArticle}>
        <input
          type='text'
          placeholder='Enter a title'
          className='title-input'
        />
        <input
          type='text'
          placeholder='Enter the category name'
          className='category-input'
        />
        <Editor
          editorState={editorState}
          wrapperClassName='wrapper'
          editorClassName='editor'
          onEditorStateChange={onEditorStateChange}
        />
        <Button theme='black' width='18.8rem' type='submit'>
          Publish an article
        </Button>
      </form>
    </main>
  );
}
