<link rel="stylesheet" href="/css/prefooter.css">
<link rel="stylesheet" href="/css/form.css">
<section class="content prefoot" role="prefooter" tabindex="-1">
	<div class="container text-center">
		<h2>Interested in PLC's Services?</h2>
		<p>&nbsp;</p>
		<div class="row">
			<input id="behavior" type="button" data-behavior="show" value="Yep, sure am" class="updateButton">
		</div>
	</div>
</section>
<section id="form" class="content form" role="questions" tabindex="-1">
	<div class="container text-center">
		<div class="formContainer row">
			<form id="showName" name="showName" method="get">
			<h2>What's your name?</h2>			
				<div class="col-md-6 text-right">
					<label for="name">First is fine</label>
				</div>
				<div class="col-md-6 text-left">
					<input type="text" name="name"></p>
				</div>
				<input type="submit" name="submitName" value="Proceed.." data-behavior="name" class="updateButton">
			</form>
			<div id="form_output" class="col-md-12 form-output"></div>
		</div>
	</div>
</section>