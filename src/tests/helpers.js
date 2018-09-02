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
        label: 'Bitcoin',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        data: ['5261.9']
    }]
};
const expectedHtml = '<div><div class="arrow up"><div class="line up-line"></div><div class="point up-point"></div></div><div>0%</div><canvas height="50" width="100"></canvas></div>';

const helpers = {
    mockedUrl: mockedUrl,
    mokedApiData: mokedApiData,
    expectedDataSet: expectedDataSet,
    expectedHtml: expectedHtml
};

export default helpers;