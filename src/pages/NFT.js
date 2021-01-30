import {
    useParams
} from "react-router-dom";

import Layout from '../components/layout'
import * as data from '../data.json';

export default function NFT(props) {
    const { index } = useParams();
    const nft = data.default[index]
    const { url, title, description, price, type, totalSupply, sold } = nft;

    return (
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <h3>{title}</h3>
                                <p className="subtitle">{description}</p>
                                <p>Price: ${price}</p>
                                <button className="button is-primary">Buy Now!</button>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="columns">
                                <div className="column is-full is-flex" >
                                    <div style={{
                                        width: "100%",
                                        height: "250px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundImage: `url("${url}")`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "50% 50%"
                                    }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            {/* additional data */}
                            <div className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <div className="content">
                                            Creator:
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <figure className="image is-48x48">
                                            <img
                                                className="is-rounded"
                                                src="/images/creator.jpg"
                                                alt="creator"
                                                style={{ width: "48px", height: "48px" }}
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="tags">
                                <span className="tag is-light">#art</span>
                                <span className="tag is-light">#2021</span>
                            </div>
                            <p>
                                {type === "splited" ? `this is a SubNFT ` : ''}
                            </p>
                            <p>
                                {type === "splited" ? `totalSupply:${totalSupply}` : ''}
                            </p>
                            <p>
                                {type === "splited" ? `There are already ${sold} SubNFTs with its owner` : ''}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}