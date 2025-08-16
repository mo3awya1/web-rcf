// This script provides basic protection against right-clicking and common developer shortcuts.
// Note: This is not a foolproof security measure but acts as a deterrent.

/**
 * Disables the context menu (right-click).
 */
document.addEventListener('contextmenu', function(event) {
    // Prevents the default right-click menu from appearing.
    event.preventDefault();
});

/**
 * Disables specific key combinations used to open developer tools or view source.
 */
document.addEventListener('keydown', function(event) {
    // Check for F12 key
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
    }

    // Check for Ctrl+Shift+I (Developer Tools)
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.keyCode === 73)) {
        event.preventDefault();
    }

    // Check for Ctrl+Shift+J (Developer Tools Console)
    if (event.ctrlKey && event.shiftKey && (event.key === 'J' || event.keyCode === 74)) {
        event.preventDefault();
    }
    
    // Check for Ctrl+Shift+C (Developer Tools Inspector)
    if (event.ctrlKey && event.shiftKey && (event.key === 'C' || event.keyCode === 67)) {
        event.preventDefault();
    }

    // Check for Ctrl+U (View Page Source)
    if (event.ctrlKey && (event.key === 'U' || event.keyCode === 85)) {
        event.preventDefault();
    }
});
