function create(words) {

   let content = document.getElementById('content');
   for (let word of words) {

      let divElement = document.createElement('div');
      content.appendChild(divElement);

      let paragraphElement = document.createElement('p');

      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';

      divElement.addEventListener('click', clickHandle);
      divElement.appendChild(paragraphElement);
      content.appendChild(divElement);

   }


   function clickHandle(event) {

      let target = event.currentTarget;
      let children = target.children;
      let p = children[0]; 
      p.style.display = 'block';

   }
}