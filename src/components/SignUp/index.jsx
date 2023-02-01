import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../UserAuthContext';

import styles from './SignUp.module.scss';
import openPasswordIcon from '../../assets/images/open-password.svg';
import hidePasswordIcon from '../../assets/images/hide-password.svg';

const SignUp = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [checkPasswordType, setCheckPasswordType] = useState('password');
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    checkPassword: ''
  });
  const { signUp } = useUserAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValue.password === formValue.checkPassword) {
      signUp(formValue.email, formValue.password);
    } else {
      alert('Введенные пароли не совпадают');
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
      <p className={styles.form__details}>
        Уже зарегистрированы?{' '}
        <Link className={styles.form__link} to="/">
          Войдите
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
