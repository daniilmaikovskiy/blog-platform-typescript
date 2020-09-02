import { DefaultAction } from '../types';

const reducer = (state = null, action: DefaultAction) => {
  switch (action.type) {
    case 'SOME_TYPE':
      return state;
    default:
      return state;
  }
};

export default reducer;
