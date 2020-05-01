$( ()=> {
	$('.card-header').click( (evt)=> {
		if(evt.target.tagName!='BUTTON')
			$(evt.target).find('.btn').click();
	});

	$('.collapse.show').parent().find('.card-header').addClass('open');

	$('.card-header .btn').click( (evt)=> {
		let has = $(evt.target).parent().parent().hasClass('open');
		$('.card-header').removeClass('open');
		if(has)
			$(evt.target).parent().parent().removeClass('open');
		else
			$(evt.target).parent().parent().addClass('open');
	});
});