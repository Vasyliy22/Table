import { useEffect, useState } from 'react';
import './App.scss';
import Accounts from './containers/Accounts';
import Company from './containers/Company';
import Profiles from './containers/Profiles';
import { getData } from './api';
import { Account } from './types/Account';
import { Profile } from './types/Profile';
import { Compaign } from './types/Compaign';
import { OptionsTypeAccount, filteredAccount, getUpdateCompaign, getUpdateProfile } from './filter';

function App() {
  const [data, setData] = useState<Account[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [compaigns, setCompaigns] = useState<Compaign[]>([]);
  const [error, setError] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  const [update, setUpdate] = useState<OptionsTypeAccount>(OptionsTypeAccount.STARTED);

  useEffect(() => {
    setLoader(true);
    getData().then(res => setData(res))
    .finally(() => setLoader(false));
  }, []);

  const handleClickProfile = (acc: Account) => {
    setLoader(true);
    setProfiles(acc.profiles);
    const timer = setTimeout(() => {
      setLoader(false);
      clearTimeout(timer);
    }, 500);
  };

  const handleResetProfiles = () => {
    setLoader(true);
    setProfiles([]);
    const timer = setTimeout(() => {
      setLoader(false);
      clearTimeout(timer);
    }, 500);
  };

  const handleResetCompaign = () => {
    setLoader(true);
    setCompaigns([]);
    const timer = setTimeout(() => {
      setLoader(false);
      clearTimeout(timer);
    }, 500);
  }

  const handleClickCompaign = (acc: Profile) => {
    if (!acc.compaigns) {
      setError('Compaign is not Defined');
      return;
    }

    setLoader(true);
    setCompaigns(acc.compaigns);
    const timer = setTimeout(() => {
      setLoader(false);
      clearTimeout(timer);
    }, 500);
  }

  const timer = setTimeout(() => {
    setError('');
    clearTimeout(timer);
  }, 2000);

  const sortedAccounts = filteredAccount(data, update);
  const filteredProfiles = getUpdateProfile(profiles, update);
  const sortedCompaigns = getUpdateCompaign(compaigns, update);

  return (
    <>
    {!profiles.length
      ? <Accounts
          data={sortedAccounts}
          loader={loader}
          onClick={handleClickProfile}
          setUpdate={setUpdate}
          update={update}
        />
      : <>
        {compaigns.length === 0
          ? <Profiles
              profile={filteredProfiles}
              error={error}
              loader={loader}
              setUpdate={setUpdate}
              update={update}
              onClick={handleResetProfiles}
              onClickCompaign={handleClickCompaign}
            />
              : <Company
                  compaigns={sortedCompaigns}
                  loader={loader}
                  setUpdate={setUpdate}
                  update={update}
                  onClick={handleResetCompaign}
                />
          }
      </>
    }
    </>
  )
}

export default App;
