import {
    GET_POPULAR_EVENTS_REQUEST,
    GET_POPULAR_EVENTS_SUCCESS,
    GET_POPULAR_EVENTS_FAILED,
    FETCH_EVENT_INFO_REQUEST,
    FETCH_EVENT_INFO_SUCCESS,
    FETCH_EVENT_INFO_FAILED,
    GET_PARENT_EVENT_INFO_REQUEST,
    GET_PARENT_EVENT_INFO_SUCCESS,
    GET_PARENT_EVENT_INFO_FAILED,
} from '../Constants/actionTypes.constants';
import { apiRequest } from "./apiCalls";

const BYPASS_URL = 'https://cors-anywhere.herokuapp.com/';

export const getPopularEvents = (successCallback) => (dispatch) => {
    dispatch({ type: GET_POPULAR_EVENTS_REQUEST });
    const API_URL = 'https://api.smarkets.com/v3/popular/event_ids/sport/football/';
    return apiRequest().get(`${BYPASS_URL}${API_URL}`)
      .then((res) => {
        dispatch({ type: GET_POPULAR_EVENTS_SUCCESS, data: res.data });
        successCallback();
      })
      .catch((error) => {
        dispatch({ type: GET_POPULAR_EVENTS_FAILED, error });
      });
};

export const fetchEventInfo = (eventId, successCallback) => (dispatch) => {
    dispatch({ type: FETCH_EVENT_INFO_REQUEST });
    let API_URL = 'https://api.smarkets.com/v3/events/' + eventId;
    return apiRequest().get(`${BYPASS_URL}${API_URL}`)
      .then((res) => {
        dispatch({ type: FETCH_EVENT_INFO_SUCCESS, data: res.data });
        successCallback();
      })
      .catch((error) => {
        dispatch({ type: FETCH_EVENT_INFO_FAILED, error });
      });
};

export const getParentEventInfo = (eventId, successCallback) => (dispatch) => {
    dispatch({ type: GET_PARENT_EVENT_INFO_REQUEST });
    let API_URL = 'https://api.smarkets.com/v3/events/' + eventId;
    return apiRequest().get(`${BYPASS_URL}${API_URL}`)
      .then((res) => {
        dispatch({ type: GET_PARENT_EVENT_INFO_SUCCESS, data: res.data });
        successCallback();
      })
      .catch((error) => {
        dispatch({ type: GET_PARENT_EVENT_INFO_FAILED, error });
      });
};

