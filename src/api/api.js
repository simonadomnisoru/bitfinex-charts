const urlCors = 'https://cors-anywhere.herokuapp.com/';
const bitfinexUrl = 'https://api.bitfinex.com/v1/pubticker/btcgbp';

const getBtcGbp = (callback) => {
    fetch(`${urlCors}${bitfinexUrl}`)
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            callback(null, response);
        })
        .catch((error) => {
            callback(error);
        });
};

export default getBtcGbp;
