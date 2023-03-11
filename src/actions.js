export const REQUEST_COIN_API_DATA = "REQUEST_COIN_API_DATA";
export const RECEIVE_COIN_API_DATA = "RECEIVE_COIN_API_DATA";

export const requestApiData = () => ({ type: REQUEST_COIN_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_COIN_API_DATA, data });