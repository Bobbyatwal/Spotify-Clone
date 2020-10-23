// This class is used from the index.js to pass in Initial State and the Reducer

// Initial State of Data Layer (empty):
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
token: null,
};

// Action sets the state (user, playing, etc): console.log(action);
// Switch is a smart and effective way to set actions:
const reducer = (state, action) => {
  

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

   case 'SET_TOKEN':
     return {
       ...state,
       token: action.token,
     }   

     case 'SET_PLAYLISTS':
       return {
         ...state,
         playlists: action.playlists,
       }

       case "SET_DISCOVER_WEEKLY":
       return {
          ...state,
          discover_weekly: action.discover_weekly,
       }  
    default:
      return state;
  }
};

export default reducer;
