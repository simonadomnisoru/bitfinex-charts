import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import api from '../../api/api';

const data = { "mid": "5262.65", "bid": "5262.6", "ask": "5262.7", "last_price": "5261.9", "low": "5243.7", "high": "5523.3", "volume": "321.13921392", "timestamp": "1535634827.7695858" };
const url = 'https://cors-anywhere.herokuapp.com/https://api.bitfinex.com/v1/pubticker/btcgbp';

describe('Api calls are working', () => {
    beforeEach(() => {
        fetchMock.mock(url, {
            method: 'GET',
            data: data
        });
    });
    afterEach(() => {
        fetchMock.restore();
    });
    it('should get the price', () => {
        api(function (error, response) {
            expect(error).to.equal(null);
            expect(response.data).to.deep.equal(data);
        });
    });
});
