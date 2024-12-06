// Lenis Scroll
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add(time => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Scene Setup
const scene = new THREE.Scene();

// Camera Setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer Setup
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setClearColor(0x000000, 0); // transparent background
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadow;
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 2.5;

// Attach renderer to the DOM
const container = document.querySelector('.model');
if (!container) {
  console.error('Element with class .model not found');
}
container.appendChild(renderer.domElement);

// Lighting Setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
scene.add(ambientLight);

const mainLight = new THREE.DirectionalLight(0xffffff, 7.5);
mainLight.position.set(0.5, 7.5, 2.5);
scene.add(mainLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 2.5);
fillLight.position.set(-15, 0, -5);
scene.add(fillLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.5);
hemiLight.position.set(0, 0, 0);
scene.add(hemiLight);

// Geometry (for testing)
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
function basicAnimate() {
  renderer.render(scene, camera);
  requestAnimationFrame(basicAnimate);
}
basicAnimate();
// GSAP Animation (using GSAP ticker for continuous rendering)
gsap.ticker.add(() => {
  renderer.render(scene, camera);
});

// Texture Loader
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path_to_texture.jpg'); // Path to your texture file

// Load model
let model;
const loader = new THREE.GLTFLoader();
loader.load(
  '../images/3d_black_leather_chair.glb',
  gltf => {
    console.log('Model loaded', gltf); // Log to confirm loading
    model = gltf.scene;

    // Traverse the model to adjust materials and check textures
    model.traverse(node => {
      if (node.isMesh) {
        console.log('Material found:', node.material);

        if (node.material) {
          node.material.metalness = 1;
          node.material.roughness = 3;
          node.material.envMapIntensity = 5;
        }

        // Enable shadows for the mesh
        node.cashShadow = true;
        node.receiveShadow = true;
      }
    });

    // Center the model in the scene
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    scene.add(model);

    // Set camera position based on model size
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    camera.position.z = maxDim * 1.75;

    // Rotate model for an initial view
    model.scale.set(0, 0, 0);
    model.rotation.set(0, 5, 0);
    playInitialRotation();
    cancelAnimationFrame(basicAnimate)
    // Start animation loop
    animate(); // Calling the animate function instead of basicAnimate
  },
  undefined, // Progress callback (optional)
  error => {
    console.error('Error loading the model:', error); // Log any loading errors
  }
);


const floatAmplitude = 0.2;
const floatSpeed = 1.5;
const rotationSpeed = 0.3;
let isFloating = true;
let currentScroll = 0;

const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

function playInitialRotation() {
  if (model) {
    gsap.to(model.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1,
      ease: 'power2.out',
    });
  }
}

lenis.on("scroll", (e) => {
  currentScroll = e.scroll;
});


function animate() {
  if (model) {
    if (isFloating) {
      const floatOffset =
        Math.sin(Date.now() * 0.001 * floatSpeed) * floatAmplitude;
      model.position.y = floatOffset;
    }

    const scrollProgress = Math.min(currentScroll / totalScrollHeight, 1);

    const baseTilt = 0.5;
    model.rotation.x = scrollProgress * Math.PI * 4 * baseTilt;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const introSection = document.querySelector('.intro');
const archiveSection = document.querySelector('.archive');
const outroSection = document.querySelector('.outro');



const splitText = new SplitType(".outro-copy h2", {
  types: "lines",
  lineClass: "line"
});

console.log(splitText)


splitText.lines.forEach((line) => {
  const text = line.innerHTML;
  line.innerHTML = `<span style="display: block; transform: translateY(70px);">${text}</span>`
});

ScrollTrigger.create({
  trigger: '.outro',
  start: 'top center',
  onEnter: () => {
    gsap.to('.outro-copy h2 .line span', {
      translateY: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      force3D: true,
    });
  },
  onLeaveBack: () => {
    gsap.to('.outro-copy h2 .line span', {
      translateY: 70,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      force3D: true,
    });
  },
  toggleActions: 'play reverse play reverse',
});


