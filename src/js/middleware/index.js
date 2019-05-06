import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

/**
 * Middleware to chceck for certain words 
 * @param {*} dispatch 
 */

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
      return function(action) {

        if (action.type === ADD_ARTICLE) {  // select action type
          const foundWord = forbiddenWords.filter(word =>    // process action( Business logic)
            action.payload.title.includes(word)
          );
          const foundWordInName = forbiddenWords.filter(word =>
            action.payload.name.includes(word)
          );
          if (foundWord.length || foundWordInName.length) {
            return dispatch({ type: "FOUND_BAD_WORD" });
          }
        }
        return next(action);
      };
    };
  }