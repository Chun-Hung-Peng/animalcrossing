import React, { PureComponent } from 'react'
import { WriterWrapper, WriterItem } from '../style'
import { connect } from 'react-redux'

class Writer extends PureComponent {
    render(){
        return(
            <WriterWrapper>
                {
                    this.props.list.map((item) => {
                        return(
                            <WriterItem key = {item.get('id')}>
                                <img className ='writer-pic' alt='' 
                                src = {item.get('imgUrl')} />
                                <h3 className ='writer-name'>{item.get('name')}</h3>
                                <p className ='writer-content'>{item.get('content')}</p>
                                </WriterItem>
                        )
                    })
                }
            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.get('home').get('writerList'),
})

export default connect(mapState, null)(Writer);