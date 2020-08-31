import './recipe-item.js';

// menggunakan fitur es6 => class
class RecipeList extends HTMLElement {
    // menggunakan fitur es6 => set
    set recipes(recipes) {
        this._recipes = recipes;
        this.render();
    }

    render() {
        // menggunakan fitur es6 => forEach
        this._recipes.forEach( recipe => {
            const recipeItem = document.createElement('recipe-item');
            recipeItem.recipe = recipe;
            this.appendChild(recipeItem);
        })
    }
}

customElements.define('recipe-list', RecipeList);