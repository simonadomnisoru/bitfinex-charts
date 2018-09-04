import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';

const mokedApiData = [{
    'last_price': '5261.9',
    timestamp: '1535634827.7695858'
}, {
    'last_price': '5260.9',
    timestamp: '1535634927.7695858'
}, {
    'last_price': '5262.9',
    timestamp: '1535634999.7695858'
}];
const mockedUrl = 'https://cors-anywhere.herokuapp.com/https://api.bitfinex.com/v1/pubticker/btcgbp';

const expectedData = [
    {
        faArrowClass: 'arrowGreen',
        faArrowIcon: faArrowUp,
        differenceLastValue: 0,
        dataSet: {
            labels: [''],
            datasets: [{
                label: 'btc gbp last price',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
                data: ['5261.9']
            }]
        },
        lastPrice: '5261.9'
    },
    {
        faArrowClass: 'arrowRed',
        faArrowIcon: faArrowDown,
        differenceLastValue: -1,
        dataSet: {
            labels: ['', ''],
            datasets: [{
                label: 'btc gbp last price',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
                data: ['5261.9', '5260.9']
            }]
        },
        lastPrice: '5260.9'
    },
    {
        faArrowClass: 'arrowGreen',
        faArrowIcon: faArrowUp,
        differenceLastValue: 2,
        dataSet: {
            labels: ['', '', ''],
            datasets: [{
                label: 'btc gbp last price',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
                data: ['5261.9', '5260.9', '5262.9']
            }]
        },
        lastPrice: '5262.9'
    }
];
const reducerInitialState = {
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
};

const helpers = {
    mockedUrl: mockedUrl,
    mokedApiData: mokedApiData,
    expectedData: expectedData,
    reducerInitialState: reducerInitialState
};

export default helpers;