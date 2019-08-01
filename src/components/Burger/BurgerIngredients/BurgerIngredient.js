import React, { Component } from "react";
import PropTypes from "prop-types";

import ingredientClasses from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
	render() {
		let ingredient = null;

		switch (this.props.type) {
			case "bread-bottom":
				ingredient = <div className={ingredientClasses.BreadBottom} />;
				break;
			case "bread-top":
				ingredient = (
					<div className={ingredientClasses.BreadTop}>
						<div className={ingredientClasses.Seeds1} />
						<div className={ingredientClasses.Seeds2} />
					</div>
				);
				break;
			case "meat":
				ingredient = <div className={ingredientClasses.Meat} />;
				break;
			case "cheese":
				ingredient = <div className={ingredientClasses.Cheese} />;
				break;
			case "salad":
				ingredient = <div className={ingredientClasses.Salad} />;
				break;
			case "bacon":
				ingredient = <div className={ingredientClasses.Bacon} />;
				break;
			default:
				ingredient = null;
		}

		return ingredient;
	}
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;
