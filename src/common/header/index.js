import React, { Component } from 'react';
import { connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, 
    Addition, Button, SearchNav, SearchInfo, SearchInfoTitle, 
    SearchInfoSwitch, SearchInfoItem, SearchInfoList
 } from './style';
 import { Link } from 'react-router-dom';
 import { actionCreators as loginActionCreators} from '../../pages/login/store'

 class Header extends Component{
    showListArea () {
        const { focused, list, totalPage, page, handleMouseEnter,handleMouseLeave ,mouseIn, handleChangePage  } = this.props;
        const nowList = list.toJS();
        const pageList = []
        for (let i = (page-1) * 10; i < nowList.length ; i++) {
            pageList.push(
                <SearchInfoItem key={nowList[i]}>{nowList[i]}</SearchInfoItem>
            )
        }
        if(focused || mouseIn){
            return (
                <SearchInfo onMouseEnter ={handleMouseEnter} onMouseLeave ={handleMouseLeave}>
                    <SearchInfoTitle>
                        熱門搜索
                        <SearchInfoSwitch onClick ={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className = 'iconfont spin'>&#xe851;</i>換一組
                        </SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                        {pageList}
                        </SearchInfoList>
                            </SearchInfo>
            )
        }else{
            return null;
        }
    }
     render(){
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'><Logo /></Link>
                    <Nav>
                        <NavItem className = 'left active'>首頁</NavItem>
                        <NavItem className = 'left'>下載APP</NavItem>
                        <SearchNav>
                            <CSSTransition
                                timeout = {200}
                                in = {focused}
                                classNames = 'slide'
                            >
                            <NavSearch 
                            className = {focused ? 'focused' : ''}
                            onFocus = {() => handleInputFocus(list)}
                            onBlur = {handleInputBlur}
                            ></NavSearch>
                            </CSSTransition>
                            <i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                                &#xe637;</i>
                            {this.showListArea()}
                                </SearchNav>
                                {
                                    login ? <NavItem onClick={logout} className = 'right lastone'>退出</NavItem> :
                                    <Link to='/login'>
                                    <NavItem className = 'right lastone'>登陸</NavItem></Link>
                                }
                        <NavItem className = 'right'>
                            <i className = 'iconfont'>&#xe636;</i>
                        </NavItem>
                    </Nav>
                    <Addition>
                        <Link to = '/write'>
                        <Button className = 'writting'>
                            <i className = 'iconfont'>&#xe604;</i>寫文章
                            </Button>
                            </Link>
                        <Button className = 'reg'>註冊</Button>
                    </Addition>
                </HeaderWrapper>
        )    
     }
 }

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngel = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngel){
                originAngel = parseInt(originAngel, 10)
            }else{
                originAngel = 0
            }
            spin.style.transform = 'rotate('+(originAngel + 360 )+'deg)'
            if (page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.changeLogout())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);