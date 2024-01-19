import { FC } from 'react';
import Table from '../components/Table';
import List from '../components/List';
import Tbody from '../components/Tbody';
import { Compaign } from '../types/Compaign';
import { Loader } from '../components/Loader';
import { OptionsTypeAccount } from '../filter';

type Props = {
  compaigns: Compaign[],
  loader: boolean,
  update: OptionsTypeAccount,
  setUpdate: (value: OptionsTypeAccount) => void,
  onClick: () => void,
}

const Company: FC<Props> = ({ compaigns, update, setUpdate, loader, onClick }) => {
  return (
    <>
      {loader ? <Loader /> : (
        <>
          <div className="name">
            <h1 className='name__title name__title--compaign'>Table Compaigns</h1>
            <div className="name__block name__block--compaign">
              <label className='name__label' htmlFor="sort">
                sortBy: <select
                          className='name__sort'
                          id='sort'
                          value={update}
                          onChange={({ target }) => setUpdate(target.value as OptionsTypeAccount)}
                        >
                  <option value={OptionsTypeAccount.STARTED}>{OptionsTypeAccount.STARTED}</option>
                  <option value={OptionsTypeAccount.ID}>{OptionsTypeAccount.ID}</option>
                  <option value={OptionsTypeAccount.CLICK}>{OptionsTypeAccount.CLICK}</option>
                  <option value={OptionsTypeAccount.COST}>{OptionsTypeAccount.COST}</option>
                  <option value={OptionsTypeAccount.DATE}>{OptionsTypeAccount.DATE}</option>
                </select>
              </label>
            </div>
            <button className='name__back' onClick={onClick}>Back to Profiles</button>
          </div>
          <Table>
              <List>
                <th className='item'>Compaign ID</th>
                <th className='item item--email'>Click</th>
                <th className='item item--token'>Cost</th>
                <th className='item item--date'>Date</th>
              </List>

            <Tbody>
              {compaigns.map(company => (
                <List key={company.compaignId}>
                  <td className='item'>{company.compaignId}</td>
                  <td className='item item--email'>{company.clicks}</td>
                  <td className='item item--token'>{company.cost}</td>
                  <td className='item item--date'>{company.date}</td>
                </List>
              ))}
            </Tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default Company