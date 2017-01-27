import React, { Component } from 'react';
import Piece from './Piece'

const items = [
  'football',
  'jazz',
  'fashion',
  'Kanye West',
  'post-dubstep',
  'their significant other',
  'J-Dilla',
  'pea coats',
  'time-bombs',
  'carp',
  'brie',
  'bronies',
  'web developers',
  'the Post Office',
  'Friends'
]

const insultAdjectives = [
  'pretentious',
  'boring',
  'self-obsessed',
  'irritating',
  'obsequious',
  'stupid',
  'preening',
  'uber',
  'mewling',
  'big',
  'demoralising',
  'shitty',
  'collosal',
  'tiny',
  'intense'
]

const insultNouns = [
  'wanker',
  'nerd',
  'donut',
  'fascist',
  'bimbo',
  'poser',
  'manboy',
  'baby',
  'gunther',
  'bastard',
  'codpiece',
  'Trump sympathiser',
  'dick',
  'pencil case',
  'prole'
]

const vowels = ['a', 'e', 'i', 'o', 'u']


class App extends Component {

  constructor() {
    super()
    this.items = this.shuffle(items)
    this.insultNouns = this.shuffle(insultNouns)
    this.insultAdjectives = this.shuffle(insultAdjectives)
  }

  shuffle(a) {
    let j, x, i
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i)
      x = a[i - 1]
      a[i - 1] = a[j]
      a[j] = x;
    }
    return a
  }

  getThing() {
    return this.items.pop()
  }

  getInsultNoun () {
    return this.insultNouns.pop()
  }

  getInsultAdjective () {
    return this.insultAdjectives.pop()
  }

  doesItStartWithAVowel(word) {
    const firstLetter = word[0]
    return vowels.includes(firstLetter)
  }

  getInsult () {
    const noun = this.getInsultNoun()
    const adjective = this.getInsultAdjective()
    const startsWithVowel = this.doesItStartWithAVowel(adjective)
    return `${startsWithVowel ? 'an' : 'a'} ${adjective} ${noun}`
  }

  render() {
    return (
      <section className="mw7 center">
        <h2 className="athelas ph3 ph0-l">Short-Diss'd.com</h2>
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <Piece subject={this.getThing()} insult={this.getInsult()} />
        <h2 className="athelas ph3 ph0-l">(Refresh for more)</h2>
      </section>
    )
  }
}

export default App;
