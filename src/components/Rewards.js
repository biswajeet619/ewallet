import React, { useState, useEffect } from 'react';
import rewardsJson from '../rewards.json';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@material-ui/core/Box';

function Rewards() {
    const [points, setPoints] = useState(0);


    const handleRedeem = (name, points) => {
        const axios = require('axios');
        const user = sessionStorage.getItem('email')
        const url = `http://18.136.104.201:9090/redeem?voucher=${name}&&customer=${user}&&point=${points}`
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response.data);
                alert("Voucher redeemed successfully!")
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    useEffect(() => {
        const axios = require('axios');
        const user = sessionStorage.getItem('email');
        // to get current points of the user
        axios.get('http://18.136.104.201:9090/getRewardState')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                var amount = 0;
                for (var i = 0; i < response.data.length; i++) {
                    var obj = response.data[i];
                    // console.log(obj.customer);
                    if (obj.customer == user) {
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
    })

    return (

        <Box m={10} pt={1}>
                    <Grid justify="center" alignItems="center" container spacing={3} >
            {rewardsJson.map(obj =>
                <Grid>
                    <Card sx={{ maxWidth: 340, marginLeft: "10%"}} >
                        <CardMedia
                            component="img"
                            image={obj.image}
                            alt="IKEA"
                        />
                        <CardContent style={{marginLeft: "4%"}}>
                            Voucher Name: <b>{obj.name}</b> <br />
                            Value of Voucher: <b>{obj.value}</b> <br />
                            Points required: <b>{obj.points}</b> <br />
                            {points > obj.points ?
                                <Button onClick={() => handleRedeem(obj.name, obj.points)}> Redeem Voucher </Button>
                                : <Button style={{color:"red"}} disabled> Req points: {obj.points-points}  {}</Button>}

                        </CardContent>
                    </Card>
                </Grid>
            )
            }
        </Grid>
        </Box>

    )
}

export default Rewards
