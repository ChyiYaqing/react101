import { useState } from 'react'

export default function ParentComponent() {
    const [feed, setFeed] = useState('John')
    return (
        <>
            <ChildComponent
                name='John'
                age={29}
                hobbies={["read books", "drink coffee"]}
                occupation="Software Engineer"
                greetings={greetings}
            />
            <UserComponent />
            <ProfileComponent />
            <FeedComponent feed={feed} setFeed={setFeed}/>
        </>
    );
}

function greetings() {
    return 'Hello World'
}

function ChildComponent(props) {
    return <p>Hello World! my name is {props.name}, age is {props.age}, hobbies is {props.hobbies}, occupation is {props.occupation}; {props.greetings()}</p>

}

function UserComponent() {
    const [name, setName] = useState('John')
    return (
        <>
            <h1>Hello {name}</h1>
            <button onClick={() => setName('Mark')}>Change Name</button>
        </>
    )
}

function ProfileComponent() {
    return <h1> Profile Component </h1>;
}
function FeedComponent(props) {
    return (
        <>
        <h1>Hello {props.feed}</h1>
        <button onClick={() => props.setFeed('Mark')}>Change Name</button>
        </>
    )
}
