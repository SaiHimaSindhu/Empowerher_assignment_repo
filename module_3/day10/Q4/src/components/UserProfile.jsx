// src/components/UserProfile.jsx
import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Hima Sindhu";
  const age = 22;

  return (
    <div>
      <h2>Parent Component (UserProfile)</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
