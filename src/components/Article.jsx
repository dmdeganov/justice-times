import React from "react";
import view from "../images/view.png";
import { server } from "../utils/variables";
import { useSelector } from "react-redux";
import { getUsers } from "../utils/selectorFns";
import "./Article.scss";

const Article = ({
  title,
  text,
  timeToRead = 5,
  date = "July 13",
  category,
  views = 1690,
  imagePath,
  authorId,
}) => {
  // const {
  //   firstname,
  //   lastname,
  //   avatar = "uploads/images/198397a9-689e-4b83-b791-27c238221783.jpeg",
  // } = useSelector(getUsers).find((user) => user._id === authorId);
  const users = useSelector(getUsers);
  if (users.length === 0) return <h1>Loading</h1>;

  const {
    firstname,
    lastname,
    avatar = "uploads/images/198397a9-689e-4b83-b791-27c238221783.jpeg",
  } = users.find((user) => user._id === authorId);
  return (
    <article className='article-in-list'>
      <div className='image-container'>
        <img src={`${server}/${imagePath}`} alt='article' />
      </div>
      <div className='content'>
        <div className='category'>{"#" + category}</div>
        <h2 className='title'>{title}</h2>
        <div className='acticle-text-container'>
          <p
            className='article-text'
            dangerouslySetInnerHTML={{ __html: text }}
          >
            {/* {text} */}
          </p>
        </div>

        <div className='details'>
          <div className='avatar'>
            <img src={`${server}/${avatar}`} alt='' />
          </div>
          <div className='author-name'>{`${firstname} ${lastname}`}</div>
          <div className='date-time-to-read'>{`${date} · ${timeToRead} min read`}</div>
          <div className='view-icon'>
            <img src={view} alt='' />
          </div>
          <div className='views'>{views}</div>
        </div>
      </div>
    </article>
  );
};

export default Article;
// date, tag, author name and first letters of the article, article category and number of views
