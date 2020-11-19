AFRAME.registerComponent('pokemon', {   
	init: function () {		
		this.el.addEventListener('click', function () {
            console.log(this.el + " was clicked!");
	  	});
    },

    tick: function () {		
		this.el.addEventListener('collide', function (e) {

            let collidedObj = e.detail.body.el;
            console.log(this.el + 'collided with ' + e.detail.body.el);

            e.detail.target.el;  // Original entity (playerEl).
            e.detail.body.el;    // Other entity, which playerEl touched.
            e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
            e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).

            if(collidedObj.classList.contains("pokeball"))
            {      
                collidedObj.setAttribute('sound', {src: 'sounds/sfx/PokeballOpening.mp3', autoplay: 'true', loop: 'false'});
            }
		});
	}
});