import { StoreAuthI } from "../../interfaces/common";

export enum IStorageEnum {
  USER = "youtube_clone_user",
}

export const getUser = (): StoreAuthI | null => {
  const itemString: string | null = localStorage.getItem(IStorageEnum.USER);

  if (!itemString) {
    return null;
  }

  const parsedItem = JSON.parse(itemString);

  return parsedItem;
};

export const setUser = (payload: StoreAuthI): boolean => {
  localStorage.setItem(IStorageEnum.USER, JSON.stringify(payload));
  return true;
};

export const logoutHandler = () => {
  const user = getUser();
  if (user) {
    user.authenticated = false;
    setUser(user);
  }
};
