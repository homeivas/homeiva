import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  urlApi: string;
  prefix?: string
}

export const GetResponseApi = ({ urlApi, prefix }: Props) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);  

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${urlApi}`)
        .then((res) => setResponse(res.data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [urlApi]);

  return { response, error, loading };
};

export default GetResponseApi;
