import { useEffect, useState } from "react";
import { getPackages } from "../services/package.services";

function Home() {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    getPackages().then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {packages.map((p: any) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}

export default Home;
