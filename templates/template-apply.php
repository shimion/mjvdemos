<?php
/*
Template Name: Apply Now
*/
get_header();
?>


<div id="main-content" ng-app="applyForm" class="applyForm">

	<?php the_content(); ?>
	<div class="ui container">

	  <div ui-view></div>

	</div>
	<!-- end container -->

</div><!-- #content -->

<?php get_footer(); ?>