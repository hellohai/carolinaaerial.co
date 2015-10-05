<!doctype html>
<html lang="en-US" prefix="og: http://ogp.me/ns#" class="no-js">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title></title>
		<meta name="description" content="">

		<meta name="robots" content="noindex,follow"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		
		<link rel="stylesheet" href="library/css/main.css" />

		<script src="library/js/min/modernizr.2.8.0-min.js"></script>

	</head>
	<body class="portfolio">

		<?php include('library/inc/header.php') ?>
		
		<section class="section section-internal-hero">
				<div class="internal-hero-content">
					<h1>Portfolio</h1>
				</div>
		</section>
		
		<section class="portfolio-container clearfix">
			<div class="controls">
				<label class="filter-trigger">Filter <i></i></label>
				<div class="filter-btn-container">
					<button class="filter btn-filter" data-filter="all">All</button>
					<button class="filter btn-filter" data-filter=".category-video">Video</button>
					<button class="filter btn-filter" data-filter=".category-chamber">Chamber of Commerce</button>
					<button class="filter btn-filter" data-filter=".category-realestate">Real Estate</button>
					<button class="filter btn-filter" data-filter=".category-events">Events</button>
					<button class="filter btn-filter" data-filter=".category-creative">Creative</button>
				</div>
			</div>
			<div id="Container" class="container">
				<a href="library/img/portfolio/edenton-full.jpg" class="js-fancybox mix category-events img-edenton" data-my-order="1" data-title="Edenton Bay">
					<button class="btn">View Project</button>
				</a>
				<a href="#" class="js-fancybox mix category-realestate img-red-hat" data-my-order="2" data-title="Red Hat Ampitheatre">
					<button class="btn">View Project</button>
				</a>
				<a href="#" class="js-fancybox mix category-chamber img-hicks" data-my-order="3" data-title="Hicks Landscaping">
					<button class="btn">View Project</button>
				</a>
				<a href="#" class="js-fancybox mix category-creative img-chitown" data-my-order="4" data-title="Chicago">
					<button class="btn">View Project</button>
				</a>
			</div>
		</section>



		<?php include('library/inc/footer.php') ?>
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script type="text/javascript" src="library/js/mix.js"></script>
		<script>
			$(document).ready(function() {
				$('#Container').mixItUp();
			});
		</script>
		<script type="text/javascript" src="library/js/min/main-min.js"></script>
	</body>
</html>