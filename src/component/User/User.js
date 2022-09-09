import './User.css'
import { useState } from 'react';

const User = (props) => {
    // this key
    const {name, phone, email} = props.user

    // button a click krle number show hbe
    const [mobile, setMobile] = useState('');
    const showPhone = () => setMobile(phone)

    return (
        <div className='user'>

            <h2>Name : {name} </h2>
            <h4>Email: {email} </h4>
            <h5>Phone : {mobile}</h5>

            <button type="button" class="btn btn-primary">Add me</button> <button onClick={showPhone} type="button" class="btn btn-success">Show phone number</button>
        </div>
    );
}

export default User;