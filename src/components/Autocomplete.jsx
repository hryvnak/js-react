import React from "react";
import axios from "axios";
import { upperFirst } from "lodash";

export default class Autocomplete extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      countries: []
    }
  }

  handleChange = async (event) => {
    const { target } = event;

    this.setState({ value: target.value });

    if (target.value){
      try {
        const getData = await axios.get(`http://autocomplete.travelpayouts.com/places2?term=${target.value}&locale=en&types[]=country`);
        const { data } = getData;
        const filteredData = data.filter((item) => item.name.startsWith(upperFirst(target.value)));
        const countries = filteredData.map((item) => item.name)
        this.setState({ countries: countries });
      } catch (e) {
        console.log(e);
        throw e;
      }
    } else {
      this.setState({ countries: [] });
    }
  }

  chooseCountry = (country) => (event) => {
    this.setState({ value: country, countries: [] });
  }

  renderCountries = () => {
    const { countries }  = this.state;
    return (
      <ul>{ countries.map((item) => <li onClick={ this.chooseCountry(item) } key={ item }>{ item }</li>) }</ul>
    )
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <form action="">
          <div className="form-group">
            <input onChange={ this.handleChange } value={ value } type="text" className="form-control" placeholder="Enter Country" />
            { this.renderCountries() }
          </div>
        </form>
      </div>
    )
  }
}