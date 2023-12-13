function showThanks() {
    document.getElementById('thanksText').style.display = 'block';
}
document.getElementById('noButton').addEventListener('click', function() {
    floatNoButton();
});


function floatNoButton() {
    var noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';

    // Disable pointer events during the animation
    noButton.style.pointerEvents = 'none';

    // Define the center of the screen
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    // Calculate random positions away from the center
    var minDistance = 100;
    var maxDistance = 200;
    var distance = Math.random() * (maxDistance - minDistance) + minDistance;
    var angle = Math.random() * 2 * Math.PI;

    var x = centerX + Math.cos(angle) * distance;
    var y = centerY + Math.sin(angle) * distance;

    // Ensure the "No" button is not too close to the "Yes" button
    var yesButton = document.getElementById('yesButton');
    var minDistanceBetweenButtons = 50;

    while (
        Math.abs(x - yesButton.offsetLeft) < minDistanceBetweenButtons &&
        Math.abs(y - yesButton.offsetTop) < minDistanceBetweenButtons
    ) {
        distance = Math.random() * (maxDistance - minDistance) + minDistance;
        angle = Math.random() * 2 * Math.PI;

        x = centerX + Math.cos(angle) * distance;
        y = centerY + Math.sin(angle) * distance;
    }

    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';

    // Add a jumping effect
    var jumpHeight = 10;
    var originalTop = parseFloat(noButton.style.top);

    // Jump up
    noButton.style.top = (originalTop - jumpHeight) + 'px';

    // Wait for a short duration and then jump down
    setTimeout(function() {
        noButton.style.top = originalTop + 'px';

        // Re-enable pointer events after the animation
        noButton.style.pointerEvents = 'auto';
    }, 200);
}
