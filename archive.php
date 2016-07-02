<?php get_header(); ?>
<div id="single-post">
	<div class="header">
		<h1>Archive</h1>
	</div>
	<!-- end header -->
	<div class="content">
		<div class="post-content">
			<div class="ui grid">
				<div class="twelve wide column">
					<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
						<article>
							<h2><?php the_title(); ?></h2>
							<p><?php echo get_the_date(); ?> | <?php comments_number('0 Comments', '1 Comment', '% Comments');?></p>
							<?php the_excerpt(); ?>
							<a href="<?php the_permalink();?>" class="ui green button another_line_on_button_fix">Read More</a>
						</article>
						<?php endwhile; else : ?>
							<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
						<?php endif; ?>
				</div>
				<div class="three wide column right floated left aligned sidebar_new_css">
					<?php get_sidebar(); ?>
				</div>
			</div>
		</div>
		<!-- post-content -->
	</div>
	<!-- end content -->
</div>
<?php get_footer(); ?>