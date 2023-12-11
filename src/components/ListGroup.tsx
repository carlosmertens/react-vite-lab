// import { MouseEvent } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <section>
      <h3>{heading}</h3>

      {items.length === 0 && <p>No item found!</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            key={index}
            className={`list-group-item ${selectedIndex === index && 'active'}`}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListGroup;
