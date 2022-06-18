import React, { useState } from 'react'

const FunFact = () => {
  const [memes, setMemes]= useState([
    {title:'Life!', body:'Life is not always straight-jacketed, often times; we end up seeing men with Television owning Television stations and men with vision ending up with cataract on big eye balls. Lets be clear, life is unfair. Follow your instincts and divine direction. Poverty is not morality; wealth is not immorality. In fact, this life no balance.', id:0},
    {title: 'Pregnancy!', body:'Hair and nails grow faster during pregnancy', id:1},
    {title:'Shower Benefits We Ignore!', body:'Do you know that people are more creative in the shower? When we take a wram shower, we experience an increased dopamine flow that makes us more creative', id:2}
  ]);
  return (
    <div className="meme">
      {memes.map((meme) => (
        <div className='meme_item' key={meme.id}>
        <h3> {meme.title} </h3>
        <p> {meme.body} </p>
        </div>
      ))}
    </div>
  )
}

export default FunFact;