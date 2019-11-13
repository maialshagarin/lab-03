// // 'use strict';

// // function Horns(data) {
// //   this.image_url = data.image_url;
// //   this.title = data.title;
// //   this.description = data.description;
// //   this.keyword = data.keyword;
// //   this.horns = data.horns;
// //   Horns.all.push(this);
// // this.render ();
// // }
// // Horns.all = [];
// // const array = Horns.all

// // Horns.prototype.render = function() {

// //   // Create a new empty div tag
// //   let hornOutput = $('<div></div>');
// //       hornOutput.addClass(this.keyword);

// //   // clone (copy) the html from inside the photo-template
// //   let template = $('#photo-template').html();

// //   // Add the template to the output div
// //   hornOutput.html( template );

// //   // Put the data in
// //   $('main').append(hornOutput);
// //   hornOutput.append('h2').text( this.title );
// //   hornOutput.append('img').attr('src', this.image_url);
// //   hornOutput.append('p').text(this.description);


// // };
// 'use strict';

// function Images(url, title, description, keyword, horns) { 
//   this.image_url = url;
//   this.title = title;
//   this.description = description;
//   this.keyword = keyword;
//   this.horns = horns;
//   Images.list.push(this);
//   this.displayImage();
//   this.displayOptions();
// }

// Images.list = [];
// const optionArray = [];


// Images.prototype.displayImage = function() { 
//   const photoTemplate = $('#photo-template').html();
//   const photoTemplateScript = Handlebars.compile(photoTemplate);
//   const image = {'title': this.title, 'image_url': this.image_url, 'description': this.description, 'keyword': this.keyword};
//   const html = photoTemplateScript(image);
//   $('main').append(html);
// };

// Images.prototype.displayOptions = function() { 
//   if (!optionArray.includes(this.keyword)) {
//     optionArray.push(this.keyword);
//     const optionTemplate = $('#option-template').html();
//     const optionTemplateScript = Handlebars.compile(optionTemplate);
//     const option = {'keyword': this.keyword};
//     const html = optionTemplateScript(option);
//     $('select').append(html);
//   }
// }

// function optionListener() { 
//   $('select').change(() => { 
//     const $selectedImage = $('select option:selected').text();
//     if ($selectedImage === 'Filter by Keyword') {
//       $('img').show();
//     } else {
//       $(`section[keyword!=${$selectedImage}]`).hide();
//       $(`section[keyword=${$selectedImage}]`).show();
//     }
//   })
// }

// function sortByTitle (arr){
//   arr.sort( (a,b) => a.title > b.title ? 1 : a.title < b.title ? -1: 0);
//   return arr;
// }
// function sortByHorns (arr){
//   arr.sort( (a,b) => b.horns - a.horns);
//   return arr;
// }

// function titleSortListener() { 
//   $('#title').click( () => { 

//     Images.list.sort( (a,b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0);
//     console.log(Images.list);
//     clearAllImages();
//     displayAllImages();
//   })
// }

// function hornSortListener() { 
//   $('#horn').click( () => { 
//     Images.list.sort( (a,b) => a.horns > b.horns ? 1 : a.horns < b.horns ? -1 : 0);
//     console.log(Images.list);
//     clearAllImages();
//     displayAllImages();
//   })
// }

// function displayAllImages() { 
//   const photoTemplate = $('#photo-template').html();
//   const photoTemplateScript = Handlebars.compile(photoTemplate);
//   Images.list.forEach(object => {
//     const image = {'title': object.title, 'image_url': object.image_url, 'description': object.description, 'keyword': object.keyword};
//     const html = photoTemplateScript(image);
//     $('main').append(html);
//   })
// }

// function clearAllImages() { 
//   $('section').remove();
// }

// // function populateSelectBox() {
// //   let seen = {};
// //   let select = $('select');
// //   Horns.all.forEach( (horn) => {
// //     if ( ! seen[horn.keyword] ) {
// //       let option = `<option value="${horn.keyword}">${horn.keyword}</option>`;
// //       select.append(option);
// //       seen[horn.keyword] = true;
// //     }
// //   });

// //   console.log(seen);
// // }
// // function selecter() {
  
// //   $('select').on('change', function() {
// //     let selected = $(this).val();
// //     $('div').hide();
// //     $(`.${selected}`).fadeIn(800);
// //   });
// // }

// // function resetData() {
// //   array.length = 0;
// // }
// // function firstJason (){
// //   $('#photo-template').remove()
// //   // $('section').html('')
// //   $.get('../data/page-1.json')
// //   .then( data => {
// //     data.forEach( (thing) => {
// //       let horn = new Horns(thing);
// //       horn.render();
// //       selecter()
// //     });
// //   })
// //   .then( () => populateSelectBox() );
// // }

// // firstJason();
// // $('#page-1').on('click', function(){
// //   $('section').fadeOut();
// //   $(() => firstJason());
// // });

// // function secondJason (){
// //   resetData();
// // $('div').remove()
// //   $.get('../data/page-2.json')
// //     .then( data => {
// //       data.forEach( (thing) => {
// //         let horn = new Horns(thing);
// //         horn.render();
// //         selecter()
// //       });
// //     })
// //     .then( () => populateSelectBox() );
// //   }
// //   $('#page-2').on('click', function(){
// //     $('section').fadeOut();
// //     $(() => secondJason());
// //   });
