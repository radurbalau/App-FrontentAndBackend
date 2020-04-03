import React from "react";
import axios from "axios";

class ListOfPosts extends React.Component {
  state = { postsList: [] };

  componentDidMount() {
    console.log("componentDidMount");
    axios.get("http://localhost:5000/api/v1").then(res => {
      //console.log(res.data);
      this.setState({ postsList: res.data });
      //console.log(res);
    });
  }

  render() {
    return (
      <ul>
        {this.state.postsList.map(a => (
          <div key={a.id}>
            <li> {a.sellersName}</li>
            <div>{a.productName}</div>
            <div>{a.price} </div>
            <div className="ui divider"></div>
          </div>
        ))}
      </ul>
    );
  }
}

export default ListOfPosts;
