import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Image,Icon} from 'semantic-ui-react'

const MovieCard = ({movie}) => (
  <Card>
    <Image src={movie.cover} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{movie.title}</Card.Header>
      {/* <Card.Meta>
        <span className='date'>Created At {movie.createdAt}</span>
      </Card.Meta> */}
      {/* <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description> */}
    </Card.Content>
    <Card.Content extra>      
    <div className='ui two buttons'>
                 
      <Button animated color='red' size='mini'>
          <Button.Content visible>Del</Button.Content>
          <Button.Content hidden>
            <Icon name="trash" />
          </Button.Content>
        </Button>
        <Button animated size='mini' as={Link} to={`/movies/new/${movie.id}`}>
          <Button.Content visible>Edit</Button.Content>
          <Button.Content hidden>
            <Icon name="edit" />
          </Button.Content>
        </Button>
        </div>
    </Card.Content>
  </Card>
)

export default MovieCard