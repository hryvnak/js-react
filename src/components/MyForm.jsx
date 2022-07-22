import React from "react";

export default class MyForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false
      },
      uiState: {
        renderedElement: 'form',
      }
    }
  }

  handleChange = (e) => {
    const { target } = e;
    const { form } = this.state;
    const value = (target.name === 'acceptRules') ? target.checked : target.value;
    this.setState({ 
      form: { ...form, [target.name]: value }
    });
    console.log(value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { uiState } = this.state;
    this.setState({ uiState: { ...uiState, renderedElement: 'formData' } });
  }

  handleBack = (e) => {
    e.preventDefault();
    const { uiState } = this.state;
    this.setState({ uiState: { ...uiState, renderedElement: 'form' } });
  }

  renderForm() {
    const { 
      form: { 
        email, password, address, city, country, acceptRules
      } 
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input onChange={this.handleChange} value={email} type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input onChange={this.handleChange} value={password} type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea onChange={this.handleChange} value={address} type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input onChange={this.handleChange} value={city} type="text" className="form-control" name="city" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select onChange={this.handleChange} value={country} id="inputCountry" name="country" className="form-control">
              <option>Choose</option>
              <option value="ukraine">Ukraine</option>
              <option value="poland">Poland</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input onChange={this.handleChange} checked={acceptRules} id="rules" type="checkbox" name="acceptRules" className="form-check-input" />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }

  renderFormData() {
    const { form } = this.state;
    const keys = Object.keys(form).filter(key => form[key] !== '');
    const sortedKeys = keys.sort();
    return (  
      <div>
        <button onClick={this.handleBack} type="button">Back</button>
        <table className="table">
          <tbody>
            {
            sortedKeys.map((item) => {
              return (
                <tr key={ item }>
                  <td>{ item }</td>
                  <td>{ form[item].toString() }</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
  
  render() {
    const { uiState: { renderedElement } } = this.state;
    return (renderedElement === 'form') ? this.renderForm() : this.renderFormData();
  } 
}