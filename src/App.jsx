import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const seed = Date.now();
    const picture = Date.now();
    fetch(
      `https://randomuser.me/api/?page=1&results=1&${seed}=abc&${picture}=large`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  return (
    <div className="text-center m-20 p-5 py-14 font-bold bg-green-600 text-3xl text-slate-900 shadow-2xl shadow-slate-950 h-96 w-5/6">
      <h1 className="bg-slate-300 text-3xl p-3 rounded-md shadow-lg shadow-black">
        Generate data Randomly with just 1 refresh
      </h1>
      {data.map((user, index) => (
        <div
          key={index}
          className="bg-black mt-4 rounded-md shadow-lg shadow-zinc-100 p-10 text-center text-slate-200 row-span-5 font-mono"
        >
          <img
            className="w-67 shadow-lg shadow-green-600"
            style={{ borderRadius: "50%" }}
            src={user.picture.large}
            alt=""
          />
          <p style={{ marginTop: "-7rem" }}>
            {user.name.first} {user.name.last}
          </p>
          <p> {user.gender}</p>
          <p> {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
