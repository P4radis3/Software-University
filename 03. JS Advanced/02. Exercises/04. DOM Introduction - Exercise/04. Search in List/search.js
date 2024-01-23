function search() {

   let html = {

      value: document.getElementById('searchText').value,
      data: document.getElementById('towns').children,
      result: document.getElementById('result'),

   }


   let counter = 0;


   Array.from(html.data).map(x => {

      if (x.innerHTML.includes(html.value)) {

         x = x.style.textDecoration = "bold underline"
         counter += 1

      }

      return x

   })

   html.result.innerHTML = `${counter} matches found`

}