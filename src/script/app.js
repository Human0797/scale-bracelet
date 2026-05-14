let selectedBead = null;

// Fungsi Tab
function showTab(tabId) {
    document.querySelectorAll('.panel-content').forEach(p => p.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
}

// Menambah Manik ke Canvas (Logic: Klik atau Drag)
if (document.querySelector('.bead-item')) {
    document.querySelectorAll('.bead-item').forEach(item => {
        item.addEventListener('click', () => {
            addBeadToCanvas(item.dataset.shape, item.style.backgroundColor, item.innerText);
        });
    });
}

function addBeadToCanvas(shape, color, content = "") {
    const canvas = document.getElementById('bead-canvas');
    const newBead = document.createElement('div');

    newBead.className = 'canvas-bead';
    newBead.style.backgroundColor = color;
    newBead.innerText = content;

    if(shape === 'square') newBead.style.borderRadius = '4px';

    // Event klik untuk edit warna
    newBead.onclick = () => {
        selectedBead = newBead;
        document.getElementById('colorPicker').value = rgbToHex(newBead.style.backgroundColor);
    };

    canvas.appendChild(newBead);
}

// Update Warna
if (document.getElementById('colorPicker')) {
    document.getElementById('colorPicker').addEventListener('input', (e) => {
        if(selectedBead) {
            selectedBead.style.backgroundColor = e.target.value;
        }
    });
}

// Fungsi Template
function loadTemplate(type) {
    clearCanvas();
    if(type === 'pastel') {
        const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf'];
        colors.forEach(c => addBeadToCanvas('circle', c));
    }
}

function clearCanvas() {
    const canvas = document.getElementById('bead-canvas');
    if (canvas) {
        canvas.innerHTML = '';
    }
}

function rgbToHex(rgb) {
    // Simple conversion, assuming rgb(r,g,b) format
    const result = rgb.match(/\d+/g);
    if (result) {
        return "#" + result.map(x => {
            const hex = parseInt(x).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join("");
    }
    return rgb;
}

function clearCanvas() {
    document.getElementById('bead-canvas').innerHTML = '';
}

// Helper: Konversi RGB ke Hex untuk Color Picker
function rgbToHex(rgb) {
    if (!rgb) return "#ffadad";
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);
    let r = (+rgb[0]).toString(16), g = (+rgb[1]).toString(16), b = (+rgb[2]).toString(16);
    if (r.length == 1) r = "0" + r; if (g.length == 1) g = "0" + g; if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
}
