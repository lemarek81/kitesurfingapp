import React from 'react';

const FormWeatherComponent = props => {
    return (
        <form className='homepageform' onSubmit={props.submit}>
            <input  className='inputSelect'
            type='text' 
            value={props.value}
            onChange={props.change}
            placeholder='Wpisz tutaj'
            />
            <button> Wyszukaj Kitespot</button>
        </form>

        //  sprawdzić czy sie da to zrobić na select
        //<select id='kitespotslist' className='inputSelect'>
        // <option selected value='selected'>Wybierz z listy</option>  
        // <option value='Dabki'>Dąbki</option>
        // <option value='Gdynia'>Gdynia</option>
        // <option value='Hel'>Hel</option>
        // <option value='Jastania'>Jastarnia</option>
        // <option value='Jurata'>Jurata</option>
        // <option value='Chałupy'>Chałupy</option>
        // </select>
    );
};

export default FormWeatherComponent;