import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "./Grid";

import "dhx-suite/codebase/suite.min.css";

class GridPage extends Component {
	componentDidMount() {
		const setActiveExapmleInHead = (entries) => {
			entries.forEach(entry => {
				entry.isIntersecting &&
					this.props.dispatch({
						type: "CHANGE_ACTIVE_EXAMPLE",
						playload: entry.target.id,
					});
				entry.isIntersecting &&
					[...this.el.querySelectorAll("section")].map(item => {
						item.classList.remove("active");
						if (item.id === entry.target.id) {
							item.classList.add("active");
						}
					});
			});
		};
		let observer = new IntersectionObserver(setActiveExapmleInHead, {
			root: document.querySelector("main"),
			rootMargin: "57px",
			threshold: 1,
		});
		[...this.el.querySelectorAll("section")].map(item => observer.observe(item));
		this.props.handleToolbarNavItems([...this.el.querySelectorAll("section")].map(item => item.id));
	}
	render() {
		return (
			<main ref={el => (this.el = el)}>
				<section className="hgroup active" id="basic">
					<h3>
						Column
					</h3>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Grid />
					</div>
				</section>
			</main>
		);
	}
}

export default connect(state => state)(GridPage);
