import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeDetail = (title, img, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title, 
    img, 
    content
});
export const getDetail = (id) => {
    return (dispatch) =>{
        axios.get('/api/detail.json?id=' + id).then((res) =>{
            console.log(res)
            const result = res.data.data
            dispatch(changeDetail(result.title, result.img, result.content));
        }).catch(() => {
            
        })
    }
}