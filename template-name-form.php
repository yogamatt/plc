<h2>Okay <?php echo $_GET['name']; ?> What can we help with?</h2>
<div class="plc-options-container">
	<form id="plc_option_form" name="plc-option-form" method="get">
			<div class="col-md-12 text-center">
				<label for="name">Select:</label>
				<select name="plc-options" class="plc-options">
					<option value="new">New Websites</option>
					<option value="updates">Website Updates</option>
				</select>
			</div>
			<input type="submit" name="submitOption" value="Proceed.." data-behavior="name" class="updateButton">
	</form>
</div>