import { FC, ReactElement }from 'react';
import './styles.scss';

type Props = {
  children: ReactElement[];
}

const Tbody: FC<Props> = ({ children }) => {
  return (
    <tbody className='body'>{children}</tbody>
  )
}

export default Tbody;