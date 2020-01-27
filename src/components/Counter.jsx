import React from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount, resetCount } from "../actions";

const Counter = ({ count, incrementCount, decrementCount, resetCount }) => {
  return (
    <>
      <div className="container">
        <div className="border rounded jumbotron">
          <div className="row justify-content-center pb-5">
            <div className="col-md-8 ">
              <h1 className="text-center">Counter App with React and Redux</h1>{" "}
            </div>
          </div>

          <div className="row   justify-content-center pb-5">
            <h1 className="badge badge-secondary  p-3 font-bold ">{count}</h1>
          </div>

          <div className="row   justify-content-center">
            <button
              className="btn btn-primary btn-lg m-2 ml-0"
              onClick={incrementCount}
            >
              Increment
            </button>
            <button
              className="btn btn-primary btn-lg m-2"
              onClick={decrementCount}
            >
              Decrement
            </button>{" "}
            <button
              className="btn btn-danger btn-lg   m-2"
              onClick={resetCount}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.count
  };
}
export default connect(mapStateToProps, {
  incrementCount,
  decrementCount,
  resetCount
})(Counter);
