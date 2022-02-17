import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputComponent from '@element/InputComponent';
import { useRouter } from 'next/router';
import axios from 'axios';
import IcosahedronLayout from '@layout/IcosahedronLayout';
import { connect } from 'react-redux';
import * as userActions from '@redux/actions/userActions';

const LoginPage = ({ saveUser }) => {
  const router = useRouter();
  const { redirect } = router.query;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (state) => {
    try {
      const { data } = await axios.post('/api/users/login', state);
      saveUser(data);
      reset({
        email: '',
        password: '',
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
      <div className={styles.loginForm}>
        <h2 className={styles.title}>Login Form</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </button>
        </form>
      </div>
    </IcosahedronLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  saveUser: userActions.saveUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

