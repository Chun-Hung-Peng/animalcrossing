import styled from 'styled-components'

export const HomwWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    z-index: 1;
`
export const HomeLeft = styled.div`
    display: block;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img{
        width: 100%
    }
`
export const HomeRight = styled.div`
    float: right;
    width: 280px;
    margin: 0 auto;
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0 ;
    margin-left: -18px;
`
export const TopicItem = styled.div`
    margin-left: 18px;
    margin-bottom: 18px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    padding-right: 10px;
    float: left;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;	
        margin-right: 10px;
    }

`
export const ListItem = styled.div`
    width: 625px;
    height: 128px; 
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    border-top: 1px solid #dcdcdc;
    .list_pic{
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
        margin-top: 14px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .list_title{
        line-height: 27px;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 20px;
    }
    .desc{
        font-size: 13px;
        line-height: 27px;
    }
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`
export const RecoWrapper = styled.div`
    margin: 30px 0;
    width: 280px; 
`
export const RecoItem = styled.div`
    margin: 30px 0;
    width: 280px; 
    height: 50px;
    .reco-pic{
        width: 280px;
        height: 50px;
        object-fit: cover;
    }
`
export const WriterWrapper = styled.div`
    margin: 10px 0;
    width: 280px; 
    overflow: hidden;
`
export const WriterItem = styled.div`
    margin: 30px 0;
    width: 280px; 
    height: 50px;
    .writer-pic{
        width: 48px; 
        height: 48px;
        float: left;
        border-radius:  999em;
        margin-right: 10px;
    }
    .writer-name{
        display: block;
        line-height: 20px;
        font-size: 18px;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .writer-content{
        display: block;
        font-size: 12px;
        line-height: 15px;
    }
`
export const BackTop = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 60px;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
`