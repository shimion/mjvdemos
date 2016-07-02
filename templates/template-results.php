<?php

/*

Template Name: Result Page

*/

get_header();

?>



<?php

if ( have_posts() ) {

	while ( have_posts() ) {

		the_post();



		the_content();



	} // end while

} // end if

?>



            



<div id="main-content" ng-app="quoteSearch" class="quoteSearch">

        <?php if(get_field('select_menu_item_for_this_page')){ ?>

        <div class="responsive_home_button"><?php the_field('select_menu_item_for_this_page'); ?></div>

        <?php } ?>

        <?php if(get_field('mobile_content')){ ?>

        	<?php the_field('mobile_content'); ?>

          <?php } ?>  



	<div class="ui container">



		<h1>Instant Rates Quotes</h1>
		<p class="font_position desktop_show">For an official loan estimate, contact an Empire America mortgage banker at 866.411.3621</p>

		<p class="font_position mobile_show">For an official Loan Estimate contact us at <span>866.411.3621</span></p>



	  <div ui-view></div>



	</div>

	<!-- end container -->



</div><!-- #content -->



<?php get_footer(); ?>