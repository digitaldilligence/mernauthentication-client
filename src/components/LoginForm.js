import React, {useContext, useEffect} from 'react'
import Profile from './Profile';
import { AuthContext } from '../contexts/AuthContext';
const LoginForm = () => {
    
    const {getUserById,logout, currentUser, login} = useContext(AuthContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const userLogin = 'username='+e.target.username.value+'&password='+ e.target.password.value;
        login(userLogin);
    }
    useEffect(() =>{
        let userid = localStorage.getItem('userid');
        if(userid){
            getUserById(userid);
        }
        //setTimeout(() =>userid?getUserById(userid):console.log('no user'), 5000);
    }, [])
    return (
        
        <div className="form-wrapper">
            {currentUser.id?<div><Profile user={currentUser}/><button onClick={logout}>Logout</button></div>:(
                <form onSubmit={handleSubmit}>
                    <h1>Log in</h1>
                    <input required type="text" id="username" name="username" placeholder="Username"/> <br />
                    <input required type="password" id="password" name="password" placeholder="Password"/><br />
                    <button>Login</button>
                </form>
            )}
        </div>
    )
}
export default LoginForm;
