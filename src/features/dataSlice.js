import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    objectId: "104028",
    apiData: {}
}


    export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

       setAPIData: (state) => {
            return{ ...state, objectId: state.objectId + action.payload}
        },

        incrementId: (state, action) => {
            return { ...state, objectId: state.objectId + 1  }
        },

        decrementId: (state, action) => {
            return { ...state, objectId: state.objectId - 1 }
        },

       enterId: (state, action) => {
            return { ...state, objectId: state.objectId + action.payload }
        },

        resetId: (state) => {
            return { ...state, objectId: state.objectId + action.payload }
        }
    }
    
})


export const { setAPIData, incrementId, decrementId, enterId, resetId} = dataSlice.actions

export const fetchDataThunk = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState()
        console.log(state)
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const rData = await response.json()
        console.log(rData)
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer

