


  KJE.CalculatorTitle = "LIBOR ARM vs. Fixed Rate Mortgage";
  KJE.parameters.set("ADJUSTABLE_MONTHS_FIXED2",12);
  KJE.parameters.set("ADJUSTABLE_MONTHS_FIXED3",12);
  KJE.parameters.set("ADJUSTABLE_RATE_CAP2",12);
  KJE.parameters.set("ADJUSTABLE_RATE_CAP3",12);
  KJE.parameters.set("ADJUSTABLE_RATE_FEQ2",12);
  KJE.parameters.set("ADJUSTABLE_RATE_FEQ3",12);
  KJE.parameters.set("ADJUSTABLE_RATE_INCR2",0.25);
  KJE.parameters.set("ADJUSTABLE_RATE_INCR3",0.25);
  KJE.parameters.set("ARM_FIVE_YEAR_TERM",4);
  KJE.parameters.set("BORDER_TYPE","ROUND");
  KJE.parameters.set("INTEREST_RATE1",KJE.Default.RateFix30);
  KJE.parameters.set("INTEREST_RATE2",KJE.Default.RateAdj);
  KJE.parameters.set("INTEREST_RATE3",KJE.Default.RateAdj);
  KJE.parameters.set("LOAN_AMOUNT",KJE.Default.MortgageAmt);
  KJE.parameters.set("TERM",30);

KJE.parameters.set("MSG_DROPPER2_TITLE", "Fully amortizing LIBOR ARM:");
KJE.parameters.set("MSG_DROPPER3_TITLE", "Interest only LIBOR ARM:");
KJE.parameters.set("MSG_ARM", "LIBOR ARM Fully Amortizing");
KJE.parameters.set("MSG_ARM_IO", "LIBOR ARM Interest Only");




/**V3_CUSTOM_CODE**/
/* <!--
  Financial Calculators, ©1998-2014 KJE Computer Solutions, LLC.
  For more information please see:
  <A HREF="http://www.dinkytown.net">http://www.dinkytown.net</A>
 -->
 */
if (KJE.IE7and8) KJE.init();

