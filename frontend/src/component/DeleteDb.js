import React from "react";
import axios from "axios";
class DeleteDb extends React.Component {
  del = async term => {
    console.log("deleted db");

    axios.delete("http://localhost:5000/api/v1/delete");
    window.location.reload();
  };

  render() {
    return (
      <div>
        <button className="ui secondary button" onClick={this.del}>
          Purge Database
        </button>
      </div>
    );
  }
}

export default DeleteDb;
