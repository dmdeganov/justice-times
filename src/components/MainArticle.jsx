import React from "react";
import styled from "styled-components";
import mainArticleImage from "../images/main_article.png";
import author_1 from "../images/author_1.png";
import view from "../images/view.png";

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
    "Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what?";
  author = "Janay Wright";
  date = "Jun 13";
  timeToRead = 5;
  views = 1690;
  return (
    <StyledArticle>
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
        <div className='line'></div>
      </div>
    </StyledArticle>
  );
};

export default MainArticle;
const StyledArticle = styled.article`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  /* grid-template-rows: 40rem; */
  grid-column-gap: 2.4rem;
  .image-container {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .category {
      color: var(--clr-gray-dark);
      background-color: #f6f6f6;
      padding: 0.7rem 1.2rem;
      font-size: 1.2rem;
      display: inline-block;
      border-radius: 11.8rem;
      align-self: start;
    }
    .title {
      font-family: var(--ff-secondary);
      font-size: 3.2rem;
      line-height: 4rem;
      /* margin-bottom: 1.6rem; */
    }
    .article-text {
      color: var(--clr-gray-dark);
      font-size: 1.6rem;
      line-height: 2.6rem;
      /* margin-bottom: 3rem; */
    }
    .details {
      /* justify-self: center; */
      display: flex;
      justify-content: start;
      align-items: center;
      color: var(--clr-gray-dark);
      .avatar {
        img {
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
        }
        margin-right: 0.8rem;
      }
      .author-name {
        font-size: 1.4rem;
        font-weight: 500;
        margin-right: 2.4rem;
      }
      .date-time-to-read {
        margin-right: 2.4rem;
        font-size: 1.2rem;
      }
      .view-icon {
        margin-right: 0.8rem;
        width: 2rem;
        height: 1.4rem;
      }
      .views {
        font-size: 1.2rem;
        margin-right: 0.8rem;
      }
    }
    .line {
      border-bottom: 1px solid var(--clr-gray-lighter);
    }
  }
`;
// date, tag, author name and first letters of the article, article category and number of views
