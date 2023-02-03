import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../UserAuthContext';

import styles from './SignIn.module.scss';
import openPasswordIcon from '../../assets/images/open-password.svg';
import hidePasswordIcon from '../../assets/images/hide-password.svg';

const SignIn = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });
  const { logIn } = useUserAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(formValue.email, formValue.password);
  };

  const togglePasswordType = (e) => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.form__title}>
        <span>Войдите,</span> чтобы совершать покупки
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
          <button
            type="button"
            onClick={togglePasswordType}
            className={styles.form__checker}
          >
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
          minLength="6"
          required
        ></input>
        <button
          className={styles.form__button}
          type="submit"
          onSubmit={handleSubmit}
        >
          Войти
        </button>
      </form>
      <p className={styles.form__details}>
        Еще не зарегистрированы?{' '}
        <Link className={styles.form__link} to="/register">
          Зарегистрируйтесь
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
