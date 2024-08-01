function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('homeButton').addEventListener('click', function() {
    showSection('homeSection');
});

document.getElementById('aboutMeButton').addEventListener('click', function() {
    showSection('aboutMeSection');
});

document.getElementById('contactsButton').addEventListener('click', function() {
    showSection('contactsSection');
});
