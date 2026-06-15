import propTypes from "prop-types"
import PropTypes from "prop-types"

const UsersGreeting = (props) => {
    
    const welcomeMsg = <h2>Welcome {props.username}</h2>
    const error_msg = <h2>Please login to continue</h2>
    return (
        props.isLoggedin?welcomeMsg: error_msg 
    )
}

UsersGreeting.propTypes = {
    isLoggedin: propTypes.bool,
    username: propTypes.string
}
export default UsersGreeting