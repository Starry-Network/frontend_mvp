import Layout from '../components/layout'

export default function SplitNFT() {
    return (
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column">
                        </div>
                        <div className="column is-three-fifths">
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field block">
                                        <label className="label">Select your NFT</label>
                                        <div className="control">
                                            <div className="select">
                                                <select>
                                                    <option>cross chain</option>
                                                    <option>The dog squatting in front of the house</option>
                                                    <option>precious concert ticket</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filed block">
                                        <label className="label">Price</label>
                                        <input className="input" type="text" placeholder="Set base price" />
                                    </div>
                                    <div className="filed block">
                                        <label className="label">Number of SubNFT</label>
                                        <input className="input" type="text" placeholder="Set the number of SubNFT" />
                                    </div>
                                    <div className="filed block">
                                        <label className="label">Reserved</label>
                                        <input className="input" type="text" placeholder="Set the number of SUbNFTs reserved for the creator" />
                                    </div>
                                    <div className="filed block">
                                        <label className="si si-switcher">
                                            <input type="checkbox" />
                                            <span className="si-label">use one price?</span>
                                        </label>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column is-half">
                                            <button className="button is-primary is-medium is-fullwidth">
                                                Spilt!
                                            </button>
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