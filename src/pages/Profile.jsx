import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import AvatarUpload from "../components/AvatarUpload";
import { getCurrenUserData } from "../utils/selectorFns";
import "./Profile.scss";
import { editProfile } from "../slices/userSlice";
const Profile = () => {
  const {
    firstname: firstnameRedux,
    lastname: lastnameRedux,
    avatar,
    _id: id,
    descriptionRedux = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem recusandae reiciendis quas non necessitatibus esse blanditiis iure soluta quidem quam doloremque eaque molestiae rem nesciunt, veritatis dicta aut! Optio, veniam",
  } = useSelector(getCurrenUserData);
  const [imagePath, setImagePath] = useState(avatar);
  const [firstname, setFirstname] = useState(firstnameRedux);
  const [lastname, setLastname] = useState(lastnameRedux);
  const [description, setDescription] = useState(descriptionRedux);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editProfile({ id, firstname, lastname, avatar: imagePath }));
  };

  return (
    <main>
      <h1>Profile</h1>
      <form className='profile'>
        <AvatarUpload setImagePath={setImagePath} avatar={imagePath} />

        <div className='details'>
          <div className='name'>
            <div className='firstname'>
              <label htmlFor=''>First name</label>
              <input
                type='text'
                name='firstname'
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
            <div className='lastname'>
              <label htmlFor=''>Last name</label>
              <input
                type='text'
                name='lastname'
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className='description'>
            <label htmlFor=''>Description</label>
            <textarea
              name='description'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button
            theme='black'
            width='16.4rem'
            type='submit'
            onClick={submitHandler}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
