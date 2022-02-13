import { useForm } from 'react-hook-form';
import InputComponent from '@element/InputComponent';
import Icosahedron from '@element/Icosahedron';
import SocialIcons from '@element/SocialIcons';
import Footer from '@element/Footer';
import styles from './index.module.scss';
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
  const [activeButton, setActiveButton] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      userName: '',
      email: '',
      message: '',
    },
  });
  const onSubmit = async (state) => {
    await axios.post('/api/ideas', state).then(() => {
      setActiveButton(false);
      reset({
        userName: '',
        email: '',
        message: '',
      });
    });
  };
  
  return (
    <div>
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <h2 className={styles.title}>New ideas?</h2>

          <h4 className={styles.subTitle}>Write to us!</h4>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              labelName="Name"
              label="userName"
              errors={errors}
              register={register}
              type="text"
            />
            <InputComponent
              labelName="Email"
              label="email"
              errors={errors}
              register={register}
              type="email"
            />
            <InputComponent
              labelName="Message"
              label="message"
              errors={errors}
              register={register}
              type="message"
            />

            <button
              type={activeButton ? 'submit' : 'button'}
              className={`${styles.contactButton} ${
                !activeButton ? styles.activeButton : ''
              }`}
            >
              {activeButton ? 'Submit' : 'Thanks'}
              
            </button>
          </form>
        </div>
        <div className={styles.icosahedron}>
          {window.innerWidth > 992 && <Icosahedron />}
        </div>
        <SocialIcons lDesktop />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
