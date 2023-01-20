import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import styles from './SignUp.module.scss';
import arrow from '../../images/back-arrow.svg';
import openPasswordIcon from '../../images/open-password.svg';
import hidePasswordIcon from '../../images/hide-password.svg';

const SignUp = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [checkPasswordType, setCheckPasswordType] = useState('password');
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    checkPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log();

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.password === formValue.checkPassword) {
      createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert('Введеные пароли не совпадают');
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  const togglePasswordCheck = (e) => {
    e.preventDefault();
    if (checkPasswordType === 'password') {
      setCheckPasswordType('text');
    } else {
      setCheckPasswordType('password');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.button__wrapper}>
        <Link to="/">
          <button className={styles.button}>
            <img src={arrow} alt="Go back" width={22} height={22} />
          </button>
        </Link>
        <p className={styles.button__title}>на главную</p>
      </div>
      <h3 className={styles.form__title}>
        <span>Зарегистрируйтесь,</span> чтобы совершать покупки
      </h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.form__subtitle} htmlFor="email">
          E-mail:
        </label>
        <input
          className={styles.form__input}
          type="email"
          id="email"
          name="email"
          placeholder="Введите email"
          value={formValue.email}
          onChange={handleInputChange}
          required
        ></input>
        <div className={styles.form__wrapper}>
          <label className={styles.form__subtitle} htmlFor="password">
            Пароль:
          </label>
          <button onClick={togglePassword} className={styles.form__checker}>
            <img
              src={
                passwordType === 'password'
                  ? hidePasswordIcon
                  : openPasswordIcon
              }
              alt="Check password"
              width={30}
              height={20}
            />
          </button>
        </div>
        <input
          className={styles.form__input}
          type={passwordType}
          id="password"
          name="password"
          placeholder="Введите пароль"
          value={formValue.password}
          onChange={handleInputChange}
          required
        ></input>
        <div className={styles.form__wrapper}>
          <label className={styles.form__subtitle} htmlFor="check-password">
            Повторите пароль:
          </label>
          <button
            onClick={togglePasswordCheck}
            className={styles.form__checker}
          >
            <img
              src={
                checkPasswordType === 'password'
                  ? hidePasswordIcon
                  : openPasswordIcon
              }
              alt="Check password"
              width={30}
              height={20}
            />
          </button>
        </div>
        <input
          className={styles.form__input}
          type={checkPasswordType}
          id="check-password"
          name="checkPassword"
          placeholder="Повторите пароль"
          value={formValue.checkPassword}
          onChange={handleInputChange}
          required
        ></input>
        <button
          className={styles.form__button}
          type="submit"
          onSubmit={handleSubmit}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default SignUp;
