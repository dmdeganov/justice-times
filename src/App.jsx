import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Signup from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import UserArticles from "./pages/UserArticles";
import { isLogined, usersLoaded } from "./utils/selectorFns";
import { useSelector, useDispatch } from "react-redux";
import AddArticle from "./pages/AddArticle";
import Profile from "./pages/Profile";
import { login } from "./slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(isLogined);
  const allUsersFetched = useSelector(usersLoaded);

  function RequireAuth({ children }) {
    return isAuthorized === true ? children : <Navigate to='/login' replace />;
  }
  function RequireUnAuth({ children }) {
    return isAuthorized === false ? children : <Navigate to='/' replace />;
  }
  useEffect(() => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("justiceUser"));
    if (allUsersFetched && userInLocalStorage) {
      const { password, email } = userInLocalStorage;
      dispatch(login({ email, password }));
    }
  }, [allUsersFetched]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route
            path='/signup'
            element={
              <RequireUnAuth>
                <Signup />
              </RequireUnAuth>
            }
          />
          <Route
            path='/login'
            element={
              <RequireUnAuth>
                <LoginPage />
              </RequireUnAuth>
            }
          />
          <Route
            path='/my_articles'
            element={
              <RequireAuth>
                <UserArticles />
              </RequireAuth>
            }
          />
          <Route
            path='/add_article'
            element={
              <RequireAuth>
                <AddArticle />
              </RequireAuth>
            }
          />
          <Route
            path='/profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
