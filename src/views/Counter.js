/**
 * Created by qulongjun on 2017/8/7.
 */
import React, {Component, PropTypes} from 'react';

import * as Actions from '../Actions';
import CounterStore from '../stores/CounterStore';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }

    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount});
    }

    onClickIncrementButton() {
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};
Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //什么都不做的函数
};
export default Counter;