import articleImg1 from "../images/article1.png";
import articleImg2 from "../images/article2.png";
import articleImg3 from "../images/article3.png";
import articleImg4 from "../images/article4.png";
import articleImg5 from "../images/article5.png";
import articleImg6 from "../images/article6.png";
import authorImg1 from "../images/author1.png";
import authorImg2 from "../images/author2.png";
import authorImg3 from "../images/author3.png";
import authorImg4 from "../images/author4.png";
import authorImg5 from "../images/author5.png";
import authorImg6 from "../images/author6.png";
// console.log(articleImg1);

export const articles = [
  {
    id: 1,
    category: "Typography",
    title: "Humane Typography in the Digital Age",
    text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
    author: "Janay Wright",
    articleImg: articleImg1,
    authorImg: authorImg1,
  },
  {
    id: 2,
    category: "Typography",
    title: "Johannes Gutenberg: The Birth of Movable...",
    text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
    author: "Anthony J.Yeung",
    articleImg: articleImg2,
    authorImg: authorImg2,
  },
  {
    id: 3,
    category: "Typography",
    title: "The Origins of Social Stationery Lettering",
    text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
    author: "Ella Alderson",
    articleImg: articleImg3,
    authorImg: authorImg3,
  },
  {
    id: 4,
    category: "Typography",
    title: "Perfecting the Art of Perfection",
    text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
    author: "Soner Yıldırım",
    articleImg: articleImg4,
    authorImg: authorImg4,
  },
  {
    id: 5,
    category: "Typography",
    title: "A Brief History of Typography",
    text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
    author: "Ellane W",
    articleImg: articleImg5,
    authorImg: authorImg5,
  },
  {
    id: 6,
    category: "Typography",
    title: "For a Life of Freedom, Ditch These 6 Habits",
    text: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor.",
    author: "Winston Marshall",
    articleImg: articleImg6,
    authorImg: authorImg6,
  },
];
const articlesJSON = JSON.stringify(articles);
// localStorage.setItem("articles", articlesJSON);
// JSON.parse(localStorage.getItem("articles"));
