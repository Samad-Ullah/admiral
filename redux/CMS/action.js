import * as api from '../../api'
import { CmsActionTypes } from './types'

// action creators

// get fleet
export const getHomePage = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHomePage()
        dispatch({ type: CmsActionTypes.FETCH_HOME_PAGE , payload: data.modifiedResponse })
    } catch (error) {
        
        dispatch({ type: CmsActionTypes.FETCH_HOME_PAGE_ERROR , payload: error.message })
    }
}

