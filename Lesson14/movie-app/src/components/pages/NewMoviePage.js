import React, { Component } from 'react'
import MovieForm from '../MovieForm'
import {connect} from "react-redux"
import { newMovies } from '../../actions/movieActions'

export class NewMoviePage extends Component {
  render() {
    //console.log("NewMOVİE",this.props)
    return (
      <div>
          <MovieForm newMovieReducer={this.props.newMovieReducer} newMovies = {this.props.newMovies}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({newMovieReducer:state.newMovieReducer})

const mapDispatchToProps = {newMovies}

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage)
