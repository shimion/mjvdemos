<?php get_header(); ?>
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div id="main-content">
			<?php the_content(); ?>
		</div>
		<div id="main-content" class="mobile-content" style="display:none;">
        <?php if(get_field('select_menu_item_for_this_page')){ ?>
        <div class="responsive_home_button"><?php the_field('select_menu_item_for_this_page'); ?></div>
        <?php } ?>
        <?php if(get_field('mobile_content')){ ?>
        	<?php the_field('mobile_content'); ?>
          <?php } ?>  
            
            
            
        </div>
		<!-- end main-content -->
	<?php endwhile; else: ?>
  <?php endif; ?>
<?php get_footer(); ?>