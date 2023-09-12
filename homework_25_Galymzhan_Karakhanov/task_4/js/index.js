const paragraphs = document.getElementsByTagName('p');

for (let i = 0; i < paragraphs.length; i++) {
  const hr = document.createElement('hr');
  paragraphs[i].parentNode.insertBefore(hr, paragraphs[i].nextSibling);
}
