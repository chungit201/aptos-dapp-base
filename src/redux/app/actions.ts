import { createAction } from '@reduxjs/toolkit'

const SET_SHOW_CONNECT = createAction<boolean>('app/SET_SHOW_CONNECT')
const SET_THEME = createAction<string>('app/SET_THEME')
const SET_IS_LOGIN = createAction<boolean>('app/SET_IS_LOGIN')


export default {
  SET_SHOW_CONNECT,
  SET_THEME,
  SET_IS_LOGIN,

}
