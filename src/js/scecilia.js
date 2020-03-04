/* eslint-env browser */

if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img.lazyload');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
  document.body.appendChild(script);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjZWNpbGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmlmICgnbG9hZGluZycgaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxhenlsb2FkJyk7XG4gIGltYWdlcy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBpbWcuc3JjID0gaW1nLmRhdGFzZXQuc3JjO1xuICB9KTtcbn0gZWxzZSB7XG4gIC8vIER5bmFtaWNhbGx5IGltcG9ydCB0aGUgTGF6eVNpemVzIGxpYnJhcnlcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGF6eXNpemVzLzQuMS44L2xhenlzaXplcy5taW4uanMnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG4iXX0=
