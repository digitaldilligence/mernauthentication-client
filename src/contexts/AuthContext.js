import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const [currentUser, setCurrentUser] = useState({
       username: '',
       password: '', 
       id:null
    })
    const [users, setUsers] = useState([]);

useEffect(() =>{
        if(currentUser.id){
            localStorage.setItem('userid', currentUser.id);
        }
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(users =>setUsers(users))
        //console.log(currentUser);
       
}, [currentUser]);

const getUserById = (id) =>{
    //console.log('http://localhost:5000/users/'+id);
    axios.get('http://localhost:5000/users/'+id)
    .then(res => setCurrentUser({
        username: res.data.username,
        password: res.data.password,
        id: res.data._id
    }));
    
}
const logout = () =>{
    setCurrentUser({
        username: '',
        password: '',
        id: null
    })
    localStorage.clear();
}
const login = (tryuser) => {
    let query = tryuser;
    axios.get('http://localhost:5000/users?'+query)
    /** .then(res => setCurrentUser({
        username: res.data[0].username,
        password: res.data[0].password,
        id: res.data[0]._id
    }))**/
    .then(res => 
        setCurrentUser({
            username: res.data[0].username,
            password: res.data[0].password,
            id: res.data[0]._id
        })
    );
    //console.log(currentUser);
    
    //console.log(currentUser);
    //setTimeout(()=>localStorage.setItem('user', user.id), 200);
    //setUser(() => user);
    //setTimeout(()=>console.log(currentUser.username), 1500);
}
return (
    <AuthContext.Provider value={{getUserById, setCurrentUser, currentUser, users, login, logout}}>
        {props.children}
    </AuthContext.Provider>
)


}
export default AuthContextProvider;