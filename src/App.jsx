import './App.css';
import toast, {Toaster} from 'react-hot-toast';


const notify = () => toast.success('Your data is post successfully');

const App = () => {

  const handleNewUser = event => {

    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = parseInt(form.age.value);
    const married = form.married.checked;
    const gender = form.gender.value;
    const user = {name, email, age, married, gender}
    console.log(user);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          notify()
          form.reset();
        }
      })
  }

  return (
    <>
      <hr />
      <form className='w-max mx-auto' onSubmit={handleNewUser}>
        <label htmlFor="name">User Full Name: </label>
        <input className='border1' type="text" name="name" id="name" placeholder='User Name' required />
        <br />
        <label htmlFor="age">User Age: </label>
        <input className='border1 w-56' type="number" name="age" id="age" min={1} max={100} step={1} placeholder='User Age' required />
        <br />
        <label htmlFor="email">User Email: </label>
        <input className='border1' type="email" name="email" id="email" placeholder='User Email' required />
        <br />
        <input className='border1' type="checkbox" name="married" id="married" />
        <label htmlFor="married">Is married</label>
        <br />
        <input className='border1' type="radio" name="gender" id="male" value="male" required />
        <label htmlFor="male">Male</label>
        <input className='border1' type="radio" name="gender" id="female" value="female" required />
        <label htmlFor="female">Female</label>
        <br />
        <input className='border1' style={{cursor: 'pointer'}} type="submit" value="Sent New User" />
      </form>
      <hr />
      <Toaster />
    </>
  );
};

export default App;