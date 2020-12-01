import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

    state= {
        band: ""
    }

    handleChange = event => {
        this.setState({
            band: event.target.value
        })
    }

    handleSubmit = event=>{
        event.preventDefault()
        this.props.addBand(this.state)
        this.setState({
            band: ""
        })
    }

  render() {
    const bands = this.props.bands.map((b) => <li>{b}</li>);

    return (
      <div>
      <BandInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        BandsContainer
        <ul>{bands}</ul>
      </div>
    );
  }
}

const addBand = formData =>  ({type: "ADD_BAND", payload: formData})


export default connect(  (state) => ({ bands: state.bands }),
  {addBand}
)(BandsContainer);
