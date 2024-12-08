const initUserState = 
    [
      {
        "id": "1",
        "name": "Zakari Ahmad",
        "email": "zaks@gmail.com",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, architecto repudiandae corporis inventore sequi ut quo ipsum alias! Culpa quis quidem, praesentium tenetur iusto repellat. Dicta repellendus rerum eligendi voluptates"
      }
    ]
  ;
  
  function usersReducer(state = initUserState, action) {
      if(action.type === 'ADD_USER') {
          return [...state, action.user]
      } else if(action.type === 'DELETE_USER') {
        const updatedUsers = state.filter(user => user.id !== action.id);
        return [updatedUsers]
      } else {
        return state;
      }
  };
  export default usersReducer