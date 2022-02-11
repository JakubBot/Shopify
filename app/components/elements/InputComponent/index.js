import { ErrorMessage } from '@hookform/error-message';

import styles from './index.module.scss';

const emailPattern =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const InputComponent = ({ errors, register, labelName, label, type }) => {
  const email = {
    isEmail: type === 'email' ? true : false,
    pattern: emailPattern
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
  return (
    <>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor={label}>
          {labelName}:
        </label>
        <input
          className={styles.input}
          type="text"
          id={label}
          {...register(
            label,
            email.isEmail
              ? {
                  pattern: {
                    value: email.pattern,
                    message: 'Email Address not valid',
                  },
                  required: {
                    value: true,
                    message: `${label} is required`,
                  },
                }
              : {
                  minLength: {
                    value: message.isMessage ? message.min : name.min,
                    message: `At least ${
                      message.isMessage ? message.min : name.min
                    } characters`,
                  },
                  maxLength: {
                    value: message.isMessage ? message.max : name.max,
                    message: `Up to ${
                      message.isMessage ? message.max : name.max
                    } characters`,
                  },
                  required: {
                    value: true,
                    message: `${label} is required`,
                  },
                }
          )}
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
