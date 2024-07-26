function showPopup() {
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 30px;  // Increased padding
    z-index: 9999;
    text-align: center;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    color: white;
    width: 60vw;  // Added width
    max-width: 600px;  // Increased max-width
  `;

  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('new_popup_image.png');
  img.style.cssText = `
    width: 55vw;  // Increased width
    max-width: 550px;  // Increased max-width
    height: auto;
    display: block;
    margin-bottom: 20px;  // Increased margin
  `;
  img.onload = () => {
    console.log('Image loaded successfully');
  };
  img.onerror = () => {
    console.error('Failed to load image');
  };
  popup.appendChild(img);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.cssText = `
    padding: 12px 24px;  // Increased padding
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 24px;  // Increased border-radius
    cursor: pointer;
    font-size: 18px;  // Increased font size
    transition: background-color 0.3s;
  `;
  closeButton.onmouseover = () => closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  closeButton.onmouseout = () => closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  
  // Initially, the close button does nothing
  closeButton.onclick = () => {};
  
  popup.appendChild(closeButton);
  document.body.appendChild(popup);

  // After 10 seconds, enable the close button functionality
  setTimeout(() => {
    closeButton.onclick = () => popup.remove();
    closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  }, 10000); 
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', showPopup);
} else {
  showPopup();
}