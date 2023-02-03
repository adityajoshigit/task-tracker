import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({
    title
}) => {
    const btnLabel = 'Add';

    const onAddClick = () => {
        console.log('Add Click Handler');
    };

    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Button buttonLabel={btnLabel} />
        </header>
    );
};

Header.defaultProps = {
    title: 'Header'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;