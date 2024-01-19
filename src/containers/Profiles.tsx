import { FC } from 'react';
import Table from '../components/Table';
import List from '../components/List';
import Tbody from '../components/Tbody';
import { Profile } from '../types/Profile';
import ListTh from '../components/ListTh';
import { Loader } from '../components/Loader';
import { OptionsTypeAccount } from '../filter';

type Props = {
  profile: Profile[],
  error: string,
  loader: boolean,
  update: OptionsTypeAccount,
  setUpdate: (value: OptionsTypeAccount) => void,
  onClick: () => void,
  onClickCompaign: (value: Profile) => void,
}

const Profiles: FC<Props> = ({
  profile,
  error,
  loader,
  update,
  setUpdate,
  onClick,
  onClickCompaign,
}) => {
  return (
    <>
      {loader ? <Loader /> : (
        <>
          <div className="name">
            <h1 className='name__title'>Table Profiles</h1>
              {error ? (<p className='error'>{error}</p>) : (
                <div className="name__block">
                  <label className='name__label' htmlFor="sort" >
                    sortBy: <select
                      value={update}
                      className='name__sort'
                      id='sort'
                      onChange={({ target }) => setUpdate(target.value as OptionsTypeAccount)}
                    >
                      <option value={OptionsTypeAccount.STARTED}>{OptionsTypeAccount.STARTED}</option>
                      <option value={OptionsTypeAccount.ID}>{OptionsTypeAccount.ID}</option>
                      <option value={OptionsTypeAccount.MARKET_PLACE}>{OptionsTypeAccount.MARKET_PLACE}</option>
                      <option value={OptionsTypeAccount.COUNTRY}>{OptionsTypeAccount.COUNTRY}</option>
                    </select>
                  </label>

                  <label className='name__label' htmlFor="filter">
                    filterBy: <select
                    value={update}
                    className='name__filter'
                    id='filter'
                    onChange={({ target }) => setUpdate(target.value as OptionsTypeAccount)}
                    >
                      <option value={OptionsTypeAccount.STARTED}>{OptionsTypeAccount.STARTED}</option>
                      <option value={OptionsTypeAccount.EUROPA}>{OptionsTypeAccount.EUROPA}</option>
                      <option value={OptionsTypeAccount.ASIA}>{OptionsTypeAccount.ASIA}</option>
                      <option value={OptionsTypeAccount.WEST_AMERICA}>{OptionsTypeAccount.WEST_AMERICA}</option>
                      <option value={OptionsTypeAccount.SOUTH__AMERICA}>{OptionsTypeAccount.SOUTH__AMERICA}</option>
                    </select>
                  </label>
                </div>
              )}
            <button className='name__back' onClick={onClick}>Back to Accounts</button>
          </div>
          
          <Table>
            <ListTh>
              <th className='item item--email'>Profile ID</th>
              <th className='item item--token'>Country</th>
              <th className='item item--date'>Market Place</th>
            </ListTh>

            <Tbody>
              {profile.map((profile) => (
                <List key={profile.id} onClick={() => onClickCompaign(profile)}>
                  <td className='item item--email'>{profile.id}</td>
                  <td className='item item--token'>{profile.country}</td>
                  <td className='item item--date'>{profile.marketPlace}</td>
                </List>
              ))}
            </Tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default Profiles;
