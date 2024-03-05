import { userState } from 'react'

export default function ParentComponent() {
    return (
        <>
        <UserComponent/>
        <ProfileComponent/>
        <FeedComponent/>
        </>
    );
}

function UserComponent() {
    return <h1> User Component </h1>;
}

function ProfileComponent() {
    return <h1> Profile Component </h1>;
}
function FeedComponent() {
    return <h1> Feed Component </h1>;
}
