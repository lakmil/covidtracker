import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.module.css';
import { fetchData } from './api/index';
import Logo from './assets/logo/image.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fdata = await fetchData();
    this.setState({
      data: fdata
    })
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({
      data: fetchedData,
      country: country
    })

  }
  render(){
    const { data,country } = this.state;
    return (
          <div className={styles.container}>
            <img src={Logo} alt="corona" className={styles.image} />
            <Cards data={data}  />
            <CountryPicker  handleCountryChange ={this.handleCountryChange} />
            <Chart  data={data} country={country} />
          </div>
        );
  }
}

export default App;
