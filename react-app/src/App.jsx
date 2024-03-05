import { userState } from 'react'
function App() {
    const users = [
        {id: 1, name: 'Nathan', role: 'Web Developer'},
        {id: 2, name: 'John', role: 'Web Designer'},
        {id: 3, name: 'Jane', role: 'Team Leader'},
    ]
    return (
        <>
            <p>The currently active users list:</p>
            <ul>
        {
            users.map(function(user){
                // returns Nathan, then John, then Jane
                return (
                    <li key={user.id} > {user.name} as the {user.role} </li>
                )
            })
        }
            </ul>
        </>
    )
}

export default App
