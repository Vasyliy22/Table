import { Account } from "./types/Account";
const API_URL = 'http://localhost:5173/api/account.json';



function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

// export const getData = async (): Promise<Account[]> => {
//   const response = await fetch(API_URL);

//   return wait(500) => response.json();
// }

export function getData(): Promise<Account[]> {
  return wait(500)
  .then(() => fetch(API_URL))
  .then(response => response.json());
}
