<?php get_header(); ?>
<div id="single-post">
	<div class="header">
		<h1>Error 404</h1>
	</div>
	<!-- end header -->
	<div class="content">
		<div class="post-content center">
			<div class="ui grid">
				<div class="sixteen wide column">
					<h2>Page not found</h2>
					<p style="text-align:center;">The page that you are looking for doesn't exist.</p>
					<form method="GET" action="<?php echo site_url(); ?>/">
						<label class="screen-reader-text" for="s">Search for:</label>
						<input value="" name="s" id="s" type="text">
						<input id="searchsubmit" class="ui green button" value="Search" type="submit">
					</form>
				</div>
			</div>
		</div>
		<!-- post-content -->
	</div>
	<!-- end content -->
</div>
<?php get_footer(); ?>