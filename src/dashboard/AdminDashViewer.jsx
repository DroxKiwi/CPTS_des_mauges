
import { useState, useEffect, useRef } from 'react';
import Viewer from './containers/Viewer';
import { ls, ss } from '../utils/store';
import './root.css';

import Footer from './components/footer/Footer';
import SideMenu from './components/SIdeMenu';

import { MenuDashboard } from './services/menus/MenuDashboardServices';

function AdminDashViewer () {

    const [childW, setChildW] = useState(null);
    const [urlViewer, setUrlViewer] = useState("/");

    const panelmenuitems = MenuDashboard.getAppList(setChildW, setUrlViewer);
    const menubaruser = MenuDashboard.getNavSettings(setChildW);

    useEffect(() => {
        ss.set("editmode", true);
    }, []);

    return (
        <div className="overflow-x-hidden wrapper">
            <div className="h-full w-full overflow-y-hidden">
                <SideMenu panelmenuitems={panelmenuitems} menubaruser={menubaruser}>
                    <Viewer setChildW={setChildW} urlViewer={urlViewer} />
                </SideMenu>
            </div>
        </div>
    )
}

export default AdminDashViewer;