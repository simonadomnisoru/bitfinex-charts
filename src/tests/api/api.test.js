import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import api from '../../api/api';
import helpers from '../helpers';

describe('Api calls are working', () => {
    beforeEach(() => {
        fetchMock.mock(helpers.mockedUrl, helpers.mokedApiData);
    });
    afterEach(() => {
        fetchMock.restore();
    });
    it('should get the price', () => {
        api(function (error, response) {
            expect(error).to.equal(null);
            expect(response).to.eql(helpers.mokedApiData);
        });
    });
});
