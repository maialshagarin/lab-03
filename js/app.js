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


function readData(pageNumber='page-1') {
  $('main').html('');
  ItemAll.length = 0;
  $.get(`./data/${pageNumber}.json`, data => {
     data.forEach(obj => {
       new Item(obj);
     });
   })
   .then(() => {sortByTitle(ItemAll)})
   .then(render);
 }


 function sortByTitle(array) {
  array.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    else if (a.title < b.title) {
      return -1;
    }
    else {return 0;}
  });
}



readData(); 

$('select').on('change', function(){
  let $select = $(this).val();
  $('div').hide();
  $(`div[data-keyword="${$select}"]`).show();
});

$('button[value="page1"]').on('click', () => {
  readData('page-1');
});
$('button[value="page2"]').on('click', () => {
  readData('page-2');
});

$('button[value="sortKeyword"]').on('click', () => {
  $('main').html('');
  sortByTitle(ItemAll);
  render();
});
