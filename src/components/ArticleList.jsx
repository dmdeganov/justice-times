import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  const articlesQuantity = articles.length + 1;
  const [startIndex, setStartIndex] = useState(0);
  console.log(startIndex);

  const articlesToRender = articles.slice(startIndex, startIndex + 5);
  const prevHandler = () => {
    if (startIndex < 5) return;
    setStartIndex(startIndex - 5);
  };
  const nextHandler = () => {
    if (startIndex + 5 >= articlesQuantity) return;
    setStartIndex(startIndex + 5);
  };
  return (
    <>
      {articlesToRender.map((article) => (
        <Article {...article} key={article._id} />
      ))}
      <div className='pagination-buttons'>
        <Link to='/'>
          <Button
            theme={startIndex < 5 ? "disabled" : "white"}
            onClick={prevHandler}
          >
            Prev
          </Button>
        </Link>
        <Link to='/'>
          <Button
            theme={startIndex + 5 >= articlesQuantity ? "disabled" : "white"}
            onClick={nextHandler}
          >
            Next
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ArticleList;
