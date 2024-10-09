import { Badge } from 'primereact/badge';
import { ls, ss } from '../../../utils/store';
import { Dialog } from 'primereact/dialog';

const path = 'src/services/MenuDashboardServices.jsx';

export const MenuDashboard = {
    getNavSettings(setChildW) {
        try {
            const result = [
                {
                    label: 'Accueil',
                    icon: 'pi pi-home',
                    command: () => {
                        ss.set("menu", "general");
                        window.top.location.href= '/dashboard';
                    }
                },
                {
                    label: 'Gestion des Tags',
                    icon: 'pi pi-box',
                    command: () => {
                        ss.set("menu", "general");
                        window.top.location.href= '/dashboard/createtags';
                    }
                },
                {
                    label: 'Retourner sur le site',
                    icon: 'pi pi-globe',
                    command: () => {
                        ss.rm("menu");
                        window.top.location.href= '/';
                    }
                },
                {
                    label: 'Administrateur',
                    icon: 'pi pi-id-card',
                    items: [
                        {
                            label: 'Se déconnecter',
                            icon: 'pi pi-fw pi-power-off',
                            command: () => {
                                ls.rm("accesstoken");
                                ls.rm("bearerToken");
                                ss.rm("editmode");
                                window.top.location.href= '/dashboard';
                            }
                        },
                    ]
                },
            ]
            return result;
        }
        catch(error){
            console.error(error);
        }
    },

    getAppList(setChildW, setUrlViewer){
        try {
            const apps = [

                {
                    appName: 'home',
                    label: 'Accueil',
                    icon:'pi pi-fw pi-code',
                    command:()=>{
                        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                            window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                        }
                        setUrlViewer("/")
                    },
                    items: [],
                },

                {
                    appName: 'pre',
                    label: 'Présentation',
                    icon:'pi pi-fw pi-code',
                    command:()=>{
                        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                            window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                        }
                        setUrlViewer("/presentation")
                    },
                    items: [],
                },

                {
                    appName: 'bec',
                    label: 'Bureau et Conseil',
                    icon:'pi pi-fw pi-code',
                    command:()=>{ 
                        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                            window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                        }
                        setUrlViewer("/bureauetconseil")
                    },
                    items: [],
                },

                {
                    appName: 'prj',
                    label: 'Nos projet / Mission',
                    icon:'pi pi-fw pi-code',
                    command:()=>{ 
                        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                            window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                        }
                        setUrlViewer("/projetdesante")
                    },
                    items: [],

                },

                {
                    appName: 'act',
                    label: 'Nos Actualités',
                    icon:'pi pi-fw pi-code',
                    items: [
                        {
                            label: 'Visualiser',
                            icon: 'pi pi-eye',
                            command:()=>{ 
                                if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                                    window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                                }
                                setUrlViewer("/nosactualites")
                            },
                        },
                        {
                            label: 'Ajouter',
                            icon: 'pi pi-plus',
                            command: () => {
                                window.top.location.href= 'http://localhost:3000/dashboard/addarticle';   
                            }
                        }
                    ]
                },

                {
                    appName: 'jsp',
                    label: 'Je Suis Patient',
                    icon:'pi pi-fw pi-code',
                    command:()=>{ 
                        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                            window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                        }
                        setUrlViewer("/jesuispatient")
                    },
                    items: [],
                },

                {
                    appName: 'jspr',
                    label: 'Je Suis Professionnel',
                    icon:'pi pi-fw pi-code',
                    command:()=>{ 
                        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                            window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                        }
                        setUrlViewer("/jesuisprofessionnel")
                    },
                    items: [],
                },

                {
                    appName: 'adh',
                    label: 'Comment Adhérer',
                    icon:'pi pi-fw pi-code',
                    command:()=>{ 
                        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                            window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                        }
                        setUrlViewer("/adherer")
                    },
                    items: [],
                },

                {
                    appName: 'ctc',
                    label: 'Contact',
                    icon:'pi pi-fw pi-code',
                    command:()=>{ 
                        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
                            window.top.location.href= 'http://localhost:3000/dashboard/viewer';   
                        }
                        setUrlViewer("/contact")
                    },
                    items: [],
                },
            ];
    
            var userPanels = [
                {
                    items: apps
                },
            ]
    
            return userPanels;
        }
        catch(error){
            console.error(error);
        }

    },
};

