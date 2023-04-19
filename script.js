function volume_sphere() {
    //Write your code here
  const radius=document.getElementById('radius').value;
	const volume = (4/3) * Math.PI * Math.pow(radius, 3);
	document.getElementById('volume').value=volume.toFixed(2);
} 

window.onload = function() {
  document.getElementById('MyForm').onsubmit = function(e) {
    e.preventDefault(); // prevent the form from submitting
    volume_sphere();
  };
};