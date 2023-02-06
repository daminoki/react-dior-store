import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../UserAuthContext';
import { useForm } from 'react-hook-form';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const onSubmit = () => {
    if (formValue.password === formValue.checkPassword) {
      signUp(formValue.email, formValue.password);
    } else {
      console.log('Введенные пароли не совпадают');
    }
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  const togglePasswordCheck = () => {
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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.form__subtitle} htmlFor="email">
          E-mail:
        </label>
        <input
          {...register('email', {
            required: 'Это поле обязательно для заполнения',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Введите корректный email адрес'
            }
          })}
          className={styles.form__input}
          id="email"
          name="email"
          placeholder="Введите email"
          value={formValue.email}
          onChange={handleInputChange}
        ></input>
        {errors.email?.message}
        <div className={styles.form__wrapper}>
          <label className={styles.form__subtitle} htmlFor="password">
            Пароль:
          </label>
          <button
            type="button"
            onClick={togglePassword}
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
          {...register('password', {
            required: 'Это поле обязательно для заполнения',
            minLength: {
              value: 6,
              message: 'Минимальная длина пароля 6 символов'
            }
          })}
          className={styles.form__input}
          type={passwordType}
          id="password"
          name="password"
          placeholder="Введите пароль"
          value={formValue.password}
          onChange={handleInputChange}
        ></input>
        {errors.password?.message}
        <div className={styles.form__wrapper}>
          <label className={styles.form__subtitle} htmlFor="check-password">
            Повторите пароль:
          </label>
          <button
            type="button"
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
          {...register('checkPassword', {
            required: 'Это поле обязательно для заполнения',
            minLength: {
              value: 6,
              message: 'Минимальная длина пароля 6 символов'
            },
            validate: (value) => {
              const { password } = getValues();
              return password === value || 'Введенные пароли не совпадают';
            }
          })}
          className={styles.form__input}
          type={checkPasswordType}
          id="check-password"
          name="checkPassword"
          placeholder="Повторите пароль"
          value={formValue.checkPassword}
          onChange={handleInputChange}
        ></input>
        {errors.checkPassword?.message}
        <button
          className={styles.form__button}
          type="submit"
          onSubmit={handleSubmit(onSubmit)}
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
