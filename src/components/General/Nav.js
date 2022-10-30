import { NavLink } from "react-router-dom"

const Nav = () => {

  const navLinks = ['Home', 'Popular', 'Battle']

  const linkRoute = (link) => {
    return link === 'Home' ? '/': link.toLowerCase()
  }

  return (
    <ul className="nav">
      {navLinks.map((link, index) => {
        return(
          <li key={index}>
            <NavLink end to={linkRoute(link)}>
              {link}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav;