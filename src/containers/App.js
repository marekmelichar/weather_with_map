import React, {Component} from 'react';
import style from '../styles/main.scss';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
