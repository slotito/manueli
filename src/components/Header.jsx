import { Filters } from './Filters.jsx'
import PropTypes from 'prop-types'

export function Header({ changeFilters}) {
    return (
        <>
            <header className='header'>
                <h1>React Shop</h1>
                <Filters onChange={changeFilters} />
            </header>
        </>
    );
}

Header.propTypes = {
    changeFilters: PropTypes.func.isRequired,
}