
var container;
var camera, scene, renderer;
var particles, geometry, materials = [],
    parameters, i, h, color, sprite, size;
var particleNum, num1, num2, num3;

var directionalLight, pointLight;
var mouseX = 0,
    mouseY = 0;
var video, videoImage, videoImageContext, videoTexture;

var glmggrp, doorgrp, roseIngrp, roseOutgrp;
var roseIn, roseOut;

var raycaster;
var mouse = new THREE.Vector2(),
    INTERSECTED;
var radius = 100,
    theta = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


var x_max = SCREEN_WIDTH = window.innerWidth;
var y_max = SCREEN_HEIGHT = window.innerHeight;








init();
animate();

function init() {

    container = document.createElement('div');
    document.body.appendChild(container);

    glmggrp = new THREE.Object3D();
    doorgrp = new THREE.Object3D();
    roseIngrp = new THREE.Object3D();
    roseOutgrp = new THREE.Object3D();


    //CAMERA
    camera = new THREE.PerspectiveCamera(45, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
    camera.position.z = 100;



    //SCENE
    scene = new THREE.Scene();

    /*RENDER*/
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.setFaceCulling(THREE.CullFaceNone);
    container.appendChild(renderer.domElement);

    raycaster = new THREE.Raycaster();



    // LIGHTS

    var ambient = new THREE.AmbientLight(0x020202);
    scene.add(ambient);

    var directionalLight = new THREE.DirectionalLight(0xD13986, 0.5);
    directionalLight.position.set(300, 200, 300).normalize();
    scene.add(directionalLight);

    var directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(-300, 200, 300).normalize();
    directionalLight.intensity = 0.6;
    scene.add(directionalLight);


    var hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0xE4E2D4, 0.8);
    hemiLight.position.set(0, -100, 0);
    hemiLight.intensity = 0.5;
    scene.add(hemiLight);



    /*ENV CUBE*/
    var path = "../../img/env/studio-bw/";
    var format = '.jpg';
    var urls = [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format,
    ];

    var envTex = THREE.ImageUtils.loadTextureCube(urls);

    //TEXTURE
    var bodyTex = THREE.ImageUtils.loadTexture("map/bodyTex.jpg");
    /*bodyTex.wrapS = THREE.RepeatWrapping;
    bodyTex.wrapT = THREE.RepeatWrapping;
    bodyTex.repeat.set( 4, 4 );*/

    var roseLightTex = THREE.ImageUtils.loadTexture("map/roseLightTex.jpg");



    //PARTICLES

    geometry = new THREE.Geometry();

    sprite1 = THREE.ImageUtils.loadTexture("map/rosesprite01.png");
    sprite2 = THREE.ImageUtils.loadTexture("map/rosesprite02.png");
    sprite3 = THREE.ImageUtils.loadTexture("map/rosesprite03.png");
    sprite4 = THREE.ImageUtils.loadTexture("map/rosesprite04.png");
    sprite5 = THREE.ImageUtils.loadTexture("map/rosesprite05.png");


    num1 = 10;
    num2 = 100;
    num3 = 1000;


    particleNum = num2;

    for (i = 0; i < particleNum; i++) {

        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2000 - 1000;
        vertex.y = Math.random() * 2000 - 1000;
        vertex.z = Math.random() * 2000 - 1000;

        geometry.vertices.push(vertex);

    }

    parameters = [
        [
            [1.0, 0.2, 0.5], sprite2, 20
        ],
        [
            [0.95, 0.1, 0.5], sprite3, 15
        ],
        [
            [0.90, 0.05, 0.5], sprite1, 10
        ],
        [
            [0.85, 0, 0.5], sprite5, 8
        ],
        [
            [0.80, 0, 0.5], sprite4, 5
        ],
    ];

    for (i = 0; i < parameters.length; i++) {

        color = parameters[i][0];
        sprite = parameters[i][1];
        size = parameters[i][2];

        materials[i] = new THREE.PointCloudMaterial({
            size: size,
            map: sprite,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true
        });
        materials[i].color.setHSL(color[0], color[1], color[2]);

        particles = new THREE.PointCloud(geometry, materials[i]);

        particles.rotation.x = Math.random() * 6;
        particles.rotation.y = Math.random() * 6;
        particles.rotation.z = Math.random() * 6;

        scene.add(particles);

    }






    //MATERIAL

    var GLMGMat = {


        redBodyMat: new THREE.MeshPhongMaterial({
            color: 0xA30036,
            side: THREE.DoubleSide,
            shininess: 100,
            envMap: envTex,
            combine: THREE.AddOperation,
            refractionRatio: 0.98,
            reflectivity: 0.1,
        }),

        frameMat: new THREE.MeshPhongMaterial({
            color: 0x383838,
            side: THREE.DoubleSide,
            shininess: 100,
            envMap: envTex,
            combine: THREE.AddOperation,
            refractionRatio: 0.98,
            reflectivity: 0.8,
        }),


        roseMat: new THREE.MeshPhongMaterial({
            color: 0xCB0D5A,
            side: THREE.DoubleSide,
            specular: 0xEBB5E4,
            shininess: 10,
            emissive: 0x981d39,
            envMap: envTex,
            refractionRatio: 0.98,
            reflectivity: 0.1,
        }),


        BodyMat: new THREE.MeshPhongMaterial({
            color: 0xCB0D5A,
            map: bodyTex,
            side: THREE.DoubleSide,
            shininess: 100,
            envMap: envTex,
            combine: THREE.AddOperation,
            refractionRatio: 0.98,
            reflectivity: 0.1,
        }),


        glassMat: new THREE.MeshPhongMaterial({
            color: 0xFFFFFF,
            side: THREE.DoubleSide,
            opacity: 0.5,
            transparent: true,
            specular: 0xE5528D,
            shininess: 200,
            envMap: envTex,
            refractionRatio: 0.3,
            reflectivity: 0.6,
            combine: THREE.MixOperation,
        }),

        roseLightMat: new THREE.MeshBasicMaterial({
            map: roseLightTex,
            side: THREE.DoubleSide,
        }),


    };






    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {

        var Percent = loaded/total *100;
        console.log(  Percent );

        var progressWave = document.getElementById("progressWave");
        var progressWaveCanvas = $('#progressWaveCanvas');

        progressWaveCanvas.waveLoader('setProgress', Percent);


        if (Percent === 100) {

            progressWave.style.display = "none";


        }



        // console.log( item, loaded, total );

    };

    var loader = new THREE.BinaryLoader( manager );
    loader.load( 'obj/glmgMain.js', function ( geometry ) {

        //

    } );




    var loader = new THREE.BinaryLoader();

    var iwatchOBJ = function(geometry) {
        createScene(geometry, GLMGMat)
    };



    loader.load("obj/glmgMain.js", iwatchOBJ);


    /*DOOR*/
    loader.load('obj/glmgDoor.js', function(geometry) {
        door = new THREE.Mesh(geometry, GLMGMat.redBodyMat);
        scale = 5;
        door.position.set(0, 0, 0);
        door.scale.set(scale, scale, scale);
        doorgrp.add(door);
    });



    /*Rose*/
    loader.load('obj/RoseIn.js', function(geometry) {
        roseIn = new THREE.Mesh(geometry, GLMGMat.roseLightMat);
        scale = 1;
        roseIn.scale.set(scale, scale, scale);
        roseIn.position.set(0, 0, 0);
        roseIngrp.add(roseIn);
    });

    loader.load('obj/RoseOut.js', function(geometry) {
        roseOut = new THREE.Mesh(geometry, GLMGMat.roseLightMat);
        scale = 1;
        roseOut.scale.set(scale, scale, scale);
        roseOut.position.set(0, 0, 0);
        roseOutgrp.add(roseOut);
    });

    scene.add(doorgrp);
    scene.add(roseIngrp);
    scene.add(roseOutgrp);



    //EVENT
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);

} /*init end*/




//EVENT
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);

    particleNum = num1;


    if (mouseX > -100 && mouseX < 100 && mouseY > -250) {

        var glmggrpP = new TWEEN.Tween(glmggrp.position);
        glmggrpP.to({
            x: 0,
            y: 0.1,
            z: 0
        }, 3000);
        glmggrpP.delay(100);
        glmggrpP.start();

        var rosegrpP = new TWEEN.Tween(roseIngrp.position);
        rosegrpP.to({
            x: 0,
            y: -360,
            z: 0
        }, 1000);
        rosegrpP.start();

        var roseOutgrpP = new TWEEN.Tween(roseOutgrp.position);
        roseOutgrpP.to({
            x: 0,
            y: -360,
            z: 0
        }, 1000);
        roseOutgrpP.start();

        var roseOutgrpS = new TWEEN.Tween(roseOutgrp.scale);
        roseOutgrpS.to({
            x: 0,
            y: 0,
            z: 0
        }, 2000);
        roseOutgrpS.start();

    };
}


function onDocumentTouchStart(event) {

    if (event.touches.length === 1) {

        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;

    }

}



//createOBJ
function createScene(geometry, materials) {

    var scale = 5,
    m = new THREE.MeshFaceMaterial();

    m.materials[0] = materials.redBodyMat;
    m.materials[1] = materials.frameMat;
    m.materials[2] = materials.roseMat;
    m.materials[3] = materials.BodyMat;
    m.materials[4] = materials.glassMat;
    m.materials[5] = materials.roseMat;


    var mesh = new THREE.Mesh(geometry, m);
    mesh.name = "glmg";
    mesh.rotation.y = 0;
    mesh.scale.set(scale, scale, scale);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);
    glmggrp.add(mesh);
    glmggrp.add(doorgrp);
    scene.add(glmggrp);
    scene.updateMatrixWorld;
}



function startnav() {
    camera.position.x += (mouseX - camera.position.x) * .1;
    camera.position.y += (-mouseY - camera.position.y) * .1;
}




window.onload = function() {



    glmggrp.position.set(0, -200, 0);
    doorgrp.position.set(0, -200, 0);

    roseIngrp.position.set(0, -80, 0);
    roseIngrp.scale.set(0, 0, 0);

    roseOutgrp.position.set(0, -80, 0);
    roseOutgrp.scale.set(0, 0, 0);




    var glmggrpP = new TWEEN.Tween(glmggrp.position);
    glmggrpP.to({
        x: 0,
        y: -20,
        z: 0
    }, 3000);
    glmggrpP.delay(3000);
    glmggrpP.start();

    var doorgrpP = new TWEEN.Tween(doorgrp.position);
    doorgrpP.to({
        x: 0,
        y: 0,
        z: 0
    }, 2000);
    doorgrpP.delay(3000);
    doorgrpP.start();



    var rosegrpP = new TWEEN.Tween(roseIngrp.position);
    rosegrpP.to({
        x: 0,
        y: -36,
        z: 0
    }, 1000);
    rosegrpP.start();

    var roseIngrpS = new TWEEN.Tween(roseIngrp.scale);
    roseIngrpS.to({
        x: 1,
        y: 1,
        z: 1
    }, 2000);
    roseIngrpS.start();

    var roseOutgrpP = new TWEEN.Tween(roseOutgrp.position);
    roseOutgrpP.to({
        x: 0,
        y: -36,
        z: 0
    }, 1000);
    /*roseOutgrpP.easing(TWEEN.Easing.Elastic.Out);*/
    roseOutgrpP.start();

    var roseOutgrpS = new TWEEN.Tween(roseOutgrp.scale);
    roseOutgrpS.to({
        x: 1,
        y: 1,
        z: 1
    }, 2000);
    roseOutgrpS.start();

    var roseIngrpST = new TWEEN.Tween(roseIngrp.scale);
    roseIngrpST.to({
        x: 0.01,
        y: 0.01,
        z: 0.01
    }, 2000);
    roseIngrpST.delay(100);

    roseIngrpS.chain(roseIngrpST);


    /*			    	rosegrpP.chain(rosegrpS);
    			    	rosegrpS.chain(glmggrpS);
    			    	glmggrpS.chain(glmggrpP);
    			    	glmggrpS.chain(doorgrpS);*/


    /*可用的easing函数：TWEEN.Easing
    tween.js提供了一些可用的easing函数。可用函数有：Linear, Quadratic, Cubic, Quartic, Quintic, Sinusoidal, Exponential, Circular, Elastic, Back 和 Bounce。easing 类型分为: In, Out 和 InOut.*/

}













function animate() {
    requestAnimationFrame(animate);
    render();
    TWEEN.update();
}


function render() {


    var basespeed = 0.01;
    var speed = basespeed * mouseX / 100;




    var time = Date.now() * 0.00005;


    for (i = 0; i < scene.children.length; i++) {

        var object = scene.children[i];

        if (object instanceof THREE.PointCloud) {

            object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));

        }

    }

    for (i = 0; i < materials.length; i++) {

        color = parameters[i][0];

        h = (360 * (color[0] + time) % 360) / 360;
        materials[i].color.setHSL(h, color[1], color[2]);

    }




    if (glmggrp.position.y > 0.09) {

        if (speed < 0.005 & speed > -0.005) {
            doorgrp.rotation.y = speed / 100;
        } else if (speed > 0.05) {
            doorgrp.rotation.y += speed;
        } else {
            doorgrp.rotation.y += speed;
        };

        if (doorgrp.rotation.y < -Math.PI / 2) {
            doorgrp.rotation.y = -Math.PI / 2;
        };

        if (doorgrp.rotation.y > Math.PI / 2) {
            doorgrp.rotation.y = Math.PI / 2;
        };

        startnav();

    };


    camera.lookAt(scene.position);
    renderer.render(scene, camera);


}