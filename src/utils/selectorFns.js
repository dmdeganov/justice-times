export const isLogined = (state) => state.users.isAuthorized;
export const usersLoaded = (state) => {
  if (state.users.status === "idle" && state.users.users.length !== 0)
    return true;
  return false;
};
export const articlesLoaded = (state) => {
  if (state.articles.status === "idle" && state.articles.articles.length !== 0)
    return true;
  return false;
};
export const getUsers = (state) => state.users.users;
export const getArticles = (state) => state.articles.articles;
export const getArticlesbyAuthorId = (state) =>
  state.articles.articles.filter(
    (article) => article.authorId === state.users.currentUserId
  );
export const getCurrenUserData = (state) => {
  const id = state.users.currentUserId;
  const userData = state.users.users.find((user) => user._id === id);

  return userData;
};
// export const getAuthorData = (state, id) => {
//   return state.users.users.find((user) => user._id === id);
// };
