import { FC, ReactElement }from 'react';
import './styles.scss';

type Props = {
  children: ReactElement | ReactElement[];
}

const ListTh: FC<Props> = ({ children }) => {
  return (
    <tr className='list'>{children}</tr>
  )
}

export default ListTh;
