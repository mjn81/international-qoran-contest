import { useState, useEffect } from 'react';
import { api } from '../api';

export const useGetData = (url,token) => {
    const [isLoading,  setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error , setError] = useState({msg: '' , code:-1});

    useEffect(() => {
        setIsLoading(true);
        api.get(url , {headers: {'Authorization': `JWT ${token}`}}).then(response => {
            if (response.status === 200) {
                return response.data;
            }
        }).then(data => {
            setData(data);
        }).catch(error => {
            if (error.response.status === 403) {
                setError({msg:'شما قبلا به این سوال پاسخ داده اید!!' , code :403});
                
            } else if (error.response.status === 401) {
                setError({ msg : 'مجددا لاگین کنید' , code :401});
                localStorage.removeItem('token');
            }
        }).finally(() => {
            setIsLoading(false);
        })
    }, []);

    return [data, error ,  isLoading];
}


export const useGetWinners = () => {
     const [isLoading, setIsLoading] = useState(false);
     const [data, setData] = useState(null);
     const [error, setError] = useState({ msg: '', code: -1 });

     useEffect(() => {
       setIsLoading(true);
       api
         .get('/contest/winners')
         .then((response) => {
           if (response.status === 200) {
             return response.data;
           }
         })
         .then((data) => {
           setData(data);
         })
         .finally(() => {
           setIsLoading(false);
         });
     }, []);

     return [data, error, isLoading];
}