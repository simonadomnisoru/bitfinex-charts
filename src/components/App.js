import React, { Component } from 'react';
import api from '../api/api.js';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../style/app.css';
import store from '../state/store';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSet: store.getState().dataSet
        };
    }
    componentDidMount() {
        api();
        setInterval(() => api(), 30000);
        store.subscribe(() => {
            this.setState({
                ...this.state,
                faArrowIcon: store.getState().isNegative ? faArrowDown : faArrowUp,
                faArrowColor: store.getState().isNegative ? { color: 'red' } : { color: 'green' },
                differenceLastValue: store.getState().differenceLastValue,
                lastPrice: store.getState().lastPrice,
                dataSet: store.getState().dataSet
            });
        });
    }

    render() {
        if (this.state && this.state.faArrowIcon) {
            return (
                <div className="app">
                    <div className="arrowContainer">
                        <FontAwesomeIcon icon={this.state.faArrowIcon} style={this.state.faArrowColor} />
                        <span>{this.state.differenceLastValue}%</span>
                    </div>
                    <Line
                        data={this.state.dataSet}
                        width={100}
                        height={50}
                        options={{
                            maintainAspectRatio: true
                        }}
                    />
                </div>
            );
        } else return null;
    }
}

export default App;
