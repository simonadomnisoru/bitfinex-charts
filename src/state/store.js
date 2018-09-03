import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    dataSet: {
        labels: [],
        datasets: [{
            label: 'btc gbp last price',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: [],
        }]
    }
}

const store = createStore(reducer, initialState);
export default store;