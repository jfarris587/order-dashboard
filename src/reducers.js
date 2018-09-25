const initialState = {
  age: 2,
  lastValues: []
}

const rootReducer = (state = initialState, action) => {
  const newState = {...state};
  if(action.type === 'ADD'){
    newState.age += 1;
  }
  else if(action.type === 'SUBTRACT'){
    newState.age -= 1;
  }

  return newState;
};


export default rootReducer;
