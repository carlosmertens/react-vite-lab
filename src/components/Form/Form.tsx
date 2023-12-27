// import { FormEvent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './form.module.css';

function Form() {
  interface FormData {
    myText: string;
    myNumber: number;
    name: string;
    age: number;
  }

  // console.log(useForm());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    console.log(typeof data.age);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fieldGroup}>
        <label htmlFor='myText'>My Text Field:</label>
        <input
          type='text'
          id='myText'
          {...register('myText', { required: true, minLength: 3 })}
        />
        {errors.myText?.type === 'required' && (
          <p className='errors'>Field required!</p>
        )}

        {errors.myText?.type === 'minLength' && (
          <p className='errors'>Length at least 3 char!</p>
        )}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor='myNumber'>My Number Field:</label>
        <input type='number' id='myNumber' {...register('myNumber')} />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' {...register('name')} />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor='age'>Age:</label>
        <input type='number' id='age' {...register('age')} />
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
