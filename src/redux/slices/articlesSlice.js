import { createSlice } from '@reduxjs/toolkit';
import {
  db,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  addArticle,
} from '../../firebase/config';

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
    doaddArticleLocalyAndToServer: (state, action) => {
      let { title, content, image, isFavorite } = action.payload;

      addArticle(
        title,
        // Math.round(Math.random() * 1000),
        content,
        image,
        isFavorite
      );
      // getArticles();
    },
    removeArticle: (state, action) => {
      // let articleIndex must be a const for all other reducers
      let articleIndex = state.homeScreenArticles.findIndex(
        (article) => article.id === action.payload.id
      );
      console.log('articleIndex', articleIndex);
      console.log('removed', state.homeScreenArticles.splice(articleIndex, 1));
      deleteDoc(doc(db, 'posts', action.payload.id));
    },
    makeArticleFavorite: (state, action) => {
      action.payload.isFavorite = !action.payload.isFavorite;

      const isFavoriteRef = doc(db, 'posts', action.payload.id);
      updateDoc(isFavoriteRef, {
        isFavorite: action.payload.isFavorite,
      });
    },
    addHomeScreenArticles: (state, action) => {
      state.homeScreenArticles.push(...action.payload.articles);
    },
  },
});

export const selectArticles = (state) => state.articles.homeScreenArticles;
export const {
  doaddArticleLocalyAndToServer,
  removeArticle,
  makeArticleFavorite,
  addHomeScreenArticles,
} = articles.actions;
export { getArticles };
export default articles.reducer;
