import PropTypes from 'prop-types';

const Header = ({
    title
}) => {
    return (
        <h2 className='header flex-grow-1'>
            {title}
        </h2>
    );
};

Header.defaultProps = {
    title: 'Header'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;