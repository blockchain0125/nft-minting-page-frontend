import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/home/Home";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		);
	}
}

export default App;
