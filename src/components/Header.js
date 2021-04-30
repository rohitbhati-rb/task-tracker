import PropTypes from 'prop-types'
import Button from "./Button";
import { useLocation } from 'react-router-dom'
// props (object) will be passed from app.js when this componenet will be rendered.
const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd} />
            )}
        </header>
    )
}
// If no props are passed then this value will be used by default
Header.defaultProps = {
    title: 'Task Tracker'
}
// Data type of props
Header.propTypes = {
    title: PropTypes.string.isRequired
}
// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
