const initState = {
  'Users': [
    {
      "id": "1",
      "name": "Zakari Ahmad",
      "email": "zaks@gmail.com",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, architecto repudiandae corporis inventore sequi ut quo ipsum alias! Culpa quis quidem, praesentium tenetur iusto repellat. Dicta repellendus rerum eligendi voluptates"
    }
  ]
};

function rootReducer(state = initState, action) {
    if(action.type === 'ADD_USER') {
        return {...state, Users: [...state.Users, action.user]};
    } else if(action.type === 'DELETE_USER') {
      const updatedUsers = state.Users.filter(user => user.id !== action.id);
      return {...state, Users: updatedUsers}
    } else {
      return state;
    }
};
export default rootReducer