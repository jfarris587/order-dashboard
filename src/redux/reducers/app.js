const loginDefaultState = true;
export const loginReducer = (state = loginDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case "LOGIN_APP":
      return !state;
  }
}

const ordersDefaultState = Settings.slice();
export const ordersReducer = (state = ordersDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const detailsDefaultState = [0,0,0,0];
export const detailsReducer = (state = detailsDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const addDefaultState = {
  mode: false
};
export const addReducer = (state = addDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const deleteDefaultState = {
  mode: false
};
export const deleteReducer = (state = deleteDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const showDefaultState = 0;
export const showReducer = (state = showDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const pageDefaultState = 0;
export const pageReducer = (state = pageDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
