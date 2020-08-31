import './assets/script/view/recipe-list.js';
import recipes from './assets/script/data/data.js';
import {footerContent} from './assets/script/view/footer.js';
import {headerText} from './assets/script/view/header.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // menggunakan fitur es6 => async-await
    async function getheaderText() {
        const textHeader = document.querySelector('.text-header h3');
        try {
            const titleHeader = await headerText();
            textHeader.innerText = titleHeader;
        } catch(error) {
            console.log(error);
        }
    }

    getheaderText();

    // menggunakan fitur es6 => const
    const recipeList = document.createElement('recipe-list');
    recipeList.recipes = recipes;

    const recipeContent = document.getElementById('recipe-content');
    recipeContent.appendChild(recipeList);
    
    let CACHE_KEY = 'recipe';

    if (typeof(Storage) !== 'undefined') {
        const btnMoreLength = document.querySelectorAll('.more');

        // menggunakan fitur es6 => let
        for(let i = 0; i < btnMoreLength.length; i++) {
            const stepRecipe = document.querySelectorAll('.step')[i];
            const btnMore = btnMoreLength[i];
            const btnRecomend = document.querySelectorAll('.btn-recomend')[i];
            const recomended = document.querySelectorAll('.recomend')[i];
            const starIcon = document.querySelectorAll('.star-icon')[i];
            let recomend = {
                recipe: 'Recomended'
            };
            
            // menggunakan fitur es6 => arrow function
            btnMore.addEventListener('click', () => {
                btnMore.style.display = 'none';
                stepRecipe.style.display = 'block';
            })

            btnRecomend.addEventListener('click', () => {
                localStorage.setItem(CACHE_KEY, JSON.stringify(recomend));
                stepRecipe.style.display = 'none';
                btnMore.style.display = 'block';
                
                let getRecomend = JSON.parse(localStorage.getItem(CACHE_KEY));
                recomended.innerText = getRecomend.recipe;

                // menggunakan fitur es6 => setTimeout
                setTimeout( () => {
                    recomended.style.display = 'block';
                    starIcon.style.color = 'red';
                }, 1000);
            })
        }
    }

    const nameFooter = document.querySelector('.copyright');
    const yearFooter = document.getElementById('year-footer');
    const getFooterContent = footerContent('Abdu Rachman Ruchendar', '2020');
    nameFooter.innerText = `${getFooterContent.name}`;
    yearFooter.innerHTML = `${getFooterContent.years}`;
})


// ----- fitur ES6 -----
/* 
    1. let
    2. const
    3. Arrow function
    4. setTimeout
    5. Class
    6. Set
    7. ForEach
    8. Inheritance
    9. Destructuring Object
    10. Destructuring Array
    11. Template Literal
    12. Object Literal
    13. promise
    14. async-await
*/
