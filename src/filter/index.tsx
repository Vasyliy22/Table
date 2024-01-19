import { Account } from "../types/Account";
import { Compaign } from "../types/Compaign";
import { Profile } from "../types/Profile";
// import { Compaign } from "../types/Compaign";
// import { Profile } from "../types/Profile";

export enum OptionsTypeAccount {
  STARTED = 'Started',
  ID = 'Id',
  TOKEN = 'AuthToken',
  DATE = 'CreationDate',
  COUNTRY = 'Country',
  EUROPA = 'Europa',
  WEST_AMERICA = 'West America',
  ASIA = 'Asia',
  SOUTH__AMERICA = 'South America',
  MARKET_PLACE = 'Market Place',
  COST = 'Cost',
  CLICK = 'Click',
}

export const filteredAccount = (data: Account[], options: OptionsTypeAccount) => {
  const copyAccount = [...data];

  switch (options) {
    case OptionsTypeAccount.ID:
      copyAccount.sort((a, b) => b.id - a.id);
      break;
    case OptionsTypeAccount.TOKEN:
      copyAccount.sort((a, b) => +a.authToken - +b.authToken);
      break;

    case OptionsTypeAccount.DATE:
      copyAccount.sort((a, b) => Number(new Date(a.creationDate)) - Number(new Date(b.creationDate)));
      break;

    default: OptionsTypeAccount.STARTED
      copyAccount;
      break;
  }

  return copyAccount;
}

export const getUpdateProfile = (profiles: Profile[], options: OptionsTypeAccount) => {
  let copyProfiles = [...profiles];

  switch (options) {
    case OptionsTypeAccount.ID:
      copyProfiles.sort((a, b) => b.id - a.id);
      break;

    case OptionsTypeAccount.COUNTRY:
      copyProfiles = copyProfiles.sort((a, b) => b.country.localeCompare(a.country));
      break;

      case OptionsTypeAccount.MARKET_PLACE:
        copyProfiles = copyProfiles.sort((a, b) => b.marketPlace.localeCompare(a.marketPlace));
      break;

    case OptionsTypeAccount.EUROPA:
       copyProfiles = copyProfiles.filter(item => item.marketPlace !== OptionsTypeAccount.EUROPA);
      break;

    case OptionsTypeAccount.ASIA:
      copyProfiles = copyProfiles.filter(item => item.marketPlace === OptionsTypeAccount.ASIA);
      break;

    case OptionsTypeAccount.WEST_AMERICA:
      copyProfiles = copyProfiles.filter(item => item.marketPlace === OptionsTypeAccount.WEST_AMERICA);
      break;

    case OptionsTypeAccount.SOUTH__AMERICA:
      copyProfiles = copyProfiles.filter(item => item.marketPlace === OptionsTypeAccount.SOUTH__AMERICA);
      break;

    default: OptionsTypeAccount.STARTED
      copyProfiles;
      break;
  }

  return copyProfiles;
}

export const getUpdateCompaign = (compaigns: Compaign[], options: OptionsTypeAccount) => {
  const copyCompaign = [...compaigns];

  switch (options) {
    case OptionsTypeAccount.ID:
      copyCompaign.sort((a, b) => b.compaignId - a.compaignId);
      break;
    case OptionsTypeAccount.CLICK:
      copyCompaign.sort((a, b) => +a.clicks - +b.clicks);
      break;

    case OptionsTypeAccount.COST:
      copyCompaign.sort((a, b) => +a.cost - +b.cost );
      break;

      case OptionsTypeAccount.DATE:
      copyCompaign.sort((a, b) => +a.date - +b.date);
      break;

    default: OptionsTypeAccount.STARTED
      copyCompaign;
      break;
  }

  return copyCompaign;
}