import React, { useEffect } from "react";
import { connect } from "react-redux";
import { featchUser } from "../redux";

function UserComponent({ userData, featchUser }) {
  useEffect(() => {
    featchUser();
  }, []);

  return userData.loading ? (
    <h1>"loading..."</h1>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
    <div>
      <h2>user list</h2>
      <div>
        {userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    featchUser: () => dispatch(featchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
