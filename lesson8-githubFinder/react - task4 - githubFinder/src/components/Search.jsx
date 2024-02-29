import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = ({ sendkeyword, title }) => {
  const [keyword, setKeyword] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    if (keyword == "") {
      alert("please fill all the places");
    } else {
      sendkeyword(keyword);
    }
  };

  return (
    <>
      <form
        onSubmit={formSubmit}
        className="container-fluid my-3 d-flex justify-content-center"
      >
        <div className="col-6 ">
          <div className="input-group mb-3">
            <input
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              value={keyword}
              className="form-control"
              placeholder="Search username"
              // required
            />
            <button className="btn btn-dark" type="submit" id="button-addon2">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
