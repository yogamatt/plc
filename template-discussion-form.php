<h2>Okay <?php echo $_GET['name']; ?> What can we help with?</h2>
<div class="plc-options-container">
	<form id="plc_option_form" name="plc-option-form" action="/discussion-form.php" method="get">
			<div class="col-md-12 text-center">
				<label for="name">Select</label>
				<select class="plc-options">
					<option value="New Websites">New Websites</option>
					<option value="Website Updates">Website Updates</option>
				</select>
			</div>
			<input type="submit" name="submitName" value="Proceed.." data-behavior="name" class="updateButton">
	</form>
</div>