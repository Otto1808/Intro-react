import {NavLink} from 'react-router-dom'
/**
 * 
 * @returns menu NavLink
 */
export const SwapHeader = () => {
    return(
        <menu>
            <NavLink to='/'>
                List
            </NavLink>
            <NavLink to='/Calendar'>
                Calendar
            </NavLink>
        </menu>
    )
}