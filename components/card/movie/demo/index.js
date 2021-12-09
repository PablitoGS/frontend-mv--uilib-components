import CardMovie from 'components/card/movie/src'

const movie = {
  id: 512195,
  overview:
    'Cuando la Interpol envía una "Alerta roja", significa que los departamentos de Policía de todo el mundo deben estar alerta para capturar a los criminales más buscados. Todas las alarmas saltan cuando un temerario robo une al mejor agente del FBI (Johnson) con dos criminales rivales entre sí (Gadot & Reynolds). Una coincidencia que hará que suceda lo impredecible.',
  posterPath: 'https://image.tmdb.org/t/p/w300/odBUpjZGxY3y7FBo5NBtEYGJf5r.jpg',
  releaseDate: '2021-11-04',
  title: 'Alerta roja'
}

export default () => (
  <CardMovie
    title={movie.title}
    src={movie.posterPath}
    description={movie.overview}
    subtitle={movie.releaseDate}
  />
)
