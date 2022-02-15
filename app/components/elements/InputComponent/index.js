import { ErrorMessage } from '@hookform/error-message';

import styles from './index.module.scss';

const emailPattern =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const InputComponent = ({
  errors,
  register,
  labelName,
  label,
  type,
  inputType,
}) => {
  const email = {
    isEmail: type === 'email' ? true : false,
    pattern: emailPattern,
  };
  const message = {
    isMessage: type === 'message' ? true : false,
    min: 20,
    max: 100,
  };
  const name = {
    isName: type === 'name' ? true : false,
    min: 4,
    max: 15,
  };
  const password = {
    isPassword: type === 'password' ? true : false,
    min: 5,
    max: 14,
  };

  const errorMessage = (type) => {
    return {
      minLength: {
        value: type.min,
        message: `At least ${type.min} characters`,
      },
      maxLength: {
        value: type.max,
        message: `Up to ${type.max} characters`,
      },
      required: {
        value: true,
        message: `${labelName} is required`,
      },
    };
  };

  const checkErrors = () => {
    if (message.isMessage) return errorMessage(message);
    if (name.isName) return errorMessage(name);
    if (password.isPassword) return errorMessage(password);

    if (email.isEmail) {
      return {
        pattern: {
          value: email.pattern,
          message: 'Email Address not valid',
        },
        required: {
          value: true,
          message: `${labelName} is required`,
        },
      };
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor={label}>
          {labelName}:
        </label>
        <input
          className={styles.input}
          type={inputType}
          id={label}
          {...register(label, checkErrors())}
        />
        <ErrorMessage
          errors={errors}
          name={label}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className={styles.error} key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
    </>
  );
};

export default InputComponent;
