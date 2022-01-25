import actions from './action-types'

export const loginUser = (data) => ({
    type: actions.LOGIN_USER,
    payload: {...data}
})
