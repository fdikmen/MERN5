//Created by "rcredux" snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MoviesList from '../MoviesList'

export class MoviesPage extends Component {
    static propTypes = {
        movieReducer:PropTypes.array.isRequired
    }
  render() {
      //console.log(this.props)
    return (
      <div>Movies Page
          <MoviesList movies={this.props.movieReducer}/>
      </div>
    )
  }
}

const mapStateToProps = ({movieReducer}) => ({
    movieReducer
})

const mapDispatchToProps = {}

//export default MoviesPage
export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)