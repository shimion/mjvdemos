jQuery(document).ready(function( $ ) {

	// RATES WIDGET FORM
	$('form[name="quoteRate"] select[name="loanpurpose"]').change(function(){
		var loan_purpose = parseInt($(this).val());
		console.log(loan_purpose);
		if(loan_purpose > 0){
			$('form[name="quoteRate"] .refinance_data').show();
			$('form[name="quoteRate"] .purchase_data').hide();
			$('form[name="quoteRate"] .purchase_data input').val('');
		}else{
			$('form[name="quoteRate"] .purchase_data').show();
			$('form[name="quoteRate"] .refinance_data').hide();
			$('form[name="quoteRate"] .refinance_data input').val('');
		}
	});

	$('form[name="quoteRate"] select[name="propertyState"]').change(function(){

		var selected = $(this).val();
		var newHTML = [];

		if(selected == 'CA'){
			var county = ["Alameda","Alpine","Amador","Butte","Calaveras","Colusa","Contra Costa","Del Norte","El Dorado","Fresno","Glenn","Humboldt","Imperial","Inyo","Kern","Kings","Lake","Lassen","Los Angeles","Madera","Marin","Mariposa","Mendocino","Merced","Modoc","Mono","Monterey","Napa","Nevada","Orange","Placer","Plumas","Riverside","Sacramento","San Benito","San Bernardino","San Diego","San Francisco","San Joaquin","San Luis Obispo","San Mateo","Santa Barbara","Santa Clara","Santa Cruz","Shasta","Sierra","Siskiyou","Solano","Sonoma","Stanislaus","Sutter","Tehama","Trinity","Tulare","Tuolumne","Ventura","Yolo","Yuba"];
		}else{
			var county = ["Anderson","Andrews","Angelina","Aransas","Austin","Bandera","Bell","Bexar","Bexar","Bosque","Brazoria","Brazos","Calhoun","Cameron","Chambers","Clay","Collin","Colorado","Comal","Cooke","Dallam","Dallas","Denton","Eastland","Ector","El Paso","Ellis","Fayette","Fort Bend","Galveston","Garza","Grayson","Gregg","Guadalupe","Harris","Harrison","Hays","Hidalgo","Hood","Hopkins","Hunt","Jefferson","Johnson","Kaufman","Kendall","Kerr","La Salle","Lamar","Liberty","Lubbock","Matagorda","Maverick","McLennan","Midland","Nacogdoches","Nueces","Orange","Panola","Parker","Pecos","Potter","Randall","Rockwall","Rusk","San Jacinto","San Saba","Smith","Somervell","Tarrant","Taylor","Titus","Tom Green","Travis","Upshur","Uvalde","Victoria","Walker","Waller","Washington","Wichita","Wilbarger","Williamson","Winkler","Wise"];
		}
		$.each(county, function(index, value) {
			    newHTML.push('<option value="'+ value +'">' + value + '</option>');
			});
		$('form[name="quoteRate"] select[name="propertyCounty"]').html(newHTML.join(""));
	});

	// MOBILE ADJUSTMENTS
	$('#show-mobile').click(function(e){
		e.preventDefault();
		$(this).parent().find('.menu').fadeToggle();
	});

	$('.instant-rate-widget .header-title').click(function (e){
		e.preventDefault();
		$(this).parent().find('form').fadeToggle();
	});

	// CUSTOM MAIN NAVIGATION MENU
	$('#desktop .menu-item-has-children').hover(
		function()
		{
			$(this).addClass('hovered');
		},
		function()
		{
			$(this).removeClass('hovered');
	});

	//SEMANTIC UI ELEMENTS
	$('.dropdown').dropdown();

	// SLIDER
	$('#slider, .test-slider').bxSlider(
	{
		mode: 'fade',
		adaptiveHeight: true,
		auto: true,
		pause: 6000
	});

	// Short Code Rates Tabs
	$('.tabs-list a').click(function(e){

		e.preventDefault();

		var getTab = $(this).attr('href');
		var parent = getTab.substr(0, 6);
		var list = '#list-' + getTab.substr(1, 5);

		$(list).find('li').removeClass('active');
		$(this).parent().addClass('active');

		$(parent).find('.tab-content').hide();
		$(getTab).fadeToggle();

	});

});

jQuery(function ($) {
            $("#btnPrint").click(function () {
                var contents = $("#dvContents").html();
                var frame1 = $('<iframe />');
                frame1[0].name = "frame1";
                frame1.css({ "position": "absolute", "top": "-1000000px" });
                $("body").append(frame1);
                var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
                frameDoc.document.open();
                //Create a new HTML document.
                frameDoc.document.write('<html><head><title>DIV Contents</title>');
                frameDoc.document.write('</head><body>');
                //Append the external CSS file.
                frameDoc.document.write('<link href="style.css" rel="stylesheet" type="text/css" />');
                //Append the DIV contents.
                frameDoc.document.write(contents);
                frameDoc.document.write('</body></html>');
                frameDoc.document.close();
                setTimeout(function () {
                    window.frames["frame1"].focus();
                    window.frames["frame1"].print();
                    frame1.remove();
                }, 500);
            });
        });