import GroupIcon from '@mui/icons-material/Group';
import StorageIcon from '@mui/icons-material/Storage';
import PanoramaIcon from '@mui/icons-material/Panorama';
import PublicIcon from '@mui/icons-material/Public';
import DataArrayIcon from '@mui/icons-material/DataArray';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const panelDeControlItems = [
    {
        id: 0,
        icon: <GroupIcon/>,
        label: 'Mensajes',
        route: 'Mensajes',
    },
    {
        id: 1,
        icon: <StorageIcon/>,
        label: 'tableros',
        route: 'Tableros',
    },
    {
        id: 2,
        icon: <PanoramaIcon/>,
        label: 'calendario',
        route: 'Calendario',
    },
    {
        id: 3,
        icon: <PublicIcon/>,
        label: 'reportes',
        route: 'Reportes',
    },
    {
        id: 4,
        icon: <DataArrayIcon/>,
        label: 'configuracion',
        route: 'Configuracion',
    },
]