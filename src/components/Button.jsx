import PropTypes from 'prop-types';

const Button = ({
    defaultState,
    buttonLabel,
    onAddClick
}) => {
    const onBtnClick = function () {
      onAddClick();
    };
    
    return (
        <>
          <button 
            onClick={onBtnClick} 
            className="btn btn-dark"
          >
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