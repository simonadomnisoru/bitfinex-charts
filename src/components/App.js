import React from 'react';
import api from '../api/api.js';
import {Line} from 'react-chartjs-2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import '../style/app.css';
import store from '../state/store';
class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSet: store.getState().dataSet
        };
    }
    componentDidMount() {
        api();
        setInterval(() => api(), 30000);
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                faArrowIcon: store.getState().isNegative ? faArrowDown : faArrowUp,
                faArrowClass: store.getState().isNegative ? 'arrowRed' : 'arrowGreen',
                differenceLastValue: store.getState().differenceLastValue,
                lastPrice: store.getState().lastPrice,
                dataSet: store.getState().dataSet
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        if (this.state && this.state.faArrowIcon) {
            return (
                <div className="app">
                    <div className="arrowContainer">
                        <FontAwesomeIcon icon={this.state.faArrowIcon} className={this.state.faArrowClass} />
                        <span>{this.state.differenceLastValue}%</span>
                    </div>
                    <Line className="chartBitCoin"
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
