import React, { Component } from 'react'
import faker from 'faker'

class Piece extends Component {

  render () {
    return (
      <article className="pv4 bt bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
        <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h1 className="f3 athelas mt0 lh-title">
            Is everyone who really loves {this.props.subject} just {this.props.insult}?
          </h1>
          <p className="f5 f5-l lh-copy athelas">
            {faker.lorem.paragraph(5)}
          </p>
        </div>
        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img style={{maxWidth: '100%'}} src={`http://unsplash.it/500/500/?random&${faker.random.number({})}`} className="db" />
        </div>
        </div>
        <p className="f6 lh-copy gray mv0">By <span className="ttu">Sam Diss</span></p>
        <time className="f6 db gray">{faker.date.month()}. {faker.random.number({min:1, max:28})}, 2017</time>
      </article>
    )
  }
}

export default Piece