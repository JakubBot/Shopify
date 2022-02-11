import { useForm } from 'react-hook-form';
import InputComponent from '@element/InputComponent';
import Icosahedron from '@element/Icosahedron';
import SocialIcons from '@element/SocialIcons';
import Footer from '@element/Footer';
import styles from './index.module.scss';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const getState = (state) => {
    reset({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <h2 className={styles.title}>New ideas?</h2>

          <h4 className={styles.subTitle}>Write to us!</h4>
          <form className={styles.form} onSubmit={handleSubmit(getState)}>
            <InputComponent
              labelName="Name"
              label="name"
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

            <button type="submit" className={styles.contactButton}>
              Submit
            </button>
          </form>
        </div>
        <div className={styles.icosahedron}>
          {window.innerWidth > 992 && <Icosahedron />}
        </div>
        <SocialIcons lDesktop />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
