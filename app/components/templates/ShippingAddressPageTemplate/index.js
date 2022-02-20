import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputComponent from '@element/InputComponent';
import { useRouter } from 'next/router';
import axios from 'axios';
import IcosahedronLayout from '@layout/IcosahedronLayout';
import { connect } from 'react-redux';
import * as userActions from '@redux/actions/userActions';

import styles from './index.module.scss';


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
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
    },
  });
  const onSubmit = async (state) => {
    // try {
    //   const { data } = await axios.post('/api/users/login', state);
    //   saveUser(data);
    //   reset({
    //     email: '',
    //     password: '',
    //   });
    //   router.push(redirect || '/');
    // } catch (err) {
    //   alert(
    //     err.response && err.response.data && err.response.data.message
    //       ? err.response.data.message
    //       : err.message
    //   );
    // }
  };

  return (
    <IcosahedronLayout>
      <div className={styles.loginForm}>
        <h2 className={styles.title}>Shipping Address</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            labelName="Full Name"
            label="name"
            errors={errors}
            register={register}
            inputType="text"
          />
          <InputComponent
            labelName="Address"
            label="address"
            errors={errors}
            register={register}
            inputType="text"
          />
          <InputComponent
            labelName="City"
            label="city"
            errors={errors}
            register={register}
            inputType="text"
          />
          <InputComponent
            labelName="Postal Code"
            label="postalCode"
            errors={errors}
            register={register}
            inputType="text"
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
