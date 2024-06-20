document.addEventListener('DOMContentLoaded', function() {
    const containerSN = document.getElementById('Container_SN');
    const menuIndicator = document.getElementById('menuIndicator');

    menuIndicator.addEventListener('mouseenter', function() {
        containerSN.classList.add('open');
    });

    containerSN.addEventListener('mouseleave', function() {
        containerSN.classList.remove('open');
    });
});
