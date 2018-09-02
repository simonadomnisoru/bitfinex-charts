import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import App from '../../components/App';
import helpers from '../helpers';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('App components works correctly', () => {
    beforeEach(() => {
        fetchMock.mock(helpers.mockedUrl, helpers.mokedApiData);
    });
    afterEach(() => {
        fetchMock.restore();
    });

    it('should set the state correctly', (done) => {
        const wrapper = shallow(<App />);
        process.nextTick(() => {
            const state = wrapper.instance().state;

            expect(state.arrowClass).to.equal('arrow up');
            expect(state.lineClass).to.equal('line up-line');
            expect(state.pointClass).to.equal('point up-point');
            expect(state.differenceLastValue).to.equal(0);
            expect(state.dataSet).to.eql(helpers.expectedDataSet);
            done();
        });
    });
    it('should render the html correctly', (done) => {
        const wrapper = shallow(<App />);
        expect(wrapper.html()).to.equal(null);
        process.nextTick(() => {
            expect(wrapper.html()).to.equal(helpers.expectedHtml);
            done();
        });;
    });
});
