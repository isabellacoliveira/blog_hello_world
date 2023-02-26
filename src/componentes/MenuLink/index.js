import styles from './MenuLink.module.css';
import { NavLink } from 'react-router-dom';

// vamos criar algumas props 
export default function MenuLink({ children, to}){
    // vamos implementar a navlink no lugar de userLocation
    // const localizacao = useLocation();
    return(
        <NavLink
        className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.linkDestacado : ""}
        `}
        to={to}
        end
    >
        {children}
    </NavLink>
    )
}