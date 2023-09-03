import { CmsActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    home_page:null,
    error: null
}

const CmsReducer =(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CmsActionTypes.FETCH_HOME_PAGE:
            return { ...state, loading: false, home_page: action.payload }
        case CmsActionTypes.FETCH_HOME_PAGE_ERROR:
            return { ...state, loading: false, error: action.payload }
      
        default:
            return state
    }
}
export default CmsReducer;