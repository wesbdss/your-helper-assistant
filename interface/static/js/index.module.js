import * as THREE from 'three';

const scene = new THREE.Scene();

let width = window.innerWidth
let height =window.innerHeight
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width,height);
window.addEventListener('resize', onWindowResize, false );
function onWindowResize(){
        width = window.innerWidth
        height =window.innerHeight
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(width,height);
}
document.body.appendChild(renderer.domElement);


const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 2000);
camera.position.set(0,0,50);
camera.lookAt(0,0,0);

const material = new THREE.LineBasicMaterial( {color: 0x00ffff})

const points =  [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(0,10,0));
points.push(new THREE.Vector3(10,0,0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);


const line = new THREE.Line(geometry, material);

scene.add(line)
scene.add(eye1())
renderer.render(scene,camera);

function eye1(){
        const curve = new THREE.EllipseCurve(
                0,  0,            // ax, aY
                50, 100,           // xRadius, yRadius
                0,  2 * Math.PI,  // aStartAngle, aEndAngle
                false,            // aClockwise
                0                 // aRotation
        );
        
        const points = curve.getPoints( 50 );
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        
        const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        
        // Create the final object to add to the scene
        const ellipse = new THREE.Line( geometry, material );
        return ellipse
}