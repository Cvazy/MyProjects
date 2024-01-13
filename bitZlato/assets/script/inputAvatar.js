function chooseFile() {
    document.getElementById('avatarInput').click()
}

document.getElementById('avatarInput').addEventListener('change', handleFileSelect)

function handleFileSelect(event) {
    const fileInput = event.target
    const files = fileInput.files

    if (files.length > 0) {
        document.getElementById('setAvatarName').textContent = files[0].name
    }
}