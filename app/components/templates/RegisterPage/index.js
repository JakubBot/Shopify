import Header from '@element/Header';
import Footer from '@element/Footer';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';

import InputComponent from '@element/InputComponent';
import { useEffect } from 'react';
import Icosahedron from '@element/Icosahedron';
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
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
    console.log(state);
    // await axios.post('/api/ideas', state).then(() => {
    //   reset({
    //     userName: '',
    //     email: '',
    //     message: '',
    //   });
    // });
  };
  useEffect(() => {
    // gsap.to('#marquee', {
    //   x: "+=200",
    //   duration: 1.6,
    //   repeat: -1,
    //   ease: "none",
    // })
  }, []);
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
              label="confirmPassword"
              errors={errors}
              register={register}
              type="password"
              inputType="password"
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
