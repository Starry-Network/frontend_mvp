
import { Fragment } from 'react'

export default function Layout({ children }) {
    return (
        <Fragment>
            <main style={{ marginTop: "6rem" }}>
                <div className="container " >
                        {children}
                </div>
            </main>
        </Fragment>
    )
}