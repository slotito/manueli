import { Filters } from './Filters_old.jsx'
import PropTypes from 'prop-types'

export function HeaderOld({ changeFilters}) {
    return (
        <>
            <header className='header'>
                <h1>React Shop</h1>
                <Filters onChange={changeFilters} />
            </header>
        </>
    );
}

HeaderOld.propTypes = {
    changeFilters: PropTypes.func.isRequired,
}