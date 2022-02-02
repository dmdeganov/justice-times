import React from "react";
import mainArticleImage from "../images/main_article.png";
import author_1 from "../images/author_1.png";
import view from "../images/view.png";
import "./MainArticle.scss";

const MainArticle = ({
  title,
  text,
  timeToRead,
  date,
  tag,
  author,
  category,
  views,
}) => {
  category = "Typography";
  title = "Humane Typography in the Digital Age";
  text =
    "Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. ";
  author = "Janay Wright";
  date = "Jun 13";
  timeToRead = 5;
  views = 1690;
  return (
    <article className='main-article'>
      <div className='image-container'>
        <img src={mainArticleImage} alt='main article' />
      </div>
      <div className='content'>
        <div className='category'>{"#" + category}</div>
        <h2 className='title'>{title}</h2>
        <p className='article-text'>{text}</p>
        <div className='details'>
          <div className='avatar'>
            <img src={author_1} alt='' />
          </div>
          <div className='author-name'>{author}</div>
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

export default MainArticle;
