const slack = {
    send(data) {
        const url = 'https://example.com';
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
            body: JSON.stringify({
                'text': data.msg
            })
        })
            .then(response => response.json(),);
    }
}

export default slack;