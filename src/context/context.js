import { createContext, useReducer } from 'react';

const initVal = {
  token: '',
  question: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setToken':
      localStorage.setItem('token', action.payload);
      return {
        token: action.payload,
      };
    case 'setQ':
      return {
        ...state, 
        question: action.question
      }
    default:
      break;
  }
};

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initVal);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
