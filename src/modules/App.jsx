import {useEffect, useRef, useState} from 'react';
import logo from './App-logo.svg';
import './App.css';
import {LoginPage} from './LoginPage';

export function App() {
  const pointRef = useRef(null);
  const [step, setStep] = useState('init');
  // const [step, setStep] = useState('login');

  const transitionEndHandler = (e) => {
    if (!pointRef || !pointRef.current) return;
    console.log('e.target.innerHTML: ', e.target.innerHTML, e.elapsedTime);
    console.log('transitionEndHandler', e.propertyName, e);
    // pointRef.current.classList.remove('size');
    pointRef.current.classList.add('top');

    if (e.elapsedTime < 1) {
      setTimeout(() => {
        setStep('login');
      }, 1300);
    }
  };

  useEffect(() => {
    if (!pointRef || !pointRef.current) return;

    console.log('App');
    setTimeout(() => {
      pointRef.current.classList.add('size');
    }, 10);
    
  }, []);

  return (
    <div className="App content-center">

      {step === 'init' && (
        <div className='point content-center' ref={pointRef}
          onTransitionEnd={transitionEndHandler}
        >
          <div className="startText">ASDH</div>
          <div className="endText">language Club</div>
        </div>
      )}

      {step === 'login' && (
        <LoginPage />
      )}

    </div>
  );
}
