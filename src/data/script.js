import { task } from "./taskData2.js";
import { moonData } from "./moonData.js";
import { greenData } from "./greenNatureData.js";
import { flowerData } from "./flowersData.js";
import { magicSkyData } from "./magicSkyData.js";
import { mountainData } from "./mountainData.js";
const greenData1 = greenData();
const flowerData1 = flowerData();
const moonData1 = moonData();
const magicSkyData1 = magicSkyData();
const mountainData1 = mountainData();
const taskData = task();

const main = document.querySelector('.main')
const container = document.querySelector('.container')
const bgImgTheme = document.querySelector('#bgImg');
const taskInput = document.querySelector('.fa-plus-square');
const cancelBtn = document.querySelector('#cancel');

// displayImg(moonData1, taskData)
// displayImg(mountainData1, taskData)
displayImg(flowerData1, taskData)
// displayImg(greenData1, taskData)
// displayImg(magicSkyData1, taskData)

function displayImg(data, task) {

    // first cleaning div class="container" 
    container.innerHTML = ''
    // then create a new 
    // const slideContainer = document.createElement('div')
    // slideContainer.className = 'container'
    container.innerHTML = `
       ${data.map(el => `
       <div class="slide" id="${el.id}"
       style="background-image: url('${el.imgURL}')">
       <h3> ${el.name}</h3>
       <div class="slideTaskDay">
     <div class="filterTask"><span>All</span><span>Done</span><span>Active</span></div>
       <ul class="taskDay">
       ${task.map(t =>
        `
        <li ${t.id}><span>${t.time}</span><span class="taskValue">${t.task}</span><i class="fas fa-edit"></i><i class="fas fa-check"></i><i class="fas fa-trash"></i></li>
        `
    ).join('')}
         <li><span>8.00</span><span class="taskValue">some-some-some-task</span><i class="fas fa-edit"></i><i class="fas fa-check"></i><i class="fas fa-trash"></i></li>
 
         <li><span>8.00</span><span class="taskValue">some-task</span><i class="fas fa-edit"></i><i class="fas fa-check"></i><i class="fas fa-trash"></i></li>
 
         <li><span>8.00</span><span class="taskValue">some-task</span><i class="fas fa-edit"></i><i class="fas fa-check"></i><i class="fas fa-trash"></i></li>
 
       </ul>
 
       </div>
       <div class="count"><span>3 tasks</span> <span>2 done</span> <span>1 active</span></div>
     </div>
    `
    ).join('')}`
    // container.appendChild(slideContainer)

    const slides = document.querySelectorAll('.slide')
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

bgImgTheme.addEventListener('change', (e) => {
    const imgData = e.target.value
    console.log(imgData)
    switch (imgData) {
        case "moonData1": displayImg(moonData1, taskData);
            break;
        case "mountainData1": displayImg(mountainData1, taskData);
            break;
        case "flowerData1": displayImg(flowerData1, taskData);
            break;
        case "greenData1": displayImg(greenData1, taskData);
            break;
        case "magicSkyData1": displayImg(magicSkyData1, taskData);
            break;
        default: displayImg(moonData1, taskData);
    }
})

taskInput.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('section').style.display='block'
})
cancelBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('section').style.display='none'

})