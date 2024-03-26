// Alteração de checkbox
function updateCheckboxes(checkbox) {
    if (checkbox.checked) {
        if (checkbox.id === 'extensao') {
            document.getElementById('outras-ed-desktop').checked = false;
        } else if (checkbox.id === 'outras-ed-desktop') {
            document.getElementById('extensao').checked = false;
        }
    }
}

