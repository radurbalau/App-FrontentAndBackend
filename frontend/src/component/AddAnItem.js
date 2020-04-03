import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class AddAnItem extends React.Component {
  state = { productName: "", price: "", sellersName: "" };

  validateForm() {
    if (
      Number.isInteger(this.state.price) >= 0 &&
      this.state.sellersName.length >= 2 &&
      this.state.productName.length >= 2
    ) {
      return true;
    } else return false;
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log("onSubmit");
    if (this.validateForm() === true)
      this.props.onSubmit({
        sellersName: this.state.sellersName,
        productName: this.state.productName,
        price: this.state.price
      });
    //else window.location.reload();
    // sa pun in state-ul asta ce input am dat
  };

  render() {
    return (
      <div className="insert">
        <div className="ui compact segment">
          <div>
            <form onSubmit={this.onFormSubmit} className="ui form">
              <FormGroup controlId="sellersName" bsSize="large">
                <ControlLabel style={{ marginLeft: "10px" }}>
                  Seller's Name
                </ControlLabel>
                <FormControl
                  placeholder="Your Name"
                  autoFocus
                  type="sellersName"
                  value={this.setState.sellersName}
                  onChange={e => this.setState({ sellersName: e.target.value })}
                />
              </FormGroup>

              <FormGroup controlId="price" bsSize="large">
                <ControlLabel style={{ marginLeft: "22px" }}>
                  Item's price
                </ControlLabel>
                <FormControl
                  placeholder="What price"
                  value={this.setState.price}
                  onChange={e => this.setState({ price: e.target.value })}
                  type="price"
                />
                <div className="ui basic label">Ron</div>
              </FormGroup>

              <FormGroup
                controlId="productName"
                bsSize="large"
                style={{ marginLeft: "10px" }}
              >
                <ControlLabel style={{ marginLeft: "7px" }}>
                  Item's Name
                </ControlLabel>
                <FormControl
                  placeholder="Selling item's name"
                  value={this.setState.productName}
                  onChange={e => this.setState({ productName: e.target.value })}
                  type="productName"
                />
              </FormGroup>

              <div className="centrare">
                <Button
                  className="ui secondary button"
                  bsSize="large"
                  type="submit"
                >
                  Add
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAnItem;
