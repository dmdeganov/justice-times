import React from "react";
import { useSelector } from "react-redux";
import ArticleList from "../components/ArticleList";
import { getUserArticles } from "../utils/selectorFns";

const UserArticles = () => {
  const userArticles = useSelector(getUserArticles);

  return (
    <main>
      <h1>My Articles</h1>
      <ArticleList articles={userArticles} />
    </main>
  );
};

export default UserArticles;
