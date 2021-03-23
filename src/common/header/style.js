import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
      position: relative;
      height: 56px;
      border-bottom: 1px solid #f0f0f0;
    `
export const Logo = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100px; 
      height: 56px;
      background: url(${logoPic});
      background-size: contain;
`
export const Nav = styled.div`
      width: 960px;
      height: 100%;
      margin: 0 auto;
`
export const NavItem = styled.div`
      line-height: 56px;
      padding: 0 15px;
      font-size: 17px;
      color: #333;
      &.left{
            float: left;
      }
      &.right{
            float: right;
      }
      &.active{
            color: #ea6f5a;
      }
      &.lastone{
            margin-right: 20px;
      }
      
`
export const SearchNav = styled.div`
      position: relative;
      float: left;
      .zoom{
            position: absolute;
            width: 30px;
            line-height: 30px;
            border-radius: 15px;
            right: 5px;
            bottom: 5px;
            text-align: center;
            &.focused{
                  background: #777;
                  color: #fff;
            }
      }
`
export const NavSearch = styled.input.attrs({
      placeholder: '搜尋'
})`
      width: 160px;
      height: 38px;
      padding: 0 35px 0 20px;
      box-sizing: border-box;
      border: none;
      outline: none;
      border-radius: 19px;
      font-size: 14px;
      color: ea6f5a;
      margin-top: 9px;
      margin-left: 20px;
      background: #eee;
      &::placeholder{
            color: #999;
      }
      &.focused{
            width: 240px;
      }
      &.slide-enter{
            transition: all .2s ease-out;
      }
      &.slide-active{
            width: 240px;
      }
      &.slide-exit{
            transition: all .2s ease-out;
      }
      &.slide-exit-active{
            width: 160px;
      }
`
export const Addition = styled.div`
      position: absolute;
      right: 0;
      top: 0;
      height: 56px;
`
export const Button = styled.div`
      float: right;
      margin-top: 9px;
      line-height: 38px;
      border-radius: 19px;
      border: 1px solid orange;
      margin-right: 20px;
      padding: 0 20px;
      font-size: 14px;
      &.reg{
            color: #ec6149;
      }
      &.writting{
            color: #fff;
            background: #ec6149;
      }
`
export const SearchInfo = styled.div`
      position: absolute;
      left: 0;
      top: 56px;
      width: 240px;
      padding: 0 20px;
      box-shadow: 0 0 8px rgba(0, 0, 0, .2);
      background: white;
`
export const SearchInfoTitle = styled.div`
      margin-top: 20px;
      margin-bottom: 15px;
      line-height: 20px;
      font-size: 14px;
      color: #969696;
`
export const SearchInfoSwitch = styled.span`
      float: right;
      font-size: 12px;
      cursor: pointer;
      .spin{
            display: block;
            float: left;
            font-size: 12px;
            margin-right:2px;
            transition: all .2s ease-in;
            transform-origin: center center;
      }
`
export const SearchInfoItem = styled.a`
      display: block;
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 0 5px;
      font-size: 12px;
      line-height: 20px;
      border: 1px solid #ddd;
      color: #969696;
      border-radius: 2px;
`
export const SearchInfoList = styled.span`
      float: right;
      font-size: 12px;
`