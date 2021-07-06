import React, { Component } from 'react';
import Guide from './GuideComponent';
import { guide } from '../shared/guideData';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            guideData: guide
        }
    }

    render(){
        return  <Guide guideData={this.state.guideData}/>
    }
}
export default Main;