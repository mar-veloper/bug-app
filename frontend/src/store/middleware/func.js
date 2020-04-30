// @reduxjs/toolkit has a built in middleware called Thunk
// If you are not using @reduxjs/toolkit then:
// Install thunk manually: npm i redux-thunk

const func = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") action(dispatch, getState);
  else next(action);
};

export default func;
