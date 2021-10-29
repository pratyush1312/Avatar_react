import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./Avatard.css";

function Avatard() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="avatard">
      <div className="avatarstyle">
        <form>
          <Avatar
            src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}
            sx={{ width: 565, height: 565 }}
          />
        </form>
      </div>
    </div>
  );
}

export default Avatard;
