import {useLoaderData} from "react-router-dom";
import UserCard from "../components/UserCard";
import {useEffect, useState} from "react";

const Users = () => {
    
    const usersLoader = useLoaderData();
    const [allUser, setAllUser] = useState(usersLoader);
    

    return (
        <div>
            <hr />
            <h2>Number of Users: {allUser.length}</h2>
            <hr />
            {
                allUser.map(pd=><UserCard key={pd._id} user={pd} setAllUser={setAllUser}></UserCard>)
            }
            <hr />
        </div>
    );
};

export default Users;