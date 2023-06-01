import {
  HEADERTITLE
} from '../actions';

export const setHeaderTitle= (title) => ({
  type: HEADERTITLE,
  payload: title
});