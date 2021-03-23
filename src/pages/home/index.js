import React, { PureComponent } from 'react'
import {HomwWrapper, HomeLeft, HomeRight, BackTop} from './style'
import List from './component/List'
import Recommend from './component/Recommend'
import Topic from './component/Topic'
import Writer from './component/Writer'
import { connect } from 'react-redux'
import {actionCreators} from './store'

class Home extends PureComponent {
    handleTop(){
        window.scroll(0, 0)
    }
    render(){
        return(
            <HomwWrapper>
                <HomeLeft>
                    <img className ='banner-img' src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200506202226/Animal-Crossing-New-Horizons-PC-Unlocked-Version-Download-Full-Free-Game-Setup-1600x900.jpg" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showBackTop ? <BackTop onClick = {this.handleTop}>回到頂部</BackTop> : null}
            </HomwWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeshowBackTop)
    }
}
const mapState = ((state) => ({
    showBackTop: state.getIn(['home', 'showBackTop'])
}))
const mapDispatch = ((dispatch) => ({
    changeHomeData(){
         dispatch(actionCreators.getHomeInfo())
    },
    changeshowBackTop(){
        if (document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
}))
export default connect(mapState, mapDispatch)(Home);