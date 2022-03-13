//Created by "rcredux" snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MoviesList from '../MoviesList'
import { fetchMovies } from '../../actions/movieActions'


export class MoviesPage extends Component {
    static propTypes = {
        movieReducer:PropTypes.object.isRequired
    }
    componentDidMount() { 
      this.props.fetchMovies();
     }
  render() {
      //console.log(this.props)
    return (
      <div>Movies Page
          <MoviesList movieReducer={this.props.movieReducer}/>
      </div>
    )
  }
}

const mapStateToProps = ({movieReducer}) => ({
    movieReducer
})

const mapDispatchToProps = {fetchMovies}

//export default MoviesPage
export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)