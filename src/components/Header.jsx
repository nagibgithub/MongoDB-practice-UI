import {NavLink} from "react-router-dom";

const Header = () => {

    const navBar = [
        {id: 1, title: 'Home', path: '/home'},
        {id: 2, title: 'Data Entry', path: '/'},
        {id: 3, title: 'All Users', path: '/users'},
    ]


    return (
        <div className="w-max mx-auto my-5">
            {
                navBar.map(pd => <NavLink
                    key={pd.id}
                    to={pd.path}
                    className={({isActive, isPending}) =>
                        isActive
                            ? "px-4 py2 bg-sky-300"
                            : isPending
                                ? "px-4 py2 bg-gray-300"
                                : "px-4 py2"
                    }
                >{pd.title}</NavLink>)
            }
        </div>
    );
};

export default Header;