import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputComponent from '@element/InputComponent';
import { useRouter } from 'next/router';
import IcosahedronLayout from '@layout/IcosahedronLayout';
import { connect } from 'react-redux';
import * as shippingAddress from '@redux/actions/shippingAddress';

import styles from './index.module.scss';
import { useEffect } from 'react';

const LoginPage = ({ user, saveShippingAddress }) => {
  const router = useRouter();
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
  useEffect(() => {
    if (!user.token) router.push('/login?redirect=/shippingAddress');
  }, [user, router]);
  const onSubmit = async (state) => {
    saveShippingAddress(state);
    reset({
      email: '',
      password: '',
    });
    router.push('/order');
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
            Add Address
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
  saveShippingAddress: shippingAddress.saveShippingAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
