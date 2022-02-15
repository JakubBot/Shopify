import Header from '@element/Header';
import Footer from '@element/Footer';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputComponent from '@element/InputComponent';
import Icosahedron from '@element/Icosahedron';
import { useRouter } from 'next/router';
import axios from 'axios';

const RegisterPage = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
  });
  const onSubmit = async (state) => {
    const { password, confirmedPassword } = state;
    if (password !== confirmedPassword) {
      setError('passwords', {
        types: {
          message: 'Passwords are not the same',
        },
      });
      return;
    }
    await axios.post('/api/users/register', state).then(() => {
      reset({
        userName: '',
        email: '',
        password: '',
        confirmedPassword: '',
      });
      router.push(redirect || '/');
    });
  };

  return (
    <div className={styles.registerContainer}>
      <Header />
      <div className={styles.register}>
        <div className={styles.registerForm}>
          <h2 className={styles.title}>Register Form</h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              labelName="Name"
              label="userName"
              errors={errors}
              register={register}
              type="name"
              inputType="text"
            />
            <InputComponent
              labelName="Email"
              label="email"
              errors={errors}
              register={register}
              type="email"
              inputType="text"
            />
            <InputComponent
              labelName="Password"
              label="password"
              errors={errors}
              register={register}
              type="password"
              inputType="password"
            />
            <InputComponent
              labelName="Confirm Password"
              label="confirmedPassword"
              errors={errors}
              register={register}
              type="password"
              inputType="password"
            />
            <ErrorMessage
              errors={errors}
              name="passwords"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p className={styles.error} key={type}>
                    {message}
                  </p>
                ))
              }
            />
            <button className={styles.button} type="submit">
              Register
            </button>
          </form>
        </div>
        <div className={styles.icosahedron}>
          <Icosahedron />
        </div>
        {/* <div id='marquee' className={styles.marquee}>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
          <span>Jakub</span>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
