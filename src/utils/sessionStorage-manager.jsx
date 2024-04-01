
export default function sessionStorageManager(appName) {

    const sessionStorageList = [
        {
            name: "traskassControle",
            sessionList: [
                "activatedIndexTraskassControle",
                "windowTraskassControle",
                "nbVoyageTotal",
                "incidentsStateData",
                "nbControlePerDrivers",
                "trakassControleStateSearchRequest",
                "trakassControleStateLoading",
                "trakassControleErrorStateLoading",
                "voyagesStateData",
                "nbVoyageEnCours",
                "chartDataDriversLabels",
                "chartDataDriversControle",
                "chartDataDriversVoyage",
                "lastUpdate",
            ]
        },
        {
            name: "SAV",
            sessionList: [
                "SAVStateSearchRequest",
                "SAVStateSearchResponse",
                "SAVStateLoading",
            ]
        },
        {
            name: "dashboard",
            sessionList: [
                "window",
                "activatedIndex",
                "windowAdmin",
                "PerimetreAddLoading",
                "PerimetreAddErrorMsg",
                "PerimetreListLoading",
                "PerimetreListErrorMsg",
            ]
        },
        {
            name: "trascharge",
            sessionList: [
                "windowTrascharge",
                "activatedIndexTrascharge",
            ]
        },
        {
            name: "raquai",
            sessionList: [
                "windowRaquai",
                "activatedIndexRaquai",
            ]
        },
    ];

    for (let i = 0; i < sessionStorageList.length; i++) {
        if (appName !== sessionStorageList[i].name){
            console.log(appName);
            for (let j = 0; j < sessionStorageList[i].sessionList.length; j++) {
                sessionStorage.removeItem(sessionStorageList[i].sessionList[j]);
            }
        }
    };
}
