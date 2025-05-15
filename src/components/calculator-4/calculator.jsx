import React, { useRef, useState } from 'react';
import './calculator.css';

function Calculator() {
  const [val, setVal] = useState('');
  const inp = useRef(null);

  const handleinp = (v) => {
    setVal(val + v);
  };

  const handleclear = () => {
    setVal('');
  };

  const handlecal = () => {
    try {
      setVal(eval(val).toString());
    } catch {
      setVal('Error');
    }
  };

  const handleback = () => {
    setVal(val.slice(0, -1));
  };

  return (
    <div className='body'>

    <div className="calc-container">
      <h1 className="calc-title">Calculator</h1>
      <input type="text" ref={inp} value={val} readOnly className="calc-input" />
      <div className="calc-buttons">
        {/* Row 1 */}
        <button className="calc-btn action-btn" onClick={handleclear}>AC</button>
        <button className="calc-btn action-btn" onClick={handleback}>⌫</button>
        <button className="calc-btn op-btn" onClick={() => handleinp('%')}>%</button>
        <button className="calc-btn op-btn" onClick={() => handleinp('/')}>÷</button>

        {/* Row 2 */}
        <button className="calc-btn" onClick={() => handleinp('7')}>7</button>
        <button className="calc-btn" onClick={() => handleinp('8')}>8</button>
        <button className="calc-btn" onClick={() => handleinp('9')}>9</button>
        <button className="calc-btn op-btn" onClick={() => handleinp('*')}>×</button>

        {/* Row 3 */}
        <button className="calc-btn" onClick={() => handleinp('4')}>4</button>
        <button className="calc-btn" onClick={() => handleinp('5')}>5</button>
        <button className="calc-btn" onClick={() => handleinp('6')}>6</button>
        <button className="calc-btn op-btn" onClick={() => handleinp('-')}>−</button>

        {/* Row 4 */}
        <button className="calc-btn" onClick={() => handleinp('1')}>1</button>
        <button className="calc-btn" onClick={() => handleinp('2')}>2</button>
        <button className="calc-btn" onClick={() => handleinp('3')}>3</button>
        <button className="calc-btn op-btn" onClick={() => handleinp('+')}>+</button>

        {/* Row 5 */}
        <button className="calc-btn" onClick={() => handleinp('00')}>00</button>
        <button className="calc-btn" onClick={() => handleinp('0')}>0</button>
        <button className="calc-btn" onClick={() => handleinp('.')}>.</button>
        <button className="calc-btn equal-btn" onClick={handlecal}>=</button>
      </div>
    </div>
    </div>
  );
}

export default Calculator;
