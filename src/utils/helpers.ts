import { IUserData } from 'interfaces/IUserData';

export function instanceOfUserData(object: any): object is IUserData {
  return true;
}
