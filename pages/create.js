import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'



export default function Create() {
    const [files, setFiles] = useState(null)
    const [createMultipleNFT, setCreateMultipleNFT] = useState(false)

    return (
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="box has-text-centered">
                                <div className="level">
                                    <div className="level-item has-text-centered">
                                        <figure className='image'>
                                            <div style={{
                                                width: "200px",
                                                height: "250px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundImage: `url("${files !== null ? URL.createObjectURL(files[0]) : ""}")`,
                                                backgroundSize: "contain",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "50% 50%"
                                            }}>
                                                {files !== null ? null : (
                                                    <div>Preview the image just uploaded</div>
                                                )}
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-three-fifths">

                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="file  is-centered is-boxed" >
                                        <label className="file-label" style={{ width: "100%" }}>
                                            <input onChange={event => setFiles(event.target.files)} className="file-input" type="file" name="resume" />
                                            <span className="file-cta">
                                                <span className="file-icon">
                                                    <FontAwesomeIcon icon={faUpload} />
                                                </span>
                                                <span className="file-label">
                                                    Choose your image
                                        </span>
                                            </span>

                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="filed block">
                                        <label className="label">Title</label>
                                        <input className="input" type="text" placeholder="Title for NFT" />
                                    </div>
                                    <div className="filed block">
                                        <label className="label">Description</label>
                                        <input className="input" type="text" placeholder="Description for NFT" />
                                    </div>
                                    <div className="filed block">
                                        <label className="label">Price</label>
                                        <input className="input" type="text" placeholder="One price for NFT" />
                                    </div>
                                    <div className="filed block">
                                        <label className="label">Royalties</label>
                                        <input className="input" type="text" placeholder="Royalties will give to creator" />
                                    </div>
                                    <div className="filed block">
                                        <label className="si si-switcher">
                                            <input type="checkbox" checked={createMultipleNFT} onChange={() => setCreateMultipleNFT(!createMultipleNFT)} />
                                            <span className="si-label">Create multiple NFT?</span>
                                        </label>
                                    </div>
                                    {createMultipleNFT ? (<div className="filed block">
                                        <input className="input" type="text" placeholder="Set the number of copies to be created" />
                                    </div>) : null}
                                </div>
                            </div>

                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <button className="button is-primary   is-medium is-fullwidth">
                                        Create!
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}