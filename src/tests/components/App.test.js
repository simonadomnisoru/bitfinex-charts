import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import {Line} from 'react-chartjs-2';
import App from '../../components/App';
import helpers from '../helpers';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


describe('App components works correctly', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    const cycles = Array.apply(null, Array(3));
    cycles.forEach(function (el, index) {
        it('should set the state and render correctly when it recives prices for the API', (next) => {
            fetchMock.mock(helpers.mockedUrl, helpers.mokedApiData[index]);
            const wrapper = shallow(<App />);
            process.nextTick((expectedData) => {
                expect(wrapper.instance().state).to.deep.include(expectedData);
                expect(wrapper.find(Line).props()).to.include({width: 100, height: 50});
                expect(wrapper.find(Line).props().data).to.eql(expectedData.dataSet);
                next();
            }, helpers.expectedData[index]);
        });
    });
});
