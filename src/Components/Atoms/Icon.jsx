import '@mui/styled-engine'
import SendIcon from '@mui/icons-material/Send';
import SmsIcon from '@mui/icons-material/Sms';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
// Importez toutes les icônes nécessaires

const Icon = ({ value }) => {
    let valueToDisplay;

    switch (value) {
        case 'SendIcon':
            valueToDisplay = <SendIcon />;
            break;
        case 'SmsIcon':
            valueToDisplay = <SmsIcon />;
            break;
        case 'MoreVertIcon':
            valueToDisplay = <MoreVertIcon />;
            break;
        case 'DeleteIcon':
            valueToDisplay = <DeleteIcon />;
            break;
        case 'SearchIcon':
            valueToDisplay = <SearchIcon />;
            break; 
        case 'VisibilityIcon':
            valueToDisplay = <VisibilityIcon />;
            break;
      
        default:
            valueToDisplay = <span>Icon non trouvé</span>;
            break;
    }

    return valueToDisplay;
};

export default Icon;