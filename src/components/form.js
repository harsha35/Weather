import React from 'react';
const Form = props =>(
    <div>
                <form onSubmit={props.getWeather}>
                    <input type='text' name='city' placeholder='city...'></input>
                    <input type='text' name='country' placeholder='country...'></input>
                    <button>get weather</button>
                </form>
            </div>
)
export default Form;