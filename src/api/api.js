import actions from '../state/actions';
import store from '../state/store';
const urlCors = 'https://cors-anywhere.herokuapp.com/';
const bitfinexUrl = 'https://api.bitfinex.com/v1/pubticker/btcgbp';

const getBtcGbp = () => {
    fetch(`${urlCors}${bitfinexUrl}`)
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            store.dispatch({
                type: actions.getBtcGbp,
                response: response
            });
        })
        .catch((error) => {
            store.dispatch({
                type: actions.getBtcGbp,
                error: error
            });
        });
};

export default getBtcGbp;
