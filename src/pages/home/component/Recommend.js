import React, { PureComponent } from 'react'
import { RecoWrapper, RecoItem } from '../style';
import { connect } from 'react-redux'

class Recommend extends PureComponent {
    render(){
        return(
            <RecoWrapper>
                {
                    this.props.list.map((item) => {
                        return(
                            <RecoItem key = {item.get('id')}>
                                <img className ='reco-pic' alt='' 
                                src = {item.get('imgUrl')} />
                                </RecoItem>
                        )
                    })
                }
            </RecoWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.get('home').get('recommendList'),
})

export default connect(mapState, null)(Recommend);