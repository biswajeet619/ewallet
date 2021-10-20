import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


function Wallet() {
    const [points, setPoints] = useState(0);
    const [vouchers, setVouchers] = useState([]);
    const id = sessionStorage.getItem("id");

    useEffect(() => {
        const axios = require('axios');
        const user = sessionStorage.getItem("id");
        // to get current points of the user
        axios.get('http://18.136.104.201:9090/getRewardState')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                var amount = 0;
                for (var i = 0; i < response.data.length; i++) {
                    var obj = response.data[i];
                    // console.log(obj.customer);
                    if (obj.customer === user) {
                        amount += parseInt(obj.point);
                    }
                }
                setPoints(amount);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        var voucherArray = [];
        // to get vouchers redeemed by the user
        axios.get('http://18.136.104.201:9090/getRedemptionState')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                // var amount = 0;
                for (var i = 0; i < response.data.length; i++) {
                    var obj = response.data[i];
                    // console.log(obj.customer);
                    if (obj.customer === user) {
                        voucherArray.push(obj)
                    }
                }
                setVouchers(voucherArray);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    });

    return (
        <div>
            <h2>Welcome</h2>
            <Card variant="outlined">
                <h1>{sessionStorage.getItem('name')}</h1>
                <h2> Available Points: {points}</h2>
            </Card>
            {vouchers.length>0 ?
                <Grid justify="center" alignItems="center">
                    {vouchers.map(obj =>
                        <Grid>
                            <Card>
                                <CardContent>
                                    Voucher Name: <b>{obj.voucher}</b><br/>
                                    Points used to redeem voucher: <b>{obj.point}</b>
                                </CardContent>
                            </Card>
                        </Grid>
                    ).reverse()
                    }
                </Grid>
        :<h1>Nothing to show</h1>}

{id=="raymondfang" ? <Link to="/issue" ><h5 style={{ color: 'red' }}>Issue Points to Users </h5></Link> :<h2></h2>}
        
        </div>
    )
}

export default Wallet
