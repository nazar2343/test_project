import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";

export default function Header() {

    const [fromPriceUahWithUsd, setFromPriceUahWithUsd] = useState(0)
    const [fromPriceUahWithEur, setFromPriceUahWithEur] = useState(0)
    const [toPriceUsd, setToPriceUsd] = useState(1)
    const [toPriceEur, setToPriceEur] = useState(1)

    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/b4e4639f87980b7ff02d54b5/latest/USD')
            .then((res) => res.json())
            .then((json) => {
                setFromPriceUahWithUsd(json.conversion_rates.UAH);
            }).catch(err => {
            console.log(err)
            alert('Не получилось отримати курс')
        })
    },[])

    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/b4e4639f87980b7ff02d54b5/latest/EUR')
            .then((res) => res.json())
            .then((json) => {
                console.log(json.conversion_rates, 'eurooo')
                setFromPriceUahWithEur(json.conversion_rates.UAH);
            }).catch(err => {
            console.log(err)
            alert('Не получилось отримати курс')
        })
    },[])

    return (
        <AppBar style={{background: '#000000'}}>
            <Toolbar>
                <Typography variant="h6"
                            component="div" sx={{flexGrow: 12}}>
                    Актуальний Курс:
                </Typography>
                <Typography variant="h6"
                            component="div" sx={{flexGrow: 30}}>
                    {toPriceUsd}$ = {fromPriceUahWithUsd.toFixed(3)}UAH
                </Typography>
                <Typography variant="h6"
                            component="div" sx={{flexGrow: 25}}>
                    {toPriceEur}€ : {fromPriceUahWithEur.toFixed(3)}UAH
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
