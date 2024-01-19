import { FC, ReactElement }from 'react';
import './styles.scss';

type Props = {
  children: ReactElement | ReactElement[];
  onClick?: () => void;
}

const List: FC<Props> = ({ children, onClick }) => {
  return (
    <tr className='list' onClick={onClick}>{children}</tr>
  )
}

export default List;
