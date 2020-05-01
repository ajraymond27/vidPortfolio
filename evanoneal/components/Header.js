import { useRouter } from 'next/router'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const navbar ={
  backgroundColor: 'var(--white)',
}

const logo = {
  color: 'var(--base1)',
  fontWeight: 'bold',
  fontSize: '24pt',
}

export default () => (

    <Navbar collapseOnSelect expand="lg" sticky="top" style={navbar}>
      {/* <Navbar.Brand href="/" style={logo}>LOGO</Navbar.Brand> */}
      <Navbar.Brand href="/" style={logo}>Evan O'Neal</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Link href="/" >Home</Link>
          <Link href="/work" >Work</Link>
          <Link href="/about" >About</Link>
          <Link href="/contact" >Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)


const Link = ({ children, href }) => {
    const router = useRouter()
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          // typically you want to use `next/link` for this usecase
          // but this example shows how you can also access the router
          // and use it manually
          router.push(href)
        }}
      >
        {children}
        <style jsx>{`
          a {
            margin-right: 50px;
            color: var(--base1);
            font-size: 14pt;
            font-weight: bold;
          }
        `}</style>
      </a>
    )
  }