import { ErrorMessage } from '@hookform/error-message';

import styles from './index.module.scss';

const InputComponent = ({ errors, register, labelName, label }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={label}>
        {labelName}:
      </label>
      <input
        className={styles.input}
        type="text"
        id={label}
        {...register(label, {
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
            message: `${label} is required`,
          },
        })}
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
  );
};

export default InputComponent;
