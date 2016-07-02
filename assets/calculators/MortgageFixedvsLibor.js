KJE.MortgageArmvsFixedCalc=function(){this.ARM=KJE.parameters.get("MSG_ARM","ARM Fully Amortizing");this.IO=KJE.parameters.get("MSG_ARM_IO","ARM Interest Only");this.FIXED=KJE.parameters.get("MSG_FIXED","Fixed Rate");this.NEG=KJE.parameters.get("MSG_FIXED","Option ARM");this.FIVE_YEAR_TERM=KJE.parameters.get("ARM_FIVE_YEAR_TERM",5);this.MSG_FIVE=KJE.parameters.get("MSG_FIVE","Four");this.MSG_FIVE_YEAR_TOTALS=KJE.parameters.get("MSG_ARM_FIVE_YEAR_TOTALS","Four year totals");this.MSG_FIVE_YEAR_PAYMENT=KJE.parameters.get("MSG_FIVE_YEAR_PAYMENT","Payment after four years");this.MSG_YEAR_NUMBER=KJE.parameters.get("MSG_YEAR_NUMBER","Year Number");this.MSG_PRINCIPAL=KJE.parameters.get("MSG_PRINCIPAL","Principal");this.MSG_INTEREST=KJE.parameters.get("MSG_INTEREST","Interest");this.MSG_PAYMENT_NUMBER=KJE.parameters.get("MSG_PAYMENT_NUMBER","Payment Number");this.MSG_PRINCIPAL_BALANCE=KJE.parameters.get("MSG_PRINCIPAL_BALANCE","Principal Balance");this.MSG_NORMAL_PAYMENTS=KJE.parameters.get("MSG_NORMAL_PAYMENTS","Normal payments");this.cats=[KJE.parameters.get("MSG_ARM_GRAPH_CAT1","Year One"),KJE.parameters.get("MSG_ARM_GRAPH_CAT2","Year Four")];this.BREAK_EVEN_NOTE=["With your current assumptions, your total payments after ADJUST_YEARS for the ARM will be ADJUST_DIFFERENCE less than the fixed rate mortgage. In this case you may be better off with an ARM.","With your current assumptions, your total payments with an ARM are lower through ADJUST_YEARS of payments. If you expect to sell your home or refinance before ADJUST_YEARS, you may be better off with an ARM.","With your current assumptions, your ARM payments are never less than a fixed rate mortgage. In this case you may be better off with an fixed rate mortgage."];this.BREAK_EVEN_NOTE[0]=KJE.parameters.get("MSG_BREAK_EVEN_NOTE1",this.BREAK_EVEN_NOTE[0]);this.BREAK_EVEN_NOTE[1]=KJE.parameters.get("MSG_BREAK_EVEN_NOTE2",this.BREAK_EVEN_NOTE[1]);this.BREAK_EVEN_NOTE[2]=KJE.parameters.get("MSG_BREAK_EVEN_NOTE3",this.BREAK_EVEN_NOTE[2]);this.SHOW_PI_ARM=KJE.parameters.get("SHOW_PI_ARM",true);this.SHOW_INTEREST_ONLY=KJE.parameters.get("SHOW_INTEREST_ONLY",true);this.SHOW_FIXED=KJE.parameters.get("SHOW_FIXED",true);this.SHOW_NEG=KJE.parameters.get("SHOW_NEG",false);this.NEG_AM_FIXED=3;this.NEG_AM_MAX_INCREASE=7.5;this.INTEREST_ONLY=new Array(4);this.LOAN_TYPE=new Array(4);this.ADJUSTABLE_RATE=new Array(4);this.NEG_AM=new Array(4);this.INTEREST_RATE=KJE.FloatArray(4);this.INTEREST_RATE2=KJE.FloatArray(4);this.PREPAYMENT=KJE.FloatArray(4);this.PAYOFF=KJE.FloatArray(4);this.ADJUSTABLE_RATE_CAP=KJE.FloatArray(4);this.ADJUSTABLE_RATE_INCR=KJE.FloatArray(4);this.ADJUSTABLE_RATE_FEQ=KJE.FloatArray(4);this.ADJUSTABLE_MONTHS_FIXED=KJE.FloatArray(4);this.MONTHLY_PI=KJE.FloatArray(4);this.MONTH_INTEREST=KJE.FloatArray(4);this.MONTH_PRINCIPAL=KJE.FloatArray(4);this.FIRST_YEAR_INTEREST=KJE.FloatArray(4);this.FIRST_YEAR_PRINCIPAL=KJE.FloatArray(4);this.FIRST_YEAR_TOTAL=KJE.FloatArray(4);this.FIVE_YEAR_INTEREST=KJE.FloatArray(4);this.FIVE_YEAR_PRINCIPAL=KJE.FloatArray(4);this.FIVE_YEAR_TOTAL=KJE.FloatArray(4);this.TERM_YEAR_TOTAL=KJE.FloatArray(4);this.FIVE_YEAR_PAYMENT=KJE.FloatArray(4);this.TERM_LIST=KJE.FloatArray(4);this.TOTAL_INTEREST=KJE.FloatArray(4);this.TOTAL_PAYMENTS=KJE.FloatArray(4);this.ENDING_BALANCE=KJE.FloatArray(4);this.HIGHEST_RATE=KJE.FloatArray(4);this.ADJUST_YEARS="";this.ADJUST_DIFFERENCE=0;this.BY_YEAR=true;this.SAVINGS_IO_FIRST_YEAR=0;this.SAVINGS_IO_FIVE_YEAR=0;this.SAVINGS_IO_TERM_YEAR=0;this.SAVINGS_ARM_FIRST_YEAR=0;this.SAVINGS_ARM_FIVE_YEAR=0;this.SAVINGS_ARM_TERM_YEAR=0;this.SAVINGS_NEG_FIRST_YEAR=0;this.SAVINGS_NEG_FIVE_YEAR=0;this.SAVINGS_NEG_TERM_YEAR=0;this.PRINCIPAL1_ARM_VS_FIXED=0;this.PRINCIPAL2_ARM_VS_FIXED=0;this.INTEREST1_ARM_VS_FIXED=0;this.INTEREST2_ARM_VS_FIXED=0;this.INTEREST2_NEG_VS_FIXED=0;this.SAVINGS_IO_MONTH=0;this.SAVINGS_ARM_MONTH=0;this.SAVINGS_NEG_MONTH=0;this.nBalance=KJE.FloatArray(4);this.nInterest=KJE.FloatArray(4);this.nPrincipal=KJE.FloatArray(4);this.nYrInterest=KJE.FloatArray(4);this.nYrPrincipal=KJE.FloatArray(4);this.nYrPayment=KJE.FloatArray(4);this.nPayment=KJE.FloatArray(4);this.nInterestRate=KJE.FloatArray(this.MONTHLY_PI.length);this.nNewInterestRate=KJE.FloatArray(this.MONTHLY_PI.length);var b=(this.SHOW_INTEREST_ONLY&&this.SHOW_PI_ARM&&this.SHOW_FIXED&&this.SHOW_NEG?4:(this.SHOW_INTEREST_ONLY&&this.SHOW_PI_ARM&&this.SHOW_FIXED?3:2));this.DS_PAYMENTS=new Array(b);this.DS_PAYMENT_TOTALS=new Array(b);for(var a=0;a<b;a++){this.DS_PAYMENTS[a]=KJE.FloatArray(2);this.DS_PAYMENT_TOTALS[a]=KJE.FloatArray(2)}this.sSchedule=new KJE.Repeating()};KJE.MortgageArmvsFixedCalc.prototype.clear=function(){this.TERM=0;this.LOAN_AMOUNT=0;var a=this.TERM_LIST.length;for(var b=0;b<a;b++){this.TERM_LIST[b]=0}};KJE.MortgageArmvsFixedCalc.prototype.calculate=function(L){var h=KJE;var U=this.TERM;var p=this.LOAN_AMOUNT;var T=this.TERM_LIST;var Y=this.nBalance;var t=this.nInterest;var k=this.nPrincipal;var D=this.nYrInterest;var f=this.nYrPrincipal;var H=this.nYrPayment;var F=this.nPayment;var Q=this.nInterestRate;var m=this.nNewInterestRate;var W=this.FIRST_YEAR_INTEREST;var C=this.FIRST_YEAR_PRINCIPAL;var y=this.FIRST_YEAR_TOTAL;var P=this.FIVE_YEAR_INTEREST;var G=this.FIVE_YEAR_PRINCIPAL;var S=this.FIVE_YEAR_TOTAL;var v=this.FIVE_YEAR_PAYMENT;var c=this.TERM_YEAR_TOTAL;var B=this.TOTAL_INTEREST;var O=this.TOTAL_PAYMENTS;var s=this.ENDING_BALANCE;var b=this.HIGHEST_RATE;var g=this.INTEREST_RATE;var K=this.INTEREST_ONLY;var X=this.MONTHLY_PI;var I=this.MONTH_INTEREST;var j=this.MONTH_PRINCIPAL;var q=this.LOAN_TYPE;var r=this.ADJUSTABLE_RATE;var x=this.NEG_AM;var V=this.INTEREST_RATE2;var A=this.PREPAYMENT;var o=this.PAYOFF;var E=this.ADJUSTABLE_RATE_CAP;var e=this.ADJUSTABLE_RATE_INCR;var a=this.ADJUSTABLE_RATE_FEQ;var l=this.ADJUSTABLE_MONTHS_FIXED;var d=0;for(var R=0;R<T.length;R++){if(T[R]==0){T[R]=U}if(T[R]*12>d){d=T[R]*12}}var u=this.MONTHLY_PI.length;for(var R=0;R<u;R++){Q[R]=g[R]/1200;m[R]=g[R]/100;Y[R]=p;k[R]=0;t[R]=0;D[R]=0;f[R]=0;H[R]=0;W[R]=0;C[R]=0;y[R]=0;P[R]=0;G[R]=0;S[R]=0;v[R]=0;c[R]=0;B[R]=0;O[R]=0;s[R]=0;b[R]=Q[R];if(K[R]){X[R]=h.round((Q[R]*p),2)}else{X[R]=h.round(KJE.PMT(Q[R],T[R]*12,p),2)}I[R]=h.round((Q[R]*p),2);j[R]=X[R]-I[R];F[R]=X[R]}if(L){var z=this.sSchedule;z.clearRepeat();if(this.BY_YEAR){this.addRegularTitle(z,z.sReportCol("Year",7),z.sReportCol("Payments",1),z.sReportCol("Balance",2),z.sReportCol("Interest Only ARM",4),z.sReportCol(this.ARM,5),z.sReportCol("Fixed Rate Mortgage",6),z.sReportCol("Negative Amortization Mortgage",7))}else{this.addRegularTitle(z,z.sReportCol("#",8),z.sReportCol("Payment",3),z.sReportCol("Balance",2),z.sReportCol("Interest Only ARM",4),z.sReportCol(this.ARM,5),z.sReportCol("Fixed Rate Mortgage",6),z.sReportCol("Negative Amortization Mortgage",7))}this.addRegularRow(z,"&nbsp;",null,p,null,p,null,p)}var w=null;var N=(d);for(var M=1;M<=N;M++){for(var R=0;R<u;R++){if(x[R]&&(this.NEG_AM_FIXED+1)==M){Q[R]=V[R]/1200;m[R]=V[R]/100}if(((M-l[R])%(a[R]==0?1:a[R]))==1&&M!=1&&r[R]&&M!=T[R]*12&&(e[R]!=0||x[R])&&l[R]<=M){m[R]=m[R]+e[R]/100;if(m[R]>E[R]/100){m[R]=E[R]/100}if(m[R]<0.02){m[R]=0.02}Q[R]=m[R]/12;if(K[R]){F[R]=h.round((Q[R]*Y[R]),2)}else{if(x[R]){var Z=F[R];F[R]=h.round(KJE.PMT(Q[R],T[R]*12-M+1,Y[R]),2);if(M<61){if(F[R]>(Z*(1+(this.NEG_AM_MAX_INCREASE/100)))){F[R]=h.round(Z*(1+(this.NEG_AM_MAX_INCREASE/100)),2)}else{if(F[R]<(Z*(1-(this.NEG_AM_MAX_INCREASE/100)))){F[R]=h.round(Z*(1-(this.NEG_AM_MAX_INCREASE/100)),2)}}}}else{F[R]=h.round(KJE.PMT(Q[R],T[R]*12-M+1,Y[R]),2)}}if(b[R]<Q[R]){b[R]=Q[R]}}t[R]=h.round(Q[R]*Y[R],2);if(K[R]){if(Y[R]>0){if(A[R]>Y[R]){F[R]=Y[R]+t[R];Y[R]=0;k[R]=Y[R];o[R]=M}else{F[R]=t[R]+A[R];Y[R]-=A[R];k[R]=A[R]}}else{F[R]=0;t[R]=0;k[R]=0}}else{k[R]=F[R]-t[R];Y[R]-=k[R];if(Y[R]==0){F[R]=0;k[R]=0;t[R]=0}else{if(Y[R]<0||(Y[R]>0.005&&N==M)){k[R]+=Y[R];Y[R]=0;F[R]=k[R]+t[R]}else{if(N==M){Y[R]=0}}}}D[R]+=t[R];f[R]+=k[R];H[R]+=F[R];O[R]+=F[R];B[R]+=t[R];c[R]+=F[R];if((M%12)==0){if(M==12){W[R]=D[R];C[R]=f[R];y[R]=H[R]}if(M>0&&M<=this.FIVE_YEAR_TERM*12){P[R]+=D[R];G[R]+=f[R];S[R]+=H[R]}}if(M==this.FIVE_YEAR_TERM*12){v[R]=F[R]}}if(L){if(!this.BY_YEAR){this.addRegularRow(z,h.number(M),(this.SHOW_NEG?F[3]:F[2]),(this.SHOW_NEG?Y[3]:Y[2]),F[1],Y[1],F[0],Y[0])}else{if(this.BY_YEAR&&(M%12)==0){this.addRegularRow(z,h.number(M/12),(this.SHOW_NEG?H[3]:H[2]),(this.SHOW_NEG?Y[3]:Y[2]),H[1],Y[1],H[0],Y[0])}}}if((M%12)==0){for(var R=0;R<D.length;R++){D[R]=0;f[R]=0;H[R]=0}}if(w==null&&(O[0]<=O[1])){w=M}}this.SAVINGS_IO_FIRST_YEAR=y[0]-y[2];this.SAVINGS_IO_FIVE_YEAR=S[0]-S[2];this.SAVINGS_IO_TERM_YEAR=c[0]-c[2];this.SAVINGS_ARM_FIRST_YEAR=y[0]-y[1];this.SAVINGS_ARM_FIVE_YEAR=S[0]-S[1];this.SAVINGS_ARM_TERM_YEAR=c[0]-c[1];if(this.SHOW_NEG){this.SAVINGS_NEG_FIRST_YEAR=y[0]-y[3];this.SAVINGS_NEG_FIVE_YEAR=S[0]-S[3];this.SAVINGS_NEG_TERM_YEAR=c[0]-c[3]}this.INTEREST1_ARM_VS_FIXED=W[0]-W[1];this.INTEREST2_ARM_VS_FIXED=P[0]-P[1];this.PRINCIPAL1_ARM_VS_FIXED=C[1]-C[0];this.PRINCIPAL2_ARM_VS_FIXED=G[1]-G[0];this.SAVINGS_IO_MONTH=X[0]+A[0]-X[2]-A[2];this.SAVINGS_ARM_MONTH=X[0]+A[0]-X[1]-A[1];if(this.SHOW_NEG){this.SAVINGS_NEG_MONTH=X[0]+A[0]-X[3]-A[3]}var M=0;var J=S.length;for(var R=0;R<J;R++){s[R]=Y[R];if((this.SHOW_FIXED&&R==0)||(this.SHOW_PI_ARM&&R==1)||(this.SHOW_INTEREST_ONLY&&R==2)||(this.SHOW_NEG&&R==3)){this.DS_PAYMENT_TOTALS[M][0]=y[R];this.DS_PAYMENT_TOTALS[M][1]=S[R];this.DS_PAYMENTS[M][0]=((X[R]+A[R]));this.DS_PAYMENTS[M][1]=(v[R]);M++}}this.ADJUST_DIFFERENCE=O[0]-O[1];this.ADJUST_YEARS=KJE.getTermLabel(w);this.nBreakLength=w};KJE.MortgageArmvsFixedCalc.prototype.formatReport=function(c){var d=KJE;var a=this.iDecimal;var e=c;for(var b=0;b<this.TERM_LIST.length;b++){e=KJE.replace("TERM_LIST"+(b+1),d.number(this.TERM_LIST[b]),e)}e=KJE.replace("MSG_FIVE_YEAR_TOTALS",this.MSG_FIVE_YEAR_TOTALS,e);e=KJE.replace("MSG_FIVE_YEAR_PAYMENT",this.MSG_FIVE_YEAR_PAYMENT,e);for(var b=0;b<this.MONTHLY_PI.length-(this.SHOW_NEG?0:1);b++){e=KJE.replace("MONTHLY_PI"+b,d.dollars(this.MONTHLY_PI[b]+this.PREPAYMENT[b],2),e);e=KJE.replace("INTEREST_RATE"+b,d.percent(this.INTEREST_RATE[b]/100,3),e);e=KJE.replace("ADJUSTABLE_RATE_FEQ"+b,d.number(this.ADJUSTABLE_RATE_FEQ[b]),e);e=KJE.replace("ADJUSTABLE_RATE_INCR"+b,d.percent(this.ADJUSTABLE_RATE_INCR[b]/100,2),e);e=KJE.replace("ADJUSTABLE_RATE_CAP"+b,d.percent(this.ADJUSTABLE_RATE_CAP[b]/100,3),e);e=KJE.replace("ADJUSTABLE_RATE"+b,d.yesno(this.ADJUSTABLE_RATE[b]),e);e=KJE.replace("INTEREST_ONLY"+b,d.yesno(this.INTEREST_ONLY[b]),e);e=KJE.replace("LOAN_TYPE"+b,this.LOAN_TYPE[b],e);e=KJE.replace("ADJUSTABLE_MONTHS_FIXED"+b,d.number(this.ADJUSTABLE_MONTHS_FIXED[b]),e);e=KJE.replace("PREPAYMENT"+b,d.dollars(this.PREPAYMENT[b]),e);e=KJE.replace("MONTH_INTEREST"+b,d.dollars(this.MONTH_INTEREST[b],2),e);e=KJE.replace("MONTH_PRINCIPAL"+b,d.dollars(this.MONTH_PRINCIPAL[b],2),e);e=KJE.replace("FIRST_YEAR_INTEREST"+b,d.dollars(this.FIRST_YEAR_INTEREST[b],2),e);e=KJE.replace("FIRST_YEAR_PRINCIPAL"+b,d.dollars(this.FIRST_YEAR_PRINCIPAL[b],2),e);e=KJE.replace("FIRST_YEAR_TOTAL"+b,d.dollars(this.FIRST_YEAR_TOTAL[b],2),e);e=KJE.replace("FIVE_YEAR_INTEREST"+b,d.dollars(this.FIVE_YEAR_INTEREST[b],2),e);e=KJE.replace("FIVE_YEAR_PRINCIPAL"+b,d.dollars(this.FIVE_YEAR_PRINCIPAL[b],2),e);e=KJE.replace("FIVE_YEAR_TOTAL"+b,d.dollars(this.FIVE_YEAR_TOTAL[b],2),e);e=KJE.replace("FIVE_YEAR_PAYMENT"+b,d.dollars(this.FIVE_YEAR_PAYMENT[b],2),e);e=KJE.replace("TOTAL_INTEREST"+b,d.dollars(this.TOTAL_INTEREST[b],2),e);e=KJE.replace("TOTAL_PAYMENTS"+b,d.dollars(this.TOTAL_PAYMENTS[b],2),e);e=KJE.replace("ENDING_BALANCE"+b,d.dollars(this.ENDING_BALANCE[b],2),e);e=KJE.replace("HIGHEST_RATE"+b,d.percent(this.HIGHEST_RATE[b]*12,3),e);e=KJE.replace("MSG_PAYOFF"+b,(this.PAYOFF[b]>0?KJE.getTermLabel(this.PAYOFF[b],true):d.number(this.TERM_LIST[b])+" "+this.MSG_YEARS_LBL),e);e=KJE.replace("MSG_FINAL_PAYOFF"+b,d.dollars(this.ENDING_BALANCE[b])+" after "+(this.PAYOFF[b]>0?KJE.getTermLabel(this.PAYOFF[b],true):d.number(this.TERM)+" "+this.MSG_YEARS_LBL),e)}e=KJE.replace("LOAN_AMOUNT",d.dollars(this.LOAN_AMOUNT,2),e);e=KJE.replace("SAVINGS_IO_FIRST_YEAR",d.dollars(this.SAVINGS_IO_FIRST_YEAR,2),e);e=KJE.replace("SAVINGS_IO_FIVE_YEAR",d.dollars(this.SAVINGS_IO_FIVE_YEAR,2),e);e=KJE.replace("SAVINGS_IO_TERM_YEAR",d.dollars(this.SAVINGS_IO_TERM_YEAR,2),e);e=KJE.replace("SAVINGS_ARM_FIRST_YEAR",d.dollars(this.SAVINGS_ARM_FIRST_YEAR,2),e);e=KJE.replace("SAVINGS_ARM_FIVE_YEAR",d.dollars(this.SAVINGS_ARM_FIVE_YEAR,2),e);e=KJE.replace("SAVINGS_ARM_TERM_YEAR",d.dollars(this.SAVINGS_ARM_TERM_YEAR,2),e);e=KJE.replace("SAVINGS_NEG_FIRST_YEAR",d.dollars(this.SAVINGS_NEG_FIRST_YEAR,2),e);e=KJE.replace("SAVINGS_NEG_FIVE_YEAR",d.dollars(this.SAVINGS_NEG_FIVE_YEAR,2),e);e=KJE.replace("SAVINGS_NEG_TERM_YEAR",d.dollars(this.SAVINGS_NEG_TERM_YEAR,2),e);e=KJE.replace("PRINCIPAL1_ARM_VS_FIXED",d.dollars(this.PRINCIPAL2_ARM_VS_FIXED,2),e);e=KJE.replace("PRINCIPAL2_ARM_VS_FIXED",d.dollars(this.PRINCIPAL2_ARM_VS_FIXED,2),e);e=KJE.replace("INTEREST1_ARM_VS_FIXED",d.dollars(this.INTEREST1_ARM_VS_FIXED,2),e);e=KJE.replace("INTEREST2_ARM_VS_FIXED",d.dollars(this.INTEREST2_ARM_VS_FIXED,2),e);e=KJE.replace("BREAK_EVEN_NOTE",(this.ADJUST_DIFFERENCE>0?this.BREAK_EVEN_NOTE[0]:(this.nBreakLength>1?this.BREAK_EVEN_NOTE[1]:this.BREAK_EVEN_NOTE[2])),e);e=KJE.replace("SAVINGS_IO_MONTH",d.dollars(this.SAVINGS_IO_MONTH,2),e);e=KJE.replace("SAVINGS_ARM_MONTH",d.dollars(this.SAVINGS_ARM_MONTH,2),e);e=KJE.replace("SAVINGS_NEG_MONTH",d.dollars(this.SAVINGS_NEG_MONTH,2),e);e=KJE.replace("ADJUST_DIFFERENCE",d.dollars(this.ADJUST_DIFFERENCE,2),e);e=KJE.replace("ADJUST_YEARS",this.ADJUST_YEARS,e);e=KJE.replace("TERM",d.number(this.TERM),e);e=KJE.replace("NEG_AM_FIXED",d.number(this.NEG_AM_FIXED),e);e=KJE.replace("NEG_AM_MAX_INCREASE",d.percent(this.NEG_AM_MAX_INCREASE/100,2),e);e=KJE.replace("NEG_AM_NON_TEASER",d.percent(this.INTEREST_RATE2[3]/100,3),e);e=KJE.replace("MSG_FIVE",this.MSG_FIVE,e);e=e.replace("**REPEATING GROUP**",this.sSchedule.getRepeat());this.sSchedule.clearRepeat();return e};KJE.MortgageArmvsFixedCalc.prototype.addRegularTitle=function(a,j,h,g,f,e,d,c){var k=new Array(4);var b=0;k[b++]=j;if(this.SHOW_FIXED){k[b++]={sCell:KJE._sHeadingUnderline,sContent:d,sFormat:"COLSPAN=2"}}if(this.SHOW_PI_ARM&&!this.SHOW_NEG){k[b++]={sCell:KJE._sHeadingUnderline,sContent:e,sFormat:"COLSPAN=2"}}if(this.SHOW_INTEREST_ONLY&&!this.SHOW_NEG){k[b++]={sCell:KJE._sHeadingUnderline,sContent:f,sFormat:"COLSPAN=2"}}if(this.SHOW_NEG){k[b]={sCell:KJE._sHeadingUnderline,sContent:c,sFormat:"COLSPAN=2"}}a.addHeader("&nbsp;",k[1],k[2],k[3]);k=new Array(7);b=0;k[b++]=j;if(this.SHOW_FIXED){k[b++]=h;k[b++]=g}if(this.SHOW_PI_ARM&&!this.SHOW_NEG){k[b++]=h;k[b++]=g}if(this.SHOW_INTEREST_ONLY||this.SHOW_NEG){k[b++]=h;k[b]=g}a.addHeader(k[0],k[1],k[2],k[3],k[4],k[5],k[6],k[7])};KJE.MortgageArmvsFixedCalc.prototype.addRegularRow=function(b,a,j,f,h,e,g,d){var k=new Array(7);var c=0;k[c++]=a;if(this.SHOW_FIXED){k[c++]=(g?KJE.dollars(g,2):"&nbsp;");k[c++]=KJE.dollars(d,2)}if(this.SHOW_PI_ARM&&!this.SHOW_NEG){k[c++]=(g?KJE.dollars(h,2):"&nbsp;");k[c++]=KJE.dollars(e,2)}if(this.SHOW_INTEREST_ONLY||this.SHOW_NEG){k[c++]=(g?KJE.dollars(j,2):"&nbsp;");k[c]=KJE.dollars(f,2)}b.addRepeat(k[0],k[1],k[2],k[3],k[4],k[5],k[6],k[7])};KJE.CalcName="Fixed Rate Mortgage vs. LIBOR ARM";KJE.CalculatorTitle="ARM vs. Fixed Rate Mortgage";KJE.parseInputs=function(a){a=KJE.replace("**TERM**",KJE.getMortgageTermDrop("TERM",30),a);return a};KJE.initialize=function(){KJE.CalcControl=new KJE.MortgageArmvsFixedCalc();KJE.GuiControl=new KJE.MortgageArmvsFixed(KJE.CalcControl)};KJE.MortgageArmvsFixed=function(p){var g=KJE;var c=KJE.gLegend;var j=KJE.inputs.items;this.ARM_ADJUST_ANNUALLY=KJE.parameters.get("ARM_ADJUST_ANNUALLY",true);this.ARM_ADJUST_AT_MONTHS_FIXED=KJE.parameters.get("ARM_ADJUST_AT_MONTHS_FIXED",false);this.SHOW_ARM_FIELDS=KJE.parameters.get("SHOW_ARM_FIELDS",true);this.SHOW_PREPAYMENT=KJE.parameters.get("SHOW_PREPAYMENT",false);p.ADJUSTABLE_RATE[0]=false;p.INTEREST_ONLY[0]=false;p.LOAN_TYPE[0]=p.FIXED;p.ADJUSTABLE_RATE[1]=true;p.INTEREST_ONLY[1]=false;p.LOAN_TYPE[1]=p.ARM;p.ADJUSTABLE_RATE[2]=true;p.INTEREST_ONLY[2]=true;p.LOAN_TYPE[2]=p.IO;for(var n=0;n<3;n++){KJE.InputItem.AltHelpName="INTEREST_RATE";KJE.PercentSlider("INTEREST_RATE"+(n+1),"Interest rate",1,25,3);if(p.ADJUSTABLE_RATE[n]){KJE.InputItem.AltHelpName="ADJUSTABLE_RATE_CAP";KJE.PercentSlider("ADJUSTABLE_RATE_CAP"+(n+1),"Interest rate cap",5,25,3);KJE.InputItem.AltHelpName="ADJUSTABLE_RATE_INCR";KJE.PercentSlider("ADJUSTABLE_RATE_INCR"+(n+1),"Expected Adjustment",-3,3,2);KJE.InputItem.AltHelpName="ADJUSTABLE_RATE_FEQ";KJE.NumberSlider("ADJUSTABLE_RATE_FEQ"+(n+1),"Adjustment frequency",1,12,0);if(this.ARM_ADJUST_ANNUALLY||this.ARM_ADJUST_AT_MONTHS_FIXED){j["ADJUSTABLE_RATE_FEQ"+(n+1)].hide()}KJE.InputItem.AltHelpName="ADJUSTABLE_MONTHS_FIXED";KJE.NumberSlider("ADJUSTABLE_MONTHS_FIXED"+(n+1),"Months rate fixed",1,360,0)}if(n>0&&this.SHOW_PREPAYMENT){KJE.InputItem.AltHelpName="PREPAYMENT";KJE.DollarSlider("PREPAYMENT"+(n+1),"Prepayment",0,50000,0,0,7)}}KJE.InputItem.AltHelpName=null;KJE.MortgageAmtSlider("LOAN_AMOUNT","Mortgage amount");KJE.MortgageTermDropBoxSlider("TERM","Term in years");KJE.Radioboxes("BY_YEAR","Report amortization",true,"Annually","Monthly");var k=KJE.gNewGraph(KJE.gCOLUMN,"GRAPH1",true,false,KJE.colorList[1],KJE.parameters.get("MSG_GRAPH_TITLE1","Monthly Payment by Mortgage Type"));k._showItemLabel=true;k._legend._iOrientation=c.TOP_RIGHT;var b=KJE.parameters.get("MSG_DROPPER_TITLE","Fixed Rate Mortgage:");var e=KJE.parameters.get("MSG_DROPPER_CLOSETITLE","Monthly payment KJE1");var f=function(){return b+"|"+KJE.subText(KJE.getKJEReplaced(e,g.dollars(p.MONTHLY_PI[0],2)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("INPUTS",true,f,f),KJE.colorList[0]);if(KJE.parameters.get("SHOW_THREE_LOANS",true)){var q=KJE.parameters.get("MSG_DROPPER2_TITLE","Fully amortizing ARM:");var h=KJE.parameters.get("MSG_DROPPER2_CLOSETITLE","Initial payment KJE1");var o=function(){return q+"|"+KJE.subText(KJE.getKJEReplaced(h,g.dollars(p.MONTHLY_PI[1],2)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("INPUTS2",false,o,o),KJE.colorList[0])}if(p.SHOW_INTEREST_ONLY){var a=KJE.parameters.get("MSG_DROPPER3_TITLE","Interest only ARM:");var d=KJE.parameters.get("MSG_DROPPER3_CLOSETITLE","Initial payment KJE1");var m=function(){return a+"|"+KJE.subText(KJE.getKJEReplaced(d,g.dollars(p.MONTHLY_PI[2]+p.PREPAYMENT[2],2)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("INPUTS3",false,m,m),KJE.colorList[0])}};KJE.MortgageArmvsFixed.prototype.setValues=function(c){var a=KJE.inputs.items;for(var b=0;b<3;b++){c.INTEREST_RATE[b]=a["INTEREST_RATE"+(b+1)].getValue();if(c.ADJUSTABLE_RATE[b]){c.ADJUSTABLE_RATE_CAP[b]=a["ADJUSTABLE_RATE_CAP"+(b+1)].getValue();c.ADJUSTABLE_RATE_INCR[b]=a["ADJUSTABLE_RATE_INCR"+(b+1)].getValue();c.ADJUSTABLE_MONTHS_FIXED[b]=a["ADJUSTABLE_MONTHS_FIXED"+(b+1)].getValue();if(this.ARM_ADJUST_AT_MONTHS_FIXED){c.ADJUSTABLE_RATE_FEQ[b]=c.ADJUSTABLE_MONTHS_FIXED[b]}else{if(this.ARM_ADJUST_ANNUALLY){c.ADJUSTABLE_RATE_FEQ[b]=12}else{c.ADJUSTABLE_RATE_FEQ[b]=a["ADJUSTABLE_RATE_FEQ"+(b+1)].getValue()}}if(b>0&&this.SHOW_PREPAYMENT){c.PREPAYMENT[b]=a["PREPAYMENT"+(b+1)].getValue()}}}c.TERM=Math.round(a.TERM.getValue());c.LOAN_AMOUNT=a.LOAN_AMOUNT.getValue();c.BY_YEAR=a.BY_YEAR.getValue()};KJE.MortgageArmvsFixed.prototype.refresh=function(e){var d=KJE;var b=KJE.inputs.items;var a=KJE.gGraphs[0];a.removeAll();a.setGraphCategories(e.cats);for(var c=0;c<e.DS_PAYMENTS.length;c++){a.add(new KJE.gGraphDataSeries(e.DS_PAYMENTS[c],e.LOAN_TYPE[c],a.getColor(c+1)))}a.paint()};KJE.InputScreenText=" <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-LOAN_AMOUNT'><input id='KJE-LOAN_AMOUNT' /></div> <div id='KJE-C-TERM'>**TERM**</div> <div id='KJE-C-INTEREST_RATE1'><input id='KJE-INTEREST_RATE1' /></div> <div id='KJE-C-BY_YEAR'><input id='KJE-BY_YEAR1' type=radio name=BY_YEAR /><input id='KJE-BY_YEAR2' type=radio name=BY_YEAR /></div> <div style='height:10px'></div> </div> <div id=KJE-D-INPUTS2><div id=KJE-P-INPUTS2>Input information:</div></div> <div id=KJE-E-INPUTS2 > <div id='KJE-C-INTEREST_RATE2'><input id='KJE-INTEREST_RATE2' /></div> <div id='KJE-C-ADJUSTABLE_MONTHS_FIXED2'><input id='KJE-ADJUSTABLE_MONTHS_FIXED2' /></div> <div id='KJE-C-ADJUSTABLE_RATE_FEQ2'><input id='KJE-ADJUSTABLE_RATE_FEQ2' /></div> <div id='KJE-C-ADJUSTABLE_RATE_INCR2'><input id='KJE-ADJUSTABLE_RATE_INCR2' /></div> <div id='KJE-C-ADJUSTABLE_RATE_CAP2'><input id='KJE-ADJUSTABLE_RATE_CAP2' /></div> <div style='height:10px'></div> </div> <div id=KJE-D-INPUTS3><div id=KJE-P-INPUTS3>Input information:</div></div> <div id=KJE-E-INPUTS3 > <div id='KJE-C-INTEREST_RATE3'><input id='KJE-INTEREST_RATE3' /></div> <div id='KJE-C-ADJUSTABLE_MONTHS_FIXED3'><input id='KJE-ADJUSTABLE_MONTHS_FIXED3' /></div> <div id='KJE-C-ADJUSTABLE_RATE_FEQ3'><input id='KJE-ADJUSTABLE_RATE_FEQ3' /></div> <div id='KJE-C-ADJUSTABLE_RATE_INCR3'><input id='KJE-ADJUSTABLE_RATE_INCR3' /></div> <div id='KJE-C-ADJUSTABLE_RATE_CAP3'><input id='KJE-ADJUSTABLE_RATE_CAP3' /></div> <div style='height:10px'></div> </div> **GRAPH1** ";KJE.DefinitionText=' <div><dt>Fixed Rate Mortgage</dt><dd>A fixed rate mortgage has the same interest rate and monthly payment throughout the term of the mortgage. The payment is calculated to payoff the mortgage balance at the end of the term. The most common terms are 15 years and 30 years.</dd></div> <div><dt>Fully Amortizing LIBOR ARM</dt><dd>This is an adjustable rate mortgage (ARM) that uses London Interbank Offered Rate (LIBOR) as its base index. The term is typically 30 years. After any fixed interest rate period has passed, the interest rate and payment adjusts annually based on the LIBOR rate. <div class=KJECenter> <div class=KJEReportTableDiv style="width:95%"><table class=KJEReportTable> <tr class=KJEHeaderRow><th class=KJEHeading colspan=2>Common Adjustable Rate Mortgages</th></tr> <tr class="KJEFooterRow"><td class="KJELabel KJECellBorder KJECell40">ARM Type</td><td class="KJELabel KJECell60 KJECenter">Months Fixed</td></tr> <tr class="KJEEvenRow"><td class="KJECellBorder KJELabel">10/1 ARM</td><td class="KJECell KJELeft">Fixed for 120 months, adjusts annually for the remaining term of the loan.</td></tr> <tr class="KJEOddRow"><td class="KJECellBorder KJELabel">7/1 ARM</td><td class="KJECell KJELeft">Fixed for 84 months, adjusts annually for the remaining term of the loan.</td></tr> <tr class="KJEEvenRow"><td class="KJECellBorder KJELabel">5/1 ARM</td><td class="KJECell KJELeft">Fixed for 60 months, adjusts annually for the remaining term of the loan.</td></tr> <tr class="KJEOddRow"><td class="KJECellBorder KJELabel">3/1 ARM</td><td class="KJECell KJELeft">Fixed for 36 months, adjusts annually for the remaining term of the loan.</td></tr> </table></div> </div></dd> </div> <div><dt>LIBOR Interest Only ARM</dt><dd>An Interest Only ARM only requires monthly interest payments. Since you are not paying any principal, as you are with the other two types of mortgages described above, this can lower your monthly payment. However, since your mortgage\'s principal balance is not decreased, you will have a balloon payment at the end of the mortgage\'s term. Like a Fully Amortizing ARM, an Interest Only ARM will often have a period where the interest rate is fixed, and then it is adjusted annually. An Interest Only ARM will also have a maximum interest rate that it will not exceed. This calculator uses a maximum interest rate of 12%.</dd></div> <div id=\'KJE-D-LOAN_AMOUNT\' ><dt>Mortgage amount</dt><dd>Expected balance for your mortgage.</dd></div> <div id=\'KJE-D-TERM\' ><dt>Term in years</dt><dd>The number of years over which you will repay this mortgage. The most common mortgage terms are 15 years and 30 years. Please note that for the Interest Only ARM you will have a balloon payment for the entire principal balance at the end of the loan term.</dd></div> <div id=\'KJE-D-ADJUSTABLE_RATE_INCR\' ><dt>Expected rate change</dt><dd>The annual adjustment you expect in your ARM. The range for this calculator is minus 3% to plus 3%. Use a negative value if you believe interest rates will decrease, a positive value if you believe they will increase.</dd></div> <div id=\'KJE-D-INTEREST_RATE\' ><dt>Interest rate</dt><dd>Annual interest rate for each mortgage type. Typically an ARM will have a lower interest rate than a fixed rate mortgage. The rate of an Interest Only ARM will vary by lender.</dd></div> <div id=\'KJE-D-ADJUSTABLE_MONTHS_FIXED\' ><dt>Months rate fixed</dt><dd>This is the number of months the rate is fixed for an ARM. During this period the interest rate and the monthly payment will remain fixed. The rate will then adjust annually by the expected rate change.</dd></div> <div id=\'KJE-D-ADJUSTABLE_RATE_CAP\' ><dt>Interest rate cap</dt><dd>This is the maximum interest rate for this mortgage. The mortgage\'s interest rate will never exceed the interest rate cap.</dd></div> <div id=\'KJE-D-MONTHLY_PAYMENT\' ><dt>Monthly payment</dt><dd>Monthly principal and interest payment (PI) for the Fixed Rate Mortgage and the Fully Amortizing ARM. This is an interest only payment for an Interest Only ARM.</dd></div> ';KJE.ReportText=' <!--HEADING "ARM vs. Fixed Rate Mortgage Results" HEADING--> <h2 class=\'KJEReportHeader KJEFontHeading\'>A LIBOR Fully Amortizing LIBOR ARM could save you SAVINGS_ARM_MONTH per month. An Interest Only LIBOR ARM could save you as much as SAVINGS_IO_MONTH per month.</h2> A LOAN_AMOUNT Fixed Rate Mortgage with a term of TERM years at INTEREST_RATE0 has a monthly payment of MONTHLY_PI0. If you were to finance this mortgage with a Fully Amortizing LIBOR ARM at INTEREST_RATE1 the monthly payment would be MONTHLY_PI1, saving you SAVINGS_ARM_MONTH per month. An Interest Only LIBOR ARM at INTEREST_RATE2 has a MONTHLY_PI2 monthly payment. This could save you SAVINGS_IO_MONTH per month over a Fixed Rate Mortgage. <div class=KJEReportTableDiv><table class=KJEReportTable> <tr class=KJEHeaderRow><th class=KJEHeading COLSPAN=3>LIBOR ARM vs. Fixed Rate Mortgage</th></tr> <tr class=KJEHeaderRow><th class="KJEStrong KJECellBorder">&nbsp;</th><th class="KJELabel KJECellBorder KJECell25">Fully Amortizing LIBOR ARM</th><th class="KJELabel KJECell25">Interest Only LIBOR ARM</th></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder KJECell50">Initial savings on monthly payment</td><td class="KJECell KJECellBorder">SAVINGS_ARM_MONTH</td><td class="KJECell">SAVINGS_IO_MONTH</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Payment savings first year</td><td class="KJECell KJECellBorder">SAVINGS_ARM_FIRST_YEAR</td><td class="KJECell">SAVINGS_IO_FIRST_YEAR</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Payment savings for MSG_FIVE years</td><td class="KJECell KJECellBorder">SAVINGS_ARM_FIVE_YEAR</td><td class="KJECell">SAVINGS_IO_FIVE_YEAR</td></tr> </table> </div> **GRAPH** BREAK_EVEN_NOTE This only applies to the Fully Amortizing LIBOR ARM vs. Fixed Rate Mortgage. <div class=KJEReportTableDiv><table class=KJEReportTable> <tr class=KJEHeaderRow><th class=KJEHeading COLSPAN=4>Results Summary</th></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder KJECell25">&nbsp;</th><th class="KJELabel KJECellBorder KJECell25">Fixed Rate Mortgage</th><th class="KJELabel KJECellBorder KJECell25">Fully Amortizing LIBOR ARM</th><th class="KJELabel KJECell25">Interest Only LIBOR ARM</th></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Loan amount</td><td class="KJECell KJECellBorder" >LOAN_AMOUNT</td><td class="KJECell KJECellBorder" >LOAN_AMOUNT</td><td class="KJECell" >LOAN_AMOUNT</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Term</td><td class="KJECell KJECellBorder" >TERM years</td><td class="KJECell KJECellBorder" >TERM years</td><td class="KJECell" >TERM years</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder " VALIGN=top>Interest rate</td><td class="KJECell KJECellBorder" VALIGN=top>INTEREST_RATE0</td><td class="KJECell KJECellBorder" VALIGN=top>INTEREST_RATE1<br>Rate is fixed for ADJUSTABLE_MONTHS_FIXED1 months and then is adjusted by ADJUSTABLE_RATE_INCR1 every ADJUSTABLE_RATE_FEQ1 months, up to a maximum of ADJUSTABLE_RATE_CAP1. The highest rate actually charged was HIGHEST_RATE1.</td><td class="KJECell" VALIGN=top>INTEREST_RATE2<br>Rate is fixed for ADJUSTABLE_MONTHS_FIXED2 months and then is adjusted by ADJUSTABLE_RATE_INCR2 every ADJUSTABLE_RATE_FEQ2 months, up to a maximum of ADJUSTABLE_RATE_CAP2. The highest rate actually charged was HIGHEST_RATE2.</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Initial monthly payment</td><td class="KJECell KJECellBorder" >MONTHLY_PI0</td><td class="KJECell KJECellBorder" >MONTHLY_PI1</td><td class="KJECell" >MONTHLY_PI2</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">MSG_FIVE_YEAR_PAYMENT</td><td class="KJECell KJECellBorder" >FIVE_YEAR_PAYMENT0</td><td class="KJECell KJECellBorder" >FIVE_YEAR_PAYMENT1</td><td class="KJECell" >FIVE_YEAR_PAYMENT2</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder"><br>First year totals:</td><td class="KJECell KJECellBorder">&nbsp;</td><td class="KJECell KJECellBorder">&nbsp;</td><td class="KJECell ">&nbsp;</td></tr> <tr class=KJEOddRow><td class="KJECell KJECellBorder">&nbsp;&nbsp;Interest<br>&nbsp;&nbsp;Principal<br>&nbsp;&nbsp;Payments<br><br></td><td class="KJECell KJECellBorder" >FIRST_YEAR_INTEREST0<br>FIRST_YEAR_PRINCIPAL0<br>FIRST_YEAR_TOTAL0</td><td class="KJECell KJECellBorder" >FIRST_YEAR_INTEREST1<br>FIRST_YEAR_PRINCIPAL1<br>FIRST_YEAR_TOTAL1</td><td class="KJECell" >FIRST_YEAR_INTEREST2<br>FIRST_YEAR_PRINCIPAL2<br>FIRST_YEAR_TOTAL2</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder"><br>MSG_FIVE_YEAR_TOTALS:</td><td class="KJECell KJECellBorder">&nbsp;</td><td class="KJECell KJECellBorder">&nbsp;</td><td class="KJECell ">&nbsp;</td></tr> <tr class=KJEEvenRow><td class="KJECell KJECellBorder">&nbsp;&nbsp;Interest<br>&nbsp;&nbsp;Principal<br>&nbsp;&nbsp;Payments<br><br></td><td class="KJECell KJECellBorder" >FIVE_YEAR_INTEREST0<br>FIVE_YEAR_PRINCIPAL0<br>FIVE_YEAR_TOTAL0</td><td class="KJECell KJECellBorder" >FIVE_YEAR_INTEREST1<br>FIVE_YEAR_PRINCIPAL1<br>FIVE_YEAR_TOTAL1</td><td class="KJECell" >FIVE_YEAR_INTEREST2<br>FIVE_YEAR_PRINCIPAL2<br>FIVE_YEAR_TOTAL2</td></tr> <tr class=KJEFooterRow><td class="KJELabel KJECellBorder">Total interest</td><td class="KJECellStrong KJECellBorder" >TOTAL_INTEREST0</td><td class="KJECellStrong KJECellBorder" >TOTAL_INTEREST1</td><td class="KJECellStrong" >TOTAL_INTEREST2</td></tr> <tr class=KJEFooterRow><td class="KJELabel KJECellBorder">Total payments</td><td class="KJECellStrong KJECellBorder" >TOTAL_PAYMENTS0</td><td class="KJECellStrong KJECellBorder" >TOTAL_PAYMENTS1</td><td class="KJECellStrong" >TOTAL_PAYMENTS2</td></tr> <tr class=KJEFooterRow><td class="KJELabel KJECellBorder">Ending balance </td><td class="KJECellStrong KJECellBorder" >ENDING_BALANCE0</td><td class="KJECellStrong KJECellBorder" >ENDING_BALANCE1</td><td class="KJECellStrong" >ENDING_BALANCE2</td></tr></table> </div> <h2 class=\'KJEScheduleHeader KJEFontHeading\'>Payment schedule</h2> **REPEATING GROUP** ';