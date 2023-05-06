import {createAsyncThunk}
    from "@reduxjs/toolkit"
// import all exported functions as service
import * as service
    from "./tuits-service"

// Thunks are used with Redux to handle asynchronous operations within action creators
// findTuitsThunk uses the service's findTuits function to retrieve all the tuits
// and then send to a reducer to store the new state.
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        // return tuit ID so we can remove tuit from reducer's store
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (newTuit) => await service.createTuit(newTuit)
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

// export const createTuitThunk = createAsyncThunk(
//     'tuits/createTuit,
// async (tuit) => {
//     const newTuit = await service.createTuit(tuit)
//     return newTuit
// })
