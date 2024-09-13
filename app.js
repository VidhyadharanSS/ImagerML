document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('uploadImage');
    const originalImage = document.getElementById('originalImage');
    const processedImage = document.getElementById('processedImage');
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.getElementById('progressContainer');
    const downloadBtn = document.getElementById('downloadBtn');
    const removeImageBtn = document.getElementById('removeImage');
    const toggleModeBtn = document.getElementById('toggleMode');
    const body = document.body;
    
    let imgFile;
    const image = new Image();

    fileInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                imgFile = event.target.result;
                image.src = imgFile;
                originalImage.src = imgFile;
                originalImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    image.onload = function () {
        // Prepare image for processing
    };

    document.getElementById('processBtn').addEventListener('click', function () {
        if (imgFile) {
            progressContainer.style.display = 'block';
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                progressBar.style.width = progress + '%';
                if (progress === 100) {
                    clearInterval(interval);
                    progressBar.innerText = 'Processing complete!';

                    const operation = document.getElementById('operationSelect').value;
                    if (operation) {
                        applyImageProcessing(image, operation);
                        processedImage.src = image.src;
                        processedImage.style.display = 'block';
                        downloadBtn.href = image.src;
                        downloadBtn.style.display = 'block';
                    } else {
                        alert("Please select an operation!");
                    }
                }
            }, 100);
        } else {
            alert("Please upload an image first!");
        }
    });

    removeImageBtn.addEventListener('click', function () {
        originalImage.src = '';
        processedImage.src = '';
        originalImage.style.display = 'none';
        processedImage.style.display = 'none';
        downloadBtn.style.display = 'none';
        progressContainer.style.display = 'none';
    });

    toggleModeBtn.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleModeBtn.textContent = 'Switch to Dark Mode';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleModeBtn.textContent = 'Switch to Light Mode';
        }
    });

    function applyImageProcessing(img, operation) {
        switch (operation) {
            case 'grayscale':
                grayscale(img);
                break;
            case 'invert':
                invert(img);
                break;
            case 'brightness':
                adjustBrightness(img, 20);
                break;
            case 'contrast':
                adjustContrast(img, 1.5);
                break;
            case 'blur':
                blurImage(img);
                break;
            case 'sharpen':
                sharpenImage(img);
                break;
            case 'sepia':
                sepia(img);
                break;
            case 'threshold':
                threshold(img);
                break;
            case 'gamma':
                adjustGamma(img, 2.2);
                break;
            case 'saturation':
                adjustSaturation(img, 2);
                break;
            case 'hueRotate':
                hueRotate(img);
                break;
            case 'noise':
                addNoise(img);
                break;
            case 'vintage':
                vintageFilter(img);
                break;
            case 'pixelate':
                pixelate(img);
                break;
            case 'emboss':
                emboss(img);
                break;
            default:
                alert('Operation not available.');
        }
    }
});
