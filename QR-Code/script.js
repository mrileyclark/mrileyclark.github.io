// bring in form and qrcode div puts on DOM
const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

// submit button
const onGenerateSubmit = (e) => {
    e.preventDefault();

    // clear code if you run then want to run a different size
clearUI();

// get form input value and size value
const url = document.getElementById('url').value;
const size = document.getElementById('size').value;


// validates url
    if(url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner();
        // show spinner 1 sec
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);
            // generates save button after qr code image shows
            setTimeout(() => {
                // creates save button with img to download
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000);
    }
};

// Generate QR code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
      text: url,
      width: size,
      height: size,
    });
  };

// shows spinner
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};

// hides spinner
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

// clears qr code and save button
const clearUI = () => {
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link');
    if(saveLink)
    saveLink.remove();
};

// creates save button to download qr code in js vs using html
const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
};

hideSpinner();



form.addEventListener('submit', onGenerateSubmit);