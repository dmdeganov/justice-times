import React from "react";
import { useSelector } from "react-redux";
import MainArticle from "../components/MainArticle";
import styled from "styled-components";
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
    font-family: var(--ff-secondary);
    margin-top: 9.6rem;
    margin-bottom: 5.6rem;
    font-weight: bold;
  }
`;
