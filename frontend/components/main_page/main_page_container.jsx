import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { requestRestaurants, searchRestaurants} from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchRestaurants: searchTerm => dispatch(searchRestaurants(searchTerm))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
