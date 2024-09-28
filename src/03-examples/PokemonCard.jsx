import React from 'react'

export const PokemonCard = ({ id, name, sprites=[]}) => {
    
    

  return (
    <section style={{ height: 200}}>
        <h2 className='text-capitalize'># {id} - { name }</h2>

        <div>

          {sprites.map( sprite => (
            <img key={sprite} src={sprite} alt={`img front_default de ${name}`} />
          ))}
          {/* <img src={sprites.front_default} alt={`img front_default de ${name}`} /> */}
        </div>

    </section>
  )
}
