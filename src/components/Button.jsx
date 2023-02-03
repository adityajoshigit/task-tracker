import PropTypes from 'prop-types';

const Button = ({
    buttonLabel
}) => {
    const onAddClick = function () {
      console.log('Add Clicked..');
    };
    
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