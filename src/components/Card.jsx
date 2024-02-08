const Card = ({ image, selected, onClick }) => {

    return (
        <div className="card">
            <div className={selected && 'selected'}>
                <img alt="" src={image} classname="card-face" />

                <img
                    alt=""
                    className="card-back"
                    src={'/assets/fireship.png'}
                    />
            </div>
        </div>
    );
};

export default Card;