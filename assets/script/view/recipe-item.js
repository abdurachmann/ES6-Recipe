
// menggunakan fitur es6 => inheritance
class RecipeItem extends HTMLElement {
    set recipe(recipe) {
        this._recipe = recipe;
        this.render();
    }

    render() {
        // menggunakan fitur es6 => destructuring object
        const {title, image, category, author, cook, ratings, step} = this._recipe;

        // menggunakan fitur es6 => destructuring array
        const [step_one, step_two, step_three, step_four, step_five] = step;

        // menggunakan fitur es6 => template literal
        this.innerHTML = `
            <div class="container">
                <img src="${image}" alt="recipe-image" class="recipe-image">
                <div class="recipe">
                    <p><i class="fas fa-star star-icon"></i></p>
                    <h5 class="recomend"></h5>
                    <h4><b>${title}</b></h4>
                    <p><i>${category}</i></p>
                    <p>By <span class="author">${author}</span></p>
                    <p>
                        <i class="fas fa-clock" style="color: red;"></i> 
                        <span class="clock">${cook}</span>
                    </p>
                    <p>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <span class="rating">(${ratings})</span>
                    </p>
                    <button class="button more"> <a href="#navigation">More</a></button>
                    <div class="step">
                        <p>Recipe:</p>
                        <ol>
                            <li>${step_one}</li>
                            <li>${step_two}</li>
                            <li>${step_three}</li>
                            <li>${step_four}</li>
                            <li>${step_five}</li>
                        </ol>

                        <button class="button btn-recomend">Recomend <i class="fas fa-thumbs-up stars"></i></button>
                        <div class="share">
                            <p>Share to:</p>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('recipe-item', RecipeItem);