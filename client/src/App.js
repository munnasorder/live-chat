/* eslint-disable prettier/prettier */
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import Login from './components/Login';

function App() {
    const projectID ="ad478cfe-ee6a-44f7-9d4a-2d72eb5286f9";

    if (!localStorage.getItem('username')) return <Login />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;
