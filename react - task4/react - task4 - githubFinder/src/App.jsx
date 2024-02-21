import Search from "./components/Search";
import Header from "./layout/Header";
import Users from "./components/Users";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  // const [loading, setLoading] = useState(false);

  const searchUser = (comingKeyword) => {
    axios
      .get(`https://api.github.com/search/users?q=${comingKeyword}`)
      .then((res) => {
        if (res.data.items == 0) {
          setText("user not found");
        } else {
          setUsers(res.data.items);
          console.log(res.data.items);
          // setLoading(true);
        }
      });
  };

  return (
    <>
      <Header />
      {/* {loading ? "" : "gozlenilir"} */}
      <Search sendkeyword={searchUser} />
      <Users senddata={users} />
      {/* {
        users.length == 0 ? 'not user' : <Users users={users}/>
      } */}
      <h1>{text}</h1>
    </>
  );
};

export default App;
