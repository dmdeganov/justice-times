import React from "react";
import { useSelector } from "react-redux";
import ArticleList from "../components/ArticleList";
import { getArticlesbyAuthorId } from "../utils/selectorFns";

const UserArticles = () => {
  const userArticles = useSelector(getArticlesbyAuthorId);

  return (
    <main>
      <h1>My Articles</h1>
      <ArticleList articles={userArticles} />
    </main>
  );
};

export default UserArticles;
