import React, { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((response) => {
                setLoggedInUser(response.user);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className="container text-center py-5">
            <button className='btn btn-danger rounded-pill' onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Login;