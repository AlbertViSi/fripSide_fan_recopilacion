import React from "react";
import { Chrono } from "react-chrono";
import data from "./datacrono";

export default function App() {
  return (
	<div className="App">
		<div style={{ width: "100%", height: "60%" }}>
			<Chrono 
			items={data} 
			cardWidth={300}
			cardHeight={50}
			mode="VERTICAL_ALTERNATING"></Chrono>
		</div>
	</div>
  );
}