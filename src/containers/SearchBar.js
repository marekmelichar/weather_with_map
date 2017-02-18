import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.formSubmitAction = this.formSubmitAction.bind(this);
  }

  onSearchInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  formSubmitAction(event) {
    event.preventDefault();

    // go and fetch a weather data
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.formSubmitAction}>
        <input
          placeholder="Get a five day forecast in your favorite cities of US"
          className="form-control"
          value={this.state.term}
          onChange={this.onSearchInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    );
  }
}

// fetchWeather is from actions/index
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
