import {expect} from 'chai';
import reducer from '../../state/reducer';
import actionTypes from '../../state/actions';
import helpers from '../helpers';

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
};

describe('reducer handles the actions correctly', () => {
    it('should store the data from the Api correctly', () => {
        let nextState = reducer(
            initialState,
            {
                type: actionTypes.getBtcGbp,
                response: helpers.mokedApiData[0]
            }
        );
        expect(nextState.dataSet).to.eql(helpers.expectedData[0].dataSet);
    });
});