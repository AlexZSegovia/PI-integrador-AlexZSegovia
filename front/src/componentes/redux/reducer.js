const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case "REMOVE_FAV":
      const updatedMyFavorites = state.myFavorites.filter(
        (character) => character.id !== Number(action.payload)
      );
      const updatedAllCharacters = state.allCharacters.filter(
        (character) => character.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: updatedMyFavorites,
        allCharacters: updatedAllCharacters,
      };
    case "FILTER":
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      }
      const filterByGender = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filterByGender,
      };
    case "ORDER":
      const favoriteOrdered = action.payload === "A"
        ? [...state.myFavorites].sort((a, b) => a.id - b.id)
        : [...state.myFavorites].sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: favoriteOrdered,
      };
    default:
      return { ...state };
  }
};

export default reducer;

