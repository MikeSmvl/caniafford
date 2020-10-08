const functions = require('firebase-functions');
const { calculateNetIncome } = require('./helper');

const provincesArray = [
    'AB',
    'BC',
    'MB',
    'NB',
    'NL',
    'NT',
    'NS',
    'NU',
    'ON',
    'PE',
    'QC',
    'SK',
    'YT',
];

exports.netIncome = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    try {
        request.body = JSON.parse(request.body);
        if (
            provincesArray.includes(request.body.province) &&
            typeof request.body.salary === 'number'
        ) {
            let netIncome = calculateNetIncome(
                request.body.salary,
                request.body.province
            );
            response.send({
                yearly: Math.round(netIncome),
                monthly: Math.round(netIncome / 12),
                biweekly: Math.round(netIncome / 26),
                weekly: Math.round(netIncome / 52),
                day: Math.round(netIncome / 52 / 5),
                hourly: Math.round(netIncome / 52 / 5 / 8),
            });
        } else {
            response.status(400).send({ Error: 'Bad Request.' });
        }
    } catch (err) {
        console.log(err);
        response.status(500).send({ Error: 'Internal Error.' });
    }
});
