import {useState} from 'react';

function Form() {
    // set up the state that will serve as the input value.
    const [username, setUsername] = useState();

    // store the error message
    const [usernameError, setUsernameError] = useState();

    const handleUsername = (e) => {
        const { value } = e.target;
        setUsername(value);

        // Validate username value;
        if (value.length <= 6) {
            setUsernameError('Username length must be more than 6 characters');
        } else {
            setUsernameError();
        }
    };

    const handleSubmit = (e) => {
        // stop the default form submission behavior, which will trigger a refresh
        e.preventDefault();
        if (usernameError) {
            alert('Unable to submit: Form contain errors');
        } else {
            alert(username); // create an alert box to display the username value
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            Username:
            <input type='text' name='username' onChange={handleUsername}></input>
            <p>{usernameError}</p>
            <button>Submit</button>
        </form>
    );
}

export default Form
