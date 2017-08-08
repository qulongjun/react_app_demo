/**
 * Created by qulongjun on 2017/8/7.
 */
import React, {Component} from 'react';
import Counter from './Counter.js';
import Summary from './Summary'

const style = {
    margin: '20px'
};
class ControlPanel extends Component {
    render() {
        return (
            <div style={style}>
                <Counter caption="First"/>
                <Counter caption="Second"/>
                <Counter caption="Third"/>
                <hr/>
                <Summary/>
            </div>
        );

    }
}
export default ControlPanel;