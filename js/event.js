$(function () {
	//click function
	$('#btn-click').click(function (event) {
		console.log(event);
		alert('clicked');
	});

	let redBox = $('.red-box');
	redBox.click(function () {
		$(this).fadeTo(500, 0.5);
	});

	// hover
	//function- 2marta ishlaydi. 1- hover qiganda, 2-cursorni olganda. buni yana minus tomonidan biri hover boganda nimnidir ozgatirsang unhover bognda shu ozgartorganing qolib ketadi,
	//buni togrilash uchun hover() function ichidagi 1-parametr hover bolganda yoziladigan function, 2-parametr unhover bolganda qilinadigan function
	$('#btn-hover').hover(function () {
		alert('hovered');
	});

	let onHover = $('.green-box');
	let redHover = $('.red-box');
	onHover.hover(function () {
		$(this).text('I was hovered');
	});
	//////////////////////////////
	redHover.hover(
		function () {
			$(this).stop().fadeTo(400, 0.5);
		},
		function () {
			$(this).stop().fadeTo(400, 1);
		}
	);

	//mouseenter and mouseleave handlers
	//minus tarafi kop marta hover qilsang ishlab ketaveradi
	//shuning uchun  stop() funtionni ishlatish kerak
	let yellowBox = $('.yellow-box');
	yellowBox.mouseenter(function () {
		$(this).stop().fadeTo(400, 0.5);
	});
	yellowBox.mouseleave(function () {
		$(this).stop().fadeTo(400, 1);
	});

	//same handler for multiple events
	//on buyurigi bilan 1ta elementaga bir vaqtning ozida bir qancha buyruqlarni bersa boladi, bunda parametrni 1-da probel bn yozib ketilaverdi, 2-parametrda kiritiladigan buyruq yoziladi
	let btnOn = $('#btn-on');
	btnOn.on('click mouseenter mouseleave keydown', function () {
		console.log('actions');
	});
	//change image gallery when clicked:

	let galleryImage = $('.gallery').find('img').first();
	let images = [
		'images/laptop-mobile_small.jpg',
		'images/laptop-on-table_small.jpg',
		'images/people-office-group-team_small.jpg',
	];
	let i = 0;
	galleryImage.on('click', onChange);
	function onChange() {
		i = (i + 1) % images.length;
		galleryImage.fadeOut(function () {
			$(this).attr('src', images[i]);
			$(this).fadeIn();
		});
	}
	//delegated events
	// event handlerlar documentda avalladan bor elemntlar ustida ishlaydi, lekin agar documentga yangi dinamic element qoshilsa ular ustida event handler lar ishlamaydi, buni oldini olish uchun delegated eventlardan foydalanish kerak.
	//delegated events- oldin parent element ovolamiz, beradigan click, hover yoki boshqa event handlerlarni shu parent ichida bor bolan elementga ishlat degan function yozamiz. dinamic tarizda qoshilgan elementlar ham shu parametr ichida bolganligi sabab oxshaydi:
	$('body').on('click', 'li', function () {
		$(this).slideUp(500);
	});

	//giving aditionlav data to event fo eg: greeting popups
	let login = $('#login');
	login.click(
		{
			user: 'James',
			company: 'Lowell PEF',
			avatar: 'image is here',
		},
		function (event) {
			greetUser(event.data);
			console.log(event.data);
		}
	);
	function greetUser(userData) {
		username = userData.user || 'anonimous';
		usercompany = userData.company || 'company';
		alert(`Welcome back ${username}! from ${usercompany}`);
	}
	//
	//creating an image gallery
	let miniImages = $('.mini-gallery').find('img');
	miniImages.css('cursor', 'pointer');
	miniImages.mouseenter(function () {
		$(this).stop().fadeTo(500, 1);
	});
	miniImages.mouseleave(function () {
		$(this).stop().fadeTo(500, 0.5);
	});
	miniImages.click(function () {
		let source = $(this).attr('src');
		let image = $('<img>').attr('src', source).css('width', '100%');
		$('.detail-box').append(image).fadeIn(500);
		$('.detail-box').click(function () {
			$(this).slideUp(500);
		});
	});

	// working with keyboard
	//animate dan oldin stop() ni ishlatish kerak sababi animate ichida kop kodlar bolsa navbatga turib qoladi va biz hohlamaganda ham ishlab ketaverdi
	let box = $('.grey-box');
	let arrow_right = 39;
	let arrow_left = 37;
	$('html').keydown(function (event) {
		e = event.which;
		console.log(e);
		if (e === arrow_right) box.stop().animate({ marginLeft: '+=10px' }, 50);
		if (e === arrow_left) box.stop().animate({ 'margin-left': '-=10px' }, 50);
	});
});
