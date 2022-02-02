import {
  createSlice,
  //   createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { server } from "../utils/variables";
const initialState = {
  articles: [],
  sendStatus: "idle",
  loadingStatus: "loading",
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    loadArticles(state, action) {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loadingStatus = "loading";
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.loadingStatus = "idle";
      state.articles = action.payload;
    });
    builder.addCase(fetchArticles.rejected, (state) => {
      state.loadingStatus = "error";
    });
    builder.addCase(addArticle.pending, (state) => {
      state.sendStatus = "loading";
    });
    builder.addCase(addArticle.fulfilled, (state, action) => {
      state.sendStatus = "idle";
      state.articles = [...state.articles, action.payload];
    });
    builder.addCase(addArticle.rejected, (state) => {
      state.sendStatus = "error";
    });
  },
});

export const fetchArticles = createAsyncThunk("articles/fetch", async () => {
  try {
    const response = await fetch(`${server}/articles/`);
    const articles = await response.json();
    return articles;
  } catch (err) {
    console.log(err);
  }
});
export const addArticle = createAsyncThunk("articles/", async (article) => {
  console.log(article);

  try {
    const response = await fetch(`${server}/articles/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(article),
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
});

export const { loadArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
