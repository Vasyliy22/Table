import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement[];
}

const Table: FC<Props> = ({ children }) => {
  return (
    <table className='account'>{children}</table>
  )
}

export default Table;
