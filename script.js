document.addEventListener('DOMContentLoaded', () => {
    const artPanels = document.querySelectorAll('.art-panel');
    const counter = document.getElementById('counter');
    const resetButton = document.getElementById('reset-button');
    const addArtButton = document.getElementById('add-art-button');
    let viewedCount = 0;

    // List of additional artworks to add dynamically
    const newArtworks = [
        { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
        { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
        { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
        { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
        { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
        { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
        { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
        { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
        { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
        { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
    ];

    // Function to update the viewed artworks counter
    function updateCounter() {
        counter.textContent = `Artworks Viewed: ${viewedCount}`;
    }

    // Add click event listener to each art panel
    artPanels.forEach(panel => {
        panel.addEventListener('click', () => {
            if (!panel.classList.contains('viewed')) {
                panel.classList.add('viewed');
                panel.style.backgroundColor = '#ccc'; // change color to indicate viewed
                viewedCount++;
                updateCounter();
            }
        });
    });

    // Add event listener to the reset button
    resetButton.addEventListener('click', () => {
        const allArtPanels = document.querySelectorAll('.art-panel');
        allArtPanels.forEach(panel => {
            panel.classList.remove('viewed');
            panel.style.backgroundColor = '#eee';
        });
        viewedCount = 0;
        updateCounter();
    });

    // Function to dynamically add a new art panel
    addArtButton.addEventListener('click', () => {
        const gallery = document.querySelector('.art-grid');
        const randomArtwork = newArtworks[Math.floor(Math.random() * newArtworks.length)];
        const newPanel = document.createElement('div');
        newPanel.classList.add('art-panel');
        newPanel.innerHTML = `
            <img src="${randomArtwork.img}" alt="${randomArtwork.title}">
            <p>${randomArtwork.title} by ${randomArtwork.artist}</p>
        `;
        gallery.appendChild(newPanel);

        // Add click event listener to the new art panel
        newPanel.addEventListener('click', () => {
            if (!newPanel.classList.contains('viewed')) {
                newPanel.classList.add('viewed');
                newPanel.style.backgroundColor = '#ccc'; // change color to indicate viewed
                viewedCount++;
                updateCounter();
            }
        });
    });

});