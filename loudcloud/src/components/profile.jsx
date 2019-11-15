import React, { Component } from "react";
import SearchBox from "./common/searchBox";
import ListGroup from "./common/listGroup";

class Profile extends Component {
  state = {
    searchQuery: "",
    photoGroups: [],
    selectedGroup: null
  };

  componentDidMount() {}

  handleGroupSelect = () => {};

  handleSearch = () => {};

  render() {
    const { searchQuery, photoGroups, selectedGroup } = this.state;

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={photoGroups}
            selectedItem={selectedGroup ? selectedGroup : photoGroups[0]}
            onItemSelect={this.handleGroupSelect}
          />
        </div>
        <div className="col"></div>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
      </div>
    );
  }
}

export default Profile;
