import {useLoaderData} from "react-router-dom";
import swal from 'sweetalert';

const UserDetails = () => {

    const {_id, name, age, email, married, gender} = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = parseInt(form.age.value);
        const married = form.married.checked;
        const gender = form.gender.value;
        const user = {name, email, age, married, gender}
        console.log(user);

        fetch(`http://localhost:3000/users/${ _id }`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Successfully update the User:", `${ user.name }`, "success");
                }
            })
    }

    return (
        <>
        <h1>Form</h1>
            <div className="border1">
                <h1>User Details</h1>
                <hr className="border border-blue-500" />
                <h4>Name: {name.toUpperCase()}</h4>
                <h5>Age: {age}</h5>
                <h5>Email: {email}</h5>
                <h5>Maritial Status: {married ? "Married" : "Unmarried"}</h5>
                <h5>Gender: {gender}</h5>
            </div>
            <hr />
            <form className="border1" onSubmit={handleUpdate}>

                <label htmlFor="name">User Full Name: </label>
                <input className='border1' type="text" name="name" id="name" placeholder='User Name' defaultValue={name} required />
                <br />
                <label htmlFor="age">User Age: </label>
                <input className='border1' type="number" name="age" id="age" min={1} max={100} step={1} placeholder='User Age' defaultValue={age} required />
                <br />
                <label htmlFor="email">User Email: </label>
                <input className='border1' type="email" name="email" id="email" placeholder='User Email' defaultValue={email} required />
                <br />
                <input className='border1' type="checkbox" name="married" id="married" defaultChecked={married ? true : false} />
                <label htmlFor="married">Is married</label>
                <br />
                <input className='border1' type="radio" name="gender" id="male" defaultChecked={gender === "male" ? true : false} value="male" required />
                <label htmlFor="male">Male</label>
                <input className='border1' type="radio" name="gender" id="female" defaultChecked={gender === "female" ? true : false} value="female" required />
                <label htmlFor="female">Female</label>
                <br />
                <input className='border1 cursor-pointer' type="submit" value="Update the User" />
            </form>
        </>
    );
};

export default UserDetails;