import React from 'react';


class App extends React.Component {
  state={renderedResponse:''};

  // fetch('https://cameronnokes.com/slack-ron-swanson-quote-bot/ron', {
  //   method: 'POST',
  //   body: JSON.stringify({text: 'bacon'}),
  //   headers: {'Content-Type': 'application/json'}
  // })
  // .then(res => res.json())
  // .then(console.log)



  getResponse = async() =>{
    const response = await fetch('http://localhost:5000/api/test');
    //json from response
    const body = await response.json();
    if(response.status !== 200)
      throw Error(body.message);


      return body;
  }

  componentDidMount(){
    this.getResponse().then(res=>{
      const someData = res;
      this.setState({renderedResponse: someData});
    });
  };
  
  render() {
    const {renderedResponse} = this.state;
    console.log({renderedResponse});
  return (
    <div className="App">
      APp
      <h3>{renderedResponse.express}</h3>
    </div>
  );
  }
}

export default App;
