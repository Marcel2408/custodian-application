import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../redux/reducers'

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState)
}
