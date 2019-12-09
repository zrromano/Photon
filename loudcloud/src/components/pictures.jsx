import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./common/pagination";
import SearchBox from "./common/searchBox";
import PicturesTable from "./picturesTable";
import queryString from "query-string";
import { toast } from "react-toastify";
import { getPictures } from "../services/pictureService";
import { paginate } from "../utilities/paginate";
import _ from "lodash";

class Pictures extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data: pictures } = await getPictures();
    this.setState({ pictures });
  }

  handleLike = picture => {
    const pictures = [...this.state.pictures];
    const index = pictures.indexOf(picture);
    pictures[index] = { ...pictures[index] };
    pictures[index].liked = !pictures[index].liked;
    this.setState({ pictures });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };


  handleSort = sortColumn => {
    this.props.history.replace(
      "/pictures?sortBy=" + sortColumn.path + "&order=" + sortColumn.order
    );
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      pictures,
      sortColumn,
      searchQuery
    } = this.state;

    let filtered = pictures;
    if (searchQuery)
      filtered = pictures.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginated = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: paginated };
  };

  render() {
    const { length: count } = this.state.pictures;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { location, user } = this.props;
    const { sortBy, order } = queryString.parse(location.search);
    if (count === 0) return <p>There are no pictures in the database.</p>;
    if (sortBy) {
      sortColumn.path = sortBy;
      if (order) sortColumn.order = order;
    }

    const { totalCount, data } = this.getPagedData();
    return (
      <div className="row">
        <div className="col">
          <p>Showing {totalCount} pictures in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <PicturesTable
            pictures={data}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Pictures;
