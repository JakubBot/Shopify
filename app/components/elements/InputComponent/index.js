import { ErrorMessage } from '@hookform/error-message';
import getType from './types';
import styles from './index.module.scss';

const InputComponent = ({ errors, register, labelName, label, inputType }) => {
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
    const type = getType(label);
    if (type?.isPassword) return errorMessage(type);
    if (type?.isShippingAddress) return errorMessage(type);
    if (type?.isMessage) return errorMessage(type);

    if (type?.isEmail) {
      return {
        pattern: {
          value: type.pattern,
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
