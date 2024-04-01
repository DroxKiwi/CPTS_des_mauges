
import { useState, useEffect, useRef } from 'react';
import OptionsFetch from '../utils/optionsFetch';

function NotificationPinger (setDataNotif, inEditMode) {
    useEffect(() => {
        try {
            const interval = setInterval(function() {
                if (inEditMode){
                    const getData = async () => {
                        const url = process.env.REACT_APP_BASE_API_URI + '/utilsApp/notifications/allNotifications';
                        const answer = await fetch(url, await OptionsFetch.GET());
                        const jsonData = await answer.json();
                        setDataNotif(jsonData);
                    }
                    getData();
                }
            }, 1000);
            return () => clearInterval(interval);
        }
        catch(error){
            console.error(error);
        }
    }, [inEditMode]);
}

export default NotificationPinger;