export const updateInputVal = (val, prop) => {
    setState(currentState => ({...currentState, [prop]: val}));
  };