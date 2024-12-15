
import OptionsFetch from '../../../../utils/optionsFetch';
import { ls, ss } from '../../../../utils/store';

export const API_globalsDash = {
    async get_all(){
        try {
            const api = process.env.REACT_APP_BASE_API_URI + '/globaldatas/all';
            const answer = await fetch(api, await OptionsFetch.GET());
            return await answer.json();
        }
        catch(error){
            console.error(error);
            return(false);
        }
    },

    async update_global(globaldata_id, tel, adr, postalcode, facebook, linkedin, chiffrepsl, chiffrecom, chiffrehab){
        const apiCmd = process.env.REACT_APP_BASE_API_URI + '/globaldatas/update';
        const FormData = require('form-data');
        const formData = new FormData();

        formData.append('globaldata_id', globaldata_id);
        formData.append('tel', tel);
        formData.append('adr', adr);
        formData.append('postalcode', postalcode);
        formData.append('facebook', facebook);
        formData.append('linkedin', linkedin);
        formData.append('chiffrepsl', chiffrepsl);
        formData.append('chiffrecom', chiffrecom);
        formData.append('chiffrehab', chiffrehab);
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
};
