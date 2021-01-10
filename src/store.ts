import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (text: string, createdAt: string): Promise<void> => {
  const key = `${createdAt}`;

  const value = JSON.stringify({
    text,
    createdAt,
  });

  await AsyncStorage.setItem(key, value);
};

export interface IMemo {
  text: string;
  createdAt: string;
}

export const loadAll = async (): Promise<IMemo[]> => {
  const keys = await AsyncStorage.getAllKeys();
  keys.sort();

  const entryList = (await AsyncStorage.multiGet(keys)).filter(
    (item: [string, string | null]): item is [string, string] =>
      item[1] !== null
  );
  return (entryList.map((entry) => JSON.parse(entry[1])) as unknown) as IMemo[];
};
