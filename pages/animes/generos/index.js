import Pagina from '@/Components/Pagina'
import apiAnimes from '@/services/apianimes'
import React from 'react'

const index = ({Animes}) => {
  return (
  <>
  <Pagina titulo='Gêneros'>

  <ul>
          {Animes.map((item) => (
            <li key={item.mal_id}>{item.name}</li>
          ))}
        </ul>
    
  </Pagina>
  </>
  )
}

export default index



export async function getServerSideProps(context) {
  

    const Ranimes = await apiAnimes.get('/genres/anime')
    const Animes = Ranimes.data.data
  
    return {
      props: {Animes},
    }
  }
  
