import { RECEIVE_COIN_API_DATA } from "../actions";
// eslint-disable-next-line
export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_COIN_API_DATA:
      return data;
    default:
      return state;
  }
};