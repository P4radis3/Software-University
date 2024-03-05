export function showView(selectionId, callback, event, param) {

    event?.preventDefault();
    document.getElementById('section').forEach(s => s.style.display = 'none');
    document.getElementById(selectionId).style.display = 'block';
    if (typeof callback == 'function') {
        callback(param);
    }

}