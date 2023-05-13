import toast, {Toaster} from 'react-hot-toast';
import {Link, useLoaderData} from 'react-router-dom';

const notifyError = () => toast.error('Sorry Data Cannot be deleted');
const notifySuccess = () => toast.success('Data is deleted Successfully');

const UserCard = ({user, setAllUser}) => {

    const oldUser = useLoaderData();
    // console.log(oldUser);
    // console.log(user);

    const {_id, name, email, age, married, gender} = user;

    const handleDelete = _id => {
        // console.log(_id);
        fetch(`http://localhost:3000/users/${ _id }`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    notifySuccess();
                    const newUserArr = oldUser.filter(pd => pd._id !== _id);
                    setAllUser(newUserArr);
                } else {
                    notifyError();
                };
            })
    };

    return (
        <div className="border1">
            <h4>{name}</h4>
            <h5>Age: {age}</h5>
            <h5>Email: {email}</h5>
            <h5>Maritial Status: {married ? "Married" : "Unmarried"}</h5>
            <h5>Gender: {gender}</h5>
            <Link to={`/users/${_id}`}><button className='border1'>User Details</button></Link>
            <button className='border1' onClick={() => handleDelete(_id)}>Delete User</button>
        </div>
    );
};

export default UserCard;