import React from 'react';
import { connect } from 'react-redux';
import { requestRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => ({
  restaurants: Object.values(state.restaurants)
});


const mapDispatchToProps = dispatch => ({
  requestRestaurants: () => dispatch(requestRestaurants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);