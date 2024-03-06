import { userState } from 'react'
function App(props) {
    const { user } = props

    return (
    <>
        <h1>Hello there!</h1>
        { user? <button>Logout</button> : <button>Login</button>}
    </>
    )
}

export default App
