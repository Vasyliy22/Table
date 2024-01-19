import { Account } from "./types/Account";
const API_URL = 'https://vasyliy22.github.io/Table/api/account.json';



function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function getData(): Promise<Account[]> {
  return wait(500)
  .then(() => fetch(API_URL))
  .then(response => response.json());
}
