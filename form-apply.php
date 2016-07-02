<div id="apply-now-page">		

		<div id="content" class="wrapper clearfix">									

			<div id="steps">
				
				<ul>					
					<li id="step-1" class="step <?php get_step(1,$current_step); ?>"><a href="#1">Getting Started</a></li>
					<li id="step-2" class="step <?php get_step(2,$current_step); ?>"><a href="#2">Current Address</a></li>
					<li id="step-3" class="step <?php get_step(3,$current_step); ?>"><a href="#3">Subject Property</a></li>
					<li id="step-4" class="step <?php get_step(4,$current_step); ?>"><a href="#4">Employment</a></li>					
					<li id="step-5" class="step <?php get_step(5,$current_step); ?>"><a href="#5">Declarations - Part 1</a></li>					
					<li id="step-6" class="step <?php get_step(6,$current_step); ?>"><a href="#6">Declarations - Part 2</a></li>					
					<li id="step-7" class="step <?php get_step(7,$current_step); ?>"><a href="#7">Additional Information</a></li>
					<li id="step-8" class="step <?php get_step(8,$current_step); ?>"><a href="#8">Application Complete</a></li>
				</ul>						

			</div>
			<!-- End Steps -->

			<div id="questions" class="clearfix">
				
				<form id="form-apply" action="<?php bloginfo('stylesheet_directory'); ?>/library/apply-now-handler.php" method="POST">

					<?php if($_SESSION['user']['LoggedIn'] == 1) { ?>


						<div class="user-info">
							Welcome <?php echo $_SESSION['form']['FirstName'] . ' ' . $_SESSION['form']['LastName']; ?> 
							<a id="logout" href="<?php bloginfo('stylesheet_directory'); ?>/library/logout.php?url=<?php echo get_permalink(25); ?>">[ Logout ]</a>
						</div>

					<?php } ?>


					<div id="errormsg"></div>

					<div id="client-info" class="<?php if($_SESSION['user']['LoggedIn'] == 0 ){ echo 'hide'; }?>">User ID: <?php echo $_SESSION['user']['ID']; ?></div>									

					<div id="question-1" class="question <?php get_step(1,$current_step); ?>">
						
						<div class="header">
							
							<span>Getting Started</span>

						</div>
						<!-- End Header -->

						<div class="content">
							
							<p>
								Welcome to our secure online loan application. Simply complete the questions on the following pages to the best of your knowledge and you will be on the way to pre-approval for your financing request.
							</p>
 
							<p>
								For assistance in completing your form, an Empire America mortgage consultant is available to assist you Monday-Friday 9:00AM-5:00PM PST by calling 866-411-3621.
							</p>

						</div>

						<div class="question-wrapper">
						
							<div class="answers">
								
								<div class="row clearfix">
									
									<label>First Name:</label>

									<input type="text" class="required" name="FirstName" value="<?php echo $_SESSION['form']['FirstName']; ?>" />

								</div>
								<!-- end row -->

								<div class="row clearfix">
									
									<label>Last Name:</label>

									<input type="text" class="required" name="LastName" value="<?php echo $_SESSION['form']['LastName']; ?>" />

								</div>
								<!-- end row -->

								<div class="row clearfix">
									
									<label>Home Phone Number:</label>

									<input id="HomePhoneNumber" type="text" class="phone-group phone" name="HomePhoneNumber" pattern=".{14}" value="<?php echo $_SESSION['form']['HomePhoneNumber']; ?>" />

								</div>
								<!-- end row -->

								<div class="row clearfix">
									
									<label>Cell Phone Number:</label>

									<input id="CellPhoneNumber" type="text" class="phone-group phone" name="CellPhoneNumber" pattern=".{14}" value="<?php echo $_SESSION['form']['CellPhoneNumber']; ?>" />

								</div>
								<!-- end row -->

								<div class="row clearfix">
									
									<label>Business Phone Number:</label>

									<input id="BusinessPhoneNumber" type="text" class="phone-group phone" name="BusinessPhoneNumber" pattern=".{14}" value="<?php echo $_SESSION['form']['BusinessPhoneNumber']; ?>" />

								</div>
								<!-- end row -->								


								<div class="row clearfix">
									<label>Email:</label>
									<input type="text" name="Email" class="email required" value="<?php echo $_SESSION['form']['Email']; ?>" />
								</div>
								<!-- end row -->																	

							</div>
							<!-- end answers-->

						</div>
						<!-- end Question Wrapper -->

						<div class="question-wrapper">
							
							<div class="question-header">
								
								<span>Do you want to finance the purchase of a home or refinance an existing loan? </span>

							</div>
							<!-- question header -->

							<div class="answers">
							
								<div class="row labeled">

									<label><input type="radio" name="FinanceType" value="Refinance" class="required" <?php if($_SESSION['form']['FinanceType'] == 'Refinance'){ echo 'checked'; }?>/>Refinance</label>

								</div>		
								<!-- row -->								

								<div class="row labeled">

									<label><input type="radio" name="FinanceType" value="Purchase"  <?php if($_SESSION['form']['FinanceType'] == 'Purchase'){ echo 'checked'; }?>/>Purchase</label>

								</div>
								<!-- end row -->

							</div>
							<!-- end answers -->

						</div>
						<!-- question-wrapper -->						

						<input type="hidden" name="question" value="1" />

					</div>
					<!-- question-2 -->

					<div id="question-2" class="question <?php get_step(2,$current_step); ?>">

						<div class="header">
							
							<span>Current Residence Address</span>

						</div>
						<!-- End Header -->

						<div class="question-wrapper">

							<div class="answers">
								
								<div class="row clearfix">
									
									<label>Street Address:</label>
									<input type="text" class="required" name="CurrentStreetAddress" value="<?php echo $_SESSION['form']['CurrentStreetAddress']; ?>" />


								</div>
								<!-- row -->

								<div class="row clearfix">
									
									<label>City:</label>
									<input type="text" class="required" name="CurrentCity" value="<?php echo $_SESSION['form']['CurrentCity']; ?>" />

								</div>
								<!-- row -->

								<div class="row clearfix">
									
									<label>State:</label>
									<select class="required" name="CurrentState">
										<option value="" selected>Select State</option>		
										<option value="AL" <?php if($_SESSION['form']['CurrentState'] == 'AL'){ echo 'selected'; }?>>Alabama</option>
										<option value="AK" <?php if($_SESSION['form']['CurrentState'] == 'AK'){ echo 'selected'; }?>>Alaska</option>
										<option value="AZ" <?php if($_SESSION['form']['CurrentState'] == 'AZ'){ echo 'selected'; }?>>Arizona</option>
										<option value="AR" <?php if($_SESSION['form']['CurrentState'] == 'AR'){ echo 'selected'; }?>>Arkansas</option>
										<option value="CA" <?php if($_SESSION['form']['CurrentState'] == 'CA'){ echo 'selected'; }?>>California</option>
										<option value="CO" <?php if($_SESSION['form']['CurrentState'] == 'CO'){ echo 'selected'; }?>>Colorado</option>
										<option value="CT" <?php if($_SESSION['form']['CurrentState'] == 'CT'){ echo 'selected'; }?>>Connecticut</option>
										<option value="DE" <?php if($_SESSION['form']['CurrentState'] == 'DE'){ echo 'selected'; }?>>Delaware</option>
										<option value="DC" <?php if($_SESSION['form']['CurrentState'] == 'DC'){ echo 'selected'; }?>>District of Columbia</option>
										<option value="FL" <?php if($_SESSION['form']['CurrentState'] == 'FL'){ echo 'selected'; }?>>Florida</option>
										<option value="GA" <?php if($_SESSION['form']['CurrentState'] == 'GA'){ echo 'selected'; }?>>Georgia</option>
										<option value="HI" <?php if($_SESSION['form']['CurrentState'] == 'HI'){ echo 'selected'; }?>>Hawaii</option>
										<option value="ID" <?php if($_SESSION['form']['CurrentState'] == 'ID'){ echo 'selected'; }?>>Idaho</option>
										<option value="IL" <?php if($_SESSION['form']['CurrentState'] == 'IL'){ echo 'selected'; }?>>Illinois</option>
										<option value="IN" <?php if($_SESSION['form']['CurrentState'] == 'IN'){ echo 'selected'; }?>>Indiana</option>
										<option value="IA" <?php if($_SESSION['form']['CurrentState'] == 'IA'){ echo 'selected'; }?>>Iowa</option>
										<option value="KS" <?php if($_SESSION['form']['CurrentState'] == 'KS'){ echo 'selected'; }?>>Kansas</option>
										<option value="KY" <?php if($_SESSION['form']['CurrentState'] == 'KY'){ echo 'selected'; }?>>Kentucky</option>
										<option value="LA" <?php if($_SESSION['form']['CurrentState'] == 'LA'){ echo 'selected'; }?>>Louisiana</option>
										<option value="ME" <?php if($_SESSION['form']['CurrentState'] == 'ME'){ echo 'selected'; }?>>Maine</option>
										<option value="MD" <?php if($_SESSION['form']['CurrentState'] == 'MD'){ echo 'selected'; }?>>Maryland</option>
										<option value="MA" <?php if($_SESSION['form']['CurrentState'] == 'MA'){ echo 'selected'; }?>>Massachusetts</option>
										<option value="MI" <?php if($_SESSION['form']['CurrentState'] == 'MI'){ echo 'selected'; }?>>Michigan</option>
										<option value="MN" <?php if($_SESSION['form']['CurrentState'] == 'MN'){ echo 'selected'; }?>>Minnesota</option>
										<option value="MS" <?php if($_SESSION['form']['CurrentState'] == 'MS'){ echo 'selected'; }?>>Mississippi</option>
										<option value="MO" <?php if($_SESSION['form']['CurrentState'] == 'MO'){ echo 'selected'; }?>>Missouri</option>
										<option value="MT" <?php if($_SESSION['form']['CurrentState'] == 'MT'){ echo 'selected'; }?>>Montana</option>
										<option value="NE" <?php if($_SESSION['form']['CurrentState'] == 'NE'){ echo 'selected'; }?>>Nebraska</option>
										<option value="NV" <?php if($_SESSION['form']['CurrentState'] == 'NV'){ echo 'selected'; }?>>Nevada</option>
										<option value="NH" <?php if($_SESSION['form']['CurrentState'] == 'NH'){ echo 'selected'; }?>>New Hampshire</option>
										<option value="NJ" <?php if($_SESSION['form']['CurrentState'] == 'NJ'){ echo 'selected'; }?>>New Jersey</option>
										<option value="NM" <?php if($_SESSION['form']['CurrentState'] == 'NM'){ echo 'selected'; }?>>New Mexico</option>
										<option value="NY" <?php if($_SESSION['form']['CurrentState'] == 'NY'){ echo 'selected'; }?>>New York</option>
										<option value="NC" <?php if($_SESSION['form']['CurrentState'] == 'NC'){ echo 'selected'; }?>>North Carolina</option>
										<option value="ND" <?php if($_SESSION['form']['CurrentState'] == 'ND'){ echo 'selected'; }?>>North Dakota</option>
										<option value="OH" <?php if($_SESSION['form']['CurrentState'] == 'OH'){ echo 'selected'; }?>>Ohio</option>
										<option value="OK" <?php if($_SESSION['form']['CurrentState'] == 'OK'){ echo 'selected'; }?>>Oklahoma</option>
										<option value="OR" <?php if($_SESSION['form']['CurrentState'] == 'OR'){ echo 'selected'; }?>>Oregon</option>
										<option value="PA" <?php if($_SESSION['form']['CurrentState'] == 'PA'){ echo 'selected'; }?>>Pennsylvania</option>
										<option value="RI" <?php if($_SESSION['form']['CurrentState'] == 'RI'){ echo 'selected'; }?>>Rhode Island</option>
										<option value="SC" <?php if($_SESSION['form']['CurrentState'] == 'SC'){ echo 'selected'; }?>>South Carolina</option>
										<option value="SD" <?php if($_SESSION['form']['CurrentState'] == 'SD'){ echo 'selected'; }?>>South Dakota</option>
										<option value="TN" <?php if($_SESSION['form']['CurrentState'] == 'TN'){ echo 'selected'; }?>>Tennessee</option>
										<option value="TX" <?php if($_SESSION['form']['CurrentState'] == 'TX'){ echo 'selected'; }?>>Texas</option>
										<option value="UT" <?php if($_SESSION['form']['CurrentState'] == 'UT'){ echo 'selected'; }?>>Utah</option>
										<option value="VT" <?php if($_SESSION['form']['CurrentState'] == 'VT'){ echo 'selected'; }?>>Vermont</option>
										<option value="VA" <?php if($_SESSION['form']['CurrentState'] == 'VA'){ echo 'selected'; }?>>Virginia</option>
										<option value="WA" <?php if($_SESSION['form']['CurrentState'] == 'WA'){ echo 'selected'; }?>>Washington</option>
										<option value="WV" <?php if($_SESSION['form']['CurrentState'] == 'WV'){ echo 'selected'; }?>>West Virginia</option>
										<option value="WI" <?php if($_SESSION['form']['CurrentState'] == 'WI'){ echo 'selected'; }?>>Wisconsin</option>
										<option value="WY" <?php if($_SESSION['form']['CurrentState'] == 'WY'){ echo 'selected'; }?>>Wyoming</option>								
									</select>								

								</div>
								<!-- row -->

								<div class="row clearfix">
									
									<label>Zip Code:</label>
									<input type="text" class="required zipcode" name="CurrentZipCode" value="<?php echo $_SESSION['form']['CurrentZipCode']; ?>" />

								</div>
								<!-- row -->														

								<div class="row clearfix">
									<label>How many years have you owned/rented this property ?</label>
									<select class="required" name="PropOwnedRent">
										<option value="">- Select Option</option>
										<?php 
										for($i = 1; $i < 31; $i++){

											if($i==1){ $label = ' year'; }else{ $label = ' years';}																						

											if($_SESSION['form']['PropOwnedRent'] == $i ){$status = 'selected';}else{$status = '';}

											echo '<option value="'.$i.'" '.$status.'>'. $i . $label.'</option>';

										} ?>
									</select>									
								</div>
								<!-- end row -->

								<div id="PropertyBeingRefinanced" class="row clearfix <?php if($_SESSION['form']['FinanceType'] != 'Refinance'){ echo 'disabled'; } ?>">
									
									<label>Is this the property being refinanced ?</label>
									
									<div class="right clearfix">
										<label><input type="radio" name="PropertyBeingRefinanced" value="Y" <?php if($_SESSION['form']['PropertyBeingRefinanced'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
										<label><input type="radio" name="PropertyBeingRefinanced" value="N" <?php if($_SESSION['form']['PropertyBeingRefinanced'] == 'N'){ echo 'checked'; }?>/>No</label>
									</div>

								</div>														

							</div>
							<!-- end answers -->

						</div>
						<!-- End question-wrapper -->

						<div id="PropOwnedRent" class="<?php if($_SESSION['form']['PropOwnedRent'] > 1 || empty($_SESSION['form']['PropOwnedRent']) ){ echo 'disabled'; }?>">
							
							<div class="header">
							
								<span>Previous Residence Address</span>

							</div>
							<!-- End Header -->

							<div class="question-wrapper">

							<div class="answers">
								
								<div class="row clearfix">
									
									<label>Street Address:</label>
									<input type="text" class="required" name="PrevStreetAddress" value="<?php echo $_SESSION['form']['PrevStreetAddress']; ?>" />


								</div>
								<!-- row -->

								<div class="row clearfix">
									
									<label>City:</label>
									<input type="text" class="required" name="PreviousCity" value="<?php echo $_SESSION['form']['PreviousCity']; ?>" />

								</div>
								<!-- row -->

								<div class="row clearfix">
									
									<label>State:</label>
									<select class="required" name="PrevState">										
										<option value="" selected>Select State</option>		
										<option value="AL" <?php if($_SESSION['form']['PrevState'] == 'AL'){ echo 'selected'; }?>>Alabama</option>
										<option value="AK" <?php if($_SESSION['form']['PrevState'] == 'AK'){ echo 'selected'; }?>>Alaska</option>
										<option value="AZ" <?php if($_SESSION['form']['PrevState'] == 'AZ'){ echo 'selected'; }?>>Arizona</option>
										<option value="AR" <?php if($_SESSION['form']['PrevState'] == 'AR'){ echo 'selected'; }?>>Arkansas</option>
										<option value="CA" <?php if($_SESSION['form']['PrevState'] == 'CA'){ echo 'selected'; }?>>California</option>
										<option value="CO" <?php if($_SESSION['form']['PrevState'] == 'CO'){ echo 'selected'; }?>>Colorado</option>
										<option value="CT" <?php if($_SESSION['form']['PrevState'] == 'CT'){ echo 'selected'; }?>>Connecticut</option>
										<option value="DE" <?php if($_SESSION['form']['PrevState'] == 'DE'){ echo 'selected'; }?>>Delaware</option>
										<option value="DC" <?php if($_SESSION['form']['PrevState'] == 'DC'){ echo 'selected'; }?>>District of Columbia</option>
										<option value="FL" <?php if($_SESSION['form']['PrevState'] == 'FL'){ echo 'selected'; }?>>Florida</option>
										<option value="GA" <?php if($_SESSION['form']['PrevState'] == 'GA'){ echo 'selected'; }?>>Georgia</option>
										<option value="HI" <?php if($_SESSION['form']['PrevState'] == 'HI'){ echo 'selected'; }?>>Hawaii</option>
										<option value="ID" <?php if($_SESSION['form']['PrevState'] == 'ID'){ echo 'selected'; }?>>Idaho</option>
										<option value="IL" <?php if($_SESSION['form']['PrevState'] == 'IL'){ echo 'selected'; }?>>Illinois</option>
										<option value="IN" <?php if($_SESSION['form']['PrevState'] == 'IN'){ echo 'selected'; }?>>Indiana</option>
										<option value="IA" <?php if($_SESSION['form']['PrevState'] == 'IA'){ echo 'selected'; }?>>Iowa</option>
										<option value="KS" <?php if($_SESSION['form']['PrevState'] == 'KS'){ echo 'selected'; }?>>Kansas</option>
										<option value="KY" <?php if($_SESSION['form']['PrevState'] == 'KY'){ echo 'selected'; }?>>Kentucky</option>
										<option value="LA" <?php if($_SESSION['form']['PrevState'] == 'LA'){ echo 'selected'; }?>>Louisiana</option>
										<option value="ME" <?php if($_SESSION['form']['PrevState'] == 'ME'){ echo 'selected'; }?>>Maine</option>
										<option value="MD" <?php if($_SESSION['form']['PrevState'] == 'MD'){ echo 'selected'; }?>>Maryland</option>
										<option value="MA" <?php if($_SESSION['form']['PrevState'] == 'MA'){ echo 'selected'; }?>>Massachusetts</option>
										<option value="MI" <?php if($_SESSION['form']['PrevState'] == 'MI'){ echo 'selected'; }?>>Michigan</option>
										<option value="MN" <?php if($_SESSION['form']['PrevState'] == 'MN'){ echo 'selected'; }?>>Minnesota</option>
										<option value="MS" <?php if($_SESSION['form']['PrevState'] == 'MS'){ echo 'selected'; }?>>Mississippi</option>
										<option value="MO" <?php if($_SESSION['form']['PrevState'] == 'MO'){ echo 'selected'; }?>>Missouri</option>
										<option value="MT" <?php if($_SESSION['form']['PrevState'] == 'MT'){ echo 'selected'; }?>>Montana</option>
										<option value="NE" <?php if($_SESSION['form']['PrevState'] == 'NE'){ echo 'selected'; }?>>Nebraska</option>
										<option value="NV" <?php if($_SESSION['form']['PrevState'] == 'NV'){ echo 'selected'; }?>>Nevada</option>
										<option value="NH" <?php if($_SESSION['form']['PrevState'] == 'NH'){ echo 'selected'; }?>>New Hampshire</option>
										<option value="NJ" <?php if($_SESSION['form']['PrevState'] == 'NJ'){ echo 'selected'; }?>>New Jersey</option>
										<option value="NM" <?php if($_SESSION['form']['PrevState'] == 'NM'){ echo 'selected'; }?>>New Mexico</option>
										<option value="NY" <?php if($_SESSION['form']['PrevState'] == 'NY'){ echo 'selected'; }?>>New York</option>
										<option value="NC" <?php if($_SESSION['form']['PrevState'] == 'NC'){ echo 'selected'; }?>>North Carolina</option>
										<option value="ND" <?php if($_SESSION['form']['PrevState'] == 'ND'){ echo 'selected'; }?>>North Dakota</option>
										<option value="OH" <?php if($_SESSION['form']['PrevState'] == 'OH'){ echo 'selected'; }?>>Ohio</option>
										<option value="OK" <?php if($_SESSION['form']['PrevState'] == 'OK'){ echo 'selected'; }?>>Oklahoma</option>
										<option value="OR" <?php if($_SESSION['form']['PrevState'] == 'OR'){ echo 'selected'; }?>>Oregon</option>
										<option value="PA" <?php if($_SESSION['form']['PrevState'] == 'PA'){ echo 'selected'; }?>>Pennsylvania</option>
										<option value="RI" <?php if($_SESSION['form']['PrevState'] == 'RI'){ echo 'selected'; }?>>Rhode Island</option>
										<option value="SC" <?php if($_SESSION['form']['PrevState'] == 'SC'){ echo 'selected'; }?>>South Carolina</option>
										<option value="SD" <?php if($_SESSION['form']['PrevState'] == 'SD'){ echo 'selected'; }?>>South Dakota</option>
										<option value="TN" <?php if($_SESSION['form']['PrevState'] == 'TN'){ echo 'selected'; }?>>Tennessee</option>
										<option value="TX" <?php if($_SESSION['form']['PrevState'] == 'TX'){ echo 'selected'; }?>>Texas</option>
										<option value="UT" <?php if($_SESSION['form']['PrevState'] == 'UT'){ echo 'selected'; }?>>Utah</option>
										<option value="VT" <?php if($_SESSION['form']['PrevState'] == 'VT'){ echo 'selected'; }?>>Vermont</option>
										<option value="VA" <?php if($_SESSION['form']['PrevState'] == 'VA'){ echo 'selected'; }?>>Virginia</option>
										<option value="WA" <?php if($_SESSION['form']['PrevState'] == 'WA'){ echo 'selected'; }?>>Washington</option>
										<option value="WV" <?php if($_SESSION['form']['PrevState'] == 'WV'){ echo 'selected'; }?>>West Virginia</option>
										<option value="WI" <?php if($_SESSION['form']['PrevState'] == 'WI'){ echo 'selected'; }?>>Wisconsin</option>
										<option value="WY" <?php if($_SESSION['form']['PrevState'] == 'WY'){ echo 'selected'; }?>>Wyoming</option>									
									</select>								

								</div>
								<!-- row -->

								<div class="row clearfix">
									
									<label>Zip Code:</label>
									<input type="text" class="required zipcode" name="PrevZipCode" value="<?php echo $_SESSION['form']['PrevZipCode']; ?>" />

								</div>
								<!-- row -->							

								<div class="row clearfix">
									<label>How many years did you own/rent this property ?</label>
									<select class="required" name="PrevPropOwnedRent">
										<option value="">- Select Option</option>
										<?php 
										for($i = 1; $i < 31; $i++){

											if($i==1){ $label = ' year'; }else{ $label = ' years';}																						

											if($_SESSION['form']['PrevPropOwnedRent'] == $i ){$status = 'selected';}else{$status = '';}

											echo '<option value="'.$i.'" '.$status.'>'. $i . $label.'</option>';

										} ?>
									</select>									
								</div>
								<!-- end row -->

							</div>
							<!-- end answers -->

						</div>
						<!-- End question-wrapper -->

						</div>
						<!-- End PrepOwned -->

						<input type="hidden" name="question" value="2" />

					</div>
					<!-- end question -->

					<div id="question-3" class="question <?php get_step(3,$current_step); ?>">
						
						<div class="header">
							
							<span>Subject Property</span>

						</div>
						<!-- End Header -->

						<div class="question-wrapper">

							<div class="answers">
								
								<div id="FinanceType-3" class="row clearfix <?php if($_SESSION['form']['FinanceType'] == 'Refinance'){ echo 'disabled'; }?>">
									<label>To Be Determined</label>
									<input type="checkbox" name="TBD" <?php if($_SESSION['form']['PropRefStreetAddress'] == 'TBD'){ echo 'checked'; }?>/>
								</div>
								<!-- end row -->									

								<div id="TBD" class="<?php if($_SESSION['form']['PropRefStreetAddress'] == 'TBD' && $_SESSION['form']['FinanceType'] == 'Purchase' ){ echo 'disabled'; }?>">

									<div class="row clearfix">
										<label>Street Address:</label>
										<input type="text" class="required" name="PropRefStreetAddress" value="<?php echo $_SESSION['form']['PropRefStreetAddress']; ?>" />
									</div>
									<!-- end row -->

									<div class="row clearfix">
										<label>City:</label>
										<input type="text" class="required" name="PropRefCity" value="<?php echo $_SESSION['form']['PropRefCity']; ?>" />
									</div>
									<!-- end row -->

									<div class="row clearfix">
										<label>State:</label>
										<select class="required" name="PropRefState">
											<option value="" selected>Select State</option>		
											<option value="AL" <?php if($_SESSION['form']['PropRefState'] == 'AL'){ echo 'selected'; }?>>Alabama</option>
											<option value="AK" <?php if($_SESSION['form']['PropRefState'] == 'AK'){ echo 'selected'; }?>>Alaska</option>
											<option value="AZ" <?php if($_SESSION['form']['PropRefState'] == 'AZ'){ echo 'selected'; }?>>Arizona</option>
											<option value="AR" <?php if($_SESSION['form']['PropRefState'] == 'AR'){ echo 'selected'; }?>>Arkansas</option>
											<option value="CA" <?php if($_SESSION['form']['PropRefState'] == 'CA'){ echo 'selected'; }?>>California</option>
											<option value="CO" <?php if($_SESSION['form']['PropRefState'] == 'CO'){ echo 'selected'; }?>>Colorado</option>
											<option value="CT" <?php if($_SESSION['form']['PropRefState'] == 'CT'){ echo 'selected'; }?>>Connecticut</option>
											<option value="DE" <?php if($_SESSION['form']['PropRefState'] == 'DE'){ echo 'selected'; }?>>Delaware</option>
											<option value="DC" <?php if($_SESSION['form']['PropRefState'] == 'DC'){ echo 'selected'; }?>>District of Columbia</option>
											<option value="FL" <?php if($_SESSION['form']['PropRefState'] == 'FL'){ echo 'selected'; }?>>Florida</option>
											<option value="GA" <?php if($_SESSION['form']['PropRefState'] == 'GA'){ echo 'selected'; }?>>Georgia</option>
											<option value="HI" <?php if($_SESSION['form']['PropRefState'] == 'HI'){ echo 'selected'; }?>>Hawaii</option>
											<option value="ID" <?php if($_SESSION['form']['PropRefState'] == 'ID'){ echo 'selected'; }?>>Idaho</option>
											<option value="IL" <?php if($_SESSION['form']['PropRefState'] == 'IL'){ echo 'selected'; }?>>Illinois</option>
											<option value="IN" <?php if($_SESSION['form']['PropRefState'] == 'IN'){ echo 'selected'; }?>>Indiana</option>
											<option value="IA" <?php if($_SESSION['form']['PropRefState'] == 'IA'){ echo 'selected'; }?>>Iowa</option>
											<option value="KS" <?php if($_SESSION['form']['PropRefState'] == 'KS'){ echo 'selected'; }?>>Kansas</option>
											<option value="KY" <?php if($_SESSION['form']['PropRefState'] == 'KY'){ echo 'selected'; }?>>Kentucky</option>
											<option value="LA" <?php if($_SESSION['form']['PropRefState'] == 'LA'){ echo 'selected'; }?>>Louisiana</option>
											<option value="ME" <?php if($_SESSION['form']['PropRefState'] == 'ME'){ echo 'selected'; }?>>Maine</option>
											<option value="MD" <?php if($_SESSION['form']['PropRefState'] == 'MD'){ echo 'selected'; }?>>Maryland</option>
											<option value="MA" <?php if($_SESSION['form']['PropRefState'] == 'MA'){ echo 'selected'; }?>>Massachusetts</option>
											<option value="MI" <?php if($_SESSION['form']['PropRefState'] == 'MI'){ echo 'selected'; }?>>Michigan</option>
											<option value="MN" <?php if($_SESSION['form']['PropRefState'] == 'MN'){ echo 'selected'; }?>>Minnesota</option>
											<option value="MS" <?php if($_SESSION['form']['PropRefState'] == 'MS'){ echo 'selected'; }?>>Mississippi</option>
											<option value="MO" <?php if($_SESSION['form']['PropRefState'] == 'MO'){ echo 'selected'; }?>>Missouri</option>
											<option value="MT" <?php if($_SESSION['form']['PropRefState'] == 'MT'){ echo 'selected'; }?>>Montana</option>
											<option value="NE" <?php if($_SESSION['form']['PropRefState'] == 'NE'){ echo 'selected'; }?>>Nebraska</option>
											<option value="NV" <?php if($_SESSION['form']['PropRefState'] == 'NV'){ echo 'selected'; }?>>Nevada</option>
											<option value="NH" <?php if($_SESSION['form']['PropRefState'] == 'NH'){ echo 'selected'; }?>>New Hampshire</option>
											<option value="NJ" <?php if($_SESSION['form']['PropRefState'] == 'NJ'){ echo 'selected'; }?>>New Jersey</option>
											<option value="NM" <?php if($_SESSION['form']['PropRefState'] == 'NM'){ echo 'selected'; }?>>New Mexico</option>
											<option value="NY" <?php if($_SESSION['form']['PropRefState'] == 'NY'){ echo 'selected'; }?>>New York</option>
											<option value="NC" <?php if($_SESSION['form']['PropRefState'] == 'NC'){ echo 'selected'; }?>>North Carolina</option>
											<option value="ND" <?php if($_SESSION['form']['PropRefState'] == 'ND'){ echo 'selected'; }?>>North Dakota</option>
											<option value="OH" <?php if($_SESSION['form']['PropRefState'] == 'OH'){ echo 'selected'; }?>>Ohio</option>
											<option value="OK" <?php if($_SESSION['form']['PropRefState'] == 'OK'){ echo 'selected'; }?>>Oklahoma</option>
											<option value="OR" <?php if($_SESSION['form']['PropRefState'] == 'OR'){ echo 'selected'; }?>>Oregon</option>
											<option value="PA" <?php if($_SESSION['form']['PropRefState'] == 'PA'){ echo 'selected'; }?>>Pennsylvania</option>
											<option value="RI" <?php if($_SESSION['form']['PropRefState'] == 'RI'){ echo 'selected'; }?>>Rhode Island</option>
											<option value="SC" <?php if($_SESSION['form']['PropRefState'] == 'SC'){ echo 'selected'; }?>>South Carolina</option>
											<option value="SD" <?php if($_SESSION['form']['PropRefState'] == 'SD'){ echo 'selected'; }?>>South Dakota</option>
											<option value="TN" <?php if($_SESSION['form']['PropRefState'] == 'TN'){ echo 'selected'; }?>>Tennessee</option>
											<option value="TX" <?php if($_SESSION['form']['PropRefState'] == 'TX'){ echo 'selected'; }?>>Texas</option>
											<option value="UT" <?php if($_SESSION['form']['PropRefState'] == 'UT'){ echo 'selected'; }?>>Utah</option>
											<option value="VT" <?php if($_SESSION['form']['PropRefState'] == 'VT'){ echo 'selected'; }?>>Vermont</option>
											<option value="VA" <?php if($_SESSION['form']['PropRefState'] == 'VA'){ echo 'selected'; }?>>Virginia</option>
											<option value="WA" <?php if($_SESSION['form']['PropRefState'] == 'WA'){ echo 'selected'; }?>>Washington</option>
											<option value="WV" <?php if($_SESSION['form']['PropRefState'] == 'WV'){ echo 'selected'; }?>>West Virginia</option>
											<option value="WI" <?php if($_SESSION['form']['PropRefState'] == 'WI'){ echo 'selected'; }?>>Wisconsin</option>
											<option value="WY" <?php if($_SESSION['form']['PropRefState'] == 'WY'){ echo 'selected'; }?>>Wyoming</option>						
										</select>
									</div>
									<!-- end row -->

									<div class="row clearfix">
										<label>Zip Code:</label>
										<input type="text" class="required zipcode" name="PropRefZipCode" value="<?php echo $_SESSION['form']['PropRefZipCode']; ?>" />
									</div>
									<!-- end row -->																															

								</div>							
								<!-- END TBD -->			

								<div id="FinanceType-2" class="<?php if($_SESSION['form']['FinanceType'] == 'Refinance'){ echo 'disabled'; } ?>">
									<div class="row clearfix">
										<label>Estimated Loan Amount:</label>
										<input type="text" class="required money" name="PurchaseLoanAmount" value="<?php echo $_SESSION['form']['PurchaseLoanAmount']; ?>" />
									</div>
									<!-- end row -->
								</div>
								<!-- Finance Type End -->		

								<div id="FinanceType-4" class="<?php if($_SESSION['form']['FinanceType'] == 'Purchase'){ echo 'disabled'; }?>">
									<div class="row clearfix">
										<label>Home Estimated Value:</label>
										<input type="text" class="required money" name="RefEstimatedValue" value="<?php echo $_SESSION['form']['RefEstimatedValue']; ?>" />
									</div>
									<!-- end row -->									
								</div>	

								<div id="FinanceType" class="<?php if($_SESSION['form']['FinanceType'] != 'Refinance'){ echo 'disabled'; } ?>">
							
									<div class="row clearfix">										
										<label>Loan Amount for Refinance</label>											
										<input type="text" name="LoanAmount" class="required money" value="<?php echo $_SESSION['form']['LoanAmount']; ?>" />										
									</div>
									<!-- end row -->

								</div>
								<!-- question-wrapper -->

								<div id="FinanceType-5" class="<?php if($_SESSION['form']['FinanceType'] == 'Refinance'){ echo 'disabled'; }?>">
								
									<div class="row clearfix">
										<label>Estimated Purchase Price:</label>
										<input type="text" class="required money" name="EstimatedPurchaseVal" value="<?php echo $_SESSION['form']['EstimatedPurchaseVal']; ?>" />
									</div>
									<!-- end row -->

								</div>				

							</div>
							<!-- END answers -->

						</div>
						<!-- End question-wrapper -->

						<input type="hidden" name="question" value="3" />

					</div>

					<!-- end question -->

					<div id="question-4" class="question <?php get_step(4,$current_step); ?>">
						
						<div class="header">
							
							<span>Employment</span>

						</div>
						<!-- End Header -->

						<div class="question-wrapper">							

							<div class="answers">														

								<div class="row clearfix">
									<label>Are you Self Employed ?</label>
									<select name="SelfEmployed" class="required">
										<option value="">Please Select Answer</option>
										<option value="Y" <?php if($_SESSION['form']['SelfEmployed'] == 'Y'){ echo 'selected'; }?>>Yes</option>
										<option value="N" <?php if($_SESSION['form']['SelfEmployed'] == 'N'){ echo 'selected'; }?>>No</option>
									</select>
								</div>
								<!-- row -->

								<div id="SelfEmployed" class="row clearfix <?php if($_SESSION['form']['SelfEmployed'] == 'Y' || empty($_SESSION['form']['SelfEmployed'])){ echo 'disabled'; }?>">
									<label>Employer Name:</label>
									<input type="text" name="EmployerName" class="required" value="<?php echo $_SESSION['form']['EmployerName']; ?>" />
								</div>
								<!-- End Row-->										

								<div id="SelfEmployed-2" class="row clearfix <?php if($_SESSION['form']['SelfEmployed'] == 'N' || empty($_SESSION['form']['SelfEmployed'])){ echo 'disabled'; }?>">
									<label>Company Name:</label>
									<input type="text" name="EmployerName" class="required" value="<?php echo $_SESSION['form']['EmployerName']; ?>" />
								</div>
								<!-- End Row-->		

								<div class="row clearfix">
									<label>Position/Title:</label>
									<input type="text" name="PositionTitle" class="required" value="<?php echo $_SESSION['form']['PositionTitle']; ?>" />
								</div>
								<!-- End Row-->

								<div class="row clearfix">
									<label>Length of employment:</label>									
									<select class="required" name="LengthofEmployment">
										<option value="">- Select Option</option>
										<?php 
										for($i = 1; $i < 31; $i++){

											if($i==1){ $label = ' year'; }else{ $label = ' years';}																						

											if($_SESSION['form']['LengthofEmployment'] == $i ){$status = 'selected';}else{$status = '';}

											echo '<option value="'.$i.'" '.$status.'>'. $i . $label.'</option>';

										} ?>
									</select>		
								</div>
								<!-- End Row-->								

								<div class="row clearfix">
									<label>Years working in the industry:</label>			

									<select class="required" name="YearsWorking">
										<option value="">- Select Option</option>
										<?php 
										for($i = 1; $i < 31; $i++){

											if($i==1){ $label = ' year'; }else{ $label = ' years';}																						

											if($_SESSION['form']['YearsWorking'] == $i ){$status = 'selected';}else{$status = '';}

											echo '<option value="'.$i.'" '.$status.'>'. $i . $label.'</option>';

										} ?>
									</select>	
								</div>
								<!-- End Row-->

							</div>
							<!-- END answers -->

						</div>
						<!-- End question-wrapper -->

						<div id="LengthofEmployment" class="question-wrapper <?php if($_SESSION['form']['LengthofEmployment'] > 1 || empty($_SESSION['form']['LengthofEmployment'])){ echo 'disabled'; }?>">
							
							<div class="question-header">
								
								<span>Previous Employment Information</span>

							</div>
							<!-- end qh -->

							<div class="answers">

								<div class="row clearfix">
									<label>Employer Name:</label>
									<input type="text" name="PrevEmployerName" class="required" value="<?php echo $_SESSION['form']['PrevEmployerName']; ?>" />
								</div>
								<!-- End Row-->	
								
								<div class="row clearfix">
									<label>Position/Title:</label>
									<input type="text" name="PrevPositionTitle" class="required" value="<?php echo $_SESSION['form']['PrevPositionTitle']; ?>" />
								</div>
								<!-- End Row-->

								<div id="prevPeriod" class="row clearfix">
									<label>Length of Employment:</label>									
									<div class="right clearfix">
										<div>From: <input type="text" class="required datepicker2" name="PrevDateFrom" value="<?php echo $_SESSION['form']['PrevDateFrom']; ?>"/></div>
										<div>To: <input type="text" class="required datepicker2" name="PrevDateTo" value="<?php echo $_SESSION['form']['PrevDateTo']; ?>"/></div>
									</div>
								</div>
								<!-- End Row-->																

							</div>
							<!-- END Additional Answers -->


						</div>
						<!-- end qw-->

						<input type="hidden" name="question" value="4" />

					</div>					

					<div id="question-5" class="question <?php get_step(5,$current_step); ?>">
						
						<div class="header">
							
							<span>Declarations</span>

						</div>
						<!-- End Header -->

						<div id="declarations" class="question-wrapper">

							<div class="row">
								<label>
									Are there any outstanding judgments against you ?																	
								</label>								

								<div class="yn clearfix">
									
									<label><input type="radio" name="question-1" value="Y" class="required" <?php if($_SESSION['form']['question-1'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-1" value="N" <?php if($_SESSION['form']['question-1'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>

							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Have you been declared bankrupt within the past 7 years?
								</label>								

								<div class="yn clearfix">
									
									<label><input type="radio" name="question-2" value="Y" class="required"<?php if($_SESSION['form']['question-2'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-2" value="N" <?php if($_SESSION['form']['question-2'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>

							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Have you had property foreclosed upon or given title or deed in lieu thereof in the last 7 years?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-3" value="Y" class="required" <?php if($_SESSION['form']['question-3'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-3" value="N" <?php if($_SESSION['form']['question-3'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Are you a party to a lawsuit?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-4" value="Y" class="required" <?php if($_SESSION['form']['question-4'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-4" value="N" <?php if($_SESSION['form']['question-4'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Have you been obligated on any loan resulted in foreclosure, transfer of title in lieu of foreclosure, or judgment?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-5" value="Y" class="required" <?php if($_SESSION['form']['question-5'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-5" value="N" <?php if($_SESSION['form']['question-5'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Are you presently delinquent or in default on any Federal debt or any other loan, mortgage, financial obligation bond, or loan guarantee?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-6" value="Y" class="required" <?php if($_SESSION['form']['question-6'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-6" value="N" <?php if($_SESSION['form']['question-6'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Are you obligated to pay child support or alimony?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-7" value="Y" class="required" <?php if($_SESSION['form']['question-7'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-7" value="N" <?php if($_SESSION['form']['question-7'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->										

						</div>
						<!-- End question-wrapper -->

						<input type="hidden" name="question" value="5" />						

					</div>		
					<!-- end Question -->

					<div id="question-6" class="question <?php get_step(6,$current_step); ?>">
						
						<div class="header">
							
							<span>Declarations</span>

						</div>
						<!-- End Header -->

						<div id="declarations" class="question-wrapper">						

							<div class="row">
								<label>									
									Are you a co-maker or endorser on a note?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-8" value="Y" class="required" <?php if($_SESSION['form']['question-8'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-8" value="N" <?php if($_SESSION['form']['question-8'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Are you a U.S. citizen?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-9" value="Y" class="required" <?php if($_SESSION['form']['question-9'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-9" value="N" <?php if($_SESSION['form']['question-9'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->						

							<div class="row">
								<label>									
									Are you a permanent resident alien?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-10" value="Y" class="required" <?php if($_SESSION['form']['question-10'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-10" value="N" <?php if($_SESSION['form']['question-10'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Do you intend to occupy the property as your primary residence?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-11" value="Y" class="required" <?php if($_SESSION['form']['question-11'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-11" value="N" <?php if($_SESSION['form']['question-11'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->

							<div class="row">
								<label>									
									Have you had an ownership interest in a property in the last three years?
								</label>								
								<div class="yn clearfix">
									
									<label><input type="radio" name="question-12" value="Y" class="required" <?php if($_SESSION['form']['question-12'] == 'Y'){ echo 'checked'; }?>/>Yes</label>
									<label><input type="radio" name="question-12" value="N" <?php if($_SESSION['form']['question-12'] == 'N'){ echo 'checked'; }?>/>No</label>

								</div>
							</div>
							<!-- row -->						

						</div>
						<!-- End question-wrapper -->

						<input type="hidden" name="question" value="6" />						

					</div>		
					<!-- end Question -->

					<div id="question-7" class="question <?php get_step(7,$current_step); ?>">
						
						<div class="header">
							
							<span>Additional Information</span>

						</div>
						<!-- end header -->

						<div class="question-wrapper">
							
							<div class="question-header row">
									<label><input type="checkbox" name="EthnicalInfo" <?php if($_SESSION['form']['EthInfo'] == 'true' ){ echo 'checked'; } ?>/> I do not wish to furnish this information</label>
									<input type="hidden" name="EthInfo" value="<?php echo $_SESSION['form']['EthInfo']; ?>" />
								</div>	

							<div class="answers">								
								
								<div id="EthnicalInfo" class="row <?php if($_SESSION['form']['EthInfo'] == 'true' ){ echo 'disabled'; }else{ echo ''; }?>">
									<div class="row clearfix">
										<label>Gender</label>
										<div class="right">
											<label><input type="radio" name="Gender" value="Male" class="required" <?php if($_SESSION['form']['Gender'] == 'Male'){ echo 'checked'; }?>/>Male</label>
											<label><input type="radio" name="Gender" value="Female" <?php if($_SESSION['form']['Gender'] == 'Female'){ echo 'checked'; }?>/>Female</label>
										</div>
									</div>
									<div class="row clearfix">
										<label>Ethnicity</label>
										<div class="right clearfix">
											<label><input type="radio" name="Ethnicity" value="Hispanic or Latino" class="required" <?php if($_SESSION['form']['Ethnicity'] == 'Hispanic or Latino'){ echo 'checked'; }?>/>Hispanic or Latino</label>
											<label><input type="radio" name="Ethnicity" value="Not Hispanic or Latino" <?php if($_SESSION['form']['Ethnicity'] == 'Not Hispanic or Latino'){ echo 'checked'; }?>/>Not Hispanic or Latino</label>
										</div>
									</div>
									<div class="row clearfix">
										<label>Race</label>
										<div class="right normal">
											<label><input type="radio" name="Race" value="American Indian or Alaska Native" class="required" <?php if($_SESSION['form']['Race'] == 'American Indian or Alaska Native'){ echo 'checked'; }?>/> American Indian or Alaska Native</label>
											<label><input type="radio" name="Race" value="Native Hawaiian or Other Pacific Islander" <?php if($_SESSION['form']['Race'] == 'Native Hawaiian or Other Pacific Islander'){ echo 'checked'; }?>/> Native Hawaiian or Other Pacific Islander</label>
											<label><input type="radio" name="Race" value="Asian" <?php if($_SESSION['form']['Race'] == 'Asian'){ echo 'checked'; }?>/> Asian</label>
											<label><input type="radio" name="Race" value="White" <?php if($_SESSION['form']['Race'] == 'White'){ echo 'checked'; }?>/> White</label>
											<label><input type="radio" name="Race" value="Black or African American" <?php if($_SESSION['form']['Race'] == 'Black or African American'){ echo 'checked'; }?>/> Black or African American</label>											
										</div>
									</div>
									<div class="row clearfix">
										<label>Comments</label>
										<textarea name="comments"><?php echo $_SESSION['form']['comments']; ?></textarea>
									</div>									
								</div>
								<!-- END Ethnical info-->

							</div>
							<!-- END ANSWERS -->

						</div>
						<!-- question-wrapper -->		


						<input type="hidden" name="question" value="7" />	

					</div>
					<!-- End Question -->	


					<div id="question-8" class="question <?php get_step(8,$current_step); ?>">
						
						<div class="header">
							
							<span>Application Complete</span>

						</div>
						<!-- end header -->

						<div class="content">
							
							<p>Thank you for completing our short form application. One of Empire America's mortgage consultants
							will contact you within 24 hours to discuss your financing options, in the meantime should you have 
							questions or concerns about the home loan process, please feel free to contact us directly at:</p>

							<h3>EMPIRE AMERICA</h3>

							<p>Tel: (866) 411-EOA1 (3621) <br/>
							Email: <a href="mailto:consultants@empireofamerica.com">consultants@empireofamerica.com</a><br/>
							</p>						

						</div>
						<!-- end content-->														

					</div>
					<!-- End Question -->	

					<div class="buttons-wrapper clearfix">						

						<input type="hidden" value="no" name="savedb" id="savedb">					
						<input type="hidden" value="" name="IncompleteStep" id="incomplete">					

						<div class="left-buttons">																					
							<div id="save-buttons" style="display:inline-block;">
								<a id="btn-save-1" class="various btn-black <?php if($_SESSION['user']['LoggedIn'] == 1 ){ echo 'hide'; } ?>" href="#save-window">Save your Application</a>														
								<a id="btn-save-2" class="btn-black <?php if($_SESSION['user']['LoggedIn'] == 1){ echo 'show'; } ?>" href="#">Save your Application</a>						
							</div>
							<?php if($_SESSION['user']['LoggedIn'] == 0) {?>
								<a id="btn-open" class="btn-black various" href="#save-window">Open your Saved Application</a>
							<?php } ?>
								<a id="btn-assist" class="btn-black various" href="#assist-window">Call for Assistance</a>
						</div>

						<div class="right-buttons">
							<a id="btn-back" class="btn-black" href="#">Back</a>
							<a id="btn-next" class="btn-green" href="#">Next</a>
						</div>

					</div>
					<!-- end buttons -->

				</form>
				<!-- End apply form -->

			</div>
			<!-- End Questions -->

		</div>
		<!-- End wrapper-->

	</div>