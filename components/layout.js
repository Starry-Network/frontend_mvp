
import { Fragment } from 'react'
import Navbar from '../components/navbar'

export default function Layout({ children }) {
    return (
        <Fragment>
            <Navbar />
            <main style={{ marginTop: "6rem" }}>
                <div className="container " >
                        {children}
                </div>
            </main>
        </Fragment>
    )
}