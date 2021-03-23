import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showBackTop: false
});
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
    })
};
const addArticleData = (state, action) => {
    return state.merge({
        articleList: state.get("articleList").concat(action.addList),
        articlePage: action.nextPage,
    })
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SEND_HOME_DATA:
            return changeHomeData(state, action)
        case actionTypes.ADD_ARTICLE_LIST:
            return addArticleData(state, action)
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.set('showBackTop', action.show)
    default : return state;
}}