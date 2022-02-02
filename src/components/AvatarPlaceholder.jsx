import React from "react";
import photoPlaceholder from "../images/upload-photo.png";
import "./AvatarPlaceholder.scss";
const AvatarPlaceholder = () => {
  return (
    <div className='avatar-uploader'>
      <div className='inner-border'>
        <div className='ellipse'>
          <img src={photoPlaceholder} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AvatarPlaceholder;
