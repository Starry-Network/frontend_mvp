import { Fragment } from 'react'

import Layout from '../components/layout'
import {
    Link,
} from "react-router-dom";

import * as data from '../data.json';

const NFTCard = props => (
    <div className="column is-one-quarter">
        <Link to={`/nft/${props.index}`}>
            <div className="card">
                <figure className="image is-4by3">
                    <img src={props.url} alt="" />
                </figure>
                <div className="card-content">
                    <p className="subtitle">
                        {props.title} {props.type === "splited" ? "(Spilted)" : ""}
                    </p>
                    <div className="content">
                        {props.description}
                    </div>
                    <div className="columns">
                        <div className="column">Price: ${props.price} </div>
                        <div className="column">{props.type === "splited" ? `${props.sold}/${props.totalSupply}` : ""}</div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
)


const CardList = ({ datas }) => {
    const Cards = [...datas].map((data, index) =>
        <NFTCard key={index} {...data} index={index} />
    );
    return (
        <Fragment>{Cards}</Fragment>
    );
}

export default function Home() {
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
                        <CardList datas={data.default} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
