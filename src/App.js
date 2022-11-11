import React, { PureComponent } from "react";
import smoothscroll from "smoothscroll-polyfill";
import "./App.css";
import "dhx-suite/codebase/suite.min.css";

import { isEqual } from "lodash";

import GridPage from "./grid/GridPage";

class App extends PureComponent {
	constructor(props) {
		super(props);
		smoothscroll.polyfill();
		this.state = {
			toolbarNav: [],
			activeExampleId: "",
		};
	}
	componentDidUpdate() {
		let activeHrefPart = window.location.href.split("/").pop();
		let activeHrefPartCapitalize =
			activeHrefPart.charAt(0).toUpperCase() + activeHrefPart.slice(1);
		if (this.state.activeWidget !== activeHrefPartCapitalize) {
			this.setState({
				activeWidget: activeHrefPartCapitalize,
			});
		}
	}
	setToolBarNavItems(array) {
		if (!isEqual(array, this.state.toolbarNav)) {
			this.setState({
				toolbarNav: array,
			});
		}
	}
	setActiveExapmle(id) {
		let elHash = "#" + id;
		const el = this.el.querySelector(elHash);
		const mainY =
			el.getBoundingClientRect().top + this.el.querySelector("main").scrollTop;
		this.el.querySelector("main").scroll({
			top: mainY - 57,
			behavior: "smooth",
			inline: "center",
		});
	}
	render() {
		return (
			<div
				className="app-screen"
				style={{
					minHeight: "100vh",
					maxHeight: "100vh",
					display: "flex",
					overflow: "hidden",
				}}
			>
				<GridPage
					handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
					setActiveExapmle={(id, formObserver) =>
						this.setActiveExapmle(id, formObserver)
					}
				/>
			</div>
		);
	}
}

export default App;
