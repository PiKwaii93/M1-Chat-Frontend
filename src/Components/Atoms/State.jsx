const State = ({ value }) => {
        
    return (
        <div className={`avatar avatar--${size}`}>
            <img src={value} alt={name} />
        </div>
    );
};

export default State;