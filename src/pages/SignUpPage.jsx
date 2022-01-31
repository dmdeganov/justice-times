import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../utils/validation";
import { login } from "../slices/userSlice";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstnameErr, setFirstnameErr] = useState("");
  const [lastnameErr, setLastnameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const checkName = (e) => {
    const name = e.target.value;
    const field = e.target.name;
    const isValid = validateName(name);
    if (!isValid) {
      if (field === "firstname")
        setFirstnameErr("allowed only english letters and spaces");
      if (field === "lastname")
        setLastnameErr("allowed only english letters and spaces");
    } else {
      if (field === "firstname") setFirstnameErr("");
      if (field === "lastname") setLastnameErr("");
    }
  };
  const checkEmail = (e) => {
    const email = e.target.value;
    if (!email) {
      return setEmailErr("");
    }
    const isValid = validateEmail(email);
    if (!isValid) {
      setEmailErr("invalid email");
    } else {
      setEmailErr("");
    }
  };
  const checkPassword = (e) => {
    const password = e.target.value;
    if (!password) {
      return setPasswordErr("");
    }
    const errorMessage = validatePassword(password);
    console.log(errorMessage);

    if (errorMessage) {
      setPasswordErr(errorMessage);
    } else {
      setPasswordErr("");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const [
      { value: firstname },
      { value: lastname },
      { value: email },
      { value: password },
    ] = e.target;

    const existingUser = localStorage.getItem(email);
    if (existingUser) return setEmailErr("User with this email already exists");
    // Qwe123$%

    localStorage.setItem(
      email,
      JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      })
    );
    dispatch(login(email));
    navigate("/");

    // console.log(JSON.parse(localStorage.getItem(email)));
  };

  return (
    <Wrapper>
      <h1>Create your free account</h1>
      <form
        action=''
        className='signup-form'
        onSubmit={(e) => submitHandler(e)}
      >
        <div className={"field" + (firstnameErr ? " error" : "")}>
          <label htmlFor='firstname'>First name</label>
          <input
            type='text'
            name='firstname'
            className='input firstname'
            onChange={(e) => checkName(e)}
          />
          {firstnameErr && <p>{firstnameErr}</p>}
        </div>
        <div className={"field" + (lastnameErr ? " error" : "")}>
          <label htmlFor='lastname'>Last name</label>
          <input
            type='text'
            name='lastname'
            className='input lastname'
            onChange={(e) => checkName(e)}
          />
          {lastnameErr && <p>{lastnameErr}</p>}
        </div>
        <div className={"field" + (emailErr ? " error" : "")}>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            name='email'
            className='input email'
            onChange={(e) => checkEmail(e)}
          />
          {emailErr && <p>{emailErr}</p>}
        </div>
        <div className={"field" + (passwordErr ? " error" : "")}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            className='input password'
            onChange={(e) => checkPassword(e)}
          />
          {passwordErr && <p>{passwordErr}</p>}
        </div>
        <Button theme='black' type='submit' onClick={(e) => submitHandler(e)}>
          Create Account
        </Button>
      </form>
    </Wrapper>
  );
};

export default SignUpPage;
const Wrapper = styled.main`
  /* height: calc(100vh - 41.6rem); */
  h1 {
    font-size: 3.6rem;
    line-height: 5.6rem;
    font-family: var(--ff-secondary);
    text-align: center;
    margin-top: 8rem;
    margin-bottom: 4.8rem;
  }
  .signup-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rem;
    label {
      display: block;
      margin-bottom: 1.2rem;
      text-align: left;
      font-size: 1.4rem;
      /* font-weight: 400; */
    }
    input {
      padding: 0.5rem 1rem;
      width: 39.6rem;
      height: 4.7rem;
      border: 1px solid var(--clr-gray-dark);
      font-size: 1.6rem;
      font-family: var(--ff-primary);
      &:focus-visible {
        outline: 1px solid var(--clr-gray-dark);
      }
    }
    .field:not(:last-child) {
      margin-bottom: 2.4rem;
    }
    .field:last-of-type {
      margin-bottom: 4.8rem;
    }
    div.error > input {
      border: 1px solid #cf4949;
      &:focus-visible {
        outline: 1px solid #cf4949;
      }
    }
    div.error > p {
      color: #cf4949;
      font-size: 1.1rem;
      line-height: 1.4rem;
      margin-top: 4px;
      /* outline: 1px solid red; */
    }

    button {
      width: 39.6rem;
      height: 5.5rem;
      font-size: 1.5rem;
      margin-bottom: 11rem;
    }
    p {
      font-size: 1.4rem;
      font-weight: 400;
      span {
        font-weight: 700;
        font-size: 1.5rem;
        text-decoration: underline;
      }
    }
  }
`;
