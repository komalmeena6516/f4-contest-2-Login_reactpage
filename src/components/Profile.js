import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    let id = localStorage.getItem("id");
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="ProfilePage">
      {userData && (
        <>
          <h1>Profile Page</h1>
          <img src={userData.image} alt="user-image" />
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{userData.id}</td>
              </tr>
              <tr>
                <td>USER NAME:</td>
                <td>{userData.username}</td>
              </tr>
              <tr>
                <td>FIRST NAME:</td>
                <td>{userData.firstName}</td>
              </tr>
              <tr>
                <td>LAST NAME:</td>
                <td>{userData.lastName}</td>
              </tr>

              <tr>
                <td>PHONE NO:</td>
                <td>{userData.phone}</td>
              </tr>
              <tr>
                <td>E-MAIL:</td>
                <td>{userData.email}</td>
              </tr>

              <tr>
                <td>AGE:</td>
                <td>{userData.age}</td>
              </tr>

            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ProfilePage;