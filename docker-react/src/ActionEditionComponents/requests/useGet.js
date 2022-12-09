import { useState, useEffect } from 'react';
import errorToConsole from "../../common/errorToConsole";
import axios from "axios";
import authHeader from "../../services/auth-header";

const API_URL = process.env.REACT_APP_HOME_URL;

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        // setTimeout(() => {
        //     fetch(url)
        //         .then(res => {
        //             if (!res.ok) { // error coming back from server
        //                 throw Error('could not fetch the data for that resource');
        //             }
        //             return res.json();
        //         })
        //         .then(data => {
        //             setIsPending(false);
        //             setData(data);
        //             setError(null);
        //         })
        //         .catch(err => {
        //             // auto catches network / connection error
        //             setIsPending(false);
        //             setError(err.message);
        //         })
        // }, 1000);

        axios.get(API_URL + url, {headers: authHeader()})
            .then(response => {
                    if(response.status >= 200 && response.status <= 299){
                        setData(response.data)
                        console.log(response.data)
                        setLoading(false);
                    }
                },
                /// handle error
                (error) => {errorToConsole(error)}
            )
    }, [url])


    return { data, loading };
}

export default useGet;