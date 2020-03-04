import { fBaseTasks } from "../config/fbaseConfig"

// action type
export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'
export const ADD_ITEMS_REQUEST = 'ADD_ITEMS_REQUEST'
export const ADD_ITEMS_SUCCESS = 'ADD_ITEMS_SUCCESS'
export const ADD_ITEMS_FAILURE = 'ADD_ITEMS_FAILURE'
export const DEL_ITEM_REQUEST = 'DEL_ITEM_REQUEST'
export const DEL_ITEM_SUCCESS = 'DEL_ITEM_SUCCESS'
export const DEL_ITEM_FAILURE = 'DEL_ITEM_FAILURE'

// action creators

export const fetchItemsRequest = (payload) => ({
    type: FETCH_ITEMS_REQUEST,
    payload
})

export const fetchItemsFailure = (payload) => ({
    type: FETCH_ITEMS_FAILURE,
    payload
})

export const fetchItemsSuccess = (payload) => ({
    type: FETCH_ITEMS_SUCCESS,
    payload
})

export const fetchItems = payload => {
    return dispatch => {
        dispatch(fetchItemsRequest())
        return fBaseTasks.get().then(query=>{
            let array = []
            query.forEach(doc=>{
                array.push( {id: doc.id, ...doc.data() })
            })
            dispatch(fetchItemsSuccess(array))
        }).catch(err=>
                dispatch(fetchItemsFailure()))
    }
}

// ADD

export const addItemsRequest = (payload) => ({
    type: ADD_ITEMS_REQUEST,
    payload
})

export const addItemsFailure = (payload) => ({
    type: ADD_ITEMS_FAILURE,
    payload
})

export const addItemsSuccess = (payload) => ({
    type: ADD_ITEMS_SUCCESS,
    payload
})

export const addItems = payload => {
    return dispatch => {
        dispatch(addItemsRequest())
        return fBaseTasks.add({
            name: payload.name,
            status: false
        }).then(res=>{
            console.log(res)
            let data = {
                id: res.id,
                name: payload.name
            }   
            console.log('payload is', data)
            dispatch(addItemsSuccess(data))
        }).catch(err=>
                dispatch(addItemsFailure()))
    }
}
// DELETE

export const delItemRequest = (payload) => ({
    type: DEL_ITEM_REQUEST,
    payload
})

export const delItemFailure = (payload) => ({
    type: DEL_ITEM_FAILURE,
    payload
})

export const delItemSuccess = (payload) => ({
    type: DEL_ITEM_SUCCESS,
    payload
})

export const delItem = payload => {
    return dispatch => {
        dispatch(delItemRequest())
        return fBaseTasks.doc(payload).delete().then(()=>{
            dispatch(delItemSuccess(payload))
        }).catch(err=>
                dispatch(delItemFailure()))
    }
}
