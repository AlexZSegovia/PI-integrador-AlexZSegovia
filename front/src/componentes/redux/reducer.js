const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":{
       return { ...state, myFavorites: action.payload, allCharacters: action.payload };}
       
    case 'REMOVE_FAV':
        return { ...state, myFavorites: action.payload,allCharacters:action.payload };
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

