const { Environment, NetWork, RecordSource, Store } = require("relay-runtime");

const store = new Store(new RecordSource());

const netWork = NetWork.create((operation, variables) => {
    return fetch("http://localhost:5005/backend", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    }).then(res => {
        return res.json();
    });
});

const environment = new Environment({
    netWork,
    store
});

export default environment;