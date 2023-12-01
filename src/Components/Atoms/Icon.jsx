import '@mui/styled-engine'
import Icon1 from '@mui/icons-material/Home';
import Icon2 from '@mui/icons-material/Send';
// Importez toutes les icônes nécessaires

const Icon = ({ value }) => {
    let valueToDisplay;

    switch (value) {
        case 'icon1':
            valueToDisplay = <Icon1 />;
            break;
        case 'icon2':
            valueToDisplay = <Icon2 />;
            break;
      
        default:
            valueToDisplay = <span>Icon non trouvé</span>;
            break;
    }

    return valueToDisplay;
};

export default Icon;