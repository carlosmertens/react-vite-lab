import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function Info({ children }: Props) {
  return <p>{children}</p>;
}

export default Info;
