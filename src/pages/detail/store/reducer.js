import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    title: '',
    img: '',
    content:  '',
});
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                img: action.img,
                content:  action.content
            })
    default : return state;
}}