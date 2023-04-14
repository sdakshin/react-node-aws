import {useState} from 'react';
import Layout from "../components/Layout";
import axios from 'axios';
import { showSuccessMessage,showErrorMessage } from '../helpers/alerts';
import{API} from '../config';

const Register = () => {
    const [state, setState] = useState({
        name: 'suren',
        email: 'sdakshin@gmail.com',
        password: 'uyuyyioyiuyo',
        error: '',
        success:'',
        buttonText: 'Register'
    });

    const {name,email,password, error,success,buttonText} = state;

    const handleChange = name => (e) => {

        setState({...state,[name]: e.target.value, error :'' , success: '', buttonText:'Register'})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setState({...state,buttonText:'Registering'});
        try{            
            const response = await axios.post(`http://localhost:8000/api/register`,{
                                        name: name, email: email, password:password
                                       });
            setState({
                    name:''
                    ,email:''
                    ,password:''
                    ,buttonText:'Submitted'
                    //this is the response from sendEmailonRegister data
                    ,success: response.data.message }
            );

        }catch(error){
            setState({...state
                ,buttonText:'Register'
                //this is the response from sendEmailonRegister data
                ,error: error.response.data.error }
            )

        };

    }
    
    // const handleSubmit = async (e) => {
    //     //prevents default behavior of the event like opening a new page for the url
    //     //  e is short form for event 
    //     e.preventDefault();
    //     //console.table({name,email,password});

    //     axios.post(`http://localhost:8000/api/register`,{
    //         name: name, email: email, password:password

    //     })
    //     .then((response) => {
    //         //console.log(response)
    //         setState({
    //                    name:''
    //                   , email:''
    //                   ,password:''
    //                   ,buttonText:'Submitted'
    //                   //this is the response from sendEmailonRegister data
    //                   ,success: response.data.message }
    //                   )

    //     })
    //     .catch(error => {
    //         console.log(error)
    //         setState({...state
    //                  ,buttonText:'Register'
    //         //this is the response from sendEmailonRegister data
    //         ,error: error.response.data.error }
    //         )
            
    //     })

    // };


    const registerForm = () => (
        <form onSubmit= {handleSubmit}>
            <div className = "form-group">
                <input value={name} onChange={handleChange('name')} type = "text" className = "form-control" placeholder="Type your name" required/> 
            </div>
            <div className = "form-group">
                <input value={email} onChange={handleChange('email')} type = "email" className = "form-control" placeholder="Type your email" required/>
            </div>
            <div className = "form-group">
                <input value={password} onChange={handleChange('password')} type = "password" className = "form-control" placeholder="Type your password" required/>
            </div>
            <div className = "form-group">
                <button className="btn btn-outline-warning"> {buttonText} </button>
            </div>
        </form>      

    );
/* this is bootstrap script to create column row*/     
    return (
    <Layout>   


       <div className= "col-md-6 offset-md-3">
        <h1>Register Form</h1>
        <br />
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {registerForm()}
       </div>        
    </Layout>
    );

};
export default Register;