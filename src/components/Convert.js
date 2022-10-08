import React, {useEffect, useRef, useState} from 'react';
import '../index.scss'
import Header from "./Header";
import {Block} from "./Block";

function Convert() {
    const [fromCurrency, setFromCurrency] = useState('UAH')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(0)

    const ratesRef = useRef({})

    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/b4e4639f87980b7ff02d54b5/latest/USD')
            .then((res) => res.json())
            .then((json) => {
                ratesRef.current = json.conversion_rates;
            }).catch(err => {
            console.log(err)
            alert('Не получилось отримати курс')
        })
    },[])

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromPrice, fromCurrency])

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toPrice, toCurrency])

    const onChangeFromPrice = (value) => {
        const price = value / ratesRef.current[fromCurrency]
        const result = price * ratesRef.current[toCurrency]
        setFromPrice(value)
        setToPrice(result)
    }

    const onChangeToPrice = (value) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
        setFromPrice(result)
        setToPrice(value)
    }

    return (
        <>
            <Header toPrice={toPrice} fromPrice={fromPrice} />
            <div className="App">
                <Block value={fromPrice}
                       currency={fromCurrency}
                       onChangeCurrency={setFromCurrency}
                       onChangeValue={onChangeFromPrice}
                />
                <Block value={toPrice}
                       currency={toCurrency}
                       onChangeCurrency={setToCurrency}
                       onChangeValue={onChangeToPrice}
                />
            </div>
        </>
    );
}

export default Convert;
