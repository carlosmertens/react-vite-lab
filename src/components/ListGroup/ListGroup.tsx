// import { MouseEvent } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import styles from './ListGroup.module.css';

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
      <ul className={styles['list-group']}>
        {items.map((item, index) => (
          <li
            key={index}
            className={[
              styles['list-group-item'],
              styles[`${selectedIndex === index && 'active'}`],
            ].join(' ')}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}>
            <GiCheckMark color='blue' />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListGroup;
