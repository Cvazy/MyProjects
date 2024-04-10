const musicList = document.querySelector('.music_list')
const newMusic = document.querySelector('.add_music')

function createFormInput() {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    div.className = 'form_input';
    label.htmlFor = 'visitor_music';
    label.textContent = 'Ваша любимая музыка';
    input.id = 'visitor_music';
    input.type = 'text';
    input.name = 'visitor_music';

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

newMusic.addEventListener('click', () => {
    musicList.appendChild(createFormInput())
})