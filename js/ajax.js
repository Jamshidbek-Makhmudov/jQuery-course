$(function () {
	//$get(), $post(), $ajax() $getjson
	//load()

	// $('#code').load('js/ajax.js');
	// $('#code').load('js/ajax.js', function (response, status) {
	// 	if (status == 'error') {
	// 		alert('could not find file');
	// 	}
	// 	console.log(response);
	// });
	////////////////////////
	//$getJSON()
	const flickrurl = `https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`;
	$.getJSON(flickrurl, {
		tags: 'planets',
		tagmode: 'any',
		format: 'json',
	})
		.done(function (data) {
			//	console.log(data);
			$.each(data.items, function (index, item) {
				$('<img>').attr('src', item.media.m).appendTo('#img-api');
				if (index == 3) {
					return false;
				}
			});
		})
		.fail(function () {
			alert('ajax call failed');
		});
	/////
	const pokemonApi = `https://pokeapi.co/api/v2/generation/1`;
	const pokemonByName = `https://pokeapi.co/api/v2/pokemon/`;
	$.getJSON(pokemonApi)
		.done(data => {
			// console.log(data);
			$.each(data.pokemon_species, function (index, item) {
				//item.name hammasi kichik harf bilan keladi, ularni har birini bosh harfini katta qilish uchun pasdagi kodni yozish kerak. Bunda chartAt(0) 0-indexni kesib oladi qolganini tashlab yuboradi va uni katta harfga ozgartiradi slice(1) esa faqat 1element ni tashlab qolganini oladi
				let name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
				//nameni dinamic linkga orab olish
				let link = $('<a>')
					.attr('id', item.name)
					.attr('href', '#')
					.append($('<strong>').text(name));
				//p tagini yasash va uni oxiriga linkni append qilish
				let par = $('<p>')
					.html(`Pokemon species no. ${index + 1} is `)
					.append(link);
				//linkga click qoshamiz details ni korish uchun:
				link.click(event => {
					$.getJSON(pokemonByName + item.name).done(details => {
						console.log(details);
						let pokemonDiv = $('#pokemon-details');
						pokemonDiv.empty();
						pokemonDiv.append(`<h2>${name}<h2/>`);
						pokemonDiv
							.append(`<img src="${details.sprites.front_default}" >`)
							.append(`<img src="${details.sprites.back_default}" >`)
							.append(`<img src="${details.sprites.back_shiny}" >`);
						pokemonDiv.find('img').css({ width: '200px' });
					});
					event.preventDefault();
				});
				// p tagini htmldagi divga joylash
				par.appendTo('#pokemon');
			});
		})
		.fail(function () {
			alert('ajax error from pokemon appi');
		})
		.always(() => {
			console.log('awesome pokemons');
		});
});
