import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const sideDrawer = props => {
	let attachedClassess = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClassess = [classes.SideDrawer, classes.Open];
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClassess.join(" ")}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<NavigationItems />
			</div>
		</Aux>
	);
};

export default sideDrawer;
