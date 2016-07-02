(function($) {		
	// Debug	

	//Initialization
	set_inputs();	
	print_er = false;

	$('#steps').on('click','li.active',function(e){

		e.preventDefault();

		var step = $(this).attr('id');
		step = step.substring(5,step.length);

		step = parseInt(step) + 1;		

		goto_step(step,'back');			


	});

	$('.active').click(function(e){		
		
		e.preventDefault();

		var step = $(this).attr('id');
		step = step.substring(5,step.length);

		step = parseInt(step) + 1;		

		goto_step(step,'back');			


	});

	$('a#btn-next').click(function(e){
		e.preventDefault();
		$('#savedb').val('no');		
		$('input[name="IncompleteStep"]').val('false');
		$('#form-apply').submit();
	});



	$('#btn-open').click(function(e){

		$('#save-window h4').text('Open Saved Application');		
		$('#savedb').val('no');

	});

	// SAVING BUTTONS
	// TODO - MERGE 2 BUTTONS INTO 1
	// Saves New form, it only adds the text and info its saved via login form
	$('#btn-save-1').click(function(e){

		$('#save-window h4').text('Save Your Application');		
		$('#save-option input[name="application"]').attr('checked','checked');

	});

	//Saves Info to DB
	$('#btn-save-2').click(function(e){
		e.preventDefault();							
		$('#savedb').val('yes');		
		$('input[name="IncompleteStep"]').val('true');
		send_data(true);
	});

	$('a#submit-info').click(function(e){
		e.preventDefault();
		$('input[name="IncompleteStep"]').val('true');
		send_data(true);
		$('#form-login').submit();

	});
	
	// END SAVING BUTTONS

	$('#a#logout').click(function(e){
		e.preventDefault();

		var url = $(this).attr('href');
		window.location.href = url;


	});
	

	$('a#btn-back').click(function(e){
		e.preventDefault();	

		var currentStep = $('#form-apply .question.current').attr('id');	
		
		if(currentStep != 'question-1'){

			var getStep = currentStep.substring(9,currentStep.lenght);				

			goto_step(getStep,'back');			

		}

	});



	$('#form-apply').validate({		
		rules: {
		    CellPhoneNumber: {
		      require_from_group: [1, ".phone-group"]
		    },
		    HomePhoneNumber: {
		      require_from_group: [1, ".phone-group"]
		    },
		    BusinessPhoneNumber: {
		      require_from_group: [1, ".phone-group"]
		    }
		  },
		highlight: function(element, errorClass, validClass) {
					
			$(element).parent().prepend('<span class="icoerror">*</span>');

		},
		unhighlight: function(element, errorClass, validClass) {
			
			$(element).parent().find('.icoerror').hide();

		},submitHandler: function(form) {
			send_data(false);
		}
	});		

	jQuery.extend(jQuery.validator.messages, {
	    required: "Marked Field is Required",	    
	    email: "Please enter a valid email address."	    
	});

	$('#form-login').validate({		
		submitHandler: function(form) {
			
		var posturl = $('#form-login').attr('action');
		var values = $('#form-login').serialize();

		$.ajax({
	        url: posturl,
	        type: "post",
	        data: values,
	        success: function(data){

	        	var obj = jQuery.parseJSON(data);
	        	var userStatus = obj.LoggedIn;
	        	var id = obj.ID;
	        	var error = obj.errormsg;	        	

	        	if(error != ''){

	        		alert(error);

	        	}else{

		        	if(userStatus == 1){		        		

		        		$.fancybox.close();
		        		$('#btn-save-1').hide();
		        		$('#btn-save-2').show();		        		
		        		$('#client-info').append(id);
		        		$('#client-info').removeClass('hide');	 
		        		$('#form-login').addClass('hide');
		        		$('#form-logout').removeClass('hide');		        		
		        		if($('#savedb').val() == 'yes'){
		        			alert('Application Saved');	
		        		}

		        		location.reload();		        			        		

		        	}else{

		        		$('#btn-save-1').show();
		        		$('#btn-save-2').hide();
		        		$('#client-info').addClass('hide');
		        		$('#form-login').removeClass('hide');

		        	}	 

	        	}	        	
	        	
	        },
	        error:function(){
	          	console.log(data);
	        }
	    });
		}

		
	});		

	//Question Dependencies
	$('input[name="FinanceType"]').change(function(){

		var name = $(this).attr('name');		
		var name2 = $(this).attr('name') + '-4';	
		var val = $(this).val();
		var answer = 'Refinance';

		question_depend(name,answer,val);		
		question_depend(name2,answer,val);		

	});

	$('input[name="FinanceType"]').change(function(){

		var name = $(this).attr('name') + '-2';
		var name2 = $(this).attr('name')+ '-3';
		var name3 = $(this).attr('name')+ '-5';
		var val = $(this).val();
		var answer = 'Purchase';

		question_depend(name,answer,val);
		question_depend(name2,answer,val);		
		question_depend(name3,answer,val);		

	});	

	$('input[name="TBD"]').change(function(){

		var name = '#' + $(this).attr('name');
		
		if($(this).is(":checked")){

			$(name).hide();
			$(name).addClass('disabled');
			set_inputs();

		}else{

			$(name).show();
			$(name).removeClass('disabled');
			$('input[name="PropRefStreetAddress"]').val('');

		}	


	});

	$('input[name="PropertyOwnership"]').change(function(){

		var name = $(this).attr('name');
		var val = $(this).val();
		var answer = 'Rent';

		question_depend(name,answer,val);				

	});

	$('select[name="SelfEmployed"]').change(function(){

		var name = $(this).attr('name');
		var val = $(this).val();
		var answer = 'N';

		question_depend(name,answer,val);				

	});

	$('select[name="SelfEmployed"]').change(function(){

		var name = $(this).attr('name') + '-2';
		var val = $(this).val();
		var answer = 'Y';

		question_depend(name,answer,val);				

	});

	$('input[name="OwnRealEstate"]').change(function(){

		var name = $(this).attr('name');
		var val = $(this).val();
		var answer = 'Y';

		question_depend(name,answer,val);				

	});

	$('select[name="LengthofEmployment"]').change(function(){

		var val = $(this).val();			
		
		if(val < 2){

			$('#LengthofEmployment').removeClass('disabled');

		}else{
		
			$('#LengthofEmployment').addClass('disabled');
			$('#LengthofEmployment input').val('');
			$('#LengthofEmployment select').val('');
			

		}		

	});

	$('input[name="question-12"]').change(function(){

		var name = '#' + $(this).attr('name');
		var val = $(this).val();

		if(val == 'N'){

			$(name).addClass('disabled');
			set_inputs();

		}else{

			$(name).removeClass('disabled');

		}

	});

	$('select[name="PropOwnedRent"]').change(function(){

		var name = '#' + $(this).attr('name');
		var val = parseInt($(this).val());

		if(val < 2){

			$(name).removeClass('disabled');

		}else{

			$(name).addClass('disabled');
			set_inputs();

		}


	});

	$('input[name="PropertyBeingRefinanced"]').change(function(){

		var val = $(this).val();

		if( val == 'Y'){

			$('select[name="PropRefOccupancy"] option[value="Owner Occupied"]').attr('selected','selected');

		}else{

			$('select[name="PropRefOccupancy"] option[value=""]').attr('selected','selected');			

		}

	});

	$('input[name="EthnicalInfo"]').change(function(){

		var name = $(this).attr('name');
		var val =  $(this).attr('checked')?true:false; 		
		var answer = true;		
		var selector = '#' + name;
		var inputsel = 'input[name="' + name + '"]';		

		$('input[name="EthInfo"]').attr('value',val);

		if(val == answer){

			$(selector).addClass('disabled');
			$(selector).find('input').prop('checked', false);			

		}else{

			$(selector).removeClass('disabled');
			
		}				

	});


	if($('input[name="EthInfo"]').attr('value') == 'true'){
		
		var selector = '#EthnicalInfo';

		$(selector).addClass('disabled');
		$(selector).find('input').val('');	

	}else{

		$(selector).removeClass('disabled');		

	}


	function send_data(save){

		var posturl = $('#form-apply').attr('action');
		var values = $('#form-apply').serialize();

		 $.ajax({
	        url: posturl,
	        type: "post",
	        data: values,
	        success: function(data){

	        	var obj = $.parseJSON(data);

	        	//qFinished = Question Finished
	        	qFinished = parseInt(obj.question);
	        	qrefinanced = obj.FinanceType;
	        	qPropRefinanced = obj.PropertyBeingRefinanced;	        
	        	qstatus = obj.IncompleteStep;
	        	status = obj.save_status;	


	        	if(qrefinanced == 'Refinance'){
	        		$("#PropertyBeingRefinanced").removeClass('disabled');
	        	}else{
	        		$("#PropertyBeingRefinanced").addClass('disabled');
	        	}

	        	if(qPropRefinanced == 'Y'){
	        		$('input[name="PropRefStreetAddress"]').val(obj.CurrentStreetAddress);
	        		$('input[name="PropRefCity"]').val(obj.CurrentCity);		        		
	        		$('input[name="PropRefZipCode"]').val(obj.CurrentZipCode);
	        		$('select[name="PropRefState"]').val(obj.CurrentState);
	        	}else if(qPropRefinanced == 'N'){
	        		$('input[name="PropRefStreetAddress"]').val(obj.PropRefStreetAddress);
	        		$('input[name="PropRefCity"]').val(obj.PropRefCity);
	        		$('input[name="PropRefZipCode"]').val(obj.PropRefZipCode);
	        		$('select[name="PropRefState"]').val(obj.PropRefState);
	        	}

	        	if(save == false){

	        		goto_step(qFinished,'next');

	        	}

	        	if(status == 'saved'){

	        		if(qFinished <= 7 && qstatus == 'true' ){

	        			alert('Your application has been saved');

	        		}

	        	}
	        	
	        },
	        error:function(){
	          	console.log(data);
	        }
	    });

	}

	function question_depend(name,answer,val){

		var selector = '#' + name;
		var inputsel = 'input[name="' + name + '"]';		

		if(val == answer){

			$(selector).removeClass('disabled');
			$(selector).find('input').prop('disabled', false);
			$(selector).find('select').prop('disabled', false);
			$(selector).find('textarea').prop('disabled', false);

		}else{

			$(selector).addClass('disabled');
			$(selector).find('input').prop('disabled', true);
			$(selector).find('select').prop('disabled', true);
			$(selector).find('textarea').prop('disabled', true);

		}		

	}

	function goto_step(step,position){

		if(position == 'back'){

			next_step = step - 1;			

		}else if(position == 'next'){

			next_step = step + 1;

		}else{

			next_step = step;

		}

		oldQSelector = '#form-apply #question-' + step;
		nextQSelector = '#form-apply #question-' + next_step;

		oldStepSelector = '#apply-now-page #steps #step-' + step;
		nextStepSelector = '#apply-now-page #steps #step-' + next_step;

		// Questions
		$('#form-apply .question').addClass('disabled');
		$('#form-apply .question').removeClass('current');

		$(nextQSelector).addClass('current');
		$(nextQSelector).removeClass('disabled');				

		// Steps		
		$('#steps .step').addClass('disabled');
		$('#steps .step').removeClass('current');		

		$(nextStepSelector).addClass('current');
		$(nextStepSelector).removeClass('disabled');				

		set_inputs();			

		$('#move').trigger('click');

	}

	function set_inputs(){		

		$('#form-apply .disabled input').prop('disabled', true);
		$('#form-apply .disabled select').prop('disabled', true);
		$('#form-apply .disabled textarea').prop('disabled', true);
		
		$('#form-apply .current input').prop('disabled', false);
		$('#form-apply .current select').prop('disabled', false);
		$('#form-apply .current textarea').prop('disabled', false);

		// Step section
		var step =  $('.current').attr('id');			

		console.log(step);

		$('#steps ul li').each(function(index,element){

			$(element).addClass('active');
			$(element).removeClass('disabled');

			if ( $( this ).is( '.current' ) ){
				return false;
			}

		});

		if(step == 'step-7'){

			$('#btn-next').addClass('finished');
			$('#btn-next').text('Submit your Application');
			$('#btn-assist').hide();

		}else{

			$('#btn-next').removeClass('finished');
			$('#btn-next').text('Next');
			$('#btn-assist').show();

		}

		if(step == 'step-8'){

			$('#btn-next').hide();
			$('.left-buttons').hide();
			$('.right-buttons').hide();

		}else {
			
			$('#btn-next').show();
			$('.left-buttons').show();
			$('.right-buttons').show();

		}


		if(step == 'step-1'){			

			$('#btn-back').hide();				
			$('#btn-open').show();
			$('#btn-save-1').hide();

		}else{

			$('#btn-back').show();				
			$('#save-buttons').show();
			$('#btn-open').hide();
			if(!$('#btn-save-1').hasClass('hide')){
				$('#btn-save-1').show();
			}

		}		


	}

	/*Call Assist*/

	jQuery('.datepicker').datetimepicker();

	jQuery('.datepicker2').datetimepicker({
		 format:'m/d/Y',
		 timepicker:false		 
	});	

	$('#assist-form').validate({		
		highlight: function(element, errorClass, validClass) {
					
			$(element).parent().prepend('<span class="icoerror">*</span>');

		},
		unhighlight: function(element, errorClass, validClass) {
			
			$(element).parent().find('.icoerror').hide();

		},submitHandler: function(form) {
			
			var posturl = $('#assist-form').attr('action');
			var values = $('#assist-form').serialize();

			 $.ajax({
		        url: posturl,
		        type: "post",
		        data: values,
		        success: function(data){

		        	$('#assist-form').hide();
		        	$('#thank-you-assist').show();

		        },
		        error:function(){
		          	
		        }
		    });


		}
	});		


})(jQuery);