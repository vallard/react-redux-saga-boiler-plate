import api_endpoint from '../../settings'

const headers = {
    'Content-Type': 'application/json',
};

const api = {
    get(data) {
        var url = api_endpoint + "/" + data.path
        return fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
    },
    create(data) {
        var url = api_endpoint + "/" + data.path
        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "qty": data.qty
            })
        })
            .then(response => response.json())

    }
}

export default api;
