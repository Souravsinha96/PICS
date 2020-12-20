import React from "react";

class Search extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>
              <h2>Image Search</h2>
            </label>
            <input
              name="search"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
              type="text"
              placeholder="Enter a keyword"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
