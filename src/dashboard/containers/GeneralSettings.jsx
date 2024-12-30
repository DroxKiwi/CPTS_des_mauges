

import { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputTextarea } from "primereact/inputtextarea";

import { API_globalsDash } from '../services/api/global/globalServicesDash';

function GeneralSettings () {

    const toast = useRef(null);

    const [tel, setTel] = useState('');
    const [mail, setMail] = useState('');
    const [adr, setAdr] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const [facebook, setFacebook] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [chiffrepsl, setChiffrepsl] = useState(null);
    const [chiffrecom, setChiffrecom] = useState(null);
    const [chiffrehab, setChiffrehab] = useState(null);
    const [hommepageprjstext, setHommepageprjstext] = useState('');
    const [quisommesnousmaintext, setQuisommesnousmaintext] = useState('');
    const [global_id, setGlobal_id] = useState(null);

    const showValid = () => {
        toast.current.show({ severity: "success", summary: "Sauvegarde réussie", detail: "Les informations sont modifiées avec succès", life: 3000 });
    };

    const showError = () => {
        toast.current.show({ severity: "success", summary: "Sauvegarde impossible", detail: "Un problème est survenu veuillez contacter le support", life: 3000 });
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await API_globalsDash.get_all();
                setGlobal_id(data[0].globaldata_id)
                setTel(data[0].tel);
                setMail(data[0].mail);
                setAdr(data[0].adr);
                setPostalcode(data[0].postalcode);
                setFacebook(data[0].facebook);
                setLinkedIn(data[0].linkedin);
                setChiffrepsl(data[0].chiffrepsl);
                setChiffrecom(data[0].chiffrecom);
                setChiffrehab(data[0].chiffrehab);
                setHommepageprjstext(data[0].hommepageprjstext);
                setQuisommesnousmaintext(data[0].quisommesnousmaintext);
            } 
            catch (error) {
                console.log(error);
            }
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function onlyNumbers(val) {
        return /^[0-9]+$/.test(val);
    };

    function handleSetTel (val) {
        if (onlyNumbers(val)) {
            setTel(val);
        }
        if (val.length == 0 ){
            setTel('');
        }
    };

    function handleSetPostalCode (val) {
        if (onlyNumbers(val)) {
            setPostalcode(val);
        }
        if (val.length == 0 ){
            setPostalcode('');
        }
    };

    async function handleUpdate() {
        try {
            API_globalsDash.update_global(global_id, tel, adr, postalcode, facebook, linkedin, chiffrepsl, chiffrecom, chiffrehab, hommepageprjstext, quisommesnousmaintext, mail);
            showValid();
        }
        catch(error){
            console.error(error);
            showError();
        }
    }

    return (
        <div>
            <Toast ref={toast} />
            <div className="grid place-items-center grid-cols-3">
                <h2>Informations générales</h2>
                <Button severity='success' label='Sauvegarder' onClick={handleUpdate} ></Button>
                <div>
                    <p>Numéro de téléphone</p>
                    <InputText value={tel} onChange={(e) => handleSetTel(e.target.value)} />
                </div>
                <div>
                    <p>Adresse mail</p>
                    <InputText value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>
                <div>
                    <p>Adresse</p>
                    <InputText value={adr} onChange={(e) => setAdr(e.target.value)} />
                </div>
                <div>
                    <p>Code postal</p>
                    <InputText value={postalcode} onChange={(e) => handleSetPostalCode(e.target.value)} />
                </div>
                <div>
                    <p>Lien facebook</p>
                    <InputText value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                </div>
                <div>
                    <p>Lien linkedin</p>
                    <InputText value={linkedin} onChange={(e) => setLinkedIn(e.target.value)} />
                </div>
                <div>
                    <p>Nombre de professionnel de santé</p>
                    <InputNumber value={chiffrepsl} onValueChange={(e) => setChiffrepsl(e.value)} useGrouping={false} />
                </div>
                <div>
                    <p>Nombre de communes</p>
                    <InputNumber value={chiffrecom} onValueChange={(e) => setChiffrecom(e.value)} useGrouping={false} />
                </div>
                <div>
                    <p>Nombre d'habitants</p>
                    <InputNumber value={chiffrehab} onValueChange={(e) => setChiffrehab(e.value)} useGrouping={false} />
                </div>
                <div>
                    <p>Texte de la page d'accueil</p>
                    <InputTextarea value={hommepageprjstext} onChange={(e) => setHommepageprjstext(e.target.value)} rows={10} cols={60} />
                </div>
                <div>
                    <p>Texte de la page "qui sommes nous"</p>
                    <InputTextarea value={quisommesnousmaintext} onChange={(e) => setQuisommesnousmaintext(e.target.value)} rows={10} cols={60} />
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings;