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
} from "../Constants/actionTypes.constants";

export const initialStore = {
    popularIds: [],
    eventInfo:[],
    parentEventInfo:[],
    loading: false,
    error:false,
};



export default (state = initialStore, action) => {
    switch (action.type) {
        case GET_POPULAR_EVENTS_REQUEST:
            return {
                ...state,
                loading: true,
                popularIds: [],
                error: false,
            };
        case GET_POPULAR_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                popularIds: action.data.popular_event_ids,
                error: false,
            };
        case GET_POPULAR_EVENTS_FAILED:
            return {
                ...state,
                loading: false,
                popularIds: [],
                error: true,
            };
        case FETCH_EVENT_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                eventInfo: [],
                error: false,
            };
        case FETCH_EVENT_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                eventInfo: action.data.events,
                error: false,
            };
        case FETCH_EVENT_INFO_FAILED:
            return {
                ...state,
                loading: false,
                eventInfo: [],
                error: true,
            };
        case GET_PARENT_EVENT_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                parentEventInfo: [],
                error: false,
            };
        case GET_PARENT_EVENT_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                parentEventInfo: action.data.events,
                error: false,
            };
        case GET_PARENT_EVENT_INFO_FAILED:
            return {
                ...state,
                loading: false,
                parentEventInfo: [],
                error: true,
            };
        default:
            return state
    }
}

