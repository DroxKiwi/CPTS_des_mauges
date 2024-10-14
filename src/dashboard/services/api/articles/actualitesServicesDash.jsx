
import OptionsFetch from '../../../../utils/optionsFetch';
import { ls, ss } from '../../../../utils/store';

export const API_actualitesDash = {
    async get_all(){
        try {
            const api = process.env.REACT_APP_BASE_API_URI + '/articles/all';
            const answer = await fetch(api, await OptionsFetch.GET());
            return await answer.json();
        }
        catch(error){
            console.error(error);
            return(false);
        }
    },

    async get_by_id(article_id){
        try {
            const api = process.env.REACT_APP_BASE_API_URI + '/articles/byid/' + article_id;
            const answer = await fetch(api, await OptionsFetch.GET());
            return await answer.json();
        }
        catch(error){
            console.error(error);
            return(false);
        }
    },

    async create_article(name, base64, tag, actif){
        if (name !== '' && base64 !== null && tag !== null){
            console.log(name, base64, tag.tag_id, actif);
            const apiCmd = process.env.REACT_APP_BASE_API_URI + '/articles/new';
            const FormData = require('form-data');
            const formData = new FormData();
            formData.append('name', name);
            formData.append('img', base64);
            formData.append('tagid', tag.tag_id);
            formData.append('actif', actif);
            try {
                const answer = await fetch(apiCmd, await OptionsFetch.POST(formData)).then((res => {
                    if (res.status === 200) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }))
                return answer;
            }
            catch(error){
                return false;
            }
        }
    }
};

