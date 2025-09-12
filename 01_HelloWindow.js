// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 현재 window 전체를 canvas로 사용
canvas.width = 500;
canvas.height = 500;
let halfWidth = canvas.width / 2;
let halfHeight = canvas.height / 2;
gl.enable(gl.SCISSOR_TEST);

// Initialize WebGL settings: viewport and clear color
gl.viewport(0, 0, canvas.width, canvas.height);

// Start rendering
render();

// Render loop
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);    
    // Draw something here
    // 왼쪽 아래 구역: 빨강
    gl.scissor(0, 0, halfWidth, halfHeight);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 오른쪽 아래 구역: 초록
    gl.scissor(halfWidth, 0, halfWidth, halfHeight);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 왼쪽 위 구역: 파랑
    gl.scissor(0, halfHeight, halfWidth, halfHeight);
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 오른쪽 위 구역: 노랑
    gl.scissor(halfWidth, halfHeight, halfWidth, halfHeight);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

// Resize viewport when window size changes
window.addEventListener('resize', () => {
    const size = Math.min(window.innerWidth, window.innerHeight,500);
    canvas.width = size;
    canvas.height = size;
    halfWidth = canvas.width / 2;
    halfHeight = canvas.height / 2;

    gl.viewport(0, 0, canvas.width, canvas.height);
    render();
});