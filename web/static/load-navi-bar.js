
function loadNavigation() {
    const navDiv = document.getElementById('navigation');
    fetch('/static/navigation.html')
        .then(response => response.text())
        .then(data => {
            navDiv.innerHTML = data;

            highlightActiveLink();
        })
        .catch(error => console.error('Error loading navigation:', error));
}


loadNavigation();
