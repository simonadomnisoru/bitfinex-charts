const mokedApiData = {
    mid: '5262.65',
    bid: '5262.6',
    ask: '5262.7',
    'last_price': '5261.9',
    low: '5243.7',
    high: '5523.3',
    volume: '321.13921392',
    timestamp: '1535634827.7695858'
};
const mockedUrl = 'https://cors-anywhere.herokuapp.com/https://api.bitfinex.com/v1/pubticker/btcgbp';

const expectedDataSet = {
    labels: [''],
    datasets: [{
        label: 'btc gbp last price',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        data: ['5261.9']
    }]
};

const helpers = {
    mockedUrl: mockedUrl,
    mokedApiData: mokedApiData,
    expectedDataSet: expectedDataSet
};

export default helpers;