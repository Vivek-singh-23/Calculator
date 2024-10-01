import React, {useState } from 'react'
import './Button.css';

export default function Button() {
 
    const [displayValue,setdisplayValue]=useState('0');

    const handleOnClick=(value)=>{
      if(displayValue==='0'){
        setdisplayValue(value)
      }else{
        setdisplayValue(displayValue+value);
      }

    };
    const handleCalculate = () => {
      try {
        setdisplayValue(eval(displayValue).toString());
      } catch (error) {
        setdisplayValue('Error');
      }
    };
    const handleAllClear=()=>{
      setdisplayValue('0')
    };
  
  return (
    <div>
      <input type="text" value={displayValue} readOnly />
      <br />
      <br />
      <br />
      <button className='operators' onClick={handleAllClear}>AC</button>
      <button className='operators' onClick={()=> handleOnClick('-')}>-/+</button>
      <button className='operators' onClick={()=> handleOnClick('/')}>/</button>
      <button className='operators' onClick={()=> handleOnClick('%')}>%</button>
       <br />
      <button className='numbers' onClick={()=> handleOnClick('7')}>7</button>
      <button className='numbers' onClick={()=> handleOnClick('8')}>8</button>
      <button className='numbers' onClick={()=> handleOnClick('9')}>9</button>
      <button className='operators' onClick={()=> handleOnClick('*')}>*</button>
       <br />
      <button className='numbers' onClick={()=> handleOnClick('4')}>4</button>
      <button className='numbers' onClick={()=> handleOnClick('5')}>5</button>
      <button className='numbers' onClick={()=> handleOnClick('6')}>6</button>
      <button className='operators' onClick={()=> handleOnClick('-')}>-</button>
      <br /> 
      <button className='numbers' onClick={()=> handleOnClick('1')}>1</button>
      <button className='numbers' onClick={()=> handleOnClick('2')}>2</button>
      <button className='numbers' onClick={()=> handleOnClick('3')}>3</button>
      <button className='operators' onClick={()=> handleOnClick('+')}>+</button>
      <br />
      
      
      <button className='numbers' id='zero' onClick={()=> handleOnClick('0')}>0</button>
      <button className='numbers' onClick={()=> handleOnClick('.')}>.</button>
      <button className='operators' onClick={ handleCalculate} >=</button>
    </div>
  );
};

