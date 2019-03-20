import * as TodoActionTypes from './types'

export const fetchRequest = () => { return {type:TodoActionTypes.FETCH_REQUEST}}
export const fetchSuccess = (data) => { return {type:TodoActionTypes.FETCH_SUCCESS, payload:data}}
export const fetchError = () => { return {type:TodoActionTypes.FETCH_ERROR}}
export const createRequest = (data) => { return {type:TodoActionTypes.CREATE_REQUEST, payload:data}}
export const createSuccess = (data) => { return {type:TodoActionTypes.CREATE_SUCCESS, payload:data}}