function editElement(reference, match, replacer) {
    
    let content = reference.textContent;
    let checkMatch = new RegExp(match, 'g');
    let edit = content.replace(checkMatch, replacer);
    reference.textContent = edit;

}