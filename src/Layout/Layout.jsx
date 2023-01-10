
import { NavLink, } from "react-router-dom"

import css from './Layout.module.css'

export const Layout = ({children}) => {
  return (
    <div>
      <nav className={css.nav}>
        <ul>
          <li className={css.nav_li}>
            <NavLink to='/' className={css.nav_link}>Home</NavLink>
          </li>
          <li className={css.nav_li}>
            <NavLink to='/movies' className={css.nav_link}>Movies</NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}