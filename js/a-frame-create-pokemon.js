/*
 * So my HTML was getting reaaaally long, and the pokemon are a bit complex by now. 
 * I want to create a component that can make the Pokémons instead of them being hardcoded to the plane. 
 * Wish me luck!
 */

/* Meant to spawn wild pokemon */
AFRAME.registerComponent('pokemon-generator', {
    schema: {
        init_position: { type: 'vec3', default: {x: 0, y: 0, z: 0} },
        pokemon_type: { type: 'string', default: 'bulbasaur' }    
    },
	init: function () {

    },
});

/* Meant for objects that can hold a select amount of pokemon and save them (pokeballs) */
AFRAME.registerComponent('pokemon-container', {
    schema: {},
	init: function () {

    },
});