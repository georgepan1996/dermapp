import { createSlice } from '@reduxjs/toolkit';
import { db, collection, getDocs } from '../../firebase/config';

const initialState = {
  homeScreenArticles: [],
};

const getArticles = () => {
  console.log('get articles');
  const articlesRef = collection(db, 'posts');
  return getDocs(articlesRef);
};

const articles = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    removeArticle: (state, action) => {
      // let articleIndex must be a const for all other reducers
      let articleIndex = state.homeScreenArticles.findIndex(
        (article) => article.id === action.payload.id
      );
      console.log('articleIndex', articleIndex);
      console.log('removed', state.homeScreenArticles.splice(articleIndex, 1));
    },
    makeArticleFavorite: (state, action) => {
      let articleIndex = state.homeScreenArticles.findIndex(
        (article) => article.id === action.payload.id
      );
      console.log('articleIndex', articleIndex);
      state.homeScreenArticles[articleIndex].isFavorite =
        !state.homeScreenArticles[articleIndex].isFavorite;
      console.log('favorited article');
    },
    addHomeScreenArticles: (state, action) => {
      state.homeScreenArticles.push(...action.payload.articles);
    },
  },
});

export const selectArticles = (state) => state.articles.homeScreenArticles;
export const { removeArticle, makeArticleFavorite, addHomeScreenArticles } =
  articles.actions;
export { getArticles };
export default articles.reducer;
