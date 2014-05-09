var THREEx	= THREEx	|| {}

THREEx.GrassGround	= function(opts){
	// handle default arguments
	opts		= opts	|| {}
	var width	= opts.width !== undefined ? opts.width : 1
	var height	= opts.height !== undefined ? opts.height : 1
	var segmentsW	= opts.segmentsW !== undefined ? opts.segmentsW : 1
	var segmentsH	= opts.segmentsH !== undefined ? opts.segmentsH : 1
	var repeatX	= opts.repeatX !== undefined ? opts.repeatX : 1
	var repeatY	= opts.repeatY !== undefined ? opts.repeatY : 1
	var anisotropy	= opts.anisotropy !== undefined ? opts.anisotropy : 16

	// create the textureDiffuse	
	var textureDiffuseUrl	= THREEx.GrassGround.baseUrl + 'images/grasslight-small.jpg'
	var textureDiffuse	= THREE.ImageUtils.loadTexture(textureDiffuseUrl);
	textureDiffuse.wrapS	= THREE.RepeatWrapping;
	textureDiffuse.wrapT	= THREE.RepeatWrapping;
	textureDiffuse.repeat.x= repeatX
	textureDiffuse.repeat.y= repeatY
	textureDiffuse.anisotropy = anisotropy;

	// create the textureNormal	
	var textureNormalUrl	= THREEx.GrassGround.baseUrl + 'images/grasslight-small-nm.jpg'
	var textureNormal	= THREE.ImageUtils.loadTexture(textureNormalUrl);
	textureNormal.wrapS	= THREE.RepeatWrapping;
	textureNormal.wrapT	= THREE.RepeatWrapping;
	textureNormal.repeat.x	= repeatX
	textureNormal.repeat.y	= repeatY
	textureNormal.anisotropy= anisotropy;

	// build object3d
	var geometry	= new THREE.PlaneGeometry(width, height, segmentsW, segmentsH)
	var material	= new THREE.MeshPhongMaterial({
		map		: textureDiffuse,
		normalMap	: textureNormal,
                normalScale	: new THREE.Vector2(1,1).multiplyScalar(0.5),
		color		: 0x44FF44,
	})
	var object3D	= new THREE.Mesh(geometry, material)
	object3D.rotateX(-Math.PI/2)
	// return the just-built object3d
	return object3D;
}

THREEx.GrassGround.baseUrl	= "../"
