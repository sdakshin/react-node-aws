
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nProgress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();
 

const Layout = (props) => {
    const head = () => (
        <React.Fragment>
        <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" 
        crossOrigin="anonymous"
        />   
 
        <link 
        rel="stylesheet"
        href="/static/css/styles.css"
        />

       <link
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        rel="stylesheet"
        />
        

        </React.Fragment>
     );
    const nav = () => (

        <ul className="nav bg-warning ">
            <li className="nav-item">
                <Link className =  "nav-B"  href="/">
                     Home 
                </Link>                
            </li>
            <li className="nav-item">
                <Link className = "nav-B" href="/login">
                    Login                    
                </Link>                
            </li>  
            <li className="nav-item">
                <Link className = "nav-B" href="/register">
                    Register
                </Link>                
            </li>                       
                    

        </ul>

    );
     
    return <React.Fragment> 

        {head()}{nav()} <div className="container pt-5 pb-5 "> {props.children} </div> 
        
         </React.Fragment>;
};

export default Layout;