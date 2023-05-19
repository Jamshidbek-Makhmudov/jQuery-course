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
	//keypress bilan ishlama sababi official emas va documentationda ham xec narsa yoq, ishlatib qoyseng keyinchalik bug ham chiqishi mumkin
	let box = $('.grey-box');
	let arrow_right = 39;
	let arrow_left = 37;
	$('html').keydown(function (event) {
		e = event.which;
		console.log(e);
		if (e === arrow_right) box.stop().animate({ marginLeft: '+=10px' }, 50);
		if (e === arrow_left) box.stop().animate({ 'margin-left': '-=10px' }, 50);
	});

	//working with inputs focus and blur events
	//focus bergan ishlasa blur bergan atmen qiladi yani blur inputdan click yoqolganda ochadigan buyruq
	// let myInput = $('input:text, input[type="email"], input[type="password"], textarea');
	// myInput.focus(function () {
	// 	$(this).css('box-shadow', '0 0 4px #666');
	// });
	// myInput.focus(function () {
	// 	$(this).css('box-shadow', '0 0 4px #666');
	// });
	// myInput.blur(function () {
	// 	$(this).css('box-shadow', 'none');
	// });
	// myInput.blur(function () {
	// 	let isError = $(this).val();
	// 	let error = $('.error');
	// 	if (isError.length < 3) {
	// 		$(this).css('box-shadow', '0 0 4px #e61616');
	// 		error.css('display', 'block');
	// 	} else {
	// 		$(this).css('box-shadow', '0 0 4px #05c341');
	// 	}
	// });
	//change event
	//uses for check boxex radio buttons and select ele
	// $('#checkbox').change(function () {
	// 	let isChecked = $(this).is(':checked'); // bu kodni alternative .prop("checked")
	// 	if (isChecked) $(this).add("label[for='cb']").css('box-shadow', '0 0 4px #05c341');
	// 	else {
	// 		$(this).add("label[for='cb']").css('box-shadow', '0 0 4px #e61616');
	// 	}
	// });
	//working with selection dropdowns:
	$('#selection').change(function () {
		let isSelected = $(this).find(':selected').text();
		alert(isSelected);
	});
	// validation errors
	let form = $('#form');
	enableFastFeeback(form);

	form.submit(function (event) {
		let name = $('#name').val();
		let password = $('#password').val();
		let message = $('#message').val();
		let checked = $('#checked').is(':checked');

		// if (message.val().trim() == '') {
		// 	message.css('box-shadow', '0 0 4px #e61616');
		// 	event.preventDefault();
		// }
		validateNameField(name, event);
		validatePasswordField(password, event);
		validateMessageField(message, event);
		validateCheckboxField(checked, event);
	});
});
//error color blur
function enableFastFeeback(formELement) {
	let nameInput = formELement.find('#name');
	let passwordInput = formELement.find('#password');
	let messageInput = formELement.find('#message');
	let checkboxInput = formELement.find('#checkbox'); //checkbox
	//name
	nameInput.blur(function (event) {
		let name = $(this).val();
		validateNameField(name, event);
		if (!isValidName(name)) {
			$(this).css({ 'box-shadow': '0 0 4px #e61616', border: '1px solid #600' });
		} else {
			$(this).css({ 'box-shadow': '0 0 4px #05c341', border: '1px solid #060' });
		}
	});
	//password
	passwordInput.blur(function (event) {
		let password = $(this).val();
		validatePasswordField(password, event);
		if (!isValidPassword(password)) {
			$(this).css({ 'box-shadow': '0 0 4px #e61616', border: '1px solid #600' });
		} else {
			$(this).css({ 'box-shadow': '0 0 4px #05c341', border: '1px solid #060' });
		}
	});
	//textarea
	messageInput.blur(function (event) {
		let message = $(this).val();
		validateMessageField(message, event);
		if (!isValidMessage(message)) {
			$(this).css({ 'box-shadow': '0 0 4px #e61616', border: '1px solid #600' });
		} else {
			$(this).css({ 'box-shadow': '0 0 4px #05c341', border: '1px solid #060' });
		}
	});
	//checkbox
	checkboxInput.change(function (event) {
		let checked = $(this).is(':checked');
		validateCheckboxField(checked, event);

		if (!checked) {
			$(this)
				.add("label[for='cb']")
				.css({ 'box-shadow': '0 0 4px #e61616', border: '1px solid #600' });
		} else {
			$(this)
				.add("label[for='cb']")
				.css({ 'box-shadow': '0 0 4px #05c341', border: '1px solid #060' });
		}
	});
}
//error validation for name
function validateNameField(name, event) {
	if (!isValidName(name)) {
		$('#name-feedback').text('please enter at least 4 characters').css('color', 'red');
		event.preventDefault();
	} else {
		$('#name-feedback').text('');
	}
}
function isValidName(name) {
	return name.length >= 4;
}
//error validation for password
function validatePasswordField(password, event) {
	if (!isValidPassword(password)) {
		$('#password-feedback')
			.text('please enter at least 4 characters and numbers')
			.css('color', 'red');
		event.preventDefault();
	} else {
		$('#password-feedback').text('');
	}
}
function isValidPassword(password) {
	return password.length >= 4 && /.*[0-9]/.test(password);
}
//error validation for textarea
function validateMessageField(message, event) {
	if (!isValidMessage(message)) {
		$('#message-feedback').text('please enter a message').css('color', 'red');
		event.preventDefault();
	} else {
		$('#message-feedback').text('');
	}
}
function isValidMessage(message) {
	return message.trim() != '';
}
//error validation for checked
function validateCheckboxField(checked, event) {
	if (!checked) {
		$('#checkbox-feedback').text('please agree this').css('color', 'red');
		event.preventDefault();
	} else {
		$('#checkbox-feedback').text('');
	}
}
