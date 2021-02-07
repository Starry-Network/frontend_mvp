
import Layout from '../components/layout'
import {
    Link,
} from "react-router-dom";

export default function DAOList() {
    return (
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column is-one-third">
                            <div className="columns">
                            </div>
                        </div>
                    </div>
                    <div className="columns is-multiline">
                        <Link to={`/dao/${0}`}>
                            <div className="box">
                                This is a DAO that collects artwork
                        </div>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
