import React, { useRef, useState, useEffect } from "react";
import "./ImageUpload.scss";
import Button from "./Button";

const ImageUpload = ({ setImagePath }) => {
  const [file, setFile] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const [previewUrl, setPreviewUrl] = useState();

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsUploaded(false);
    } else {
    }
  };

  const pickImageHandler = (e) => {
    e.preventDefault();
    filePickerRef.current.click();
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (isUploaded) return;

    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch("http://localhost:9000/images/", {
        method: "POST",

        body: formData,
      });
      const { path } = await response.json();
      console.log(path);
      setImagePath(path);
      setIsUploaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='upload-form'>
        <div className='preview-container'>
          {previewUrl && <img src={previewUrl} alt='Preview' />}
          {!previewUrl && <p className='message'>Please pick an image.</p>}
        </div>

        <input
          ref={filePickerRef}
          style={{ display: "none" }}
          type='file'
          accept='.jpg,.png,.jpeg'
          onChange={pickedHandler}
        />
        <div className='buttons'>
          <Button theme='white' onClick={pickImageHandler}>
            Choose an image
          </Button>
          {/* <input
            ref={nameInput}
            className='field'
            type='text'
            placeholder="input picture's name"
            onChange={changeHandler}
          /> */}
          <Button
            theme={isUploaded ? "disabled" : "blackWithBlackBorder"}
            type='submit'
            className='invert field btn'
            onClick={submitHandler}
          >
            Upload
          </Button>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
