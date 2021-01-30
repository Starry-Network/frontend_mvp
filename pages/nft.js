import { useRouter } from 'next/router';
import Image from 'next/image'
import Layout from '../components/layout'

export default function Nft() {
    const router = useRouter();
    const { url, title, description, price, type, totalSupply, sold } = router.query;
    console.log(router.query)
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
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <Image
                                        className="is-1by1"
                                        src={`${url}`}
                                        alt="creator"
                                        width={600}
                                        height={600}
                                    />
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
                                        <figure class="image is-48x48">
                                            <Image
                                                className="is-rounded"
                                                src="/images/creator.jpg"
                                                alt="creator"
                                                width={48}
                                                height={48}
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="tags">
                                <span class="tag is-light">#art</span>
                                <span class="tag is-light">#2021</span>
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