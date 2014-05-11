threex.grassground
==================

Threex.grassground is a [three.js game extension](http://www.threejsgames.com/extensions/) which provides a simple mesh for a flat grass. It is a content extension to help you start your game. It contains a [diffuse and a normal texture from three.js](https://github.com/mrdoob/three.js/tree/master/examples/textures/terrain). Play with the normal scale and the texture repeat to fit your needs.  This could be an easily displayed grassground for your field or you terrain in your three.js game.  

Show Don't Tell
===============
* [examples/basic.html](http://jeromeetienne.github.io/threex.grassground/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.grassground/blob/master/examples/basic.html)\] :
It shows how to include a grass ground into your own code.

A Screenshot
============
[![screenshot](https://raw.githubusercontent.com/jeromeetienne/threex.grassground/master/examples/images/screenshot-threex-grassground-512x512.jpg)](http://jeromeetienne.github.io/threex.grassground/examples/basic.html)

How To Install It
=================

You can install it via script tag

```html
<script src='threex.grassground.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```bash
bower install threex.grassground
```

How To Use It
=============

First you instanciate the object

```javascript
var groundMesh	= new THREEx.GrassGround()
scene.add(groundMesh)
```

There are some options arguments that you can tune to fix your own needs.

```
var groundMesh	= new THREEx.GrassGround({
	width		: 1,	// the width of the mesh, default to 1
	height		: 1, 	// the height of the mesh, default to 1
	segmentsW	: 1,	// the number of segment in the width, default to 1
	segmentsH	: 1,	// the number of segment in the height, default to 1
	repeatX		: 1,	// the number of time the texture is repeated in X, default to 1
	repeatY		: 1,	// the number of time the texture is repeated in Y, default to 1
	anisotropy	: 16,	// the anisotropy applied to the texture, default to 16
})
```

Possible Improvements
=====================
* make geometry tunable
  * opts.geometry
  * thus able to use circle geometry for example
  * var geometry	= new THREE.CircleGeometry(width/2, 32)
* 







