import { Fragment } from 'react'
import Link from 'next/link';
import Layout from '../components/layout'

const data = [
  {
    "type": "one-price",
    "url": "/images/nft1.jpeg",
    "title": "data exchange",
    "price": 700,
    "description": "cross chain data exchange"
  },
  {
    "type": "splited",
    "url": "/images/nft1.jpeg",
    "title": "data exchange",
    "price": 7,
    "totalSupply": 100,
    "sold": 20,
    "description": "cross chain data exchange"
  }
]


const NFTCard = props => (
  <div className="column is-one-quarter">
    <Link href={{ pathname: '/nft', query: { ...props } }}>
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
  const Cards = datas.map((data, index) =>
    <NFTCard key={index} {...data} />
  );
  return (
    <Fragment>{Cards}</Fragment>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className="columns">
        <div className="column is-one-third">
          <div className="columns">
            {/* <div className="column">
              <label className="si si-checkbox">
                <input type="checkbox" />
                <span className="si-label">Fixed</span>
              </label>
            </div>
            <div className="column">
              <label className="si si-checkbox">
                <input type="checkbox" />
                <span className="si-label">Splited</span>
              </label>
            </div> */}
          </div>
        </div>
      </div>
      <div className="columns is-multiline">
        <CardList datas={data} />
      </div>
    </Layout>
  )
}
