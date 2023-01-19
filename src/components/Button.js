import PropTypes from 'prop-types';

const Button = ({
    buttonLabel, onAddClick
}) => {

    return (
        <>
            <button onClick={onAddClick} className="btn">
                {buttonLabel}
            </button>
        </>
    )
}

Button.propTypes = {
    buttonLabel: PropTypes.string,
    onAddClick: PropTypes.func
};

Button.defaultProps = {
    buttonLabel: 'Add New',
    onAddClick: function () {
        console.log('Add Clicked');
    }
};

export default Button;