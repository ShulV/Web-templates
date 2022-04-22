//canvas getting
const canvas = document.querySelector('#canvasWebGL');
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const sizes = {width: 1080, height: 720}
renderer.setSize(sizes.width, sizes.height);
//camera
const fov = 75;
const aspect = sizes.width/sizes.height;
const near = 0.1;
const far = 50;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
//scene
const scene = new THREE.Scene();
//mesh
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
//scene rendering
renderer.render(scene, camera);
//three.js functions
function updateRender(){
    renderer.render(scene, camera);
}
//-------------------------------------------------------------------------
//Listeners for position functions
//range-pos-x
const rangePosX = document.querySelector("#x-pos-range");
rangePosX.addEventListener("input", () => {changeMeshPosX(rangePosX.value);});
rangePosX.addEventListener("change", () => {changeMeshPosX(rangePosX.value);})
//range-pos-y
const rangePosY = document.querySelector("#y-pos-range");
rangePosY.addEventListener("input", () => {changeMeshPosY(rangePosY.value);});
rangePosY.addEventListener("change", () => {changeMeshPosY(rangePosY.value);})
//range-pos-z
const rangePosZ = document.querySelector("#z-pos-range");
rangePosZ.addEventListener("input", () => {changeMeshPosZ(rangePosZ.value);});
rangePosZ.addEventListener("change", () => {changeMeshPosZ(rangePosZ.value);})
//----------
//Listeners for rotation functions
//range-rotate-x
const rangeRotX = document.querySelector("#x-rotate-range");
rangeRotX.addEventListener("input", () => {rotateMeshX(rangeRotX.value);});
rangeRotX.addEventListener("change", () => {rotateMeshX(rangeRotX.value);})
//range-rotate-y
const rangeRotY = document.querySelector("#y-rotate-range");
rangeRotY.addEventListener("input", () => {rotateMeshY(rangeRotY.value);});
rangeRotY.addEventListener("change", () => {rotateMeshY(rangeRotY.value);})
//range-rotate-z
const rangeRotZ = document.querySelector("#z-rotate-range");
rangeRotZ.addEventListener("input", () => {rotateMeshZ(rangeRotZ.value);});
rangeRotZ.addEventListener("change", () => {rotateMeshZ(rangeRotZ.value);})

//change position functions
function changeMeshPosX(x) {
    camera.position.x = x;
    updateRender();
}

function changeMeshPosY(y) {
    camera.position.y = y;
    updateRender();
}

function changeMeshPosZ(z) {
    camera.position.z = z;
    updateRender();
}

//rotate functions
function rotateMeshX(x) {
    camera.rotation.x = x;
    updateRender();
}

function rotateMeshY(y) {
    camera.rotation.y = y;
    updateRender();
}

function rotateMeshZ(z) {
    camera.rotation.z = z;
    updateRender();
}