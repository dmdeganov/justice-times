import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import { login } from "../slices/userSlice";
import { getUsers } from "../utils/selectorFns";

const LoginPage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    const [{ value: email }, { value: password }] = e.target;
    const existingUser = users.find((user) => user.email === email);

    if (!existingUser) {
      return setEmailErr("User with this email doesn't exists");
    }
    if (existingUser.password !== password) {
      return setPasswordErr("Wrong password");
    }
    dispatch(login({ email, password }));
    navigate("/");
  };

  return (
    <Wrapper>
      <h1>Log in to your account</h1>
      <form
        action=''
        className='login-form'
        onSubmit={(e) => {
          loginHandler(e);
        }}
      >
        <div className={"email-container" + (emailErr ? " error" : "")}>
          <label htmlFor='email'>Email Address</label>
          <input type='text' name='email' className='input email' />
          {emailErr && <p className='error'>{emailErr}</p>}
        </div>
        <div className={"password-container" + (passwordErr ? " error" : "")}>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' className='input password' />
          {passwordErr && <p className='error'>{passwordErr}</p>}
        </div>
        <Button theme='black' type='submit'>
          Login
        </Button>
        <p>
          Don’t have a Times account?
          <Link to='/signup'>
            <span>Create one</span>
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default LoginPage;
const Wrapper = styled.main`
  height: calc(100vh - 41.6rem);
  h1 {
    font-size: 3.6rem;
    line-height: 5.6rem;
    font-family: var(--ff-secondary);
    text-align: center;
    margin-top: 8rem;
    margin-bottom: 4.8rem;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    label {
      display: block;
      margin-bottom: 1.2rem;
      text-align: left;
      font-size: 1.4rem;
      /* font-weight: 400; */
    }
    .input {
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
    .email-container {
      margin-bottom: 3.2rem;
    }
    .password-container {
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
    }

    button {
      width: 39.6rem;
      height: 5.5rem;
      font-size: 1.5rem;
      margin-bottom: 2.4rem;
    }
    p {
      font-size: 1.4rem;
      font-weight: 400;
      span {
        font-weight: 700;
        font-size: 1.5rem;
        text-decoration: underline;
        color: var(--clr-black);
        cursor: pointer;
      }
    }
  }
`;
