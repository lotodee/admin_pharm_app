import { useEffect } from 'react';

const useReloadOnMount = () => {
  useEffect(() => {
    window.location.reload();
  }, []);
};

export default useReloadOnMount;
