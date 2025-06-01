import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { loginUser } from '../../store/thunk/authThunk';
import { useAppDispatch, useAppSelector } from '../../store';
import { userSelectors } from '../../selectors/userSelectors';
import { AuthorizationStatus } from '../../const';

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [validationError, setValidationError] = useState('');

  const authStatus = useAppSelector(userSelectors.selectAuthStatus);
  const error = useAppSelector((state) => state.user.error);

  const validatePassword = (pass: string): boolean => {
    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasDigit = /\d/.test(pass);
    const hasSpace = pass.includes(' ');
    return hasLetter && hasDigit && !hasSpace;
  };
  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
    setValidationError('');
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!validatePassword(formData.password)) {
      setValidationError('Пароль должен содержать минимум 1 букву и 1 цифру, а так же не содержать пробел');
      return;
    }

    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate('/');
    }
  }, [authStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleFormDataChange}
                  value={formData.email}
                  required
                />
              </div>
              {validationError && (
                <div
                  className="login__error"
                  style={{ color: 'red', marginBottom: '10px' }}
                >
                  {validationError}
                </div>
              )}
              {error && (
                <div
                  className="login__error"
                  style={{ color: 'red', marginBottom: '10px' }}
                >
                  {error}
                </div>
              )}
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleFormDataChange}
                  value={formData.password}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
