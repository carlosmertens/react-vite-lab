import { FormEvent, useRef, useState } from 'react';
import styles from './form.module.css';

function Form() {
  // useState
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });

  // useRef
  const myTextRef = useRef<HTMLInputElement>(null);
  const myNumberRef = useRef<HTMLInputElement>(null);
  const myData = {
    myText: '',
    myNumber: 0,
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // useRef
    if (myTextRef.current !== null) {
      myData.myText = myTextRef.current.value;
    }
    if (myNumberRef.current !== null) {
      myData.myNumber = Number(myNumberRef.current.value);
    }
    console.log(myData);

    // useState
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* useRef */}
      <div className={styles.fieldGroup}>
        <label htmlFor='myText'>My Text Field:</label>
        <input type='text' name='' id='myText' ref={myTextRef} />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor='myNumber'>My Number Field:</label>
        <input type='number' name='' id='myNumber' ref={myNumberRef} />
      </div>

      {/* useState */}
      <div className={styles.fieldGroup}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name=''
          id='name'
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor='age'>Age:</label>
        <input
          type='number'
          name=''
          id='age'
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
