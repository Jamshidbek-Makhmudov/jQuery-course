$(function () {
	// jQuery goes here...
	// Uncomment this line to fade out the red box on page load
	//ochirib yoqish, xira qilish
	//
	//
	//$('.red-box').fadeOut(2000); ochiradi
	//$('.red-box').fadeIn(1000);  //korsatadi
	//$('.red-box').fadeTo(1000, 0.2); //xiralashtiradi
	//$('.green-box').fadeTo(1000, 0.5);
	//$('.blue-box').fadeTo(1000, 0.8);
	//$('.blue-box').fadeTo(1000, 0); //joy egllab turadi, shunchaki korinmas bolib turadi
	//$('.red-box').fadeToggle();
	//$('.red-box').fadeToggle(2000); //bor bolsa ochiradi ochiq bolsa bor qiladi
	//$('.yellow-box').hide(1000); //hide
	//$('.yellow-box').show(2000); //show
	//$('.yellow-box').toggle(3000); //show or hide //bu hide,shiw,toggle buyruqlari asosan buttonga hover qilganda nimadir kirinishi kerak yoki ochishi kerak bolganda ishlatsa boladi
	//$('.grey-box').slideUp(); //slide qilib ochiradi
	//$('.grey-box').slideDown(); // joyiga qoyadi
	//$('.grey-box').slideToggle(); // ochiradi yoki joyiga qoyadi
	//
	//
	//surish harakatga keltirish
	// $('.grey-box').animate(
	// 	{
	// 		'margin-left': '+=100px',
	// 		opacity: '0',
	// 		height: '30px',
	// 		width: '30px',
	// 		'margin-top': '25px',
	// 	},
	// 	1000,
	// 	'linear'
	// ); // animate qiladi parametrga object qabul qiladi, 2-parametrga vaqtini oladi += yoki -= bu optional xoxlasa beradi xoxlasa yoq, 3-parametr harakatni turi, default qiymatda "swing boladi". agar "margin-left" da "" siz yozilsa marginLeft qilib yozilishi kerak
	//
	//
	//kechiktirish
	// $('.red-box').fadeTo(1000, 0);
	// $('.yellow-box').delay(1000).fadeOut(2000).delay(1000).fadeIn(2000); //delay kechiktirsh uchun
	// $('.green-box').fadeOut(1000).fadeIn(2000);
	//
	//callback
	// $('.red-box').slideUp(2000, function () {
	// 	$('red-box').fadeDown(2000);
	// }); //callback functionlar 2 yoki 3- parametrga erilib animatsiya tugagandan keyin qaysi harakat qilishini haqida buyruq bersa boladi
	//$('.lightbox').delay(500).fadeIn(1000);
	//
	//
	//css selector with jquery:
	//$('textarea').css('background-color', 'rgba(139,139,130)');
	//$('p:first, input[type="submit"]').css('background-color', 'rgba(97,156,233)'); //vergul bn kop elementlarni olsa ham boladi, p:first degani p tagini birinchi qatornigina oladi
	//$('li:even').css('background-color', 'green'); //list:even yoki odd bolsihi mukin juft va toq qatorni belgilayotganda
	//
	//
	//
	//$('#list').find('li').css('background', 'green'); // parentdan childni find qilib ishlash
	// $('#list').children('li').css('background', 'lightgreen'); //find bn children farqi children parentdan faqat 1 pog'ona ichkaridagi childrenni qarsysi, find bolsa parametrida korsatilan barchasni oladi
	//childrenni ornida parent ham bolishi mumkin va unda ozidan katta parentni qaryadi
	// $('#list').parents('div').css('background', 'lightgreen'); //koplikda
	// $('#list').parent('div').css('background', 'lightgreen'); //birlikda
	// $('#list').siblings('div').css('background', 'lightgreen'); //ozidan boshqa oziga teng bolgan guruhni oladi
	// $('#list').sibling(':header').css('background', 'lightgreen');
	// $('#list').prev().css('background', 'lightgreen'); //ozidan oldingi elementni oladi
	// $('#list').next().css('background', 'lightgreen'); //ozidan keyingi elementni oladi
	//
	//
	//
	//jquery method filtering
	// $('#list').find('li').filter(':even').css('background-color', 'green');
	//
	// $('li')
	// 	.filter(index => index % 3 === 0)
	// 	.css('background-color', 'green');
	//
	//$('#list').children('li').filter(':even').css('background-color', 'red');
	//
	// $('li').first().css('background-color', 'green');
	// $('li').last().css('background-color', 'red');
	// $('li').eq(1).css('background-color', 'blue'); //tenglik
	// $('li').eq(-1).css('background-color', 'blue'); //tekari hisob
	//
	//$('#list').not('li').css('background-color', 'blue');
	//
	//
	//Manipulating dom  element ;
	//removing,replaceing;
	//apend parentni ichidagi childni  oxirga qoshadi;
	//apendTo teskarisi;
	//$('ul ul:first').append('<li>last sub-item</li>');
	//$('<li>last sub-item</li>').appendTo('ul ul:first');
	//prepend childni boshiga qoshadi
	//prependTo teskarisi
	//$('ul ul:first').prepend('<li>first sub-item</li>');
	//$('<li>first sub-item</li>').prependTo('ul ul:first');
	//
	//after ni appenddan farqi tashqarisni oxiriga qoshadi, append esa ichkarisni oxiriga qoshadi
	// $('.red-box').after('<div class="blue-box"> this was a red box befor</div>');
	// $('.red-box').before('<div class="blue-box"> this was a red box befor</div>');
	//replace
	//$('li').replaceWith('<li>replaced</li>');
	//variablega tenglash:
	// let replacer = $('li:first');
	// $('p').replaceWith(replacer);
	//$('<div class="red-box">Red</div>').replaceAll('.green-box, .blue-box ');
	//remove,detach,empty
	//$('li').remove();
	//$('form').children().not("input[type='email'], input:submit").remove();
	//$('li').detach();
	// let = onDelete = $('textarea').detach();
	// $('#content').append(onDelete);
	//////////////////////////////////////
	//$('.red-box').empty();
	//////////////////////////////////////
	//link attr(),prop(),val()
	///attr()  atributi parametrida korsatilgan narsani qiymatini korsatadi nomini korsatadi
	//let link = $('#link');
	//console.log(link.attr('href'));
	//link.attr('href', 'youtube.com'); //ikinchi parametni ozgartiradi
	//console.log(link.attr('href'));
	//console.log(link.prop('href'));
	//let check = $('input:checkbox');
	//console.log(check.prop('checked')); //boolean qaytaradi
	//console.log(check.attr('checked')); //nomin korsatadi bolsa cheked false bolsa undefined
	//let valueInput = $('input:text');
	//let valueRange = $('input[type="range"]');
	//console.log(valueInput.val());
	//console.log(valueRange.val());
	//
	///
	//
	///////////////////////////////////////////
	// //carousel
	// let galleryImage = $('.gallery').find('img').first();
	// let images = [
	// 	'images/laptop-mobile_small.jpg',
	// 	'images/laptop-on-table_small.jpg',
	// 	'images/people-office-group-team_small.jpg',
	// ];
	// let i = 0;
	// setInterval(function () {
	// 	i = (i + 1) % images.length;
	// 	galleryImage.fadeOut(function () {
	// 		$(this).attr('src', images[i]);
	// 		$(this).fadeIn();s
	// 	});
	// }, 5000);
	// $('.gallery').hide();
	//
	//manupulate dom object 2 -changing element data and css
	// let redBox = $('.red-box');
	// redBox.css('user-select', 'none'); // bu kod yozuvlarni select qilib bomidigan qolib qoyadi
	// $('a').addClass('fancy-link');
	// $('li li').addClass(function (index) {
	// 	$(this).addClass('item-' + index);
	// });
	// $('div').addClass(function (index, currentClass) {
	// 	if (currentClass === 'grey-box') {
	// 		return 'red-box';
	// 	}
	// });
	// $('.red-box').removeClass('red-box').empty().addClass('blue-box');
	//
	//
	//changing data of an element
	// let gallery = $('.gallery');
	// let images = [
	// 	'images/laptop-mobile_small.jpg',
	// 	'images/laptop-on-table_small.jpg',
	// 	'images/people-office-group-team_small.jpg',
	// ];
	// gallery.data('avaliableImages', images); //2-paramet set qiladi
	// gallery.data('name', 'awesome images');
	// gallery.removeData('name');
	// console.log(gallery.data());
	// let myData = $('p:first');
	// console.log(myData.data('mydata')); //some data here chiqadi
	//
	//
	//changing the content of an element:
	//text()- faqat textni olib beradi
	//html() -html faylini olib beradi
	//let text = $('p:first');
	//console.log(text.text());
	//console.log(text.html());
	//text.text(` Hello<strong>world</strong>`);
	//text.html(` Hello <strong>world</strong>`); //parametga yozganing ozgartiradi
	//xosh qoshimcha text qoshish qanaqa boladi?
	//text.html(text.html() + ' this is james');
});
