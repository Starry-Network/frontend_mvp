// import {
//     useParams
// } from "react-router-dom";
import Layout from '../components/layout'

export default function DAODetail() {
    // const { index } = useParams();
    return (
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column">
                        </div>
                        <div className="column is-three-fifths">
                            <div className="columns is-centered">
                                <div className="column ">
                                    <div className="box">
                                        <p>
                                            DAO Description: This is a DAO that collects artwork
                                        </p>
                                        <p>Collections: 10</p>
                                        <p>Total supply: 100000</p>
                                    </div>
                                    <p className="subtitle">Proposals</p>
                                    <div className="box">
                                        <div className="level">
                                            <div className="level-left">
                                                <p className="level-item">#1 add new NFT to collects</p>
                                            </div>
                                            <div className="level-right">
                                                <div className="level-item">
                                                    <span class="tag is-info">Activate</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}