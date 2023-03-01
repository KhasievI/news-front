import React from 'react';

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <button>зарегистрироваться</button>
        </div>
    );
};

export default RegisterPage;