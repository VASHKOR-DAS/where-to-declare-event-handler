import './User.css'
import { useState } from 'react';

const User = (props) => {
    // this key
    const {name, phone, email} = props.user;

    // button a click krle number show hbe
    const [mobile, setMobile] = useState('');
    const showPhone = () => setMobile(phone)

    //app js theke addMember props hisebe receive krbo
    const addMember = props.addMember;

    return (
        <div className='user'>

            <h2>Name : {name} </h2>
            <h4>Email: {email} </h4>
            <h5>Phone : {mobile}</h5>

            <button onClick={() => addMember(name)} class="btn btn-primary">Add me</button>

            <button onClick={showPhone} class="btn btn-success">Show phone number</button>
        </div>
    );
}

export default User;