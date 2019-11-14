'use strict';
const ItemAll = [];
function Item(data) {
 this.url = data.image_url;
 this.title = data.title;
 this.description = data.description;
 this.keyword = data.keyword;
 this.horns = data.horns;
 ItemAll.push(this);
}
const keywordArray = [];
function renderAnyHandlebars(sourceId, data, target) {
 let template = Handlebars.compile($(sourceId).html());
 let newHtml = template(data);
 $(target).append(newHtml);
}
function render() {
 ItemAll.forEach(obj => {
 renderAnyHandlebars('#horns-handlebars', obj, 'main');
 });
 ItemAll.forEach(obj => {
   if (!keywordArray.includes(obj.keyword)) {
     keywordArray.push(obj.keyword);
   }
 });
 $('select').html('<option value="default">Filter by Keyword</option>');
 keywordArray.forEach(keyword => {
   let keywordObj = {
     'keyword': keyword,
   }
   renderAnyHandlebars('#options-handlebars', keywordObj, 'select');
 });
}




  function firstJason (){
  $.get('../data/page-1.json')
    .then( data => {
      data.forEach( (thing) => {
        let horn = new Horns(thing);
        horn.render();
        selecter()
      });
    })
    .then( () => populateSelectBox() );
  }
  $('#page-1').on('click', function(){
    $('section').fadeOut();
    $(() => firstJason());
  });
  
  function secondJason (){
  
    $.get('../data/page-2.json')
      .then( data => {
        data.forEach( (thing) => {
          let horn = new Horns(thing);
          horn.render();
          selecter()
        });
      })
      .then( () => populateSelectBox() );
    }
    $('#page-2').on('click', function(){
      $('section').fadeOut();
      $(() => secondJason());
    });
  