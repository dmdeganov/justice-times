import React from "react";
import styled from "styled-components";
import view from "../images/view.png";
import { server } from "../utils/variables";
import { useSelector } from "react-redux";
import { getUsers } from "../utils/selectorFns";

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
    <StyledArticle>
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
        <div className='line'></div>
      </div>
    </StyledArticle>
  );
};

export default Article;
const StyledArticle = styled.article`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2.4rem;
  .image-container {
    width: 36.6rem;
    height: 26rem;
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
    }
    .article-text {
      color: var(--clr-gray-dark);
      font-size: 1.6rem;
      line-height: 2.4rem;
      /* margin-bottom: 3rem; */
    }
    .details {
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
