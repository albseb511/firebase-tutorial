import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    ADD_ITEMS_REQUEST,
    ADD_ITEMS_SUCCESS,
    ADD_ITEMS_FAILURE,
    DEL_ITEM_REQUEST,
    DEL_ITEM_SUCCESS,
    DEL_ITEM_FAILURE
} from "./actions"

const initialState = {
    items: [],
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_ITEMS_REQUEST:
        return { ...state, isLoading: true }

    case FETCH_ITEMS_SUCCESS:
        return { ...state, items:[...payload], isLoading: false }

    case FETCH_ITEMS_FAILURE:
        return { ...state, ...payload, isLoading: false }

    case ADD_ITEMS_REQUEST:
        return { ...state, isLoading: true }

    case ADD_ITEMS_SUCCESS:
        return { ...state, items:[ ...state.items, {...payload, status:false}], isLoading: false }

    case ADD_ITEMS_FAILURE:
        return { ...state, ...payload, isLoading: false }

    case DEL_ITEM_REQUEST:
        return { ...state, isLoading: true }

    case DEL_ITEM_SUCCESS:
        let items = state.items.filter(a=>a.id!=payload)
        console.log(items)
        return { ...state, items, isLoading: false }

    case DEL_ITEM_FAILURE:
        return { ...state, ...payload, isLoading: false }

    default:
        return state
    }
}
