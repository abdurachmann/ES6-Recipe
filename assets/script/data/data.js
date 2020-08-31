const recipes = [
    {
        id: 1,
        title: `Chicken & chorizo jambalaya`,
        category: 'Chicken',
        image: 'assets/images/chicken_chorizo.webp',
        author: 'Good Food',
        ratings: '1989 ratings',
        cook: '45 mins',
        step: [
            'Heat 1 tbsp olive oil in a large frying pan with a lid and brown 2 chopped chicken breasts for 5-8 mins until golden.',
            'Remove and set aside. Tip in the 1 diced onion and cook for 3-4 mins until soft',
            'Add 1 thinly sliced red pepper, 2 crushed garlic cloves, 75g sliced chorizo and 1 tbsp Cajun seasoning, and cook for 5 mins more.',
            'Stir the chicken back in with 250g long grain rice, add the 400g can of tomatoes and 350ml chicken stock. Cover and simmer for 20-25 mins until the rice is tender.',
            'Finish'
        ]
    },
    {
        id: 2,
        title: `Chicken noodle soup`,
        category: 'Chicken',
        image: 'assets/images/chicken_noodle.webp',
        author: 'Mary Cadogan',
        ratings: '562 ratings',
        cook: '30 mins',
        step: [
            'Pour 900ml chicken or vegetable stock into a pan and add 1 boneless, skinless chicken breast, 1 tsp chopped root ginger and 1 finely chopped garlic clove.',
            'Bring to the boil, then reduce the heat, partly cover and simmer for 20 mins, until the chicken is tender.',
            'Remove the chicken to a board and shred into bite-size pieces using a couple of forks.',
            'Return the chicken to the stock with 50g rice or wheat noodles, 2 tbsp sweetcorn, 2-3  thinly sliced mushrooms, 1 shredded spring onion and 2 tsp soy sauce.',
            'Simmer for 3-4 mins until the noodles are tender.',
            'Ladle into two bowls and scatter over the remaining shredded spring onion, mint or basil leaves and shredded chilli if using. Serve with extra soy sauce for sprinkling.'
        ]
    },
    {
        id: 3,
        title: `Herby salmon & couscous parcels`,
        category: `Salmon`,
        image: `assets/images/herby_salmon.webp`,
        author: `CJ Jackson`,
        ratings: `135 ratings`,
        cook: '15 mins',
        step: [
            'Put the couscous into a bowl and stir in the stock and oil. Cover with cling film and leave to stand 10 mins, then uncover and fluff up with a fork. Keeping back some herbs, add the rest of the ingredients, except the salmon. Season to taste.',
            'Heat oven to 200C/fan 180C/gas 6. Cut two large sheets of non-stick baking paper, then divide the couscous between them. Sit each fillet on the couscous, top with the remaining herbs and season. Fold the paper over, then twist the edges to seal – like a Cornish pasty. Pop the parcels onto a baking sheet and bake for 15 mins or until the fish feels firm through the paper. Serve in the bag.',
            'Remove the chicken to a board and shred into bite-size pieces using a couple of forks.',
            'Return the chicken to the stock with 50g rice or wheat noodles, 2 tbsp sweetcorn, 2-3  thinly sliced mushrooms, 1 shredded spring onion and 2 tsp soy sauce.',
            'Simmer for 3-4 mins until the noodles are tender.',
            'Ladle into two bowls and scatter over the remaining shredded spring onion, mint or basil leaves and shredded chilli if using. Serve with extra soy sauce for sprinkling.'
        ]
    },
    {
        id: 4,
        title: `Italian broccoli & salmon bake`,
        category: `Salmon`,
        image: `assets/images/italian_broccoli.webp`,
        author: `Good Food`,
        ratings: `302 ratings`,
        cook: '30 mins',
        step: [
            'Preheat the oven to 190C/gas 5/fan 170C and get out an ovenproof dish (measuring 20 by 30cm, and about 5cm deep). Meanwhile, put a large pan of water on to boil for the pasta. When it is boiling rapidly, tip in the pasta with a generous sprinkling of salt. Give it a stir, return to the boil and cook for 6 minutes. Add the broccoli, then return the water to the boil and cook for 4 minutes more, until the broccoli is on the firm side of just tender. Drain well.',
            'While the pasta is cooking, put the butter, flour and milk in a large pan and heat, whisking or stirring continuously, until it thickens to make a smooth sauce. Remove from the heat and stir in the mascarpone, sun-dried tomatoes, capers (if using), anchovies (if using) and basil, then add the pasta and broccoli and season well.',
            'Halve the salmon fillets widthways (you will see that there is an obvious divide on each fillet) then place the pieces in a single layer on the base of the ovenproof dish. Spoon the broccoli mixture on top, then scatter with the grated cheddar. (You can chill this for up to 4 hours if you want to get ahead.)',
            'Return the chicken to the stock with 50g rice or wheat noodles, 2 tbsp sweetcorn, 2-3  thinly sliced mushrooms, 1 shredded spring onion and 2 tsp soy sauce.',
            'Bake for 30 minutes until the mixture is just starting to bubble round the edges and the mixture is pale golden – don’t let it go too dark or the fish will overcook.',
        ]
    },
    {
        id: 5,
        title: `Beef wellington`,
        category: `Beef`,
        image: `assets/images/beef_wellington.webp`,
        author: `Gordon Ramsay`,
        ratings: `188 ratings`,
        cook: '150 mins',
        step: [
            'Heat oven to 220C/fan 200C/gas 7.',
            'Sit the 1kg beef fillet on a roasting tray, brush with 1 tbsp olive oil and season with pepper, then roast for 15 mins for medium-rare or 20 mins for medium. When the beef is cooked to your liking, remove from the oven to cool, then chill in the fridge for about 20 mins.',
            'While the beef is cooling, chop 250g chestnut (and wild, if you like) mushrooms as finely as possible so they have the texture of coarse breadcrumbs. You can use a food processor to do this, but make sure you pulse-chop the mushrooms so they don’t become a slurry.',
            'Heat 2 tbsp of the olive oil and 50g butter in a large pan and fry the mushrooms on a medium heat, with 1 large sprig fresh thyme, for about 10 mins stirring often, until you have a softened mixture.',
            'Season the mushroom mixture, pour over 100ml dry white wine and cook for about 10 mins until all the wine has been absorbed. The mixture should hold its shape when stirred.',
        ]
    },
    {
        id: 6,
        title: `Strawberry cheesecake in 4 easy steps`,
        category: `Strawberry`,
        image: `assets/images/strawberrycheesecake.webp`,
        author: `Good Food`,
        ratings: `393 ratings`,
        cook: '30 mins',
        step: [
            'To make the base, butter and line a 23cm loose-bottomed tin with baking parchment. Put the digestive biscuits in a plastic food bag and crush to crumbs using a rolling pin. Transfer the crumbs to a bowl, then pour over the melted butter. Mix thoroughly until the crumbs are completely coated. Tip them into the prepared tin and press firmly down into the base to create an even layer. Chill in the fridge for 1 hr to set firmly.',
            'Slice the vanilla pod in half lengthways, leaving the tip intact, so that the two halves are still joined. Holding onto the tip of the pod, scrape out the seeds using the back of a kitchen knife.',
            'Place the cream cheese, icing sugar and the vanilla seeds in a bowl, then beat with an electric mixer until smooth. Tip in the double cream and continue beating until the mixture is completely combined. Now spoon the cream mixture onto the biscuit base, starting from the edges and working inwards, making sure that there are no air bubbles. Smooth the top of the cheesecake down with the back of a dessert spoon or spatula. Leave to set in the fridge overnight.',
            'Bring the cheesecake to room temperature about 30 mins before serving. To remove it from the tin, place the base on top of a can, then gradually pull the sides of the tin down. Slip the cake onto a serving plate, removing the lining paper and base. Purée half the strawberries in a blender or food processor with the icing sugar and 1 tsp water, then sieve. Pile the remaining strawberries onto the cake, and pour the purée over the top.',
            'Finish'
        ]
    },
]

export default recipes;