import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency, availableCurrencies } = useContext(AppContext);
    const handleCurrencyChange = (eventKey, event) => {
        console.log();
        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventKey,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <DropdownButton variant="success" id="dropdown-basic-button" title={"Currency: " + currency.symbol + " " + currency.title} onSelect={handleCurrencyChange}>
                {availableCurrencies.map(
                    (variant) => (
                        <Dropdown.Item eventKey={variant.title} key={"currency-" + variant.title} >{variant.symbol + " " + variant.title}</Dropdown.Item>
                    ))}
            </DropdownButton>
            
        </div>
    );
};
export default Currency;
