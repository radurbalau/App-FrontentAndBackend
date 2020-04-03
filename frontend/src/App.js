import React from "react";
import AddAnItem from "./component/AddAnItem";
import axios from "axios";
import ListOfPosts from "./component/ListOfPosts";
import "./stylingCSS/AddAnItem.css";
import DeleteDb from "./component/DeleteDb";

class App extends React.Component {
  state = { renderedResponse: "" };

  whenSubmit = async term => {
    console.log("Submitted");

    axios.post("http://localhost:5000/api/v1", {
      sellersName: term.sellersName,
      productName: term.productName,
      price: term.price
    });
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div className="bg">
          <div className="ui container greycol" style={{ marginTop: "50px" }}>
            <h1 className="titlu" id="demoFont">
              CEL MAI MISTO SITE PENTRU CUMPARATURI SI ANUNTURI!
            </h1>
            <AddAnItem onSubmit={this.whenSubmit} />

            <div className="ui placeholder segment">
              <div class="ui two column very relaxed stackable grid">
                <div className="column">
                  <h2 className="titlu" id="subFont">
                    Selling items List
                  </h2>
                  <div className="ui top attached tabular menu">
                    <div className="active item">POSTS</div>
                  </div>
                  <div className="ui bottom attached active tab segment">
                    <ListOfPosts />
                  </div>
                </div>
                <div className="column">
                  <h2 className="titlu" id="subFont">
                    Made by
                  </h2>
                  <div class="ui card">
                    <div class="usrimage" />
                    <div class="content restr">
                      <p class="header">Radu</p>
                      <div class="meta">
                        <span class="date">Follow me on IG</span>
                      </div>
                      <div class="description">
                        <a href="https://www.instagram.com/radudrb/">
                          instagram
                        </a>
                      </div>
                    </div>
                    <div class="extra content">
                      <p>
                        <i class="user icon"></i>
                        Many Many Friends
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui vertical divider">Or</div>
            </div>
            <DeleteDb />
          </div>
        </div>

        <div class="ui inverted segment">
          <div class="ui active inverted placeholder">
            <div class="image header">
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="paragraph">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
