import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Divider } from './components/Divider/Divider';
import Form from './components/Form/Form';
import ExpandableText from './components/ExpandableText';
import Info from './components/Info';
import ListGroup from './components/ListGroup/ListGroup';
import Like from './components/Like';
import ProductLists from './components/ProductList';
import useUsers from './hooks/useUsers';

function App() {
  const cities = ['London', 'New York', 'Berlin', 'Paris', 'Madrid'];
  const conferences = ['JS', 'Typescript', 'React', 'NextJS'];
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(['happy', 'cheerfull']);
  const [customer, setCustomer] = useState({
    name: 'Carlos',
    address: {
      city: 'Berlin',
      zipCode: 0,
    },
  });
  const [category, setCategory] = useState('');
  const { users, fetchingError, isLoading } = useUsers();

  const handleUnmutable = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: Math.floor(Math.random() * 10) },
    });

    // add
    setTags([...tags, 'funny']);

    // update
    // setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));

    // remove
    // setTags(tags.filter((tag) => tag !== 'cheerfull'));
  };
  // console.log({ tags });

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <>
      <div>
        {isLoading && <p>Loading Data ...</p>}
        {fetchingError && <p>{fetchingError}</p>}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value=''></option>
          <option value='Clothing'>Clothing</option>
          <option value='HouseHold'>Household</option>
        </select>
      </div>
      <ProductLists category={category} />
      <Divider />

      <Header />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <button onClick={handleUnmutable}>
          ZipCode is {customer.address.zipCode}
        </button>
        <Info>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Info>
      </div>
      <Info>Click on the Vite and React logos to learn more</Info>

      <Divider />
      <Like onClick={() => console.log('clicked')} />

      <Divider />
      <section>
        <h2>List Group Component</h2>
        <ListGroup
          items={cities}
          heading='Cities'
          onSelectItem={handleSelectItem}
        />
        <ListGroup
          items={conferences}
          heading='Dev Conference'
          onSelectItem={handleSelectItem}
        />
      </section>

      <Divider />
      <section>
        <h2>Expandable Text</h2>
        <ExpandableText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          exercitationem reiciendis. Voluptatum esse cum possimus cupiditate
          tenetur voluptas? Dolore beatae officia voluptates nihil saepe atque,
          commodi velit, aperiam vel quod autem dignissimos aspernatur
          voluptatum quisquam, reiciendis ipsa laboriosam ratione ab facilis
          dolor dicta et voluptate. Magni, eius sequi dolor odio ab corporis
          cupiditate mollitia ducimus facere reprehenderit pariatur doloribus,
          velit quas. Libero earum magnam eum doloribus. Saepe aliquam odit
          laboriosam inventore quae ratione id autem a illum, expedita omnis
          deleniti praesentium commodi cupiditate repellat pariatur, debitis
          distinctio fugit sint porro consequuntur molestias ut? Quo blanditiis
          est possimus, minima voluptates soluta.
        </ExpandableText>

        <Divider />
        <Form />
      </section>
    </>
  );
}

export default App;
