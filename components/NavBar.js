import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
 const NavBar = () => {
     const router = useRouter()
     console.log(router);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link href="/">
                        <a className={"nav-link " + `${router.pathname == "/" ? "active" : ""}` }>Home <span className="sr-only">(current)</span></a>
                    </Link>
                  
                    </li>
                    <li className="nav-item">
                    <Link href="/about">
                        <a className={"nav-link " + `${router.pathname == "/about" ? "active" : ""}` }>About</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/blog">
                        <a className={"nav-link " + `${router.pathname == "/blog" ? "active" : ""}` }>Blog</a>
                    </Link>
                    </li>
                   
                    </ul>
                </div>
        </nav>
    )
}
export default NavBar