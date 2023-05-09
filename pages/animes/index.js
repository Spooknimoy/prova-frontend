import Pagina from '@/Components/Pagina'
import apiAnimes from '@/services/apianimes'
import Link from 'next/link'
import React from 'react'
import { Table, Button } from 'react-bootstrap'


const Index = ({ Animes }) => {
  return (
    <>
      <Pagina titulo='Animes'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Detalhes</th>
              <th>Título</th>
              <th>Duração</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {Animes.map((item) => (
              <tr>
                <td>
                  <Link  href={'/animes/' + item.mal_id}><Button variant="outline-dark">Detalhes</Button></Link>
                </td>
                <td>{item.title_english}</td>
                <td>{item.duration}</td>
                <td>{item.year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  )
}

export default Index

export async function getServerSideProps(context) {
  

  const Ranimes = await apiAnimes.get('/anime/')
  const Animes = Ranimes.data.data

  return {
    props: {Animes},
  }
}







