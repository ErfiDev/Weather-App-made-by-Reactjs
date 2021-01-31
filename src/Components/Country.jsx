import React from "react";
import { Link } from "react-router-dom";
import ContextApi from '../Context';

class Country extends React.Component {

    static contextType = ContextApi;

  render() {
    const Api = this.context;
    const {SendCapitalToApi} = Api;

    return (
      <div className="country">
        <h1>Please Select Your City</h1>

        <div className="btn-container">
          <Link to="/Weather">
            <button onClick={SendCapitalToApi}>London</button>
          </Link>
          <Link to="/Weather">
            <button>Tehran</button>
          </Link>
          <Link to="/Weather">
            <button>Berlin</button>
          </Link>
          <Link to="/Weather">
            <button>Paris</button>
          </Link>
          <Link to="/Weather">
            <button>Washington</button>{" "}
          </Link>
          <Link to="/Weather">
            <button>Beijing</button>
          </Link>
          <Link to="/Weather">
            <button>Dubay</button>
          </Link>
          <Link to="/Weather">
            <button>Istanbul</button>{" "}
          </Link>
          <Link to="/Weather">
            <button>Brasília</button>
          </Link>
          <Link to="/Weather">
            <button>Tokyo</button>
          </Link>
          <Link to="/Weather">
            <button>Moscow</button>
          </Link>
          <Link to="/Weather">
            <button>Madrid</button>{" "}
          </Link>
          <Link to="/Weather">
            <button>Bangkok</button>{" "}
          </Link>
          <Link to="/Weather">
            <button>Amsterdam</button>
          </Link>
          <Link to="/Weather">
            <button>Warsaw</button>
          </Link>
          <Link to="/Weather">
            <button>Ottawa</button>
          </Link>
          <Link to="/Weather">
            <button>Oslow</button>
          </Link>

          <Link to="/Weather">
            <button>Mexico City</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Country;
