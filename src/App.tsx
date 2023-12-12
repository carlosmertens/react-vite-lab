import { useState } from 'react';
import { Header } from './components/Header';
import { Divider } from './components/Divider/Divider';
import Info from './components/Info';
import ListGroup from './components/ListGroup/ListGroup';
import Like from './components/Like';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const cities = ['London', 'New York', 'Berlin', 'Paris', 'Madrid'];
  const conferences = ['JS', 'Typescript', 'React', 'NextJS'];

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <>
      <Header />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Info>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Info>
      </div>
      <Info>Click on the Vite and React logos to learn more</Info>

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
    </>
  );
}

export default App;
