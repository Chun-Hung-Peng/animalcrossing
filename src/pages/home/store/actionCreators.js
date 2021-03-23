import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
    type: actionTypes.SEND_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList,
})
const addHomeList = (list, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    addList: fromJS(list),
    nextPage
})
export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    show
})
export const getHomeInfo = () => {
    return(dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.homepagedata;
            dispatch(changeHomeData(result));
        })
    }
}
export const getMoreList = (page) => {
    return(dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.articleList;
            dispatch(addHomeList(result, page+1));
        })
    }
}