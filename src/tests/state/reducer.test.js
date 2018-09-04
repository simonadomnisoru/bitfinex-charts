import {expect} from 'chai';
import reducer from '../../state/reducer';
import actionTypes from '../../state/actions';
import helpers from '../helpers';

describe('reducer handles the actions correctly', () => {
    it('should store the data from the Api correctly', () => {
        let nextState = reducer(
            helpers.reducerInitialState,
            {
                type: actionTypes.getBtcGbp,
                response: helpers.mokedApiData[0]
            }
        );
        expect(nextState.dataSet).to.eql(helpers.expectedData[0].dataSet);
    });
});