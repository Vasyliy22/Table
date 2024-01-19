import { FC } from 'react';
import Table from '../components/Table';
import List from '../components/List';
import Tbody from '../components/Tbody';
import { Account } from '../types/Account';
import ListTh from '../components/ListTh';
import { Loader } from '../components/Loader';
import { OptionsTypeAccount } from '../filter';

type Props = {
  data: Account[],
  loader: boolean,
  update: OptionsTypeAccount,
  setUpdate: (value: OptionsTypeAccount) => void,
  onClick: (value: Account) => void,
}

const Accounts: FC<Props> = ({ data, update, loader, setUpdate, onClick }) => {
  return (
    <>
    {loader ? <Loader /> : (
      <>
        
        <div className='sorting'>
          <h1 className='title'>Table Accounts</h1>
            <label htmlFor='sort'>
              sortBy: <select
                id='sort'
                value={update}
                className='sort'
                onChange={({ target }) => setUpdate(target.value as OptionsTypeAccount)}
              >
                <option value={OptionsTypeAccount.STARTED}>{OptionsTypeAccount.STARTED}</option>
                <option value={OptionsTypeAccount.DATE}>{OptionsTypeAccount.DATE}</option>
                <option value={OptionsTypeAccount.ID}>{OptionsTypeAccount.ID}</option>
                <option value={OptionsTypeAccount.TOKEN}>{OptionsTypeAccount.TOKEN}</option>
              </select>
            </label>
        </div>
        <Table>
            <ListTh>
              <th className='item'>ID</th>
              <th className='item item--email'>Email</th>
              <th className='item item--token'>Token</th>
              <th className='item item--date'>Date</th>
            </ListTh>

            <Tbody>
            {data.map(account => (
              <List key={account.id} onClick={() => onClick(account)}>
                <td className='item'>{account.id}</td>
                <td className='item item--email'>{account.email}</td>
                <td className='item item--token'>{account.authToken}</td>
                <td className='item item--date'>{account.creationDate}</td>
            </List>
            ))}
          </Tbody>
        </Table>
      </>
    )}
    </>
  )
}

export default Accounts;
