const colorBoxes = document.querySelectorAll('[data-color]');
const dropZoneContainer = document.querySelector('#drop-zones');
const dropZones = document.querySelectorAll('.drop-zone');
const dragAndDrop = {target: null};

colorBoxes.forEach(colorBox => {
    colorBox.addEventListener('dragstart', dragStart);
    colorBox.addEventListener('dragend', dragEnd);
});

dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragenter', dragEnter);
    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('dragleave', dragLeave);
    dropZone.addEventListener('drop', drop);
});

function dragStart(event) {
    const {target} = event;
    const targetColor = target.getAttribute('data-color');
    dragAndDrop.target = target;
    event.dataTransfer.setData('text/plain', targetColor);

    setTimeout(() => {
        target.classList.add('hidden');
    }, [10]);
}

function dragEnd(event) {
    event.preventDefault();
    const {target} = event;
    dragAndDrop.target.classList.remove('hidden');
}

function dragEnter(event) {
    event.preventDefault();
    const {target} = event;
    if (target.classList.contains('drop-zone')) {
        target.classList.add('dashed-border');
    } else {
        target.parentElement.classList.add('dashed-border');
    }
}

function dragOver(event) {
    event.preventDefault();
    const {target} = event;
    if (target.classList.contains('drop-zone')) {
        target.classList.add('dashed-border');
    } else {
        target.parentElement.classList.add('dashed-border');
    }
}

function dragLeave(event) {
    event.preventDefault();
    const {target} = event;
    if (target.classList.contains('drop-zone')) {
        target.classList.remove('dashed-border');
    } else {
        target.parentElement.classList.remove('dashed-border');
    }
}

function drop(event) {
    event.preventDefault();
    const {target} = event;
    
    if (target.classList.contains('drop-zone')) {
        target.classList.remove('dashed-border');
        if (colorExist(target)) {
            return;
        }
        target.appendChild(dragAndDrop.target);
    } else {
        target.parentElement.classList.remove('dashed-border');
        if (colorExist(target.parentElement)) {
            return;
        }
        target.parentElement.appendChild(dragAndDrop.target);
    }
}

// Check if the color already exist
function colorExist(dropZone) {
    return Array.from(dropZone.children).some(child => {
        return child.getAttribute('data-color') === dragAndDrop.target.getAttribute('data-color');
    });
}