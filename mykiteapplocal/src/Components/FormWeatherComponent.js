import React from 'react';

const FormWeatherComponent = props => {
    return (
        <form onSubmit={props.submit}>
            <input 
            type='text' 
            value={props.value}
            onChange={props.change}
            placeholder='Wpisz tutaj'
            />
            <button> Wyszukaj Kitespot</button>
        </form>
    );
};

export default FormWeatherComponent;