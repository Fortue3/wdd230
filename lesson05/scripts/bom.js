const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
var listCount = 0;

let chaptersArray = getChapterList() || [];

    chaptersArray.forEach(chapter => {
        displayList(chapter);
        console.log(chapter)
      });  

      function refresh() {
        chaptersArray.forEach(chapter => {
            displayList(chapter);
            console.log(chapter)
          });
      }
function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
      }
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }
async function displayList(item)
{
    const li = document.createElement('li');
            const deleteButton = document.createElement('button');


            li.textContent = await item;
            deleteButton.textContent = '✖️';


            li.append(deleteButton);


            list.append(li);

            listCount += 1;


            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
                listCount -= 1;
            })


            input.focus()


            input.value = '';
}

button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty  
        displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
      //displayList(input.value); // call the function that outputs the submitted chapter
    }
  });
   function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

// button.addEventListener('click', () => {



//     if (input.value != '') {
//         input.focus();
//         if (listCount < 10) {

            
//         }
//         else {
//             window.alert("The maximum number of elements is 10, Please remove one from the list, to add a new one");
//         }
//     }

// });