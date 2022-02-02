import React, { useState } from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { getCurrenUserData } from "../utils/selectorFns";
import "./Profile.scss";
import AvatarUpload from "../components/AvatarUpload";
import { editProfile } from "../slices/userSlice";
import { useDispatch } from "react-redux";
const Profile = () => {
  const {
    firstname: firstnameRedux,
    lastname: lastnameRedux,
    avatar,
    _id: id,
  } = useSelector(getCurrenUserData);
  const [imagePath, setImagePath] = useState(avatar);
  const [firstname, setFirstname] = useState(firstnameRedux);
  const [lastname, setLastname] = useState(lastnameRedux);
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
              placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptate iusto enim cumque reprehenderit sapiente iste. '
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
