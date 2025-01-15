

import { useState, useEffect, useRef } from "react";
import './bureauetconseil.css';
import OrganigrameItem from "./OrganigrameItem";
import userProfil from '../../assets/Images/User-Profile.png';
import orgServ from '../../services/organigrame.json';
import { SpeedDial } from 'primereact/speeddial';
import { ls, ss } from '../../../utils/store';
import Header from '../../header/Header';
import Footer from "../../footer/Footer";
import ErrorPage from "../../../utils/error-page";
import { API_bureauetca } from "../../services/api/bureauetcaServices";
import EditorWindowBCA from "../../../dashboard/tools/EditorWindowBCA";

import FullScreenCircularLayout from "./FullScreenCirularLayout";

function BureauEtConseil(props) {
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        ss.set('window', 'bureauetconseil');
    }, []);

    useEffect(() => {
        try {
            const getData = async () => {
                //setData(await await API_bureauetca.get_all());

                var dataTemp = await await API_bureauetca.get_all()
                const temp = dataTemp.map((item) => ({
                    ...item,
                    template: <OrganigrameItem imgSrc={userProfil} src={item} />,
                }));
                setItems(temp);
            }
            getData();
        }
        catch(error){
            console.error(error);
        }
    }, []);

    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);
    
    try {
        return (
            <div className='container-root'>
                <EditorWindowBCA>
                    <Header setHeaderHeight={props.setHeaderHeight} />
                    <div className='grid place-items-center card bg-transparent'>
                        <svg className='absolute w-[100%] h-[100%] z-0' xmlns="http://www.w3.org/2000/svg" width="1920" height="357" viewBox="0 0 1920 157" fill="none">
                        <path d="M2005 26.4999C2192 -63.5007 2398.5 106.001 2005 135.5C1625.21 163.971 -92.4998 451.5 -176 177C-199.762 98.8847 -293.541 -50.1995 -71.9997 54.0001C518 331.5 1818 116.501 2005 26.4999Z" fill="#F2EE2C" fill-opacity="0.33"/>
                        </svg>
                        <svg className='absolute w-[100%] h-[100%] z-0' xmlns="http://www.w3.org/2000/svg" width="1920" height="357" viewBox="0 0 1920 357" fill="none">
                        <path d="M1999.5 173.5C2186.5 83.4994 2363 250.501 1969.5 280C1589.71 308.471 -90.0001 475.501 -173.5 201C-197.262 122.885 -264.541 -74.1996 -43 30C547 307.5 1812.5 263.501 1999.5 173.5Z" fill="#F2EE2C" fill-opacity="0.33"/>
                        </svg>
                        <div className='grid place-items-center card bg-transparent'>
                            <h2 className='titlepage relative'>
                                Organigramme de la CPTS
                            </h2>
                        </div>
                        <div className="overflow-hidden h-screen grid grid-cols-1 place-items-center"
                        style={{marginTop: '200px', marginBottom: '200px'}}>
                            <FullScreenCircularLayout
                                items={items}
                                radius={320} // Radius of the circle
                                hoverScale={2.7} // Element size multiplier on hover
                                renderItem={(key, value) => (
                                <div
                                    style={{
                                    paddingTop: '200px',
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    }}
                                >
                                    <img
                                    src={value.img} // "img" used here
                                    className="object-cover"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        marginBottom: "5px",
                                    }}
                                    />
                                    <small style={{ fontSize: "12px", color: "gray" }}>{value.role.replaceAll('_GD_', '"').replaceAll('_GS_', "'")}</small>
                                    <strong>{value.name.replaceAll('_GD_', '"').replaceAll('_GS_', "'")}</strong>
                                    <small style={{ fontSize: "12px", color: "gray" }}>{value.description.replaceAll('_GD_', '"').replaceAll('_GS_', "'")}</small>
                                </div>
                                )}
                            />
                        </div>
                    </div>
                </EditorWindowBCA>
                <Footer />
            </div>
        )
    }
    catch(error){
        return <ErrorPage error={error} />
    }
}

export default BureauEtConseil;