function grayscale(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
            imgData.data[i] = avg;
            imgData.data[i + 1] = avg;
            imgData.data[i + 2] = avg;
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function invert(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 255 - imgData.data[i + 1];
            imgData.data[i + 2] = 255 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function adjustBrightness(image, amount) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += amount;
            imgData.data[i + 1] += amount;
            imgData.data[i + 2] += amount;
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function adjustContrast(image, factor) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const avg = 128;
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = avg + (imgData.data[i] - avg) * factor;
            imgData.data[i + 1] = avg + (imgData.data[i + 1] - avg) * factor;
            imgData.data[i + 2] = avg + (imgData.data[i + 2] - avg) * factor;
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function blurImage(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        ctx.globalAlpha = 0.5;
        ctx.drawImage(canvas, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function sharpenImage(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        ctx.globalAlpha = 1.5;
        ctx.drawImage(canvas, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function sepia(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const r = imgData.data[i];
            const g = imgData.data[i + 1];
            const b = imgData.data[i + 2];
            imgData.data[i] = r * 0.393 + g * 0.769 + b * 0.189;
            imgData.data[i + 1] = r * 0.349 + g * 0.686 + b * 0.168;
            imgData.data[i + 2] = r * 0.272 + g * 0.534 + b * 0.131;
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function threshold(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
            const threshold = 128;
            const color = avg >= threshold ? 255 : 0;
            imgData.data[i] = color;
            imgData.data[i + 1] = color;
            imgData.data[i + 2] = color;
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function adjustGamma(image, gamma) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 * Math.pow(imgData.data[i] / 255, gamma);
            imgData.data[i + 1] = 255 * Math.pow(imgData.data[i + 1] / 255, gamma);
            imgData.data[i + 2] = 255 * Math.pow(imgData.data[i + 2] / 255, gamma);
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function adjustSaturation(image, factor) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
            imgData.data[i] = avg + (imgData.data[i] - avg) * factor;
            imgData.data[i + 1] = avg + (imgData.data[i + 1] - avg) * factor;
            imgData.data[i + 2] = avg + (imgData.data[i + 2] - avg) * factor;
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function hueRotate(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const hue = 90; // Rotate hue by 90 degrees
        const cosA = Math.cos(hue * Math.PI / 180);
        const sinA = Math.sin(hue * Math.PI / 180);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const r = imgData.data[i];
            const g = imgData.data[i + 1];
            const b = imgData.data[i + 2];
            
            imgData.data[i] = r * (0.213 + 0.787 * cosA) + g * (0.213 - 0.213 * cosA - 0.500 * sinA) + b * (0.213 - 0.213 * cosA + 0.500 * sinA);
            imgData.data[i + 1] = r * (0.715 - 0.715 * cosA + 0.330 * sinA) + g * (0.715 + 0.285 * cosA + 0.000 * sinA) + b * (0.715 - 0.715 * cosA - 0.500 * sinA);
            imgData.data[i + 2] = r * (0.072 - 0.072 * cosA - 0.330 * sinA) + g * (0.072 - 0.072 * cosA + 0.000 * sinA) + b * (0.072 + 0.928 * cosA + 0.500 * sinA);
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function addNoise(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += Math.random() * 20 - 10;  // Red channel
            imgData.data[i + 1] += Math.random() * 20 - 10;  // Green channel
            imgData.data[i + 2] += Math.random() * 20 - 10;  // Blue channel
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function vintageFilter(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = imgData.data[i] * 0.9 + 30;  // Red channel
            imgData.data[i + 1] = imgData.data[i + 1] * 0.7 + 20;  // Green channel
            imgData.data[i + 2] = imgData.data[i + 2] * 0.5 + 10;  // Blue channel
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function pixelate(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        const pixelSize = 10;
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let y = 0; y < canvas.height; y += pixelSize) {
            for (let x = 0; x < canvas.width; x += pixelSize) {
                const red = imgData.data[((y * canvas.width) + x) * 4];
                const green = imgData.data[((y * canvas.width) + x) * 4 + 1];
                const blue = imgData.data[((y * canvas.width) + x) * 4 + 2];
                for (let dy = 0; dy < pixelSize; dy++) {
                    for (let dx = 0; dx < pixelSize; dx++) {
                        const index = ((y + dy) * canvas.width + (x + dx)) * 4;
                        imgData.data[index] = red;
                        imgData.data[index + 1] = green;
                        imgData.data[index + 2] = blue;
                    }
                }
            }
        }
        ctx.putImageData(imgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function emboss(image) {
    const canvas = createCanvas(image);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const kernel = [
            [-2, -1, 0],
            [-1, 1, 1],
            [0, 1, 2]
        ];
        const width = canvas.width;
        const height = canvas.height;
        const newImgData = ctx.createImageData(width, height);
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                let r = 0, g = 0, b = 0;
                for (let ky = 0; ky < 3; ky++) {
                    for (let kx = 0; kx < 3; kx++) {
                        const pixelX = x + kx - 1;
                        const pixelY = y + ky - 1;
                        const index = (pixelY * width + pixelX) * 4;
                        r += imgData.data[index] * kernel[ky][kx];
                        g += imgData.data[index + 1] * kernel[ky][kx];
                        b += imgData.data[index + 2] * kernel[ky][kx];
                    }
                }
                const idx = (y * width + x) * 4;
                newImgData.data[idx] = Math.min(255, Math.max(0, r + 128));
                newImgData.data[idx + 1] = Math.min(255, Math.max(0, g + 128));
                newImgData.data[idx + 2] = Math.min(255, Math.max(0, b + 128));
                newImgData.data[idx + 3] = 255;  // Alpha
            }
        }
        ctx.putImageData(newImgData, 0, 0);
        image.src = canvas.toDataURL();
    };
}

function createCanvas(image) {
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    return canvas;
}

