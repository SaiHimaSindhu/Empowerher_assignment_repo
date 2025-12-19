// src/components/UserInfo.jsx
function UserInfo(props) {
  return (
    <div>
      <h3>Child Component (UserInfo)</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default UserInfo;
