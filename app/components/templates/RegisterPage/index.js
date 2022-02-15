import Header from '@element/Header';
import Footer from '@element/Footer';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';

import InputComponent from '@element/InputComponent';
import { useEffect } from 'react';
import gsap from 'gsap';

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
    gsap.to('#marquee', {
      x: "+=200",
      duration: 1.6,
      repeat: -1,
      ease: "none",
      // modifiers: {
      //   x: gsap.utils.unitize(x => parseFloat(x) % 200) //force x value to be between 0 and 500 using modulus
      // },
    })
  }, [])
  return (
    <div className={styles.registerContainer}>
      <Header />
      <div className={styles.register}>
        <h2>Register Form</h2>

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
          <button className={styles.button} type="submit">Register</button>
        </form>

        <div id='marquee' className={styles.marquee}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
