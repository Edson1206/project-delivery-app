import { useEffect, useState } from 'react';

const useLocalStorage = (key, value) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const asyncCallBack = async () => {
      if (value) {
        const userAlreadyExists = await JSON.parse(localStorage.getItem(key));

        if (!userAlreadyExists) {
          localStorage.setItem(key, JSON.stringify(value));
        }
      } else {
        setResult(await JSON.parse(localStorage.getItem(key)));
      }
    };

    asyncCallBack();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return result || [];
};

export default useLocalStorage;
