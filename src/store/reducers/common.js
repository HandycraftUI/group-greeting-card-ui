import actions from '../actions/action-types'
import lightTheme from '../../themes/light'
import darkTheme from '../../themes/dark'
import { DARK_THEME, LIGHT_THEME } from '../../constants/common'

const initialState = {
    theme: 'light',
    themeData: lightTheme
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.TOGGLE_THEME:
    {
        const newTheme = state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
        return {
            ...state,
            theme: newTheme,
            themeData: newTheme === LIGHT_THEME ? lightTheme : darkTheme
        }
    }
    default:
        return state
    }
}

export default commonReducer
