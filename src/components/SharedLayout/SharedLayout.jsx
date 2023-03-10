
import { NavLink, Outlet, } from "react-router-dom"
import classNames from "classnames"

import css from './SharedLayout.module.css'

function SharedLayout () {
  return (
    <div>
      <nav className={css.nav}>
        <ul>
          <li className={css.nav_li}>
            <NavLink to='/' className={({ isActive }) =>
              classNames(css.nav_link, { [css.active]: isActive })
            }>Home</NavLink>
          </li>
          <li className={css.nav_li}>
            <NavLink to='/movies' className={({ isActive }) =>
              classNames(css.nav_link, { [css.active]: isActive })
            }>Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default SharedLayout;

 