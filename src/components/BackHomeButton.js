import React from "react";
import { Link } from "react-router-dom";

export default function BackHomeButton() {
  return (
    <Link to="/">
      <button style={{ position: "absolute", left: 0, top: 0 }}>Home</button>
    </Link>
  );
}
