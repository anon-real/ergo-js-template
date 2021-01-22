import { get } from './rest';

export const trueAddress = '4MQyML64GnzMxZgm'; // dummy address to get unsigned tx from node, we only care about the boxes though in this case
export const explorerApi = 'https://api.ergoplatform.com/api/v0';

async function getRequest(url) {
    return get(explorerApi + url).then(res => {
        return { data: res };
    });
}

export async function currentHeight() {
    return getRequest('/blocks?limit=1')
        .then(res => res.data)
        .then(res => res.items[0].height);
}

export function unspentBoxesFor(address) {
    return getRequest(`/transactions/boxes/byAddress/unspent/${address}`).then(
        (res) => res.data
    );
}

export function boxById(id) {
    return getRequest(`/transactions/boxes/${id}`).then((res) => res.data);
}

export function txById(id) {
    return getRequest(`/transactions/${id}`).then((res) => res.data);
}

export async function getSpendingTx(boxId) {
    const data = getRequest(`/transactions/boxes/${boxId}`);
    return data
        .then((res) => res.data)
        .then((res) => res.spentTransactionId)
        .catch((_) => null);
}

export function getUnconfirmedTxsFor(addr) {
    return getRequest(
        `/transactions/unconfirmed/byAddress/${addr}`
    )
        .then((res) => res.data)
        .then((res) => res.items);
}

export function getTokenBox(addr) {
    return getRequest(
        `/assets/${addr}/issuingBox`
    )
        .then((res) => res.data[0])
}

export function getBalanceFor(addr, token = null) {
    return getRequest(
        `/addresses/${addr}`
    )
        .then((res) => res.data)
        .then((res) => res.transactions)
        .then(res => {
            if (!token) return res.confirmedBalance;
            let tok = res.confirmedTokensBalance.filter(tok => tok.tokenId === token);
            if (tok.length === 0) return 0;
            else return tok[0].amount;
        });
}


