import React, {useEffect, useRef} from 'react';
import './LoginPage.css';

export const LoginPage = () => {
  const loginRef = useRef(null);

  const transitionEndHandler = (e) => {
    if (!loginRef || !loginRef.current) return;
    console.log('e.target.innerHTML: ', e.target.innerHTML, e.elapsedTime);
    console.log('transitionEndHandler', e.propertyName, e);
  };

  useEffect(() => {
    if (!loginRef || !loginRef.current) return;

    loginRef.current.classList.add('go');
  }, []);

  return (
    <div className='LoginPage' ref={loginRef}>
      <span>language Club</span>

      <form className="inputs" action="">
        <input className='inputName' type="text" placeholder="Имя" />
        <input className='inputPassword' type="password" placeholder="Пароль" />
      </form>

      <div className="loginBtnContainer"
        onTransitionEnd={transitionEndHandler}
      >
        <div className="loginBtnDecor">
          <button className="loginBtn">-&gt;</button>
        </div>
      </div>

    </div>
  );
};
