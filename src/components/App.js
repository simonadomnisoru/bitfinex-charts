import React, { Component } from 'react';
import api from "../api/api.js";
import { Line } from 'react-chartjs-2';
require('../styles/App.css');

const createDataSet = () => {
    return {
        labels: [],
        datasets: [{
            label: "Bitcoin",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: [],
        }]
    }
}

const processDataSet = (dataSet, price) => {
    let newDataSet = { ...dataSet };

    newDataSet.labels = [...dataSet.labels, ''];
    newDataSet.datasets[0].data = [...dataSet.datasets[0].data, price];

    return newDataSet;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSet: createDataSet()
        };
    }
    componentDidMount() {
        api(this.renderList);
        setInterval(() => api(this.renderList), 30000);
    }

    renderList = (error, data) => {
        if (error === null && data !== undefined) {
            let price = data.last_price;

            if (this.lastPrice === undefined) {
                this.lastPrice = price;
            }

            let differenceLastValue = (price - this.lastPrice);
            let isNegative = differenceLastValue < 0 ? 'down' : 'up';
            this.lastPrice = price;

            this.setState({
                arrowClass: `arrow ${isNegative}`,
                lineClass: `line ${isNegative}-line`,
                pointClass: `point ${isNegative}-point`,
                differenceLastValue: differenceLastValue,
                dataSet: processDataSet(this.state.dataSet, price)
            })
        }
        // Todo error check
    };

    render() {
        if (this.state && this.state.arrowClass) {
            return (
                <div className="App">
                    <div className={this.state.arrowClass}>
                        <div className={this.state.lineClass}></div>
                        <div className={this.state.pointClass}></div>
                    </div>
                    <div>{this.state.differenceLastValue}%</div>
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
