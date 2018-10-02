import Settings from '../../settings.js';

const ordersDefaultState = Settings;

export default (state = ordersDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
