import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputComponent from '@element/InputComponent';
import { useEffect } from 'react';

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
    console.log(state);
    reset({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
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
          />
          <InputComponent
            labelName="Email"
            label="email"
            errors={errors}
            register={register}
          />
          <InputComponent
            labelName="Message"
            label="message"
            errors={errors}
            register={register}
          />
       
          {/* <input
            type="text"
            {...register('name', {
              minLength: {
                value: 4,
                message: 'At least 4 characters',
              },
              maxLength: {
                value: 12,
                message: 'Up to 12 characters',
              },
              required: {
                value: true,
                message: 'Name is required',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className={styles.error} key={type}>{message}</p>
              ))
            }
          /> */}

          <button type="submit" className={styles.contactButton}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.icosahedron}></div>
    </div>
  );
};

export default Contact;
