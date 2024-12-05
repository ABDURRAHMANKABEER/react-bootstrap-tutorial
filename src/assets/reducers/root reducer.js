const initState = {
  "Users": [
    {
      "id": "2",
      "name": "Zakari Ahmad",
      "email": "zaks@gmail.com",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, architecto repudiandae corporis inventore sequi ut quo ipsum alias! Culpa quis quidem, praesentium tenetur iusto repellat. Dicta repellendus rerum eligendi voluptates"
    },
    {
      "id": "27c2",
      "name": "Abdurrahman Kabir",
      "email": "abdurrahmankabeer2003@gmail.com",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci minima nisi accusantium id deserunt molestias quos, non eligendi autem ratione pariatur ipsum assumenda excepturi consectetur quidem repudiandae sunt eum in dicta architecto numquam sapiente dignissimos? Asperiores, ex ratione."
    }
  ]
};

function rootReducer(state = initState, action) {
    if(action.type === 'ADD_USER') {
        return {...state, Users: Users.push(action.user)};
    } else {
        return state;
    }
};
export default rootReducer