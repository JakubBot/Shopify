import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputComponent from '@element/InputComponent';
import { useRouter } from 'next/router';
import axios from 'axios';
import IcosahedronLayout from '@layout/IcosahedronLayout';
import { connect } from 'react-redux';
import * as userActions from '@redux/actions/userActions';

const RegisterPage = ({saveUser}) => {
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
      name: '',
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
    try {
      const { data } = await axios.post('/api/users/register', state);
      saveUser(data)
      reset({
        name: '',
        email: '',
        password: '',
        confirmedPassword: '',
      });
      router.push(redirect || '/');
    } catch (err) {
      alert(
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
    <IcosahedronLayout>
      <div className={styles.registerForm}>
        <h2 className={styles.title}>Register Form</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            labelName="Name"
            label="name"
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
    </IcosahedronLayout>
  );
};



const mapDispatchToProps = {
  saveUser: userActions.saveUser,
};


export default connect(null, mapDispatchToProps)(RegisterPage);
