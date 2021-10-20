import { useState } from "react";
import "../index.css";


const Issue = () => {
    const [amount, setAmount] = useState(' ');
    const [receiver, setReceiver] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        const transactionDetails = { amount, receiver };
        console.log(transactionDetails)
        const url = `http://18.136.104.201:9090/issue?customer=${receiver}&&point=${amount}`;
        console.log(url);
        const axios = require('axios');
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response.data);
                alert("Points issued")
                // add progress bar in
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <div className="issue">
            <h2>Transfer Reward Points</h2>
            <form onSubmit={handleSubmit}>
                <label>Customer EmailID</label>
                <input
                    type='text'
                    required
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                    onkeypress="CheckSpace(event)"
                />
                <label> Number of Points:</label>
                <input
                    type='text'
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    onkeypress="CheckSpace(event)"
                />

                <button>Issue now</button>
            </form>
        </div>
    );
}

export default Issue;