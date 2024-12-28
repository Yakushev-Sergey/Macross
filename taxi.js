
const inputAc = document.querySelectorAll('.taxi__input');
const linkOp = document.querySelectorAll('.copp__tax');
const taxi = document.querySelector('form');
const dell = document.querySelectorAll('.del__tax');



for (let i = 0; i < inputAc.length; i++) {
  linkOp[i].addEventListener('click', function () {
    const qq = inputAc[i].value;
    navigator.clipboard.writeText(qq);

    //добавляем класс после того как скопировали текст
    if (navigator.clipboard.writeText(qq)) {
      inputAc[i].classList.add('showTimeOut')
      setTimeout(() => {
        inputAc[i].classList.remove('showTimeOut')
      }, 60000)
    }  if (inputAc[i].value == "") {
      inputAc[i].classList.remove('showTimeOut')
    }
  });
}

  // for (let i = 0; i < dell.length; i++) {
  //   dell[i].addEventListener('click', function () {
  //     inputAc[i].value = "";
  //     inputAc[i].classList.remove('show');
  //   });
  // }


function colorInput() {
  for (let i = 0; i < inputAc.length; i++) {
    inputAc[i].addEventListener('input', function () {
      if (inputAc[i].value !== "") {
        inputAc[i].classList.add('show')
      } else {
        inputAc[i].classList.remove('show')
      }
    })
  }
}
colorInput()


const ls = localStorage;
let formData = {};

taxi.addEventListener('input', function (event) {
    formData[event.target.name] = event.target.value;
    ls.setItem('formData', JSON.stringify(formData));
});

if (ls.getItem('formData')) {
  formData = JSON.parse(ls.getItem('formData'));
  for (let key in formData) {
    taxi.elements[key].value = formData[key];
  }
}




// const textTaxi = document.querySelectorAll('.taxi__input');
// const coppTaxi = document.querySelectorAll('[data-type]')
// const inputElemnt = document.querySelector('.add__text')
// const creatBtn = document.querySelector('.add__btn')
// const taxiList = document.querySelector('.copp__wrapper')

// const taxiWrapper = document.querySelector('.taxi__wrapper');
// const ls = localStorage;

// удаление цвета с помощью this
// function inputActiv() {
//   for (let i = 0; i < inputAc.length; i++) {
//     inputAc[i].addEventListener('input', function () {
//       if (this.value !== '') {
//         this.style.backgroundColor = "#49d831d4";
//       } else if (this.value == '') {
//         this.style.removeProperty("background-color");
//       }
//     })
//   }
// }
// inputActiv()


// // localStorage.setItem('taxiWrapper', JSON.stringify(taxiWrapper.innerHTML));
// // let b = localStorage.getItem('taxiWrapper');
// // b = JSON.parse(b)
// // console.log(b);
// // // console.log(b);

// // ls.setItem('taxiWrapper', JSON.stringify(taxiWrapper.innerHTML));

// // let b = ls.getItem('taxiWrapper', taxiWrapper);
// // b = JSON.parse(b);



// const notes = []

// function render() {
//   taxiList.innerHTML = '';
//   for (let i = 0; i < notes.length; i++) {
//     taxiList.insertAdjacentHTML('beforeend', getNoteTamplate(notes[i], i, i))
//   }


// }
// render()

// creatBtn.addEventListener('click', function () {
//   if (inputElemnt.value.length === 0) {
//     return
//   }
//   const newNote = {
//     title: inputElemnt.value
//   }
//   notes.push(newNote)
//   render()
//   inputElemnt.value = '';

// })


// taxiList.addEventListener('click', function (event) {
//   // console.log(event.target.dataset)
//   if (event.target.dataset.index) {
//     const index = parseInt(event.target.dataset.index);
//     const type = event.target.dataset.type;
//     if (type === 'delete') {
//       notes.splice(index, 1)
//     }
//   }
//   render()
// })



// function getNoteTamplate(note, index) {
//   return `
//    <div class="copp__wrapper">
//   <span class="taxi__input" data-index="${index}">${note.title}</span>
//   <img class="copp__tax" data-type="cop" data-index="${index}" src="/images/copy-alt-svgrepo-com.svg" alt="">
//   </div>
//   <div class="img__taxi">
//     <img class="cross" data-type="delete" data-index="${index}" src="/images/cross.svg" alt="">
//   </div>
// </div>
// `
// }
// const notes = []
// function notesItem(index) {
//   return `
//    <div class="taxi">
//         <!-- <div class="copp__wrapper">
//           <div class="copp__wrapper">
//             <input type="text" class="taxi__input" ></span>
//             <img class="copp__tax" src="/images/copy-alt-svgrepo-com.svg" alt="">
//           </div> -->
//       </div>
//   `
// }

// function render() {
//   for (let i = 0; i < notes.length; i++) {
//     taxiWrapper.innerHTML = "";
//     taxiWrapper.insertAdjacentHTML('beforeend', notesItem(notes[i],))
//   }
// }
// console.log('taxiWrapper')
// render()