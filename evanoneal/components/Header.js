import { useRouter } from 'next/router'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


export default () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Evan Oneal</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav >
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" >Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)

//   <div style={nav}>


//   </div>
// )

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
            margin-right: 10px;
          }
        `}</style>
      </a>
    )
  }