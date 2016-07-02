<!DOCTYPE html>

<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->

<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->

<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->

<!--[if gt IE 8]><!-->

<html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->

	<head>

		<title><?php wp_title( '|', true, 'right' ); ?></title>

		<!-- META TAGS -->

		<meta charset="<?php bloginfo( 'charset' ); ?>" />

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<meta name="viewport" content="width=device-width">

		<!-- LINK -->

		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

		<!-- Print only, on bottom -->

		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/print.css" mce_href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/print.css" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/print.css" mce_href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/print.css" media="print" />

        <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">



		<?php wp_head(); ?>

	</head>



	<body <?php body_class(); ?>>

		<header>

			<div id="top-content" class="ui grid container stackable">

				<div class="five wide column">

					<a id="top-logo" href="<?php echo site_url(); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/empire-web-logo.png" class="img-responsive" alt=""></a>

				</div>

				<div id="top-icons" class="eleven wide column mobile-hide">

				<span class="apply_icon"><i class="fa fa-pencil-square-o"></i> Apply</span> <strong>Online Now</strong>  |  <span class="call_us_hd_icon"><i class="fa fa-phone"></i> Call Us</span> <strong>866.411.3621</strong>

						</div>

					</div>

					<!-- end top-call-->

				</div>

			</div>

		</header>

		<!-- end header -->

		<nav id="top-navigation" class="mobile-hide">

			<div id="desktop" class="ui grid container">

				<?php wp_nav_menu( array( 'theme_location' => 'top-menu', 'container' => '' ) ); ?>

			</div>

			<div id="mobile">

				<ul>

					<li>

						<a id="show-mobile" href="#"><i class="sidebar icon"></i>Menu</a>

						<?php wp_nav_menu( array( 'theme_location' => 'top-menu', 'container' => '' ) ); ?>

					</li>

				</ul>

			</div>

		</nav>

		<?php if(is_page(67)){ ?>

		<div id="home-widget" class="ui container">

			<?php echo do_shortcode('[instant-rate][/instant-rate]'); ?>

		</div>

		<!-- end navigation -->

		<div id="slider" class="mobile-hide">

				<?php



				$args = array

				(

					'post_type'      => 'rate_slider',

					'posts_per_page' => 10,

					'orderby'        => 'menu_order',

					'order'          => 'DESC'

				);



				query_posts($args);



				while ( have_posts() ) : the_post();



				$slider_data = get_field('background');

			?>

			<div class="slide" style="background-image:url('<?php echo $slider_data["url"]; ?>');">



				<div class="dimmer">

					<div class="ui container">

						<div class="text">

							<h1><?php the_title(); ?></h1>

							<h2><?php the_field('sub_header'); ?></h2>

						</div>

					</div>

				</div>



			</div>

			<!-- end slide -->



			<?php endwhile;	wp_reset_query();?>

		</div>

		<?php } ?>

		<!-- end slider -->