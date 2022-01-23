import actions from './action-types'

export const registerUser = (data) => ({
    type: actions.REGISTER_USER,
    payload: {...data}
})
