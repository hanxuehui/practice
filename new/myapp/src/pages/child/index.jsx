import React, { Component } from 'react'
import MyContext from '../../component';
export default class Child extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
              {props.userLink}
            </div>
        )
    }
}
Child.contextType = MyContext;