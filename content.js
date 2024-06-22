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
    padding: 20px;
    z-index: 9999;
    text-align: center;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  `;

  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('popup.png');
  img.style.cssText = `
    width: 50vw;
    max-width: 500px;
    height: auto;
    display: block;
    margin-bottom: 15px;
  `;
  popup.appendChild(img);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.cssText = `
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  `;
  closeButton.onmouseover = () => closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  closeButton.onmouseout = () => closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  closeButton.onclick = () => popup.remove();
  popup.appendChild(closeButton);

  document.body.appendChild(popup);
}

window.addEventListener('load', showPopup);