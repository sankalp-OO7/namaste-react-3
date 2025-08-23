import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("constructor");
  }
  componentDidMount() {
    console.log("compodidmount");
  }
  componentWillUnmount() {
    console.log("compowillunmount");
  }
  render() {
    return (
      <>
        {console.log("render")}
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            count ={" "}
          </button>{" "}
          = {this.state.count}
        </h1>
      </>
    );
  }
}

export default About;
