import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import Button from "../components/Button";
import { addArticle } from "../slices/articleSlice";
import ImageUpload from "../components/ImageUpload";
import Message from "../components/Message";
import { showMessage } from "../components/Message";
import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddArticle.scss";

export default function AddArticle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authorId = useSelector((state) => state.users.currentUserId);
  const [imagePath, setImagePath] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [message, setMessage] = useState({
    active: false,
    status: "",
    content: "",
  });

  const onEditorStateChange = (editorState) => setEditorState(editorState);

  const publishArticle = (e) => {
    e.preventDefault();

    const [{ value: title }, { value: category }] = e.target;

    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (!imagePath || !title || !category || !text) {
      return showMessage("warning", "Please fill all inputs", setMessage);
    }
    dispatch(
      addArticle({
        title,
        category,
        text,
        authorId,
        imagePath,
      })
    );
    return showMessage(
      "success",
      "Article successfully added",
      setMessage,
      () => navigate("/my_articles")
    );
  };

  return (
    <main>
      {message.active && <Message {...message} />}
      <h1>Add article</h1>
      <ImageUpload setImagePath={setImagePath} />
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
