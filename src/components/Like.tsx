import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  // TODO:
  // Refactor componentDidMount into useEffect
  // componentDidMount() {
  //   const balance = localStorage.getItem('balance');
  //   if (balance) {
  //     this.setState({
  //       balance: Number(balance),
  //     });
  //   }
  //   window.addEventListener('beforeunload', () => {
  //     localStorage.setItem('balance', this.state.balance);
  //   });
  // }

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color='red' size={40} onClick={toggle} />;

  return <AiOutlineHeart size={40} onClick={toggle} />;
};

export default Like;
