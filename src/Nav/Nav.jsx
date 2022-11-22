import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <div className={s.navContainer}>
            <NavLink to='*'>Home</NavLink>
            <NavLink to='/news/general'>General</NavLink>
            <NavLink to='/news/business'>Business</NavLink>
            <NavLink to='/news/entertainment'>Entertainment</NavLink>
            <NavLink to='/news/health'>Health</NavLink>
            <NavLink to='/news/sports'>Sports</NavLink>
            <NavLink to='/news/technology'>Technology</NavLink>
        </div>
    )
}

export default Nav;