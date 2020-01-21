/* Redux: Create a Redux Store */
const reducer = (state = 5) => {
  return state;
};

// Define the store here:
const store = Redux.createStore(reducer);

/* Get State from the Redux Store */
const store = Redux.createStore((state = 5) => state);

// change code below this line
const currentState = store.getState();

/* Define a Redux Action */

const action = {
  type: "LOGIN"
};

/* Define an Action Creator */
const action = {
  type: "LOGIN"
};
// Define an action creator here:
function actionCreator() {
  return action;
}

/* Dispatch an Action Event */
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN"
  };
};

store.dispatch(loginAction());

/* Handle an Action in the Store */
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return { login: true };
  } else {
    return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN"
  };
};

/* Use a Switch Statement to Handle Multiple Actions */
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true
      };

    case "LOGOUT":
      return {
        authenticated: false
      };

    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN"
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT"
  };
};

/* Use const for Action Types */
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      };

    case LOGOUT:
      return {
        authenticated: false
      };

    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT
  };
};

/* Register a Store Listener */
const ADD = "ADD";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

let count = 0;

store.subscribe(() => {
  count++;
});

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);

/* Combine Multiple Reducers */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      };
    case LOGOUT:
      return {
        authenticated: false
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
