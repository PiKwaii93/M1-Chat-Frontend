const State = ({ value }) => {

    const isActif = value ? 'Actif' : 'Inactif'
        
    return (
        <p>{isActif}</p>
    );
};

export default State;