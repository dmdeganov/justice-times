import React, { useState } from "react";
import MainArticle from "../components/MainArticle";
// import { articles } from "../data/articles";
// import Article from "../components/Article";
import styled from "styled-components";
// import Button from "../components/Button";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticles } from "../utils/selectorFns";
import ArticleList from "../components/ArticleList";

const MainPage = () => {
  const articles = useSelector(getArticles);

  return (
    <Wrapper>
      <MainArticle />
      <h1>Popular articles</h1>
      <ArticleList articles={articles} />
    </Wrapper>
  );
};

export default MainPage;
const Wrapper = styled.main`
  h1 {
    font-size: 4.8rem;
    font-family: var(--ff-secondary);
    margin-top: 9.6rem;
    margin-bottom: 5.6rem;
    font-weight: bold;
  }
`;
