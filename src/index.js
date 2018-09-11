// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var Object = {};
    if (currency > 10000) {
        Object.error = "You are rich, my friend! We don't have so much coins for exchange";
        return Object;
    }

    if (currency < 0) return Object;

    var H, Q, D, N, P;
    H = Math.floor(currency / 50);
    currency = currency - H * 50;
    Q = Math.floor(currency / 25);
    currency = currency - Q * 25;
    D = Math.floor(currency / 10);
    currency = currency - D * 10;
    N = Math.floor(currency / 5);
    currency = currency - N * 5;
    P = currency;

    if (H > 0) Object.H = H;
    if (Q > 0) Object.Q = Q;
    if (D > 0) Object.D = D;
    if (N > 0) Object.N = N;
    if (P > 0) Object.P = P;

    return Object;
}