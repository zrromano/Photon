import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class PicturesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: picture => <Link to={`/pictures/${picture._id}`}>{picture.title}</Link>
    },
    {
      key: "like",
      content: picture => (
        <Like liked={picture.liked} onClick={() => this.props.onLike(picture)} />
      )
    }
  ];

  deleteColumn = {
    key: "delete",
    content: picture => (
      <button
        onClick={() => this.props.onDelete(picture)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }
  render() {
    const { pictures, sortColumn, onSort } = this.props;
    return (
      <Table
        data={pictures}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default PicturesTable;
