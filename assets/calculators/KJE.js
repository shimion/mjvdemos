if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
}
KJE = new Object();
KJE.lang = "EN";
KJE.initFired = false;
KJE.InReport = false;
KJE.replace = function (c, b, a) {
    return (a ? a.split(c).join(b) : "")
};
KJE.getTermLabel = function (d, c) {
    var e = Math.floor(d / 12);
    var a = (d % 12);
    var b = KJE;
    return (c || e > 0 ? e + " " + (e == 1 ? b.MSG_YEAR_LBL : b.MSG_YEARS_LBL) : "") + (c || (e > 0 && a > 0) ? " " + b.MSG_AND_LBL + " " : "") + (c || a > 0 ? a + " " + (a == 1 ? b.MSG_MONTH_LBL : b.MSG_MONTHS_LBL) : "")
};
KJE.dateFormat = function (a) {
    return (a == null ? "" : (a.getMonth() + 1) + "/" + (a.getDate()) + "/" + a.getFullYear())
};
var ua = navigator.userAgent;
KJE.device = {
    iphone: ua.match(/(iPhone|iPod|iPad)/),
    silk: ua.match(/Silk/),
    blackberry: ua.match(/BlackBerry/),
    android: ua.match(/Android/)
};
KJE.deviceUseNumberType = ua.match(/(iPhone|iPod|iPad|Silk|Android)/);
KJE.deviceInputPad = (KJE.deviceUseNumberType ? 10 : 0);
KJE.deviceMobile = ua.match(/(iPhone|iPod|iPad|Silk|Android)/);
KJE.deviceNoTransition = ua.match(/(iPhone|iPod|iPad|BlackBerry|Silk|Android)/);
KJE.IE7 = (navigator.appVersion.indexOf("MSIE 7.") != -1);
KJE.IE8 = (navigator.appVersion.indexOf("MSIE 8.") != -1);
KJE.IE7and8 = (KJE.IE7 || KJE.IE8) && (!window.addEventListener);
if (!KJE.IE7and8) {
    KJE.IE7 = false
}
KJE.IE = (navigator.appVersion.indexOf("MSIE") != -1);
KJE.VML = (KJE.IE7and8 || (typeof G_vmlCanvasManager != "undefined"));
KJE.CalcDelay = 100;
KJE.CalcDelayVML = 1000;
KJE.CalculatorWidthMax = 640;
KJE.CalculatorWidthMin = 300;
KJE.ShowDefinitions = true;
KJE.ShowCalculateButton = true;
KJE.ShowPrintButton = true;
KJE.IncludeDefinitions = true;
KJE.CalculatorWidth = KJE.CalculatorWidthMax;
KJE.SliderWidthAdjust = 0;
KJE.ErrorBackground = "#FF7777";
KJE.IncompleteBackground = "#FFFF77";
KJE.CalculatorName = "Calculator Title";
KJE.bUseInputForm = !KJE.IE7and8;
KJE.CommandButtons = "<div id='KJECommandButtons'><input type=button class=KJECommandButton  name=KJECalculate id=KJECalculate value='**LBL_CALCULATE**' /><input **VIEWREPORT** class=KJECommandButton  id=KJEViewReport name=KJEViewReport value='**LBL_VIEWREPORT**' /></div>";
KJE.ReportButtons = "<div align=center><div id='KJEReportButtons'><input type=button class=KJECommandButton  name=KJEPrint id=KJEPrintReport value=\"**LBL_PRINTREPORT**\" /><input type=button  class=KJECommandButton  id=KJEHideReport name=KJEHideReport value='**LBL_HIDEREPORT**' /></div></div>";
KJE.CommandButtonsFixed = false;
KJE.CommandButtonsTop = true;
KJE.CommandButtonOffset = 20;
KJE.Scroll = true;
KJE.ScrollMinimum = 23;
KJE.ReportHeader = "<div class='KJEReportTitleHeader'>**REPORT_TITLE**</div>";
KJE.ReportStyleDefault = "<style>  BODY, TABLE, TD, TH, UL, OL, DD, DL, P, BR { font-family: helvetica, arial, sans-serif; font-size: 10pt; } H1 { font-family: helvetica, arial, sans-serif; font-size: 13pt; font-weight: bold; }DT { font-family: helvetica, arial, sans-serif; font-size: 10pt; font-weight: bold;  }P.footer { font-family: helvetica, arial, sans-serif; font-size: 9pt; } DIV.large { font-family: helvetica, arial, sans-serif; font-size: 13pt; font-weight: bold; }</style>";
KJE.iDecimal = 2;
KJE.ReportFooter = "<div class=KJECenter><p></p><strong>&copy; 1998-2014 KJE Computer Solutions, LLC</strong><br/>Financial Calculators at <a src='http://www.dinkytown.net'>www.dinkytown.net</a><br/>(612) 331-2291 <br/>1730 New Brighton Blvd. PMB #111<br/>Minneapolis, MN 55413<p class='KJEReportFooter KJECenter'>KJE Computer Solutions, LLC's information and interactive calculators are made available to you as self-help tools for your independent use and are not intended to provide investment advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes.  We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues. More <a href='http://www.dinkytown.net/money/information.html'>Information</a>.</p></div>";
KJE.ReportExtraFooter = "";
KJE.ReportStyleSheet = "KJE.css";
KJE.ReportStyleSheet2 = "KJESiteSpecific.css";
KJE.KJEReportBodyClass = "class=KJEReportBody";
KJE.ReportDocumentStart = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>**REPORT_TITLE**</title><meta name="viewport" content="height=device-height,width=device-width,initial-scale=1">**REPORT_DEFAULT_STYLE**<link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET**" /><link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET2**" /></head><body ' + KJE.KJEReportBodyClass + ">**HEADER**";
KJE.ReportDocumentEnd = "**FOOTER** <script>setTimeout(function() {window.print(); window.close();}, 1000)<\/script></body></html>\n";
KJE.CalculatorTitleTemplate = null;
KJE.CalclatorTitle = null;
KJE.CalculatorTitleClass = "KJETitle KJEFontHeading KJETitleExtra";
KJE.CalculatorTitleErrorClass = "KJETitle KJEError";
KJE.CalculatorTitleMissingClass = KJE.CalculatorTitleErrorClass;
KJE.CalculatorTableClass = "KJECalculatorTable";
KJE.CalculatorTableReportClass = "KJECalculatorReportTable";
KJE.CalcTitlePadding = 20;
KJE.ClearColor = "#FFFFFF";
KJE.colorList = ["#FFFFFF", "#FFFFFF", "#DDDDDD", "#BE4262", "#FABB50", "#DDCCDD", "#CCCCCC", "#CCCCDD", "#CCDDCC", "#CCDDDD", "#CCCCDD"];
KJE.colorRGBackground = "#FFFFFF";
KJE.DefinitionsH1 = "<h2 class='KJEDefinitionsHeader KJEFontHeading'>**LBL_DEFINITIONS**</h2>";
KJE.LBL_DEFINITIONS = "Definitions";
KJE.Colon = ":";
KJE.CalculatorTitleEntry = "Please enter or select a value in all fields:";
KJE.CalculatorTitleCalc = "Press 'Calculate' to view your results.";
KJE.ButtonCalculate = "Calculate";
KJE.ButtonViewReport = "View Report";
KJE.ButtonHideReport = "Hide Report";
KJE.ButtonPrintReport = "Print";
KJE.sCurrency = "Dollars";
KJE.MSG_YEARS_LBL = "years";
KJE.MSG_YEAR_LBL = "year";
KJE.MSG_MONTHS_LBL = "months";
KJE.MSG_MONTH_LBL = "month";
KJE.MSG_AND_LBL = "and";
KJE.MSG_YES = "Yes";
KJE.MSG_NO = "No";
KJE.YES = "yes";
KJE.NO = "no";
KJE.MSG_EXCEEDS_LIMIT_OF_RANGE = "KJE1 is limited to KJE2";
KJE.MSG_UNDER_LIMIT_OF_RANGE = "KJE1 can't be less than KJE2";
KJE.MSG_INVALID_DATE = "Please enter a valid date for KJE1";
KJE.MSG_MISSING_ITEM = "Please enter a value for KJE1";
KJE.MSG_GRAPH = "**GRAPH**";
KJE.MSG_ADA_GRAPH = "<figure style='margin:0; padding:0;'><figcaption class=KJEAccessible>Please view the report to see detailed results in tabular form.</figcaption>" + KJE.MSG_GRAPH + "</figure>";
KJE.SplashContent = "Financial Calculators from<br />Dinkytown.net";
KJE.Default = new Object();
KJE.Default.RORMarket = 7;
KJE.Default.RORRetire = 4;
KJE.Default.RORSave = 0.25;
KJE.Default.RateCard = 16;
KJE.Default.RatePersonal = 7.5;
KJE.Default.RateFix15 = 4;
KJE.Default.RateFix30 = 4.5;
KJE.Default.RateAdj = 4;
KJE.Default.RateAuto = 7;
KJE.Default.RateAutoLow = 1.9;
KJE.Default.MortgageAmt = 200000;
KJE.Default.HomePrice = 220000;
KJE.Default.StateTaxRate = 8;
KJE.Default.InflationRate = 3;
KJE.Default.MortgageMin = 0;
KJE.Default.MortgageMax = 140404100;
KJE.Default.MortgageRateMin = 1;
KJE.Default.MortgageRateMax = 25;
KJE.Default.MortgageTerm = 30;
KJE.Default.MortgageTermMin = 1;
KJE.Default.MortgageTermMax = 40;
KJE.Default.MortgageTermIncrement = 5;
KJE.Default.MortgageShowAll = true;
KJE.Default.MortgageShowAllMax = 25;
KJE.Default.InvestRateMin = 0;
KJE.Default.InvestRateMax = 20;
KJE.Default.InvestSliderRateMax = 12;
KJE.Default.InflationRateMin = 0;
KJE.Default.InflationRateMax = 20;
KJE.Default.InflationSliderRateMax = 12;
KJE.calcCleared = false;
KJE.CalculatorDiv = "KJECalculatorDiv";
KJE.AllContent = "KJEAllContent";
KJE.CalcTimeout = 0;
KJE.CalcTitleHeight = 0;
KJE.Error = false;
KJE.InComplete = false;
KJE.Calculating = false;
KJE.gGraphs = new Array(0);
KJE.gReportGraphs = new Array(0);
KJE.iOldWidth = -1;
KJE.bSizeInitialized = false;
KJE.ResizeTimeOut = null;
KJE.iUrekau = [-783901354, 1332498680, 0, 1505998205, 380075612];
KJE.InputScreenText = false;
KJE.DefinitionText = false;
KJE.ReportText = false;
KJE.MSG_ADA_TABLE = "role='presentation'";
KJE.resize = function () {
    var a = KJE;
    if (!a.device.iphone) {
        if (a.iOldWidth != window.innerWidth && a.bSizeInitialized) {
            if (a.ResizeTimeOut != null) {
                clearTimeout(a.ResizeTimeOut)
            }
            a.ResizeTimeOut = setTimeout(a.calcResize, 500)
        }
        a.bSizeInitialized = true
    }
};
KJE.chjilap = function (d) {
    var b = 0;
    var e = "";
    if (d.length == 0) {} else {
        for (var a = 0; a < d.length; a++) {
            e = d.charCodeAt(a);
            b = ((b << 5) - b) + e;
            b = b & b
        }
    }
    return b
};
KJE.InputSetup = function (g, j) {
    var c = KJE;
    var h = "**COMMAND_BUTTONS**";
    var d = (c.IE7and8 || c.deviceMobile || c.CommandButtonsFixed) && c.CommandButtonsTop;
    var a = g.indexOf(h);
    for (var e = 1; e < 10; e++) {
        g = c.replace("**GRAPH" + e + "**", c.replace(c.MSG_GRAPH, "<div id=KJE-C-GRAPH" + e + " style='width:100%;'><canvas id=KJE-G-GRAPH" + e + "></canvas></div>", c.VML ? " " + c.MSG_GRAPH + " " : KJE.MSG_ADA_GRAPH), g)
    }
    var f = "<!--KJEMAIN--><div id='KJEGuiDataPoint' style='top: 0; left: 0;'></div>";
    if (c.ExtraHeader) {
        f += c.ExtraHeader
    }
    if (c.bUseInputForm) {
        f += "<form name=KJECalcForm id=KJECalcForm onsubmit='return false;'>"
    }
    f += "<div id=KJECalculatorScreenSize align=center style='position:relative; width:100%'>";
    f += (a < 0 && d ? h : "");
    f += "<div id='KJEWait' class=KJEWait></div>";
    f += "<div id=KJECalculatorTable class='KJECalculatorTable'>";
    f += "<div id=KJECalculatorTableCell class='KJECalculator KJEEase' align=center style='width:100%'>";
    f += "<span id=KJESplash class=KJEBold style='color:#333333'><br /><br /><br />" + c.SplashContent + "<p class=KJEFooter>Financial Calculators &copy;1998-2013 KJE Computer Solutions, LLC</p><br /><br /><br /><br /><br /><br /><br /><br /></span>";
    f += "<div id='KJEMain' class=KJEMain >";
    f += "<div id='KJETitle' class=" + c.CalculatorTitleClass + ">" + c.CalculatorTitleShow + "</div>";
    f += "<div id='KJEInputs' class='KJEInputs'>" + g + "</div>";
    f += "</div>";
    f += "</div>";
    f += "</div>";
    f += (a < 0 && !d ? h : "");
    f += "</div>";
    if (1) {
        f += "</form>"
    }
    f += "<!--KJEMAINEND-->";
    f += "<div id=KJEReport class=KJEReport width=100%>";
    f += (a >= 0 ? "**REPORT_BUTTONS**" : "");
    f += "<div id=KJEReportTop></div>";
    for (e = 0; e < c.ReportGraphCount; e++) {
        f += "<div align=center><div id=KJE-C-REPORTGRAPH" + e + ' style="page-break-inside: avoid; margin-top:15px; height:' + c.gHeight + 'px;"><!--GRAPH' + e + "--><canvas id=KJE-G-REPORTGRAPH" + e + "></canvas><!--GRAPHEND--></div></div>";
        f += "<div id=KJEReportMiddle" + e + "></div>"
    }
    if (c.ExtraFooter) {
        f += c.ExtraFooter(j)
    }
    f += "</div>";
    if (c.IncludeDefinitions) {
        f += "<!--KJEDEFINITIONS--><div width=100% align=center >";
        f += "<div id=KJEDefinitions class=KJEDefinitions width=100%>" + c.DefinitionsH1.replace("**LBL_DEFINITIONS**", c.LBL_DEFINITIONS);
        f += "<dl>" + j + "</dl>";
        f += "</div>";
        f += "</div><!--KJEDEFINITIONSEND-->"
    }
    f = f.replace("**REPORT_BUTTONS**", c.ReportButtons.replace("**LBL_HIDEREPORT**", c.ButtonHideReport).replace("**LBL_PRINTREPORT**", c.ButtonPrintReport));
    return f.replace(h, c.CommandButtons.replace("**LBL_VIEWREPORT**", c.ButtonViewReport).replace("**LBL_CALCULATE**", c.ButtonCalculate).replace("**VIEWREPORT**", (c.bUseInputForm ? "type=submit" : "type=button")))
};
KJE.InTask = false;
KJE.inCommandTask = function (b) {
    var a = KJE;
    if (a.InTask && b) {
        return true
    } else {
        if (b) {
            a.Wait.style.top = a.CalculatorTable.offsetTop + 23 + "px";
            a.Wait.style.right = a.CalculatorTable.offsetLeft + 10 + "px";
            a.Wait.style.display = "";
            a.InTask = true;
            return false
        } else {
            a.Wait.style.display = "none";
            a.InTask = false;
            return false
        }
    }
};
KJE.setTitle = function (d, h) {
    var b = KJE;
    var a = b.subheader;
    var e = b.kujiae;
    var g = b.CalcTitle;
    var f = b.kujaleip;
    var c = b.UKuejna;
    if (!b.CalcTitleWidth) {
        b.CalcTitleWidth = g.offsetWidth - b.CalcTitlePadding * 2
    }
    if (f) {
        g.innerHTML = c + e + a;
        g.className = b.CalculatorTitleErrorClass
    } else {
        KJE.TrialReplace1 = 1;
        g.innerHTML = d + a;
        if (h) {
            g.className = h
        } else {
            g.className = b.CalculatorTitleClass
        }
    }
    b.Calculator.style.height = b.Main.offsetHeight + "px"
};
KJE.getKJEReplaced = function (a) {
    if (a || a == "") {
        for (var b = 1; b < arguments.length; b++) {
            a = a.replace("KJE" + (b), arguments[b])
        }
    } else {
        a = "";
        for (b = 0; b < arguments.length; b++) {
            a += arguments[b] + (b == arguments.length - 1 ? "" : ", ")
        }
    }
    return a
};
KJE.setTitleTemplate = function () {
    var a = KJE;
    var c = "";
    if (a.CalculatorTitleTemplate) {
        c = a.CalculatorTitleTemplate;
        for (var b = 0; b < arguments.length; b++) {
            c = c.replace("KJE" + (b + 1), arguments[b])
        }
        a.CalculatorTitleShow = c
    } else {
        a.CalculatorTitleShow = a.CalculatorTitle
    }
};
KJE.results = function (f, h) {
    var k = KJE;
    k.calcCleared = false;
    if (k.IE7and8) {
        k.Wait.style.display = "block"
    }
    if (k.CalcTimeout) {
        clearTimeout(k.CalcTimeout)
    }
    if (f) {
        if (k.inCommandTask(true)) {
            return
        }
        k.showInputs()
    }
    try {
        k.Error = false;
        k.InComplete = false;
        k.DataPointHide();
        var a = k.CalcControl;
        a.clear();
        k.GuiControl.setValues(a);
        var j = 0;
        var g = k.inputs.items;
        for (var e in g) {
            if (!g[e].validate()) {
                j++;
                k.InComplete = true;
                var d = k.getKJEReplaced(k.MSG_MISSING_ITEM, g[e]._sLabel)
            }
        }
        if (!k.InComplete) {
            if (h && a.initReport) {
                a.initReport()
            }
            a.calculate(h ? true : false);
            k.GuiControl.refresh(a);
            for (var e in k.droppers.items) {
                k.droppers.items[e].setText()
            }
            k.setTitle(k.CalculatorTitleShow)
        }
        if (k.InComplete) {
            k.calcClear(j > 1 ? k.CalculatorTitleEntry : d, k.CalculatorTitleMissingClass)
        }
    } catch (b) {
        k.Error = true;
        var c = b + " ";
        if (c.indexOf("NS_ERROR_FAILURE") < 1) {
            k.calcClear(c, k.CalculatorTitleErrorClass)
        }
    }
    if (k.IE7and8) {
        k.Wait.style.display = "none"
    }
    if (f) {
        setTimeout(function () {
            KJE.inCommandTask(false)
        }, 400)
    }
};
KJE.calcClear = function (c, f) {
    var a = KJE;
    var d = a.gGraphs;
    if (!c) {
        c = a.CalculatorTitleEntry
    }
    if (!f) {
        f = null
    }
    for (var e = 0; e < d.length; e++) {
        if (d[e]) {
            d[e].blank()
        }
    }
    for (var b in a.inputs.items) {
        if (a.inputs.items[b]._inputType == a.TypeLabel) {
            a.inputs.items[b].setText("")
        }
    }
    if (a.GuiControl.clear) {
        a.GuiControl.clear()
    }
    a.setTitle(c, f)
};
KJE.calcResize = function () {
    var a = KJE;
    if (a.reportViewable) {
        return
    }
    if (a.setWidth()) {
        var c = a.gGraphs;
        for (var b in a.inputs.items) {
            a.inputs.items[b].newWidth()
        }
        for (var d = 0; d < c.length; d++) {
            if (c[d]) {
                c[d].setWidth(true)
            }
        }
    }
};
KJE.dataChanged = function (a) {
    if (KJE.CalcTimeout) {
        clearTimeout(KJE.CalcTimeout)
    }
    if (KJE.VML) {
        if (!KJE.calcCleared && a) {
            KJE.calcClear(KJE.CalculatorTitleCalc);
            KJE.calcCleared = true
        }
        KJE.CalcTimeout = setTimeout(KJE.results, (a ? KJE.CalcDelayVML : KJE.CalcDelay))
    } else {
        KJE.CalcTimeout = setTimeout(KJE.results, KJE.CalcDelay)
    }
};
KJE.completeFade = function () {
    if (KJE.fade < 100) {
        KJE.fade += (KJE.device.iphone ? 100 : 4);
        KJE.Buttons.style.opacity = (KJE.fade / 100);
        KJE.Main.style.opacity = (KJE.fade / 100)
    } else {
        clearInterval(KJE.pace)
    }
};
KJE.Startfade = function () {
    if (KJE.fade < 100) {
        KJE.fade += 4;
        KJE.Splash.style.opacity = (1 - KJE.fade / 100)
    } else {
        clearInterval(KJE.pace);
        KJE.Splash.style.display = "none";
        KJE.fade = 0;
        KJE.pace = setInterval(KJE.completeFade, 10)
    }
};
KJE.showCalculator = function () {
    KJE.results(true);
    KJE.ms = (KJE.Main.style.opacity != 0 || KJE.Main.style.opacity == "");
    if (KJE.ms) {
        setTimeout(function () {
            KJE.Buttons.style.visibility = "visible";
            KJE.Main.style.visibility = "visible";
            KJE.Splash.style.display = "none"
        }, 500)
    } else {
        KJE.Buttons.style.opacity = 0;
        KJE.Main.style.opacity = 0;
        KJE.Splash.style.opacity = 1
    }
    KJE.fade = 0;
    KJE.pace = setInterval(KJE.Startfade, 10)
};
KJE.getOffset = function (c) {
    var b = 0;
    var a = 0;
    while (c && !isNaN(c.offsetLeft) && !isNaN(c.offsetTop)) {
        b += c.offsetLeft - c.scrollLeft;
        a += c.offsetTop - c.scrollTop;
        c = c.offsetParent
    }
    return {
        top: a,
        left: b
    }
};
KJE.util = {
    findPos: function (a) {
        var b = curtop = 0;
        if (a.offsetParent) {
            do {
                b += a.offsetLeft;
                curtop += a.offsetTop
            } while (a = a.offsetParent)
        }
        return [b, curtop]
    },
    getPageScroll: function () {
        var b, a;
        if (self.pageYOffset) {
            a = self.pageYOffset;
            b = self.pageXOffset
        } else {
            if (document.documentElement && document.documentElement.scrollTop) {
                a = document.documentElement.scrollTop;
                b = document.documentElement.scrollLeft
            } else {
                if (document.body) {
                    a = document.body.scrollTop;
                    b = document.body.scrollLeft
                }
            }
        }
        return [b, a]
    },
    findPosRelativeToViewport: function (c) {
        var b = this.findPos(c);
        var a = this.getPageScroll();
        return [b[0] - a[0], b[1] - a[1]]
    }
};
KJE.setWidth = function (b) {
    var a = KJE;
    var c = a.ScreenSize.clientWidth - 25;
    c = (a.CalculatorWidthMax < c ? a.CalculatorWidthMax : c);
    c = (c < a.CalculatorWidthMin ? a.CalculatorWidthMin : c);
    if (a.oldClientWidth != c) {
        a.oldClientWidth = a.CalculatorWidth = c;
        a.CalculatorTable.style.width = a.CalculatorWidth + "px";
        a.Calculator.style.height = a.Main.offsetHeight + "px";
        a.DataPoint.style.maxWidth = a.CalculatorWidth - 37 + "px";
        if (b) {
            a.Splash.style.width = c;
            a.oldClientWidth = 0
        }
        return true
    }
    return false
};
KJE.TypedArray = (typeof Float64Array != "undefined");
KJE.FloatArray = function (c) {
    if (KJE.TypedArray) {
        return new Float64Array(c)
    }
    var a = new Array(c);
    for (var b = 0; b < c; b++) {
        a[b] = 0
    }
    return a
};
KJE.IntArray = function (a) {
    if (KJE.TypedArray) {
        return new Int16Array(a)
    }
    return new Array(a)
};
KJE.init = function () {
    var c = KJE;
    if (c.initFired) {
        return
    }
    c.initFired = true;
    var y = c.iUrekau;
    var p = y.length;
    var j = location.hostname;
    var b = c.kujiae = j.replace(/^www\./i, "");
    var l = c.parameters;
    var A = document;
    var w = c.chjilap(b);
    c.kujaleip = true;
    for (var v = p - 1; v >= 0; v--) {
        if (w == y[v]) {
            c.kujaleip = false
        }
    }
    KJE.TrialReplace1 = 2;
    c.CalculatorTitleShow = c.CalculatorTitle = (l.get("TITLE_TEMPLATE", c.CalculatorTitle ? c.CalculatorTitle : document.title));
    c.AllContent = A.getElementById(c.AllContent);
    if (!c.ReportText) {
        var g = A.getElementById("KJEReportText");
        if (g) {
            c.ReportText = g.innerHTML;
            g.innerHTML = ""
        }
    }
    var q = KJE.definitions.items;
    var f = c.DefinitionText;
    for (var t in q) {
        f = c.replace(t, q[t], f)
    }
    if (c.parseDefinitions) {
        f = c.parseDefinitions(f)
    }
    c.DefinitionText = f;
    if (c.ReportProcess) {
        c.ReportText = c.ReportProcess(c.ReportText)
    }
    c.ReportGraphCount = 0;
    if (c.ReportText) {
        c.ReportText = c.replace("KJE_CURRENTDATE", c.dateFormat(new Date()), c.ReportText);
        var m = 0;
        while (true) {
            m = c.ReportText.indexOf(c.MSG_GRAPH, m);
            if (m >= 0) {
                c.ReportGraphCount++;
                m += c.MSG_GRAPH.length
            } else {
                break
            }
        }
    }
    if (c.parseInputs) {
        c.InputScreenText = c.parseInputs(c.InputScreenText)
    }
    c.AllContent.innerHTML = c.InputSetup(c.InputScreenText, f);
    c.inputsViewable = true;
    c.DataPoint = A.getElementById("KJEGuiDataPoint");
    c.Wait = A.getElementById("KJEWait");
    c.Report = A.getElementById("KJEReport");
    c.ReportTop = A.getElementById("KJEReportTop");
    c.ReportMiddle = new Array();
    for (v = 0; v < c.ReportGraphCount; v++) {
        c.ReportMiddle[v] = A.getElementById("KJEReportMiddle" + v)
    }
    c.Buttons = A.getElementById("KJECommandButtons");
    c.Calculate = A.getElementById("KJECalculate");
    c.PrintReport = A.getElementById("KJEPrintReport");
    c.ViewReport = A.getElementById("KJEViewReport");
    c.HideReport = A.getElementById("KJEHideReport");
    c.Inputs = A.getElementById("KJEInputs");
    c.Calculator = A.getElementById("KJECalculatorTableCell");
    c.ScreenSize = A.getElementById("KJECalculatorScreenSize");
    c.CalcTitle = A.getElementById("KJETitle");
    c.CalcTitle.style.padding = c.CalcTitlePadding + "px";
    c.Main = A.getElementById("KJEMain");
    c.Splash = A.getElementById("KJESplash");
    c.Definitions = A.getElementById("KJEDefinitions");
    if (c.Definitions && c.Definitions.lastChild) {
        var a = c.Definitions.lastChild.childNodes;
        var z = a.length;
        for (v = 0; v < z; v++) {
            var o = a[v];
            if (o.id && o.id.substr(0, 6) == "KJE-D-") {
                var x = o.id.substr(6).trim();
                var n = l.get("DFN_" + x, null);
                if (n == "REMOVE") {
                    o.innerHTML = "";
                    o.style.visibility = "hidden";
                    o.style.display = "none";
                    o.id = null
                } else {
                    if (n) {
                        if (o.lastChild) {
                            o.lastChild.innerHTML = n
                        }
                    }
                    var n = l.get("MSG_" + x, null);
                    if (n) {
                        if (o.firstChild) {
                            o.firstChild.innerHTML = n
                        }
                    }
                }
            }
        }
    }
    c.Inputs.style.display = "block";
    c.CalculatorTable = A.getElementById("KJECalculatorTable");
    if (c.DataPoint.addEventListener) {
        var r = "click";
        c.Calculate.addEventListener(r, c.calculateButtonAction, false);
        c.ViewReport.addEventListener(r, c.showReport, false);
        c.DataPoint.addEventListener(r, c.DataPointHide, false);
        if (c.PrintReport) {
            c.PrintReport.addEventListener(r, c.printTheReport, false)
        }
        if (c.HideReport) {
            c.HideReport.addEventListener(r, c.showReport, false)
        }
    } else {
        var r = "onclick";
        c.Calculate.attachEvent(r, c.calculateButtonAction);
        c.ViewReport.attachEvent(r, c.showReport);
        if (c.DataPointHide) {
            c.DataPoint.attachEvent(r, c.DataPointHide)
        }
        if (c.PrintReport) {
            c.PrintReport.attachEvent(r, c.printTheReport)
        }
        if (c.HideReport) {
            c.HideReport.attachEvent(r, c.showReport)
        }
    }
    c.Calculator.style.height = c.Calculator.offsetHeight + "px";
    if (c.IE7and8) {
        c.Buttons.style.visibility = "hidden";
        c.Main.style.visibility = "hidden";
        c.Splash.style.visibility = "visible"
    } else {
        c.Buttons.style.opacity = 0;
        c.Main.style.opacity = 0;
        c.Splash.style.opacity = 1
    }
    if (c.IE7and8 || c.CommandButtonsFixed) {
        c.Buttons.style.position = "relative";
        c.Buttons.style.top = c.CommandButtonOffset + "px"
    } else {
        c.Buttons.style.position = "absolute";
        c.Buttons.style.top = c.Calculator.offsetTop - c.CommandButtonOffset + "px"
    }
    if (window.addEventListener) {
        window.addEventListener("scroll", c.scrolled, false);
        window.addEventListener("resize", c.resize, false)
    }
    c.oldClientWidth = 0;
    c.setWidth(true);
    c.CalculatorTitleTemplate = l.get("TITLE_TEMPLATE", c.CalculatorTitleTemplate);
    var e = c.HeaderTitle = l.get("CALC_HEADER_TITLE", "");
    var u = c.HeaderDesc = l.get("CALC_HEADER_DESC", "");
    c.initialize();
    var s = A.getElementById("KJEHeaderContent");
    if (s) {
        var d = l.get("CALC_HEADER_DIV", "<div id=KJECalculatorTitle><h1>CALC_HEADER_TITLE</h1></div><div id=KJECalculatorDescription>CALC_HEADER_DESC</div>");
        s.innerHTML = d.replace("CALC_HEADER_TITLE", e).replace("CALC_HEADER_DESC", u)
    }
    if (c.customInit) {
        c.customInit(this)
    }
    setTimeout(c.showCalculator, 250)
};
KJE.scrolled = function () {
    if (!KJE.CommandButtonsFixed) {
        if (KJE.ScrollTimeOut != null) {
            clearTimeout(KJE.ScrollTimeOut)
        }
        KJE.ScrollTimeOut = setTimeout(KJE.buttonPosition, 200)
    }
};
KJE.buttonPosition = function () {
    var a = KJE;
    var b = a.util.findPosRelativeToViewport(a.Calculator)[1];
    var d = a.Calculator.offsetTop;
    var c = a.Buttons.style;
    if ((b + d + a.AllContent.offsetHeight) < 0) {
        c.top = (d + a.AllContent.offsetHeight) + "px"
    } else {
        if (b < 0) {
            c.top = (d - b + 5) + "px"
        } else {
            c.top = (d - a.CommandButtonOffset) + "px"
        }
    }
};
KJE.showInputsFirst = false;
KJE.goScroll = function () {
    var a = KJE;
    if (a.Scroll) {
        var b = a.util.findPos(a.Calculator);
        window.scroll(b[0], b[1] - a.ScrollMinimum)
    }
};
KJE.showInputs = function () {
    var a = KJE;
    if (a.CalcControl.initInputs) {
        a.CalcControl.initInputs()
    }
    a.CalculatorTable.className = "KJECalculatorTable";
    a.Calculate.value = a.ButtonCalculate;
    a.ViewReport.value = a.ButtonViewReport;
    a.Calculate.style.display = (KJE.ShowCalculateButton ? "" : "none");
    a.Report.style.display = "none";
    if (a.Definitions) {
        if (a.ShowDefinitions) {
            a.Definitions.style.display = "block"
        } else {
            a.Definitions.style.display = "none"
        }
    }
    a.Main.style.display = "block";
    a.Calculator.style.height = a.Main.offsetHeight + "px";
    a.reportViewable = false;
    if (a.showInputsFirst) {
        a.goScroll()
    } else {
        a.showInputsFirst = true
    }
    a.calcResize()
};
KJE.calculateButtonAction = function () {
    var a = KJE;
    a.goScroll();
    if (a.reportViewable) {
        a.printTheReport()
    } else {
        if (!a.Error && !a.InComplete) {
            a.CalcTimeout = setTimeout(a.results, 10)
        }
    }
};
KJE.printOpenReport = function (g) {
    var f = document.getElementById("KJEAllContent");
    var l = KJE;
    var d = l.replace;
    var a = l.gReportGraphs;
    sInner = f.innerHTML;
    var k = l.ReportDocumentStart + sInner + l.ReportDocumentEnd;
    var j = k.indexOf("<!--KJEDEFINITIONS-->");
    var h = k.indexOf("<!--KJEDEFINITIONSEND-->", j);
    k = k.substring(0, j) + k.substring(h);
    j = k.indexOf("<!--KJEMAIN-->");
    h = k.indexOf("<!--KJEMAINEND-->", j);
    k = k.substring(0, j) + k.substring(h);
    k = d("<!--KJEDEFINITIONSEND-->", "", k);
    k = d("<!--REPORT_DEFINED_END-->", "", k);
    k = d("<!--KJEMAINEND-->", "", k);
    k = d("**REPORT_STYLE_SHEET**", l.ReportStyleSheet, k);
    k = d("**REPORT_STYLE_SHEET2**", l.ReportStyleSheet2, k);
    k = d("**REPORT_DEFAULT_STYLE**", l.ReportStyleDefault, k);
    k = d("**HEADER**", l.ReportHeader, d("**REPORT_TITLE**", document.title, k));
    k = d("**FOOTER**", d("<!--EXTRA_FOOTER-->", l.ReportExtraFooter, l.ReportFooter), k);
    k = d("**REPORT_TITLE**", l.CalcName ? l.CalcName : l.CalculatorTitleShow, k);
    k = d("**TITLE**", l.CalcName ? l.CalcName : "Financial Calculator", k);
    k = d("Calculator Calculator", "Calculator", k);
    var c = "<!--GRAPHEND-->";
    for (i = 0; i < l.ReportGraphCount; i++) {
        var e = "";
        if (!l.VML) {
            e = '<img src="' + a[i].wCanvas.toDataURL() + '" height=' + a[i].wCanvas.offsetHeight + " width=" + a[i].wCanvas.offsetWidth + ">"
        }
        var b = "<div class='KJEGraphTitle'>" + d('"', "&quote", a[i]._titleGraph.s) + "</div>";
        j = k.indexOf("<!--GRAPH" + i + "-->");
        h = k.indexOf(c, j);
        k = k.substring(0, j) + b + e + k.substring(h + c.length)
    }
    g.document.write(k);
    g.document.close();
    g.focus()
};
KJE.printTheReport = function () {
    if (KJE.IE7and8 || KJE.VML) {
        window.print();
        return
    }
    leftpos = 0;
    if (screen) {
        leftpos = screen.width / 2 - 480
    }
    var a = window.open("", "_blank", "toolbar=yes,menubar=yes,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,width=960,height=" + (screen.height - 170) + ",left=" + leftpos + ",top=5");
    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
        setTimeout(function () {
            KJE.printOpenReport(a)
        }, 100)
    } else {
        KJE.printOpenReport(a)
    }
};
KJE.showReport = function () {
    KJE.InTask = false;
    if (KJE.Error || KJE.InComplete) {
        return
    }
    if (KJE.inCommandTask(true)) {
        return
    }
    setTimeout(KJE.showReportFinal, 200)
};
KJE.showReportFinal = function () {
    KJE.DataPointHide();
    if (!KJE.reportViewable) {
        KJE.CalculatorTable.className = "KJECalculatorReportTable";
        KJE.results(false, true);
        if (KJE.Error || KJE.InComplete) {
            KJE.inCommandTask(false);
            return
        }
        KJE.reportViewable = true;
        KJE.Calculate.value = KJE.ButtonPrintReport;
        KJE.Calculate.style.display = (KJE.ShowPrintButton ? "" : "none");
        KJE.Calculator.style.height = "0px";
        KJE.Main.style.display = "none";
        if (KJE.Definitions) {
            KJE.Definitions.style.display = "none"
        }
        KJE.Report.style.display = "block";
        KJE.ViewReport.value = KJE.ButtonHideReport;
        KJE.sReport = KJE.CalcControl.formatReport(KJE.ReportText);
        setTimeout(KJE.fireReport, 50)
    } else {
        KJE.showInputs();
        setTimeout(function () {
            KJE.inCommandTask(false)
        }, 400)
    }
};
KJE.fireReport = function () {
    var b = KJE;
    var d = b.sReport.split(b.MSG_GRAPH);
    b.sReport = "";
    if (d[0]) {
        b.ReportTop.innerHTML = d[0]
    }
    for (var e = 0; e < b.ReportGraphCount; e++) {
        if (d[e + 1]) {
            b.ReportMiddle[e].innerHTML = d[e + 1]
        }
    }
    if (b.gReportGraphs.length != d.length - 1) {
        for (var f = 0; f < b.ReportGraphCount; f++) {
            var a = b.gNewGraph(b.gGraphs[f]._gtGraphType._iGraphType, "REPORTGRAPH" + (f), true, false, false, b.sgv(b.gGraphs[f]._titleGraph.getProperty(), ""), true);
            if (a) {
                b.gReportGraphs[f] = a
            }
        }
    }
    var c = null;
    for (f = 0; f < b.gReportGraphs.length; f++) {
        c = b.gReportGraphs[f];
        c.setProperty(b.gGraphs[f].getProperty());
        c._legend.setProperty(b.gGraphs[f]._legend.getProperty());
        c._grid.setProperty(b.gGraphs[f]._grid.getProperty());
        c._axisY.setProperty(b.gGraphs[f]._axisY.getProperty());
        c._axisX.setProperty(b.gGraphs[f]._axisX.getProperty());
        c.setTitle(b.sgv(b.gGraphs[f]._titleGraph.getProperty(), ""));
        c._titleXAxis.setProperty(b.gGraphs[f]._titleXAxis.getProperty());
        c._titleYAxis.setProperty(b.gGraphs[f]._titleYAxis.getProperty());
        c.add(b.gGraphs[f].getDataProperties());
        c.setBackground(b.parameters.get("PAGEBACKGROUND_COLOR", b.colorRGBackground));
        c.setWidth(true, b.CalculatorWidth)
    }
    var h = b.CalcControl;
    if (h.formatGraph) {
        h.formatGraph(h, b.gReportGraphs)
    }
    if (h.reportComplete) {
        h.reportComplete(b.GuiControl)
    }
    b.ViewReport.focus();
    b.goScroll();
    setTimeout(function () {
        b.inCommandTask(false)
    }, 400)
};
KJE.List = function () {
    this.length = 0;
    this.items = {}
};
KJE.List.prototype.getSet = function (b, a) {
    if (this.exists(b)) {
        return this.items[b]
    }
    return this.set(b, a)
};
KJE.List.prototype.get = function (b, a) {
    if (typeof (this.items[b]) == "undefined") {
        return a
    } else {
        return this.items[b]
    }
};
KJE.List.prototype.exists = function (a) {
    return !(typeof (this.items[a]) == "undefined")
};
KJE.List.prototype.set = function (a, b) {
    if (typeof (b) != "undefined") {
        if (typeof (this.items[a]) == "undefined") {
            this.length++
        }
        this.items[a] = b
    }
    return b
};
KJE.parameters = new KJE.List();
KJE.inputs = new KJE.List();
KJE.droppers = new KJE.List();
KJE.definitions = new KJE.List();
KJE.definitions.set("**INFLATION_DEFINITION**", "This is what you expect for the average long-term inflation rate. A common measure of inflation in the U.S. is the Consumer Price Index (CPI).  From 1925 through 2013 the CPI has a long-term average of 3.0% annually. Over the last 40 years highest CPI recorded was 13.5% in 1980. For 2013, the last full year available, the CPI was 1.7% annually as reported by the Minneapolis Federal Reserve.");
KJE.definitions.set("**ROR_DEFINITION**", "The actual rate of return is largely dependent on the types of investments you select.  The Standard & Poor's 500&reg; (S&P 500&reg;) for the 10 years ending Dec. 31st, 2013, had an annual compounded rate of return of 7.3%, including reinvestment of dividends. From January 1970 through the end of 2013, the average annual compounded rate of return for the S&P 500&reg;, including reinvestment of dividends, was approximately 10.6% (source: www.standardandpoors.com). Since 1970, the highest 12-month return was 61% (June 1982 through June 1983). The lowest 12-month return was -43% (March 2008 to March 2009). Savings accounts at a financial institution may pay as little as 0.25% or less but carry significantly lower risk of loss of principal balances.<P>It is important to remember that these scenarios are hypothetical and that future rates of return can't be predicted with certainty and that investments that pay higher rates of return are generally subject to higher risk and volatility. The actual rate of return on investments can vary widely over time, especially for long-term investments. This includes the potential loss of principal on your investment. It is not possible to invest directly in an index and the compounded rate of return noted above does not reflect sales charges and other fees that Separate Account investment funds and/or investment companies may charge.");
KJE.UKuejna = "KJE Calculator License Not Found for: ";
KJE.subheader = "";
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", KJE.init, false)
}
KJE.bHT = false;
KJE.ROR_MONTH = function (a) {
    return Math.pow(1 + (a), 1 / 12) - 1
};
KJE.ROR_PERIOD = function (a, b) {
    return Math.pow(1 + (a), 1 / b) - 1
};
KJE.APY_MONTH = function (a) {
    return KJE.FV_AMT(a, 12, 1) - 1
};
KJE.NPV_AMT = function (b, c, a) {
    if (b == -1) {
        return 0
    }
    return (a / Math.pow((1 + b), c))
};
KJE.FV_AMT = function (b, c, a) {
    if (b == 0) {
        return a
    }
    return (a / Math.pow((1 + b), ((-1) * c)))
};
KJE.FV_BEGIN = function (a, c, b) {
    if (a == 0) {
        return c * b
    }
    return (b / a) * (Math.pow((1 + a), c + 1) - 1) - b
};
KJE.FV = function (a, c, b) {
    if (a == 0) {
        return c * b
    }
    return (b / a) * (Math.pow((1 + a), c) - 1)
};
KJE.PV = function (a, c, b) {
    return KJE.NPV_AMT(a, c, KJE.FV(a, c, b))
};
KJE.RATE = function (h, c, b) {
    var a = 0;
    var g = 1;
    var e = c;
    var d = KJE.PMT;
    for (var f = 1; f < 50; f++) {
        e = d(a, h, b);
        if (e == c) {
            return a
        } else {
            if (e < c) {
                a += g
            } else {
                a -= g
            }
        }
        g = g / 2
    }
    return a
};
KJE.PERIODS = function (b, c, a) {
    if (b == 0 && c != 0) {
        return a / c
    }
    var f = 3120;
    var h = 1560;
    var e = c;
    var d = KJE.PMT;
    for (var g = 1; g < 50; g++) {
        e = d(b, f, a);
        if (e == c) {
            return f
        } else {
            if (e < c) {
                f -= h
            } else {
                f += h
            }
        }
        h = h / 2
    }
    return f
};
KJE.PERIODS_FV = function (h, j, a) {
    var f = 720;
    var g = 360;
    var e = j;
    var d = KJE.PMT;
    var c = KJE.NPV_AMT;
    for (var b = 1; b < 50; b++) {
        e = d(h, f, c(h, f, a));
        if (e == j) {
            return f
        } else {
            if (e < j) {
                f -= g
            } else {
                f += g
            }
        }
        g = g / 2
    }
    return f
};
KJE.APR = function (f, c, b, a, e) {
    var d = KJE.PMT(b, f, a + e);
    return KJE.RATE(f, d, a)
};
KJE.PMT = function (a, c, b) {
    if (c <= 0) {
        return b
    }
    if (c <= 1) {
        return b * (1 + a)
    }
    if (a == 0) {
        return b / c
    }
    return (b * a) / (1 - Math.pow((1 + a), (c * (-1))))
};
KJE.PMT_BEGIN = function (a, h, e) {
    var c = KJE.PMT;
    if (h <= 1) {
        return e
    }
    var b = c(a, h, e);
    var g = b / 2;
    var d = 0;
    for (var f = 1; f < 50; f++) {
        d = c(a, h - 1, e - b);
        if (d == b) {
            return b
        } else {
            if (d < b) {
                b -= g
            } else {
                b += g
            }
        }
        g = g / 2
    }
    return b
};
KJE.ScheduleTableTitle = "Periodic Schedule";
KJE._sTableHeader = "<div class='KJEScheduleDiv'><table class='KJEScheduleTable' summary='**TITLE_TAG**'>";
KJE._sTableFooter = "</table></div>";
KJE._sTopRow = "<tr class='KJEScheduleHeaderRow' >";
KJE._sEvenRow = "<tr class='KJEScheduleEvenRow' >";
KJE._sOddRow = "<tr class='KJEScheduleOddRow' >";
KJE._sRowFooter = "</tr>";
KJE._sHeading = "<th class='KJEScheduleHeading' >";
KJE._sHeadingUnderline = "<th class='KJEScheduleHeadingUnderline' >";
KJE._sHeadingFooter = "</th>";
KJE._sCell = "<td class='KJEScheduleCell' >";
KJE._sCellStrong = "<td class='KJEScheduleCellStrong' >";
KJE._sCellSpecial = "<td class='KJEScheduleCellSpecial' >";
KJE._sCellFooter = "</td>";
KJE._sCellBorderClass = "KJECellBorder";
KJE.Repeating = function (a) {
    a = (!a ? "MSG_REPORT_COL" : a);
    this.sRepeating = "";
    this.nRepeatingCount = 0;
    this.sReportCols = new Array(15);
    for (var b = 0; b < 15; b++) {
        this.sReportCols[b] = KJE.parameters.get(a + (b + 1), "")
    }
};
KJE.Repeating.prototype.sReportCol = function (a, b) {
    var c = "";
    if (b < 1 || b > this.sReportCols.length) {
        c = a
    } else {
        if (!this.sReportCols[b - 1] || this.sReportCols[b - 1] == "") {
            c = a
        } else {
            c = this.sReportCols[b - 1]
        }
    }
    return c
};
KJE.Repeating.prototype.getRepeat = function (b) {
    var a = KJE;
    return a._sTableHeader.replace("**TITLE_TAG**", b ? b.replace("'", "&#39;") : a.parameters.get("MSG_REPEAT_TITLE", a.ScheduleTableTitle)) + this.sRepeating + a._sTableFooter
};
KJE.Repeating.prototype.clearRepeat = function () {
    this.sRepeating = "";
    this.nRepeatingCount = 0
};
KJE.Repeating.prototype.add = function (n, m, c, b, j, l, d, k) {
    var o = "";
    if (arguments.length == 0) {
        return o
    }
    var a = "";
    var h = "";
    for (var g = l.length; g > 1; g--) {
        if (l[g - 1] != null) {
            break
        }
    }
    var f = 0;
    d = (d ? true : false);
    for (var e = 0; e < g; e++) {
        if (l[e] != null) {
            if (l[e] != "") {
                if (l[e].sContent) {
                    h = l[e].sContent;
                    a = (l[e].sCell ? l[e].sCell : n);
                    if (l[e].sFormat) {
                        a = a.replace(">", " " + l[e].sFormat + ">")
                    }
                    d = false
                } else {
                    a = n;
                    if (d) {
                        a = a.replace("' >", "' scope='col' >")
                    }
                    h = l[e]
                }
                if (e < g - 1) {
                    a = a.replace("class='", "class='" + j + " ")
                }
                f++;
                o += a + h + m
            }
        }
    }
    if (f > 0 && d) {
        o = KJE.replace("' >", "' width=" + KJE.number(Math.floor(100 / f), 0) + "% >", o)
    }
    this.sRepeating += c + (!k ? o.replace("<td", "<td scope=row ") : o) + b
};
KJE.Repeating.prototype.addHeader = function () {
    var a = KJE;
    this.add(a._sHeading, a._sHeadingFooter, a._sTopRow, a._sRowFooter, a._sCellBorderClass, arguments, true, true)
};
KJE.Repeating.prototype.addFooter = function () {
    var a = KJE;
    this.add(a._sCellStrong, a._sCellFooter, a._sTopRow, a._sRowFooter, a._sCellBorderClass, arguments, true, true)
};
KJE.Repeating.prototype.addRepeat = function () {
    var a = KJE;
    this.add(a._sCell, a._sCellFooter, (this.nRepeatingCount % 2 == 0 ? a._sOddRow : a._sEvenRow), a._sRowFooter, a._sCellBorderClass, arguments, false, false);
    this.nRepeatingCount++
};
KJE.getScreenCoord = function (g, a, b) {
    var f = 0;
    var e = 0;
    do {
        f += b.offsetLeft;
        e += b.offsetTop
    } while (b = b.offsetParent);
    var d = f + g;
    var c = e + a;
    return {
        x: d,
        y: c
    }
};
KJE.getMouseCoord = function (a, k, c) {
    var o = 0;
    var n = 0;
    do {
        o += k.offsetLeft;
        n += k.offsetTop
    } while (k = k.offsetParent);
    var h = 0;
    var e = 0;
    var g = a.pageX;
    if (g == null) {
        var b = document.documentElement;
        var m = (b && b.scrollLeft != null) ? b : document.body;
        h = a.clientX + m.scrollLeft;
        e = a.clientY + m.scrollTop
    } else {
        if (c) {
            var l = a.touches[0];
            h = l.pageX;
            e = l.pageY
        } else {
            h = g;
            e = a.pageY
        }
    }
    var j = h - o;
    var f = e - n;
    return {
        x: j,
        y: f
    }
};
KJE.sIncomplete = "?";
KJE.sToggleTitle = "<table class='KJEToggleTable' title='**SUMMARY_TEXT** **IMG_TEXT**' " + KJE.MSG_ADA_TABLE + "><tr><td width=99% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**</td><td class='KJEToggleIcon **IMG**' aria-hidden='true'>**ICON**</td></tr></table>";
KJE.sToggleTitle1 = "<table class='KJEToggleTable' style='margin-left: 8px; margin-bottom: 8px;' title='**SUMMARY_TEXT** **IMG_TEXT**' " + KJE.MSG_ADA_TABLE + "><tr><td width=100% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**</td></tr></table>";
KJE.sToggleTitle2 = "<table class='KJEToggleTable' title='**SUMMARY_TEXT** **IMG_TEXT**' " + KJE.MSG_ADA_TABLE + "><tr><td width=49% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**</td><td width=49% class=**TITLE_CLASS**  valign='top'>**TITLE_TEXT2**</td><td class='KJEToggleIcon **IMG**' aria-hidden='true'>**ICON**</td></tr></table>";
KJE.sToggleAltTextClose = "Click or Spacebar Show Inputs";
KJE.sToggleAltTextOpen = "Click or Spacebar Hide Inputs";
KJE.sToggleTitleClass = "KJEToggleTitle";
KJE.sInputDescTextClass = "KJESubTitle KJERight";
KJE.sToggleIcon = "KJEInputIcon";
KJE.sToggleOpen = "[+]";
KJE.sToggleClose = "[-]";
KJE.FMT_NUMBER = 0;
KJE.FMT_DOLLARS = 1;
KJE.FMT_PERCENT = 2;
KJE.FMT_INPUT = 3;
KJE.FMT_YESNO = 4;
KJE.FMT_STRING = 5;
KJE.sCP = "$";
KJE.sCS = "";
KJE.sPP = "";
KJE.sPS = "%";
KJE.sNP = "";
KJE.sNS = "";
KJE.sPC = ",";
KJE.sPD = ".";
KJE.sCC = ",";
KJE.sCD = ".";
KJE.bEuropeDecimals = false;
KJE.ACCOUNTING_NEGATIVE = false;
KJE.format = new Array();
KJE.iDPRowHeight = 30;
KJE.iDPItemHeight = 28;
KJE.iDPDropHeight = KJE.iDPItemHeight;
KJE.iDPInputHeight = 42;
KJE.iDPInputPad = 5;
KJE.iDPSliderPad = 0;
KJE.DataPointX = 0;
KJE.DataPointY = 0;
KJE.subText = function (a, b) {
    b = KJE.sInputDescTextClass + (b ? " " + b : "");
    return "<div class='" + b + "'>" + a + "</div>"
};
KJE.nbr = function (o, e, b, m, c, p) {
    var q = KJE;
    if (!o) {
        o = 0
    }
    p = p || false;
    c = c || false;
    b = b || "";
    m = m || "";
    e = e || 0;
    if (e > 10) {
        e = 10
    }
    var f = q.round(o, e);
    var j = (f < 0);
    if (j) {
        f *= -1
    }
    var h = (f + "").split(".");
    var g = "";
    if (e > 0) {
        if (!h[1]) {
            if (!c) {
                g = ("4040410000").substr(0, e)
            }
        } else {
            if (h[1].length == e) {
                g = h[1]
            } else {
                g = h[1] + (c ? "" : ("4040410000").substr(0, e - h[1].length))
            }
        }
        if (g.length > 0) {
            g = q.sPD + g
        }
    }
    var a = "";
    if (!p && (f > 999)) {
        var k = h[0].length;
        if (k % 3 > 0) {
            a = h[0].substr(0, k % 3) + q.sPC
        }
        for (var d = k % 3; d < k; d += 3) {
            a += h[0].substr(d, 3) + (d + 3 < k ? q.sPC : "")
        }
    } else {
        a = h[0]
    }
    if (a == "") {
        a = "0"
    }
    return (j ? (q.ACCOUNTING_NEGATIVE ? "(" : "-") : "") + b + a + g + m + (q.ACCOUNTING_NEGATIVE && j ? ")" : "")
};
KJE.format[KJE.FMT_NUMBER] = function (a, b) {
    return KJE.nbr(a, b, "", "", true, false)
};
KJE.number = KJE.format[KJE.FMT_NUMBER];
KJE.format[KJE.FMT_DOLLARS] = function (a, b) {
    return KJE.nbr(a, b, KJE.sCP, KJE.sCS, false, false)
};
KJE.dollars = KJE.format[KJE.FMT_DOLLARS];
KJE.format[KJE.FMT_PERCENT] = function (a, b) {
    return KJE.nbr(a * 100, b, KJE.sPP, KJE.sPS, true, false)
};
KJE.percent = KJE.format[KJE.FMT_PERCENT];
KJE.format[KJE.FMT_INPUT] = function (a, b) {
    return KJE.nbr(a, b, "", "", true, true)
};
KJE.input = KJE.format[KJE.FMT_INPUT];
KJE.format[KJE.FMT_YESNO] = function (a) {
    return (a ? KJE.YES : KJE.NO)
};
KJE.yesno = KJE.format[KJE.FMT_YESNO];
KJE.round = function (b, a) {
    return (a ? (Math.round(b * (Math.pow(10, a)))) / (Math.pow(10, a)) : Math.round(b))
};
KJE.setLabelWrap = function (f, c, e, a, b, d) {
    if (e) {
        a = "**MESSAGE**"
    } else {
        if (!a) {
            a = "<label " + (d ? 'class="' + d.trim() + '"' : "") + ' for="' + c + '">**MESSAGE**</label>'
        }
    }
    f._sLabel = a;
    if (b) {
        KJE.setLabelText(f, b)
    }
};
KJE.setLabelText = function (b, a) {
    b.innerHTML = b._sLabel.replace("**MESSAGE**", a)
};
KJE.SliderKnobSize = 12;
KJE.SliderKnobVertAdj = -3;
KJE.SliderLabelVertAdj = 0;
KJE.LabelLength = 220;
KJE.InputLength = 340;
KJE.RightPad = 10;
KJE.InputTotalLength = KJE.LabelLength + KJE.InputLength + KJE.RightPad;
KJE.SliderMinLength = 130;
KJE.TypeNone = 0;
KJE.TypeNumber = 1;
KJE.TypeString = 2;
KJE.TypeDate = 3;
KJE.TypeRadio = 4;
KJE.TypeCheckbox = 5;
KJE.TypeDropBox = 6;
KJE.TypeLabel = 7;
KJE.SliderScale = new Object();
KJE.s_scale = new Array(10);
KJE.s_scale[0] = [0, 1000, 5000, 10000, 10, 50, 100];
KJE.s_scale[1] = [0, 1000, 5000, 20000, 10, 50, 200];
KJE.s_scale[2] = [0, 1000, 10000, 100000, 50, 100, 1000];
KJE.s_scale[3] = [0, 10000, 100000, 500000, 250, 1000, 5000];
KJE.s_scale[4] = [0, 10000, 100000, 1404041, 250, 1000, 10000];
KJE.s_scale[5] = [0, 100000, 1404041, 14040410, 500, 10000, 100000];
KJE.s_scale[6] = [0, 500, 2500, 5000, 10, 50, 100];
KJE.s_scale[7] = [0, 100, 500, 1000, 5, 25, 50];
KJE.s_scale[8] = [0, 24, 48, 72, 6, 6, 6];
KJE.s_scale[9] = [0, 100, 200, 300, 10, 10, 10];
KJE.s_label = new Array(10);
KJE.k = "k";
KJE.m = "m";
KJE.s_label[0] = ["$0", "$1k", "$5k", "$10k"];
KJE.s_label[1] = ["$0", "$1k", "$5k", "$20k"];
KJE.s_label[2] = ["$0", "$1k", "$10k", "$100k"];
KJE.s_label[3] = ["$0", "$10k", "$100k", "$500k"];
KJE.s_label[4] = ["$0", "$10k", "$100k", "$1m"];
KJE.s_label[5] = ["$0", "$100k", "$1m", "$10m"];
KJE.s_label[6] = ["$0", "$500", "$2.5k", "$5k"];
KJE.s_label[7] = ["$0", "$100", "$500", "$1k"];
KJE.s_label[8] = ["0", "24", "48", "72"];
KJE.s_label[9] = ["$0", "$100", "$200", "$300"];
KJE.MakeScale = function (a, e, c, f, h, g, d) {
    var b = this;
    b._Min = a;
    b._Mid1 = e;
    b._Mid2 = c;
    b._Max = f;
    b._stepMin = h;
    b._stepMid = g;
    b._stepMax = d;
    b._range = 100
};
KJE.useScale = function (b) {
    var a = KJE;
    var c = a.s_scale[b];
    return new a.MakeScale(c[0], c[1], c[2], c[3], c[4], c[5], c[6])
};
KJE.s_Translate = function (a, b, h, g, f, c, k, j) {
    var e = 0;
    if (a > 66.66) {
        e = Math.round(((g + ((a - 66.66) / 33.33) * (f - g)) / j)) * j
    } else {
        if (a > 33.33) {
            e = Math.round(((h + ((a - 33.33) / 33.33) * (g - h)) / k)) * k
        } else {
            if (a > 0) {
                e = Math.round(((a / 33.33) * (h - b) / c)) * c + b
            } else {
                e = b
            }
        }
    }
    return (e > f ? f : e)
};
KJE.s_Untranslate = function (b, a, e, c, f) {
    var g = 0;
    if (b > f) {
        return 100
    } else {
        if (b > c) {
            g = 66.66 + ((b - c) * 33.33) / (f - c)
        } else {
            if (b > e) {
                g = 33.33 + ((b - e) * 33.33) / (c - e)
            } else {
                g = ((b - a) * 33.33) / (e - a)
            }
        }
    }
    return (g < 0 ? 0 : g)
};
KJE.Slider = function (g, h, f, c, e, k, a, j, b, d) {
    return new KJE.InputItem(d, KJE.TypeNumber, g, h, true, "KJE-" + g, f, c, 0, e, k, a, j, b)
};
KJE.MortgageAmtSlider = function (d, c, b) {
    var a = KJE;
    return a.Slider(d, c, a.Default.MortgageMin, a.Default.MortgageMax, 0, a.FMT_DOLLARS, 0, [a.dollars(a.Default.MortgageMin / 1000) + a.k, a.dollars(200) + a.k, a.dollars(500) + a.k, a.dollars(1) + a.m], new a.MakeScale(0, 200000, 500000, 1404041, 5000, 10000, 20000), b)
};
KJE.LoanAmtSlider = function (d, c, b) {
    var a = KJE;
    return a.Slider(d, c, a.Default.MortgageMin, a.Default.MortgageMax, 0, a.FMT_DOLLARS, 0, [a.dollars(a.Default.MortgageMin / 1000) + a.k, a.dollars(5) + a.k, a.dollars(25) + a.k, a.dollars(100) + a.k], new a.MakeScale(0, 5000, 25000, 100000, 100, 500, 1000), b)
};
KJE.MortgageTermSlider = function (e, c, d, b) {
    var a = KJE;
    return a.Slider(e, c, a.Default.MortgageTermMin, a.Default.MortgageTermMax, 0, a.FMT_NUMBER, (d ? d : a.Default.MortgageTermIncrement), [a.Default.MortgageTermMin, a.number(Math.floor((a.Default.MortgageTermMax - a.Default.MortgageTermMin) * 0.334 + a.Default.MortgageTermMin)), a.number(Math.floor((a.Default.MortgageTermMax - a.Default.MortgageTermMin) * 0.667 + a.Default.MortgageTermMin)), a.number(a.Default.MortgageTermMax)], null, b)
};
KJE.MortgageTermDropBoxSlider = function (e, d, c) {
    var a = KJE;
    var b = a.getMortgageTermList().v;
    return a.DropBoxSlider(e, d, b)
};
KJE.NumberSlider = function (h, f, d, a, e, g, c) {
    var b = KJE;
    return b.Slider(h, f, d, a, (e ? e : 0), b.FMT_NUMBER, (g ? g : 1), [d, b.number(Math.floor((a - d) * 0.334 + d)), b.number(Math.floor((a - d) * 0.667 + d)), b.number(a)], null, c)
};
KJE.DollarSlider = function (h, j, b, f, c, a, e, d) {
    e = (e >= 0 && e <= 9 ? e : -1);
    var k = KJE;
    if (e == -1) {
        for (var g = 0; g <= 7; g++) {
            if (k.s_scale[g][3] == f) {
                e = g;
                break
            }
        }
    }
    if (e != -1) {
        return k.Slider(h, j, b, f, (c ? c : 0), k.FMT_DOLLARS, 1, k.s_label[e], k.useScale(e), d)
    }
    return k.Slider(h, j, b, f, (!c && c != 0 ? 2 : c), k.FMT_DOLLARS, (a ? a : 10), [k.dollars(b), k.dollars(Math.floor((f - b) * 0.334 + b)), k.dollars(Math.floor((f - b) * 0.667 + b)), k.dollars(f)], null, d)
};
KJE.PercentSlider = function (h, f, d, a, e, g, c) {
    var b = KJE;
    return b.Slider(h, f, d, a, (e ? e : 2), b.FMT_PERCENT, (g ? g : 0.1), [b.percent(d / 100), b.percent(Math.floor((a - d) * 0.334 + d) / 100), b.percent(Math.floor((a - d) * 0.667 + d) / 100), b.percent(a / 100)], null, c)
};
KJE.MortgageRateSlider = function (d, c, b) {
    var a = KJE;
    return a.RateSlider(d, c, a.Default.MortgageRateMin, a.Default.MortgageRateMax, a.Default.MortgageRateMax, null, b)
};
KJE.InvestRateSlider = function (d, c, b) {
    var a = KJE;
    return a.RateSlider(d, c, a.Default.InvestRateMin, a.Default.InvestRateMax, a.Default.InvestSliderRateMax, null, b)
};
KJE.InflationRateSlider = function (d, c, b) {
    var a = KJE;
    return a.RateSlider(d, c, a.Default.InflationRateMin, a.Default.InflationRateMax, a.Default.InflationSliderRateMax, null, b)
};
KJE.preKJE = function (a) {
    return (a ? "KJE-" + a : null)
};
KJE.suffix = function (b, a) {
    return (a ? b + a : null)
};
KJE.RateSlider = function (f, n, j, d, h, a, c) {
    a = a ? a : 0.5;
    j = j ? j : 0;
    d = d ? d : 25;
    h = h ? h : 12;
    var o = KJE;
    var k = o.percent;
    var g = h - j;
    var m = Math.floor(g * 0.337 + j);
    var l = Math.floor(g * 0.667 + j);
    var e = [k(j / 100), k(m / 100), k(l / 100), k(h / 100)];
    var b = new o.MakeScale(j, m, l, h, a, a, a);
    return o.Slider(f, n, j, d, 3, o.FMT_PERCENT, 0, e, b, c)
};
KJE.Nbr = function (f, g, e, a, b, h, d, c) {
    var j = KJE;
    return new j.InputItem(c, j.TypeNumber, f, g, true, "KJE-" + f, e, a, 0, b, h, 0, false, false, j.suffix(f, "_TRAIL"), j.suffix(j.preKJE(f), "_TRAIL"), d, null, null, j.TypeLabel)
};
KJE.NbrDropBox = function (e, g, d, a, b, h, f, c) {
    var j = KJE;
    return new j.InputItem(c, j.TypeNumber, e, g, true, "KJE-" + e, d, a, 0, b, h, 0, false, false, f, j.preKJE(f), null, null, null, j.TypeDropBox)
};
KJE.Checkbox = function (e, d, f, b, c) {
    var a = KJE;
    return new a.InputItem(c, a.TypeCheckbox, e, d, false, "KJE-" + e, 0, 0, f, 0, 0, 0, false, false, null, null, b)
};
KJE.DropBoxString = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(c, a.TypeDropBox, f, d, true, "KJE-" + f, 0, 0, 0, 0, a.FMT_STRING, 0, false, false, e, a.preKJE(e), b)
};
KJE.DropBox = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(c, a.TypeDropBox, f, d, true, "KJE-" + f, 0, 0, a.parameters.get(f, 0), 0, 0, 0, false, false, e, a.preKJE(e), b)
};
KJE.DropBoxSlider = function (d, c, e, b) {
    var a = KJE;
    var f = [e[0], e[Math.floor(e.length * 0.333)], e[Math.floor(e.length * 0.666)], e[e.length - 1]];
    return new a.InputItem(b, a.TypeDropBox, d, c, true, "KJE-" + d, 0, e.length - 1, 0, 0, 0, 1, f, null)
};
KJE.Label = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(c, a.TypeLabel, f, d, true, "KJE-" + f, 0, 0, 0, 0, 0, 0, false, false, e, a.preKJE(e), b)
};
KJE.StringInput = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(c, a.TypeString, f, d, true, "KJE-" + f, 0, 0, 0, 0, 0, 0, false, false, e, a.preKJE(e), b)
};
KJE.Date = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(c, a.TypeDate, f, d, true, "KJE-" + f, 0, 0, "TODAY", 0, 0, 0, false, false, e, a.preKJE(e), b)
};
KJE.Radiobox = function (f, e, d, g, b, c) {
    var a = KJE;
    return new a.InputItem(c, a.TypeRadio, e, d, false, "KJE-" + e, 0, 0, g, 0, 0, 0, false, false, null, null, b, null, f)
};
KJE.Radioboxes = function (f, e, g, c, b, d) {
    var a = KJE;
    return new a.InputItem(d, a.TypeRadio, f, e, false, "KJE-" + f + "1", 0, 0, g, 0, 0, 0, false, false, f, a.suffix(a.preKJE(f), "2"), c, b)
};
KJE.InputItem = function (C, q, P, af, X, w, N, T, A, Q, s, ad, ab, O, a, aa, G, b, p) {
    var I = this;
    var ah = KJE;
    var L = ah.setLabelWrap;
    var d = ah.parameters;
    I._inputType = q;
    I._name = P;
    I._inputTypeAdditional = ah.TypeNone;
    I._increment = Math.abs(ad);
    I._decimals = Q;
    I._format = s;
    I._minimum = N;
    I._maximum = T;
    I._range = T - N;
    I.bValidate = true;
    var m = d.get("MSG_" + P + "1", G);
    var k = d.get("MSG_" + P + "2", b);
    var r = typeof document.createElement != "undefined" && typeof document.documentElement != "undefined" && typeof document.documentElement.offsetWidth == "number";
    if (!r) {
        return
    }
    I._sError = "";
    I._bError = false;
    I._InComplete = false;
    I._mouseDown = false;
    ah.inputs.set(P, this);
    var z = I._container = document.getElementById("KJE-C-" + I._name);
    if (!z) {
        I._inputType = ah.TypeNone;
        I.setValue(d.get(I._name, A), true);
        return
    }
    z.className = "KJEInputContainer";
    var B = z.style;
    z.backgroundColor = B.backgroundColor;
    var e = z.offsetWidth;
    I.bSlider = (ab != false);
    if (O) {
        I._oScale = O
    }
    var D = ah.iDPInputPad;
    var S = I._inputField = document.getElementById(w);
    var ac = S.style;
    S.name = (p ? p : I._name);
    S.className = "KJEInput";
    ac.height = ah.iDPInputHeight - 2 + "px";
    ac.top = "2px";
    ac.position = "absolute";
    S.resize = false;
    S.setAttribute("aria-required", "true");
    I._sLabel = d.get("MSG_" + I._name, af);
    var K = 0;
    if (af != null && ah.LabelLength != 0) {
        C = (C ? " " + C : "");
        var aj = document.getElementById("KJE-D-" + (ah.InputItem.AltHelpName ? ah.InputItem.AltHelpName : I._name));
        var Z = I._label = document.createElement("div");
        var R = Z.style;
        R.position = "absolute";
        R.width = ah.LabelLength + "px";
        R.left = "0px";
        R.top = (ah.iDPInputHeight / 4) + 2 + "px";
        I.className = (aj ? "KJEHelp " : "KJELabel ") + C;
        L(Z, w, ah.deviceMobile || !X, null, I._sLabel + (I._sLabel != "" ? ah.Colon : ""), I.className);
        if (aj) {
            I.AddDefinitionEvents(Z, aj)
        }
        Z.className = I.className;
        z.insertBefore(Z, S);
        K = Z.offsetWidth;
        if (!K) {
            K = ah.LabelLength
        }
        var u = Z.offsetHeight;
        if (u + 6 > ah.iDPRowHeight) {
            B.height = u + 6 + "px";
            R.top = "0px"
        }
    }
    var y = K;
    var t = 0;
    S.indent = (ah.deviceInputPad ? ah.deviceInputPad : D) + K + D * 2 + ah.RightPad + ah.InputLength;
    if (I._inputType == ah.TypeCheckbox || I._inputType == ah.TypeRadio) {
        I._sTrailingText = m;
        I._sTrailingText2 = k;
        ac.left = K + "px";
        if (m) {
            var j = document.createElement("div");
            var c = j.style;
            L(j, w, false, null, I._sTrailingText);
            j.className = "KJETrailingLabel";
            c.position = "absolute";
            K = K + D * 1.5 + (S.offsetWidth ? S.offsetWidth : 15);
            c.left = K + "px";
            z.appendChild(j);
            c.top = (ah.iDPInputHeight / 4) + 2 + "px";
            var u = j.offsetHeight;
            if (u + 6 > ah.iDPRowHeight) {
                B.height = u + 6 + "px";
                c.top = "0px"
            }
            K += j.offsetWidth;
            j = j
        }
    } else {
        if (I._inputType != ah.TypeDropBox) {
            if (I._inputType == ah.TypeLabel) {
                S.className = "KJEOutputLabel " + C;
                ac.top = (ah.iDPInputHeight / 4) + 2 + "px";
                ac.left = (K + D) + "px";
                S.indent += ah.deviceInputPad;
                if (m) {
                    ac.width = ah.InputLength + D + "px"
                } else {
                    S.resize = true
                }
                ac.height = ah.iDPItemHeight - 2 + "px"
            } else {
                if (I._inputType == ah.TypeString || I._inputType == ah.TypeDate) {
                    ac.left = ((ah.deviceInputPad ? ah.deviceInputPad : D) + K) + "px";
                    if (m || I.bSlider || I._inputType == ah.TypeDate) {
                        ac.width = ah.InputLength + "px"
                    } else {
                        S.indent = ((ah.deviceInputPad ? ah.deviceInputPad : D) + K) + D;
                        S.resize = true
                    }
                } else {
                    ac.width = ah.InputLength + "px";
                    if (ah.deviceUseNumberType) {
                        var n = document.createElement("div");
                        var M = n.style;
                        n.className = "KJElabelBold";
                        M.position = "absolute";
                        M.width = ah.deviceInputPad + "px";
                        M.left = K + "px";
                        M.top = (ah.iDPInputHeight / 4) + 2 + "px";
                        if (s == ah.FMT_DOLLARS) {
                            n.innerHTML = ah.sCP + ah.sCS
                        } else {
                            if (s == ah.FMT_PERCENT) {
                                n.innerHTML = ah.sPP + ah.sPS
                            } else {
                                n.innerHTML = ""
                            }
                        }
                        M.height = ah.iDPInputHeight + "px";
                        z.appendChild(n);
                        D = n.offsetWidth + 1
                    }
                    if (ah.deviceUseNumberType && (I._decimals == 0 && I._maximum < 1000)) {
                        S.type = "number"
                    }
                    ac.left = (K + D) + "px"
                }
            }
        } else {
            S.className = "KJEDropBox";
            ac.left = ((ah.deviceInputPad ? ah.deviceInputPad : D) + K) + "px";
            if (m || I.bSlider) {
                ac.width = ah.InputLength + D + "px"
            } else {
                S.indent = ((ah.deviceInputPad ? ah.deviceInputPad : D) + K) + D;
                S.resize = true
            }
            ac.height = ah.iDPDropHeight - 2 + "px"
        }
    }
    if (aa) {
        var Y = I._Additional = document.getElementById(aa);
        if (I._Additional) {
            var W = Y.style;
            W.position = "absolute";
            W.top = "2px";
            Y.setAttribute("aria-required", "true");
            var e = ah.CalculatorWidth - ah.iDPInputPad * 2;
            if (ah.TypeRadio == I._inputType) {
                I._inputTypeAdditional = ah.TypeRadio;
                Y.indent = K + D * 2;
                W.left = Y.indent + "px";
                Y.name = (p ? p : I._name);
                Y.className = "KJEInput";
                W.height = ah.iDPInputHeight - 2 + "px";
                if (k) {
                    var f = I._label3 = document.createElement("div");
                    var F = f.style;
                    L(f, aa, false, null, I._sTrailingText2);
                    f.className = "KJETrailingLabel";
                    F.position = "absolute";
                    var v = Y.offsetWidth;
                    v = (v ? v : 20);
                    F.height = ah.iDPInputHeight + "px";
                    F.top = (ah.iDPInputHeight / 4) + 2 + "px";
                    if (!z.offsetWidth) {
                        var E = ah.LabelLength + ah.InputLength + D * 7 + v;
                        F.left = E + v + "px";
                        W.left = E + "px"
                    } else {
                        if ((e - Y.indent) < ah.SliderMinLength) {
                            W.top = ah.iDPInputHeight + "px";
                            W.left = y + "px";
                            F.top = ah.iDPInputHeight + (ah.iDPInputHeight / 4) + "px";
                            F.left = y + D * 1.5 + S.offsetWidth + "px";
                            B.height = (ah.iDPRowHeight * 1.6) + "px"
                        } else {
                            F.left = K + D * 3.5 + v + "px"
                        }
                    }
                    z.appendChild(f)
                }
            } else {
                I._inputTypeAdditional = ah.TypeDropBox;
                Y.name = a;
                Y.className = "KJEDropBox";
                W.height = ah.iDPDropHeight - 2 + "px";
                Y.indent = K + S.offsetWidth + 5 + D * 2;
                W.width = (e - Y.indent) + "px";
                W.left = (Y.indent - D) + "px";
                if ((e - Y.indent) < ah.SliderMinLength && z.offsetWidth) {
                    W.top = ah.iDPRowHeight + "px";
                    B.height = (ah.iDPRowHeight * 2) + "px"
                }
            }
            if (Y.addEventListener) {
                Y.addEventListener("change", ah.dataChanged, false)
            } else {
                Y.attachEvent("onchange", ah.dataChanged)
            }
        } else {
            if (m) {
                I._inputTypeAdditional = ah.TypeLabel;
                I._sTrailingText = m;
                var j = document.createElement("div");
                var c = j.style;
                L(j, aa, false, null, I._sTrailingText);
                j.className = "KJETrailingLabel";
                c.position = "absolute";
                c.left = ((K + (ah.deviceInputPad ? ah.deviceInputPad : D) + D) + ah.InputLength + 5) + "px";
                c.top = (ah.iDPInputHeight / 4) + 2 + "px";
                c.height = ah.iDPInputHeight + "px";
                I._Additional = j;
                Y = I._Additional = j;
                I._label2 = j;
                z.appendChild(j)
            }
        }
    } else {
        if (I.bSlider) {
            var t = ((K + (ah.deviceInputPad ? ah.deviceInputPad : D) + D) + ah.InputLength + ah.iDPSliderPad);
            var U = ah.iDPItemHeight;
            var x = I._slider = document.createElement("div");
            var o = x.style;
            x.labels = I.setLabelSlider(U, U * 0.1, t + ah.SliderKnobSize / 2, ab);
            x.indent = t;
            x.labels.indent = t;
            x.unselectable = "on";
            x.className = "KJESlider";
            o.top = "0px";
            o.position = "absolute";
            o.left = t + "px";
            o.height = U + "px";
            o.cursor = "pointer";
            x.bMO = true;
            z.appendChild(I._slider);
            var l = I._line = document.createElement("div");
            var g = l.style;
            l.className = "KJELine";
            l.bMouseoutignore = true;
            l.unselectable = "on";
            g.position = "relative";
            g.cursor = "pointer";
            g.height = (ah.iDPRowHeight / 2 + 2) + "px";
            x.appendChild(I._line);
            var ag = I._knob = document.createElement("div");
            var J = ag.style;
            ag.className = (ah.IE7and8 ? "KJEArrowIE8" : "KJEArrow");
            ag.unselectable = "on";
            ag.bMouseoutignore = true;
            J.position = "absolute";
            J.cursor = "pointer";
            x.appendChild(I._knob);
            var ae = x.offsetHeight;
            var V = ag.offsetWidth;
            var ai = ag.offsetHeight;
            if (V == 0) {
                V = ah.SliderKnobSize
            }
            if (ai == 0) {
                ai = ah.SliderKnobSize
            }
            if (x.offsetHeight) {
                J.top = (ae - ai + ah.SliderKnobVertAdj) + "px"
            } else {
                J.top = (ah.iDPRowHeight - ah.SliderKnobSize + ah.SliderKnobVertAdj) + "px"
            }
            g.left = V + "px";
            I._posAdjust = V;
            I.AddSliderEvents(x)
        }
    }
    I.AddInputEvents(S);
    var H = d.get(I._name, A);
    switch (I._inputType) {
    case ah.TypeRadio:
        S.checked = H;
        if (aa) {
            Y.checked = !S.checked
        }
        break;
    case ah.TypeCheckbox:
        S.checked = H;
        break;
    case ah.TypeDropBox:
        ah.setDropBox(I._inputField, H);
        break;
    case ah.TypeLabel:
        S.innerHTML = H;
        break;
    case ah.TypeDate:
        S.value = H;
        I.setTypedDate(true);
        break;
    case ah.TypeString:
        S.value = H;
        I.setTypedString(true);
        break;
    case ah.TypeNumber:
        S.value = H;
        I.setTypedValue(true)
    }
    if (I._inputTypeAdditional != ah.TypeNone) {
        H = d.get(Y.name, A);
        switch (I._inputTypeAdditional) {
        case ah.TypeDropBox:
            ah.setDropBox(Y, H);
            break;
        case ah.TypeDate:
            Y.value = H;
            break;
        case ah.TypeString:
            Y.value = H;
            break;
        case ah.TypeNumber:
            Y.value = H;
            I.setTypedValue(true)
        }
    }
    if (d.get(P + "_HIDE", false)) {
        I.bValidate = false;
        I.hide()
    }
    if (d.get(P + "_DISABLE", false)) {
        I.disable()
    }
};
KJE.InputItem.AltHelpName = false;
KJE.InputItem.prototype.AddDefinitionEvents = function (d, c) {
    var b = 50;
    var a = KJE.iDPInputHeight - 5;
    var e = '<div class="KJECloseButton">[x]</div><dl class=KJEDefinitionPopup>' + c.innerHTML + "</dl>";
    if (d.addEventListener) {
        d.addEventListener("click", function (f) {
            if (KJE.DataPointTimeOut > 0 && KJE.DataPointObject == d) {
                KJE.DataPointHide()
            } else {
                KJE.DataPointShow(f, e, b, a, d, 60000)
            }
        }, false)
    } else {
        d.attachEvent("onclick", function (f) {
            if (KJE.DataPointTimeOut > 0 && KJE.DataPointObject == d) {
                KJE.DataPointHide()
            } else {
                KJE.DataPointShow(f, e, b, a, d, 60000)
            }
        })
    }
};
KJE.InputItem.prototype.AddSliderEvents = function (c) {
    var b = this;
    if (c.addEventListener) {
        try {
            document.createEvent("TouchEvent");
            c.addEventListener("touchstart", function (d) {
                d.preventDefault();
                b.doMouseDown(d, true)
            }, false);
            c.addEventListener("touchmove", function (d) {
                d.preventDefault();
                b.doMouseMove(d, true)
            }, false);
            c.addEventListener("touchend", function (d) {
                d.preventDefault();
                b.doMouseUp(d, true)
            }, false);
            c.addEventListener("touchcancel", function (d) {
                d.preventDefault();
                b.doMouseOut(d, true)
            }, false)
        } catch (a) {}
        c.addEventListener("mousemove", function (d) {
            b.doMouseMove(d)
        }, false);
        c.addEventListener("mousedown", function (d) {
            b.doMouseDown(d)
        }, false);
        c.addEventListener("mouseup", function (d) {
            b.doMouseUp(d)
        }, false);
        c.addEventListener("mouseout", function (d) {
            b.doMouseOut(d)
        }, false)
    } else {
        c.attachEvent("onmousemove", function (d) {
            b.doMouseMove(d)
        });
        c.attachEvent("onmousedown", function (d) {
            b.doMouseDown(d)
        });
        c.attachEvent("onmouseup", function (d) {
            b.doMouseUp(d)
        });
        c.attachEvent("onmouseout", function (d) {
            b.doMouseOut(d)
        })
    }
};
KJE.InputItem.prototype.AddInputEvents = function (b) {
    var a = this;
    if (b.addEventListener) {
        b.addEventListener("change", function (c) {
            a.doBlur(c)
        }, false);
        b.addEventListener("focus", function (c) {
            a.doFocus(c)
        }, false);
        b.addEventListener("keypress", function (c) {
            if (c.keyCode == 13) {
                a.doBlur();
                return KJE.Dropper.stopBubble(c)
            }
        }, false)
    } else {
        b.attachEvent("onchange", function (c) {
            a.doBlur(c)
        });
        b.attachEvent("onfocus", function (c) {
            a.doFocus(c)
        });
        b.attachEvent("onkeypress", function (c) {
            if (c.keyCode == 13) {
                a.doBlur();
                return KJE.Dropper.stopBubble(c)
            }
        })
    }
};
KJE.InputItem.prototype.doFocus = function () {
    var a = KJE;
    switch (this._inputType) {
    case a.TypeRadio:
    case a.TypeCheckbox:
    case a.TypeDropBox:
    case a.TypeLabel:
        break;
    case a.TypeDate:
    case a.TypeString:
    case a.TypeNumber:
        this._inputField.select()
    }
};
KJE.InputItem.prototype.doBlur = function () {
    var a = KJE;
    var b = this;
    switch (b._inputType) {
    case a.TypeRadio:
    case a.TypeCheckbox:
        a.dataChanged();
        break;
    case a.TypeDropBox:
        b.setSliderPosition(b._inputField.selectedIndex);
        a.dataChanged();
        break;
    case a.TypeDate:
        b.setTypedDate();
        break;
    case a.TypeString:
        b.setTypedString();
        break;
    case a.TypeNumber:
        b.setTypedValue()
    }
};
KJE.InputItem.prototype.doClick = function (b, a) {
    this.setMouseValue(b, a)
};
KJE.InputItem.prototype.doMouseUp = function (c, a) {
    var b = this;
    b._line.className = "KJELine";
    b._knob.className = (KJE.IE7and8 ? "KJEArrowIE8" : "KJEArrow");
    b._mouseDown = false
};
KJE.InputItem.prototype.doMouseOut = function (g, f) {
    var b = this;
    var c = window.event;
    if (b._inputField.disabled) {
        return
    }
    if (b._mouseDown) {
        if (!g) {
            var g = c
        }
        var d = c ? g.srcElement : g.target;
        if (d.bMouseoutignore) {
            return
        }
        var a = (g.relatedTarget) ? g.relatedTarget : g.toElement;
        while (a != d && a.nodeName != "BODY") {
            a = a.parentNode
        }
        if (d != a) {
            b.doMouseUp()
        }
    }
};
KJE.InputItem.prototype.doMouseDown = function (c, b) {
    var a = this;
    if (a._inputField.disabled) {
        return
    }
    a._line.className = "KJELine active";
    if (!KJE.IE7and8) {
        a._knob.className = "KJEArrow active"
    }
    a._mouseDown = true;
    if (c) {
        a.setMouseValue(c, b)
    }
};
KJE.InputItem.prototype.doMouseMove = function (c, b) {
    var a = this;
    if (a._mouseDown) {
        a.setMouseValue(c, b)
    }
};
KJE.InputItem.prototype.setMouseValue = function (g, c) {
    var f = this;
    var k = KJE.getMouseCoord(g, f._slider, c);
    if (k.x >= 0) {
        var m = f._posAdjust;
        var b = f._oScale;
        var a = f._slider.offsetWidth;
        var h = f._minimum;
        var d = f._maximum;
        var l = (k.x - m) / (a - m);
        if (b) {
            l = KJE.s_Translate(l * 100, b._Min, b._Mid1, b._Mid2, b._Max, b._stepMin, b._stepMid, b._stepMax)
        } else {
            var j = f._increment;
            l = l * f._range + h;
            l = (j == 1 ? Math.round(l) : (Math.round(l / j) * j))
        }
        f.setValue((l > d ? d : (l < h ? h : l)), false, true)
    }
};
KJE.InputItem.prototype.validate = function () {
    var a = this;
    if (a.bValidate) {
        if (a._bError) {
            throw a._sError
        }
        return !a._InComplete
    } else {
        return true
    }
};
KJE.InputItem.prototype.setValue = function (q, b, k) {
    var s = KJE;
    var m = this;
    var l = m._inputField;
    var g = m._format;
    var f = m._container;
    var j = m._inputType;
    var a = false;
    m._InComplete = false;
    if (j == s.TypeNone) {
        m._value = q;
        m._bError = false;
        return
    } else {
        if (j == s.TypeDate) {
            var p = new Date();
            try {
                var c = new Array();
                if (q.indexOf("/") > 0) {
                    c = q.split("/");
                    c[0] = Math.round(c[0]);
                    c[1] = Math.round(c[1]);
                    c[2] = Math.round(c[2])
                } else {
                    c[0] = Math.round(q.substring(0, 2));
                    c[1] = Math.round(q.substring(2, 4));
                    c[2] = Math.round(q.substring(4))
                }
                if (c[2] < 100) {
                    c[2] += 2000
                }
                if (c[2] + c[1] + c[0] > 0) {
                    p = new Date(c[2], c[0] - 1, c[1])
                } else {
                    a = true
                }
            } catch (o) {
                a = true
            }
            if (a) {
                m._sError = s.getKJEReplaced(s.MSG_INVALID_DATE, m._sLabel);
                m._value = null
            } else {
                m._value = p;
                l.value = s.dateFormat(p)
            }
        } else {
            if (j == s.TypeString) {
                l.value = q
            } else {
                if (j == s.TypeDropBox) {
                    l.selectedIndex = Math.round(q);
                    m.setSliderPosition(q)
                } else {
                    if (j == s.TypeLabel) {
                        l.innerHTML = q
                    } else {
                        if (j == s.TypeCheckbox) {
                            l.checked = q
                        } else {
                            if (m.bValidate) {
                                if (q > m._maximum) {
                                    m._sError = s.getKJEReplaced(s.MSG_EXCEEDS_LIMIT_OF_RANGE, m._sLabel, s.format[g]((s.FMT_PERCENT == g ? m._maximum / 100 : m._maximum), m._decimals));
                                    a = true
                                } else {
                                    if (q < m._minimum) {
                                        m._sError = s.getKJEReplaced(s.MSG_UNDER_LIMIT_OF_RANGE, m._sLabel, s.format[g]((s.FMT_PERCENT == g ? m._minimum / 100 : m._minimum), m._decimals));
                                        a = true
                                    }
                                }
                            }
                            var r = m._value = s.round(q, m._decimals);
                            var h = "";
                            if (s.deviceUseNumberType && (g == s.FMT_DOLLARS || g == s.FMT_PERCENT)) {
                                h = s.nbr(r, m._decimals, "", "", true, false)
                            } else {
                                h = s.format[g]((g == s.FMT_PERCENT ? r / 100 : r), m._decimals)
                            }
                            l.value = s.replace("&nbsp;", " ", h);
                            m.setSliderPosition(r)
                        }
                    }
                }
            }
        }
    }
    m._bError = a;
    if (a) {
        f.style.backgroundColor = s.ErrorBackground
    } else {
        f.style.backgroundColor = f.backgroundColor
    }
    if (!b) {
        s.dataChanged(k)
    }
};
KJE.InputItem.prototype.setSliderPosition = function (a) {
    var f = this;
    if (f.bSlider) {
        var e = f._slider.width;
        if (e && (a || a == 0)) {
            var g = f._oScale;
            var d = f._posAdjust;
            var b = 0;
            if (g) {
                b = KJE.s_Untranslate(a, g._Min, g._Mid1, g._Mid2, g._Max) / 100
            } else {
                var h = f._maximum;
                var c = f._minimum;
                b = ((a > h ? h : (a < c ? c : a)) - c) / f._range
            }
            f._knob.style.left = (((e - d) * b) + d / 2) + "px"
        }
    }
};
KJE.InputItem.prototype.setTypedString = function (c) {
    var b = KJE.replace;
    var a = this;
    a.setValue(b("<", "", b(">", "", b("(", "", b(")", "", a._inputField.value)))), c)
};
KJE.InputItem.prototype.setTypedDate = function (f) {
    var a = KJE;
    var c = this;
    var e = c._inputField.value;
    var b = e;
    if (e == "TODAY") {
        b = a.dateFormat(new Date())
    } else {
        if (e == "NEXT_MONTH") {
            var g = new Date();
            g.setMonth(g.getMonth() + 1);
            b = a.dateFormat(g)
        } else {
            b = a.stripDate(e);
            if (b == "") {
                c._inputField.value = "";
                c._InComplete = true;
                c._bError = false;
                c._container.style.backgroundColor = a.IncompleteBackground;
                if (!f) {
                    a.dataChanged()
                }
                c._value = null;
                return
            }
        }
    }
    c.setValue(b, f)
};
KJE.InputItem.prototype.setTypedValue = function (e) {
    var a = KJE;
    var c = this;
    var d = c._inputField.value;
    if (d == "") {
        c.setSliderPosition(c._minimum);
        c._inputField.value = "";
        c._InComplete = true;
        c._bError = false;
        c._container.style.backgroundColor = a.IncompleteBackground;
        if (!e) {
            a.dataChanged()
        }
    } else {
        var b = a.round(parseFloat(a.strip(d)), c._decimals);
        c.setValue(b, e)
    }
};
KJE.InputItem.prototype.getSecondValue = function () {
    var a = this;
    return a.getV(a._inputTypeAdditional, a._Additional)
};
KJE.InputItem.prototype.getValue = function () {
    var a = this;
    return a._value = a.getV(a._inputType, a._inputField, a._format)
};
KJE.InputItem.prototype.setText = function (a) {
    var b = this;
    return b.setT(b._inputType, b._inputField, a)
};
KJE.InputItem.prototype.setSecondText = function (a) {
    var b = this;
    return b.setT(b._inputTypeAdditional, b._Additional, a)
};
KJE.InputItem.prototype.getSecondFormatted = function () {
    var a = this;
    return a.getF(a._inputTypeAdditional, a._Additional)
};
KJE.InputItem.prototype.getFormatted = function () {
    var a = this;
    return (a._InComplete ? KJE.sIncomplete : a.getF(a._inputType, a._inputField))
};
KJE.InputItem.prototype.getF = function (g, f) {
    var b = KJE;
    var e = "";
    var d = this;
    var c = d._value;
    var a = d._format;
    switch (g) {
    case b.TypeRadio:
    case b.TypeCheckbox:
        e = f.value;
        break;
    case b.TypeDropBox:
        e = (f[f.selectedIndex].text);
        break;
    case b.TypeLabel:
        e = f.innerHTML;
        break;
    case b.TypeDate:
        e = b.dateFormat(c);
        break;
    case b.TypeString:
        e = f.value;
        break;
    case b.TypeNumber:
        e = b.format[a]((a == b.FMT_PERCENT ? c / 100 : c), d._decimals);
        break;
    case b.TypeNone:
        e = c
    }
    return e
};
KJE.InputItem.prototype.getV = function (f, e, b) {
    var a = KJE;
    var c = 0;
    var d = this;
    switch (f) {
    case a.TypeRadio:
    case a.TypeCheckbox:
        c = e.checked;
        break;
    case a.TypeDropBox:
        c = e[e.selectedIndex].value;
        if (b != a.FMT_STRING) {
            c = Math.round(c)
        }
        break;
    case a.TypeLabel:
        c = e.innerHTML;
        break;
    case a.TypeDate:
        c = d._value;
        break;
    case a.TypeString:
        c = e.value;
        break;
    case a.TypeNumber:
        c = a.round(parseFloat(a.strip(e.value)), d._decimals);
        break;
    case a.TypeNone:
        c = d._value
    }
    return c
};
KJE.InputItem.prototype.setT = function (e, d, b) {
    var a = KJE;
    var c = this;
    switch (e) {
    case a.TypeRadio:
    case a.TypeCheckbox:
    case a.TypeDropBox:
        break;
    case a.TypeLabel:
        d.innerHTML = b;
        break;
    case a.TypeDate:
        d.value = b;
        c.setTypedDate(true);
        break;
    case a.TypeString:
        d.value = b;
        c.setTypedString(true);
        break;
    case a.TypeNumber:
        d.value = a.replace("&nbsp;", " ", b);
        c.setTypedValue(true);
        break
    }
};
KJE.InputItem.prototype.shortDesc = function () {
    return this._sLabel + KJE.Colon + " " + this.getFormatted()
};
KJE.InputItem.prototype.newWidth = function () {
    var k = KJE;
    var e = this;
    var b = e._inputType;
    var d = e._inputField;
    var a = e._Additional;
    if (b == k.TypeNone) {
        return
    }
    var c = k.CalculatorWidth - k.iDPInputPad * 2 - (e.SliderWidthAdjust ? e.SliderWidthAdjust : k.SliderWidthAdjust);
    if (d.resize) {
        d.style.width = Math.max(c - d.indent, 0) + "px"
    }
    if (a) {
        if (a.indent && e._inputTypeAdditional != k.TypeRadio) {
            a.style.width = c + 10 - a.indent + "px"
        }
    }
    var f = e._slider;
    if (f) {
        if (f.indent) {
            if (c - k.InputTotalLength < k.SliderMinLength) {
                f.style.display = "none";
                f.labels.style.display = "none"
            } else {
                f.style.display = "";
                f.labels.style.display = "";
                var j = c - f.indent;
                f.width = j;
                f.style.width = j + "px";
                e._line.style.width = j - k.SliderKnobSize + "px";
                f.labels.style.width = c - f.labels.indent + "px";
                e.setSliderPosition(b == k.TypeDropBox ? d.selectedIndex : e._value)
            }
        }
    }
    var h = e._label2;
    if (h) {
        var g = h.offsetHeight;
        if (g + 6 > k.iDPRowHeight) {
            e._container.style.height = g + (k.iDPInputHeight / 4) + 2 + "px"
        }
    }
};
KJE.InputItem.prototype.hide = function () {
    var a = this._container;
    if (a) {
        a.style.display = "none"
    }
};
KJE.InputItem.prototype.show = function () {
    var a = this._container;
    if (a) {
        a.style.display = "block"
    }
};
KJE.InputItem.prototype.setLabelSlider = function (h, g, b, j) {
    var k = ["left", "center", "center", "right"];
    var e = document.createElement("div");
    e.className = "KJEScale";
    e.unselectable = "on";
    e.style.position = "absolute";
    e.style.height = h + "px";
    e.style.cursor = "pointer";
    e.style.top = g + "px";
    e.style.left = b + "px";
    this._container.appendChild(e);
    var a = KJE.SliderLabelVertAdj;
    if (j) {
        var d = (j.length > 4 ? 4 : j.length) - 1;
        for (var c = 0; c <= d; c++) {
            var f = document.createElement("div");
            f.className = "KJEScale";
            f.unselectable = "on";
            f.style.position = "absolute";
            f.style.height = h + "px";
            f.style.textAlign = k[c == d ? 3 : c];
            f.style.cursor = "pointer";
            f.style.top = (0 + a) + "px";
            if (d < 2) {
                f.style.width = "100%"
            } else {
                f.style.width = (d > 2 ? 66.66 : 100) + "%"
            }
            if (c > 1) {
                f.style.right = 0
            } else {
                f.style.left = 0
            }
            f.innerHTML = j[c];
            e.appendChild(f)
        }
    }
    return e
};
KJE.InputItem.prototype.disable = function (a) {
    var c = this;
    var d = c._inputType;
    var b = c._label2;
    var e = c._label;
    if (d == KJE.TypeNone) {
        return false
    }
    c.bValidate = false;
    c._container.style.backgroundColor = c._container.backgroundColor;
    c._InComplete = false;
    if (d == KJE.TypeCheckbox) {
        if (b) {
            b.className = "KJETrailingLabelDisable"
        }
    }
    if (e && !a) {
        e.className = c.className + " KJETrailingLabelDisable"
    }
    if (c.bSlider) {
        c._slider.labels.style.display = "none";
        c._slider.style.display = "none"
    }
    return c._inputField.disabled = true
};
KJE.InputItem.prototype.enable = function () {
    var a = KJE;
    var c = this;
    var d = c._inputType;
    var b = c._label2;
    var e = c._label;
    if (d == a.TypeNone) {
        return false
    }
    c.bValidate = true;
    if (d == a.TypeCheckbox) {
        if (b) {
            b.className = "KJETrailingLabel"
        }
    }
    if (e) {
        e.className = this.className
    }
    if (c.bSlider) {
        c._slider.labels.style.display = "block";
        c._slider.style.display = "block"
    }
    if (d == a.TypeDate) {
        c.setTypedDate(true)
    }
    if (d == a.TypeNumber) {
        c.setTypedValue(true)
    }
    return c._inputField.disabled = false
};
KJE.InputItem.prototype.getName = function () {
    return this._sLabel
};
KJE.shortDesc = function () {
    var b = "";
    for (var a = 0; a < arguments.length; a++) {
        if (arguments[a].shortDesc) {
            b += arguments[a].shortDesc() + (a == arguments.length - 1 ? "" : ", ")
        } else {
            b += arguments[a]
        }
    }
    return b
};
KJE.stripDate = function (a) {
    if (!a) {
        return ""
    }
    var c = a.length;
    var d = "";
    while (c > 0) {
        var b = a.charAt(c - 1);
        switch (b) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "/":
            d = b + d;
            break;
        case "-":
            d = b + "/";
            break;
        default:
            break
        }
        c--
    }
    return d
};
KJE.strip = function (a) {
    if (!a) {
        return "0"
    }
    var c = a.length;
    var e = "";
    var f = 0;
    var g = 0;
    while (c > 0) {
        var b = a.charAt(c - 1);
        switch (b) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            e = b + e;
            break;
        case ".":
            if (!f) {
                e = b + e
            }
            f++;
            break;
        case "-":
        case "(":
            g++;
            break;
        default:
            break
        }
        c--
    }
    if (e == "") {
        return "0"
    }
    return (g ? "-" + e : e)
};
KJE.DataPointTimeOut = -1;
KJE.DataPointObject = null;
KJE.DataPointHide = function () {
    var a = KJE;
    a.DataPoint.style.display = "none";
    if (a.DataPointTimeOut) {
        clearTimeout(a.DataPointTimeOut)
    }
    a.DataPointTimeOut = -1;
    a.DataPointObject = null
};
KJE.DataPointOffset = function () {
    var a = KJE.DataPoint.offsetParent;
    if (a) {
        var b = KJE.getScreenCoord(0, 0, a);
        return {
            x: -b.x,
            y: -b.y
        }
    } else {
        return {
            x: 0,
            y: 0
        }
    }
};
KJE.DataPointShow = function (f, c, b, g, h, d) {
    var k = KJE;
    if (!d) {
        d = 2500
    }
    k.DataPoint.style.display = "block";
    var j = k.getScreenCoord(b, g, h);
    var a = k.DataPointOffset();
    k.DataPoint.style.left = (j.x + a.x - 47 + k.DataPointX) + "px";
    k.DataPoint.style.top = (j.y + a.y - 5 + k.DataPointY) + "px";
    k.DataPoint.innerHTML = c;
    if (k.DataPointTimeOut) {
        clearTimeout(k.DataPointTimeOut)
    }
    k.DataPointTimeOut = setTimeout(k.DataPointHide, d);
    k.DataPointObject = h
};
KJE.sDropperTitle = '<div class=KJEToggleIcon><img src="KJEResources/InputIcon.png" title="Click to Show Inputs" alt="Click to Show Inputs" style=\'vertical-align:middle;\'/> **ICON**</div><div class=KJEToggleTitle>**TITLE_TEXT**</div>';
KJE.DropperDefined = function (a) {
    return document.getElementById("KJE-P-" + a)
};
KJE.Dropper = function (d, b, m, k, e) {
    var f = this;
    var l = KJE.parameters.get("DROPPER_OPEN" + Math.floor(KJE.droppers.length + 1), b);
    if (KJE.IE7and8) {
        b = true
    } else {
        b = l
    }
    f.getOpen = (m ? m : false);
    f.getClosed = (k ? k : false);
    var h = f._idDropper = document.getElementById("KJE-P-" + d);
    var g = f._idDrop = document.getElementById("KJE-D-" + d);
    var a = f._idDroppee = document.getElementById("KJE-E-" + d);
    if (g) {
        g.className = ("KJEDrop")
    }
    if (a) {
        a.className = ("KJEDroppee")
    }
    h.className = "KJEDropper";
    h.tabIndex = "0";
    if (KJE.IE7and8) {
        h.style.paddingRight = "0"
    }
    a.style.display = "block";
    a.style.overflow = "hidden";
    a.style.width = "100%";
    f._iHeight = a.offsetHeight;
    if (!f._iHeight) {
        f._iHeight = 0;
        var j = a.getElementsByTagName("div");
        for (var c = 0; c < j.length; c++) {
            if (j[c].className == "KJEInputContainer") {
                f._iHeight += KJE.iDPRowHeight
            }
        }
        f._iHeight += 10
    }
    f.InCalculator = (e ? false : true);
    f._sInnerHTML = h.innerHTML;
    f._sName = d;
    f.AddEvents();
    f.show(b ? true : false);
    if (!b) {
        a.style.height = "0px";
        a.style.display = "none";
        a.style.visibility = "hidden"
    } else {
        a.style.height = f._iHeight + "px"
    }
    if (KJE.IE7and8 && !l) {
        setTimeout(function () {
            KJE.inCommandTask(false);
            f.toggle()
        }, 1001)
    }
};
KJE.Dropper.prototype.AddEvents = function () {
    var a = this;
    var b = a._idDropper;
    if (b.addEventListener) {
        b.addEventListener("click", function () {
            a.toggle(a)
        }, false);
        b.addEventListener("keypress", function (c) {
            if (c.keyCode == 32) {
                return KJE.Dropper.stopBubble(c)
            }
        }, false);
        b.addEventListener("keydown", function (c) {
            if (c.keyCode == 32) {
                a.toggle();
                return KJE.Dropper.stopBubble(c)
            }
            if (c.keyCode == 13 && KJE.ViewReport) {
                KJE.ViewReport.focus()
            }
        }, false)
    } else {
        b.attachEvent("onclick", function () {
            a.toggle(a)
        });
        b.attachEvent("onkeypress", function (c) {
            if (c.keyCode == 32) {
                return KJE.Dropper.stopBubble(c)
            }
        });
        b.attachEvent("onkeydown", function (c) {
            if (c.keyCode == 32) {
                a.toggle();
                return KJE.Dropper.stopBubble(c)
            }
            if (c.keyCode == 13 && KJE.ViewReport) {
                KJE.ViewReport.focus()
            }
        })
    }
};
KJE.Dropper.prototype.setBackground = function (b) {
    var a = this;
    if (a._idDrop) {
        a._idDrop.style.backgroundColor = b
    }
    a._idDroppee.style.backgroundColor = b
};
KJE.Dropper.prototype.setText = function (b) {
    var c = this;
    var d = c.getOpen;
    var a = c.getClosed;
    var e = c._bShow;
    if (b) {} else {
        if (e && d) {
            if ("function" == typeof d) {
                b = d()
            } else {
                b = d
            }
        } else {
            if (!e && a) {
                if ("function" == typeof a) {
                    b = a()
                } else {
                    b = a
                }
            } else {
                b = c._sInnerHTML
            }
        }
    }
    c._idDropper.innerHTML = KJE.setToggleTitleText(b, c, KJE)
};
KJE.Dropper.prototype.show = function (a) {
    var b = this;
    b._bShow = a;
    b.setText()
};
KJE.Dropper.prototype.toggle = function () {
    if (KJE.inCommandTask(true)) {
        return
    }
    var b = this;
    var c = b._idDroppee;
    var a = (KJE.deviceNoTransition || KJE.IE7and8 ? 0 : 8);
    if (b._bShow) {
        if (KJE.IE7and8) {
            c.style.display = "none"
        } else {
            c.style.height = 0 + "px"
        }
        b._bShow = false;
        b.show();
        KJE.Calculator.style.height = KJE.Main.offsetHeight + "px";
        setTimeout(function () {
            KJE.inCommandTask(false);
            c.style.visibility = "hidden";
            c.style.display = "none"
        }, 100)
    } else {
        c.style.overflow = "hidden";
        c.style.display = "block";
        c.style.visibility = "visible";
        b._count = 0;
        KJE._iInterval = setInterval(function () {
            b.open(c.style, b._iHeight, a)
        }, 25);
        b.show(true)
    }
};
KJE.Dropper.stopBubble = function (a) {
    a.cancelBubble = true;
    a.returnValue = false;
    if (a.stopPropagation) {
        a.stopPropagation()
    }
    if (a.preventDefault) {
        a.preventDefault()
    }
    return false
};
KJE.Dropper.prototype.open = function (d, f, b) {
    var c = this;
    var a = c._count;
    if (a >= b) {
        clearInterval(KJE._iInterval);
        if (!KJE.IE7and8) {
            d.height = f + "px"
        }
        KJE.Calculator.style.height = KJE.Main.offsetHeight + "px";
        setTimeout(function () {
            KJE.inCommandTask(false)
        }, 100);
        return
    } else {
        if (a >= b - 2) {
            a -= 0.5
        }
    }
    a++;
    d.height = f * (a / b) + "px";
    KJE.Calculator.style.height = KJE.Main.offsetHeight + "px";
    c._count = a
};
KJE.addDiv = function (c, b, d) {
    var a = document.getElementById("KJE-D-" + c);
    if (a) {
        a.className = ("KJEInputDiv" + (d ? " " + d : ""));
        if (b) {
            a.style.backgroundColor = b
        }
    }
    return a
};
KJE.addDropper = function (b, a) {
    if (a) {
        b.setBackground(a)
    }
    KJE.droppers.set(b._sName, b)
};
KJE.setToggleTitleText = function (e, h, d, g) {
    if (!e) {
        e = ""
    }
    var f = e.indexOf("<");
    var l = e.indexOf("|");
    if (f > 0 && l > 0) {
        f = (f > l ? l : f)
    } else {
        f = (f < l ? l : f)
    }
    var j = (f > 0 ? e.substring(0, f) : e).trim();
    if (j.charAt(j.length - 1) == ".") {
        j = j.slice(0, -1)
    }
    if (j.charAt(j.length - 1) != KJE.Colon.trim()) {
        j += KJE.Colon
    }
    var m = "";
    var b = "";
    if (h) {
        m = h._bShow ? d.sToggleAltTextOpen : d.sToggleAltTextClose;
        b = h._bShow ? d.sToggleClose : d.sToggleOpen
    }
    var n = KJE.sToggleTitle;
    var c = "";
    var k = e.indexOf("|");
    var a = (g || !h ? "" : d.sToggleIcon);
    if ((g && KJE.IE7and8) || !h) {
        b = "";
        m = ""
    }
    if (k > -1) {
        n = KJE.sToggleTitle2;
        c = e.substring(k + 1);
        e = e.substring(0, k)
    } else {
        if (!h) {
            n = KJE.sToggleTitle1
        }
    }
    return n.replace("**IMG_TEXT**", m).replace("**SUMMARY_TEXT**", j).replace("**TITLE_TEXT**", e).replace("**TITLE_TEXT2**", c).replace("**ICON**", b).replace("**IMG**", a).replace("**TITLE_CLASS**", d.sToggleTitleClass).replace("**TITLE_CLASS**", d.sToggleTitleClass)
};
KJE.setDropBox = function (c, b) {
    b = b + "";
    for (var a = 0; a < c.options.length; a++) {
        if (c.options[a].value == b) {
            c.options[a].selected = true;
            return a
        }
    }
    return 0
};
KJE.getDropBox = function (f, g, d, h, b) {
    b = (b ? ' class="' + b + '" ' : "");
    h = (h ? h : d);
    var e = h.length;
    var a = d.length;
    var k = "<select name=" + f + " id=KJE-" + f + b + ">";
    for (var c = 0; c < a; c++) {
        var j = (d[c] == g ? " selected='selected' " : "");
        k += "<option value='" + d[c] + "' " + j + ">" + (c >= e ? d[c] : h[c])
    }
    return k + "</select>"
};
KJE.getTermChoice = function (k, j, e, g, b, l, f, d, m) {
    var p = new Array();
    var o = new Array();
    l = (l ? l : "");
    f = (f ? f : false);
    m = (m ? m : 1);
    var a = 0;
    var h = KJE.parameters.get("TERM_SHOW_ADDITIONAL", 7);
    for (var c = m; c <= g; c++) {
        if ((e && c <= b) || c % 5 == 0 || c == h) {
            if ((h == 0 && (c == 5 || c == 25 || c == 35)) == false) {
                p[a] = c + " " + (c == 1 ? KJE.MSG_YEAR_LBL : KJE.MSG_YEARS_LBL) + (c > b ? l : "");
                o[a] = c;
                a++
            }
        }
    }
    if (d) {
        return KJE.getDropBox(k, j, o, p, f)
    } else {
        return {
            d: p,
            v: o
        }
    }
};
KJE.getMortgageTermChoice = function (b, c, d) {
    var a = KJE;
    return a.getTermChoice(b, c, a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageShowAll), a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageTermMax), a.parameters.get("MORTGAGE_SHOW_MAX", a.Default.MortgageShowAllMax), "", false, d, a.parameters.get("MORTGAGE_TERM_MIN", a.Default.MortgageTermMin))
};
KJE.getMortgageTermDrop = function (a, b) {
    return KJE.getMortgageTermChoice(a, b, true)
};
KJE.getMortgageTermList = function () {
    return KJE.getMortgageTermChoice("", 0, false)
};
KJE.gScaleLabel = ["", "Thousands of ", "Millions of ", "Billions of "];
KJE.gScaleLabelMax = [0, 100000, 140404100, 140404100000];
KJE.gScaleLabelFactor = [1, 1000, 1404041, 1404041000];
KJE.gFont = ["Helvetica", "Helvetica", "Helvetica", "Helvetica", "Helvetica"];
KJE.gFontStyle = ["bold", "bold", "", "", "bold"];
KJE.gFontSize = [13, 10, 10, 10, 10];
KJE.g = new Object();
KJE.g.sToggleAltTextClose = "Click or Spacebar to Show Graph";
KJE.g.sToggleAltTextOpen = "Click or Spacebar to Hide Graph";
KJE.g.sNewGraphPleaseComplete = "please complete inputs to view graph";
KJE.g.sToggleTitleClass = "KJEGraphTitle";
KJE.g.sToggleIcon = "KJEGraphIcon";
KJE.g.sToggleOpen = "[+]";
KJE.g.sToggleClose = "[-]";
KJE.gHeight = 250;
KJE.gHeightReport = 350;
KJE.gLegendMin = 400;
KJE.gColorBackground = "#FFFFFF";
KJE.gColorForeground = "#404041";
KJE.gColorGrid = "#BBBBBB";
KJE.gColorGridBackground1 = "#FFFFFF";
KJE.gColorGridBackground2 = "#CCCCCC";
KJE.gColorAxisLine = "#666666";
KJE.gColorText = "#404041";
KJE.gColorList = ["#000055", "#7B68EE", "#64A650", "#FFF200", "#5f007f", "#F15A22", "#B72467", "#6DC8BF", "#00007f", "#ff00ff", "#ffff00", "#00ffff", "#7f007f", "#7f0000", "#007f7f", "#0000ff", "#00c8ff", "#60ffff", "#bfffbf", "#ffff90", "#a0c8ef"];
KJE.gPleaseComplete = "";
KJE.gWidthAdjust = 0;
KJE.gPIE = 0;
KJE.gCOLUMN = 1;
KJE.gCATEGORIES = 2;
KJE.gSTACKED = 3;
KJE.gLINE = 4;
KJE.gGetFontHeight = function (a) {
    return Math.ceil(a.measureText("m").width + 2)
};
KJE.gDarker = function (d, h) {
    if (d[0] == "#") {
        d = d.slice(1)
    }
    var c = parseInt(d, 16);
    var f = (c >> 16) * h;
    if (f > 255) {
        f = 255
    } else {
        if (f < 0) {
            f = 0
        }
    }
    var a = ((c >> 8) & 255) * h;
    if (a > 255) {
        a = 255
    } else {
        if (a < 0) {
            a = 0
        }
    }
    var e = (c & 255) * h;
    if (e > 255) {
        e = 255
    } else {
        if (e < 0) {
            e = 0
        }
    }
    return "rgb(" + Math.floor(f) + "," + Math.floor(a) + "," + Math.floor(e) + ")"
};
KJE.gTitle = new Object();
KJE.gGraphLine = new Object();
KJE.gAxis = new Object();
KJE.gGraphColumn = new Object();
KJE.gGraphPie = new Object();
KJE.gTitle.HORIZONTAL = 0;
KJE.gTitle.VERTICAL = 1;
KJE.gLegend = new Object();
KJE.gLegend.LEFT = 0;
KJE.gLegend.RIGHT = 1;
KJE.gLegend.TOP = 3;
KJE.gLegend.BOTTOM = 4;
KJE.gLegend.TOP_LEFT = 5;
KJE.gLegend.TOP_RIGHT = 6;
KJE.gLegend.BOTTOM_LEFT = 7;
KJE.gLegend.BOTTOM_RIGHT = 8;
KJE.gLegend.GRID_TOP_RIGHT = 9;
KJE.gLegend.GRID_TOP_LEFT = 10;
KJE.gLegend.GRID_BOTTOM_RIGHT = 11;
KJE.gLegend.GRID_BOTTOM_LEFT = 12;
KJE.gLegend.GRID_TOP = 13;
KJE.gLegend.GRID_BOTTOM = 14;
KJE.gLegend.GRID_RIGHT = 15;
KJE.gLegend.GRID_LEFT = 16;
KJE.gLegend.TOP_GRID_ALIGN = 17;
KJE.gLegend.BANDED_LEGEND = 0;
KJE.gLegend.DATA_SERIES_LEGEND = 1;
KJE.gLegend.CATEGORY_LEGEND = 2;
KJE.gLegend.ROUND_LEGEND = 0;
KJE.gLegend.SQUARE_LEGEND = 1;
KJE.gLegend._sSHADOW_COLOR = "#222222";
KJE.gTITLE_FONT = 0;
KJE.gBOLD_FONT = 1;
KJE.gPLAIN_FONT = 2;
KJE.gLEGEND_FONT = 3;
KJE.gLEGEND_FONT_BOLD = 4;
KJE.gSCALE = (KJE.VML ? 1 : 2);
KJE.ggetFont = function (b) {
    var a = KJE;
    if (a.gFontStyle.length <= b) {
        b -= 2
    }
    return (a.VML ? "" : a.gFontStyle[b] + " ") + Math.floor(a.gSCALE * a.gFontSize[b]) + "pt " + a.gFont[b]
};
KJE.gBORDER_WIDTH = 10 * KJE.gSCALE;
KJE.gLegend._iSIDE_BORDER_WIDTH = 10 * KJE.gSCALE;
KJE.gLegend._iTOPBOTTOM_BORDER_WIDTH = 3 * KJE.gSCALE;
KJE.gLegend._iBOX_SIDE_LENGTH = 12 * KJE.gSCALE;
KJE.gLegend._iCIR_SIDE_LENGTH = 7 * KJE.gSCALE;
KJE.gLegend._iBOX_TO_LABEL_SPACE = 10 * KJE.gSCALE;
KJE.gLegend._sSHADOW_BLUR_X = 2 * KJE.gSCALE;
KJE.gLegend._sSHADOW_BLUR_Y = 2 * KJE.gSCALE;
KJE.gLegend._LINE_WIDTH = KJE.gSCALE;
KJE.gLegend._LINE_SPACE = 7.5 * KJE.gSCALE;
KJE.gLegend._PAD = KJE.gSCALE;
KJE.gGraphPie._LINE_WIDTH = KJE.gSCALE;
KJE.gGraphLine._CLICKABLE = 7 * KJE.gSCALE;
KJE.gGraphLine._sSHADOW_BLUR = 0;
KJE.gGraphLine._LINE_WIDTH = 3 * KJE.gSCALE;
KJE.gGraphLine._sSHADOW_BLUR_X = 0;
KJE.gGraphLine._sSHADOW_BLUR_Y = 0;
KJE.gGraphColumn._LINE_WIDTH = KJE.gSCALE;
KJE.giGridLineWidth = KJE.gSCALE;
KJE.gAxis.TICK_LENGTH = 3 * KJE.gSCALE;
KJE.gAxis.LABEL_SPACE_LENGTH = 5 * KJE.gSCALE;
KJE.gAxis.LINE_WIDTH = KJE.gSCALE;
KJE.gAxis.LEFT = 0;
KJE.gAxis.RIGHT = 1;
KJE.gAxis.TOP = 3;
KJE.gAxis.BOTTOM = 4;
KJE.gGraphColumn.LINE_NONE = 0;
KJE.gGraphColumn.LINE_ON_FIRST_ONLY = 2;
KJE.gGraphColumn.LINE_ON_ALL = 3;
KJE.gGraphColumn._sSHADOW_COLOR = "#929292";
KJE.gGraphColumn._sSHADOW_BLUR = 8;
KJE.gGraphColumn._sSHADOW_BLUR_X = 3 * KJE.gSCALE;
KJE.gGraphColumn._sSHADOW_BLUR_Y = 2 * KJE.gSCALE * -1;
KJE.gGraphPie._LINE_JOIN = "round";
KJE.gGraphPie._LINE_COLOR = "#404041";
KJE.gGraphLine.AREA_NONE = 0;
KJE.gGraphLine.AREA_ALL = 1;
KJE.gGraphLine.AREA_FIRST_ONLY = 2;
KJE.gGraphLine.AREA_SECOND_ONLY = 3;
KJE.gGraphLine.AREA_BANDED = 4;
KJE.gGraphLine._sSHADOW_COLOR = "#929292";
KJE.sgvStr = function (a) {
    if (a == null) {
        return null
    }
    return a.replace(/%%/g, '"').replace(/@@/g, "|").replace(/\^\^/g, ",").replace(/!!/, "~")
};
KJE.spvStr = function (a) {
    if (a == null) {
        return null
    }
    if (a.replace) {
        return a.replace(/"/g, "%%").replace(/\|/g, "@@").replace(/,/g, "^^").replace(/~/g, "!!")
    } else {
        return a
    }
};
KJE.spvColor = function (a) {
    if (!a) {
        return "#404041"
    }
    return a
};
KJE.sgvColor = function (a) {
    if (!a) {
        return "#404041"
    }
    return a
};
KJE.sgv = function (b, a) {
    if (b == null) {
        return a
    } else {
        if (b == "null") {
            return a
        } else {
            if (b == " ") {
                return a
            } else {
                if (typeof (a) == "string") {
                    return KJE.sgvStr(b)
                } else {
                    if (typeof (a) == "boolean") {
                        if (b == "") {
                            return a
                        }
                        return b.trim() == "true"
                    } else {
                        if (typeof (a) == "number") {
                            return parseFloat(b)
                        }
                    }
                }
            }
        }
    }
};
KJE.sgvNumList = function (d) {
    if (d == null) {
        return null
    } else {
        if (d == "null") {
            return null
        } else {
            if (d.trim() == "") {
                return null
            } else {
                var b = d.split(",");
                var a = KJE.FloatArray(b.length);
                for (var c = 0; c < b.length; c++) {
                    a[c] = parseFloat(b[c])
                }
            }
        }
    }
    return a
};
KJE.sgvStrList2 = function (d) {
    var a = [];
    if (d == null) {
        a = null
    } else {
        if (d == "null") {
            a = null
        } else {
            if (d.trim() == "") {
                a = null
            } else {
                var c = d.split("~");
                for (var b = 0; b < c.length; b++) {
                    a[b] = KJE.sgvStrList(c[b])
                }
            }
        }
    }
    return a
};
KJE.sgvStrList = function (d) {
    var a = [];
    if (d == null) {
        a = null
    } else {
        if (d == "null") {
            a = null
        } else {
            if (d.trim() == "") {
                a = null
            } else {
                var c = d.split(",");
                for (var b = 0; b < c.length; b++) {
                    a[b] = KJE.sgvStr(c[b])
                }
            }
        }
    }
    return a
};
KJE.spvStringList2 = function (d) {
    var a = KJE;
    if (d == null) {
        return "null"
    }
    var c = a.spvStringList(d[0]);
    for (var b = 1; b < d.length; b++) {
        c += "~" + a.spvStringList(d[b])
    }
    return c
};
KJE.spvStringList = function (d) {
    var a = KJE;
    if (d == null) {
        return "null"
    }
    var c = a.spvStr(d[0]);
    for (var b = 1; b < d.length; b++) {
        c += "," + a.spvStr(d[b])
    }
    return c
};
KJE.spvColorList = function (d) {
    var a = KJE;
    if (d == null) {
        return "null"
    }
    var c = a.spvStr(d[0]);
    for (var b = 1; b < d.length; b++) {
        c += "," + a.spvColor(d[b])
    }
    return c
};
KJE.spvFloatList = function (e, d) {
    var a = KJE;
    if (e == null) {
        return "null"
    }
    var c = "" + a.input(e[0], d);
    for (var b = 1; b < e.length; b++) {
        c += "," + a.input(e[b], d)
    }
    return c
};
KJE.gNewGraph = function (f, j, a, e, l, g, h, b) {
    var c = document.getElementById("KJE-C-" + j);
    if (c) {
        var k = KJE;
        e = !k.parameters.get("GRAPH_OPEN" + Math.floor(k.gGraphs.length + 1), (k.VML && !h ? false : !e));
        var d = k.gGraphs[k.gGraphs.length] = new k.gCanvas(c, f, j, a, e, l, g, h, b);
        if (f == k.gPIE || f == k.gCATEGORIES) {
            d._bPopDetail = false
        }
        return d
    } else {
        return null
    }
};
KJE.gCanvas = function (c, f, l, b, d, n, g, j, a) {
    var h = this;
    var m = KJE;
    var k = h.wCanvas = document.getElementById("KJE-G-" + l);
    h._bPopDetail = true;
    h._bPopCat = true;
    h.wContainer = c;
    h.wContainer.className = "KJEGraphContainer";
    h.wCanvas.className = "KJEGraph";
    if (typeof G_vmlCanvasManager != "undefined") {
        G_vmlCanvasManager.initElement(h.wCanvas)
    }
    h._ctx = null;
    h.sTitle = g;
    h.TT = g;
    h.InCalculator = (j ? false : true);
    h.bBorder = (a ? false : true);
    h._sGraphType = f;
    h._gtGraphType = new m.gType(f);
    h._legend = new m.gGraphLegend(m.gLegend.RIGHT, this);
    h._grid = new m.gGrid(this);
    h._axisY = new m.gValueAxis(this);
    h._axisX = new m.gCategoryAxis(this);
    h._titleGraph = new m.gGraphTitle(h.sTitle);
    h._titleXAxis = new m.gGraphTitle("");
    h._titleYAxis = new m.gGraphTitle(m.sCurrency);
    h._titleYAxis._iOrientation = m.gTitle.VERTICAL;
    h._vDataSeries = new Array();
    h.FONT_TITLE = m.ggetFont(m.gTITLE_FONT);
    h.FONT_BOLD = m.ggetFont(m.gBOLD_FONT);
    h.FONT_PLAIN = m.ggetFont(m.gPLAIN_FONT);
    h.FONT_LEGEND = m.ggetFont(m.gLEGEND_FONT);
    h.FONT_LEGEND_BOLD = m.ggetFont(m.gLEGEND_FONT_BOLD);
    h._showItemLabel = false;
    h._showItemLabelFmt = m.FMT_DOLLARS;
    h._showItemLabelDecimals = h._iLimit = 0;
    h._showItemLabelOnTop = h._showLabelFactor = true;
    h._iArea = m.gGraphLine.AREA_NONE;
    h._cGrid = m.gColorGrid;
    h._cGridBackground1 = m.gColorGridBackground1;
    h._cGridBackground2 = m.gColorGridBackground2;
    h._cAxisLine = m.gColorAxisLine;
    h._cTextColor = m.gColorText;
    h._sGraphCategories = h._sGraphCategoriesBold = h._sValueLabels = h._showItemValues = null;
    h._colorList = m.gColorList;
    h._iDataSeriesCount = 0;
    if (b) {
        h.wTitle = document.createElement("DIV");
        h.wTitle.className = (h.InCalculator && h.bBorder ? "KJEGraphDropper" : "KJEDropperReport");
        if (h.InCalculator) {
            h.wTitle.tabIndex = "0"
        }
        if (m.VML) {
            h.wTitle.style.paddingRight = "0"
        }
        c.insertBefore(h.wTitle, k)
    }
    if (h.wTitle && (!m.VML || !j)) {
        if (h.wTitle.addEventListener) {
            h.wTitle.addEventListener("click", function (o) {
                h.toggle()
            }, false);
            h.wTitle.addEventListener("keypress", function (o) {
                if (o.keyCode == 32) {
                    return KJE.Dropper.stopBubble(o)
                }
            }, false);
            h.wTitle.addEventListener("keydown", function (o) {
                if (o.keyCode == 32) {
                    h.toggle();
                    return KJE.Dropper.stopBubble(o)
                }
                if (o.keyCode == 13 && KJE.ViewReport) {
                    KJE.ViewReport.focus()
                }
            }, false)
        } else {
            h.wTitle.attachEvent("onclick", function (o) {
                h.toggle()
            });
            h.wTitle.attachEvent("onkeypress", function (o) {
                if (o.keyCode == 32) {
                    return KJE.Dropper.stopBubble(o)
                }
            });
            h.wTitle.attachEvent("onkeydown", function (o) {
                if (o.keyCode == 32) {
                    h.toggle();
                    return KJE.Dropper.stopBubble(o)
                }
                if (o.keyCode == 13 && KJE.ViewReport) {
                    KJE.ViewReport.focus()
                }
            })
        }
    }
    if (k) {
        var e = h._gtGraphType;
        if (k.addEventListener) {
            k.addEventListener("click", function (q) {
                var o = KJE.getMouseCoord(q, k);
                var p = e.getWedgeValue(o.x, o.y);
                if (p) {
                    KJE.DataPointShow(q, p.s, p.x, p.y, k)
                }
            }, false);
            k.addEventListener("mousemove", function (q) {
                var o = KJE.getMouseCoord(q, k);
                var p = e.getWedgeValue(o.x, o.y);
                if (p) {
                    KJE.DataPointShow(q, p.s, p.x, p.y, k)
                }
            }, false)
        } else {
            k.attachEvent("onclick", function (q) {
                var o = KJE.getMouseCoord(q, k);
                var p = e.getWedgeValue(o.x, o.y);
                if (p) {
                    KJE.DataPointShow(q, p.s, p.x, p.y, k)
                }
            });
            k.attachEvent("onmousemove", function (q) {
                var o = KJE.getMouseCoord(q, k);
                var p = e.getWedgeValue(o.x, o.y);
                if (p) {
                    KJE.DataPointShow(q, p.s, p.x, p.y, k)
                }
            })
        }
    }
    h.setBackground(n);
    this.setWidth();
    h.setHeight(j ? m.gHeightReport : m.gHeight);
    h.show(!d, h.sTitle)
};
KJE.gCanvas.prototype.setTitle = function (a) {
    this.sTitle = a
};
KJE.gCanvas.prototype.toggle = function () {
    if (KJE.Error || KJE.InComplete) {
        return
    }
    if (KJE.inCommandTask(true)) {
        return
    }
    var c = this.wCanvas;
    var b = this;
    var a = (KJE.deviceNoTransition || KJE.VML ? 0 : 10);
    if (this._bShow) {
        if (KJE.VML) {
            c.style.display = "none"
        }
        c.style.overflow = "hidden";
        this._bShow = false;
        this.show();
        setTimeout(function () {
            KJE.inCommandTask(false)
        }, 100)
    } else {
        this._count = 0;
        if (KJE.VML) {
            setTimeout(function () {
                c.style.overflow = "hidden";
                c.style.display = "block";
                c.style.visibility = "visible";
                b.show(true);
                b.paint(null, true);
                setTimeout(function () {
                    KJE.inCommandTask(false)
                }, 10)
            }, 300)
        } else {
            c.style.overflow = "hidden";
            c.style.display = "block";
            c.style.visibility = "visible";
            this.paint(null, true);
            KJE._iInterval = setInterval(function () {
                b.open(b.iGraphHeight, a)
            }, 25)
        }
    }
};
KJE.gCanvas.prototype.show = function (b, a) {
    if (this.wTitle) {
        this._bShow = b;
        var e = 0;
        if (b) {
            e = this.iGraphHeight
        }
        var c = this;
        this.wTitle.innerHTML = KJE.setToggleTitleText((a ? a : this._titleGraph.s), c, KJE.g, !this.InCalculator);
        var d = this.wTitle.offsetHeight;
        this.wContainer.style.width = this.iWidth + "px";
        this.wContainer.style.height = ((d ? d : 28) + e) + "px";
        if (this.InCalculator) {
            KJE.Calculator.style.height = KJE.Main.offsetHeight + "px"
        } else {
            KJE.Calculator.style.height = "0px"
        }
    }
};
KJE.gCanvas.prototype.open = function (c, a) {
    if (this._count >= a) {
        clearInterval(KJE._iInterval);
        this.show(true);
        setTimeout(function () {
            KJE.inCommandTask(false)
        }, 100);
        return
    } else {
        if (this._count >= a - 2) {
            this._count -= 0.5
        }
    }
    this._count++;
    var b = c * (this._count / a);
    this.wContainer.style.height = (this.wTitle.offsetHeight + b) + "px";
    if (this.InCalculator) {
        KJE.Calculator.style.height = KJE.Main.offsetHeight + "px"
    }
};
KJE.gCanvas.prototype.setProperty = function (d) {
    var b = d.split("|");
    var a = KJE.sgv;
    var e = KJE.sgvStrList;
    var c = this;
    c.removeAll();
    for (var f = 0; f < b.length; f++) {
        switch (f) {
        case 0:
            if (b[f] != c._gtGraphType._iGraphType) {
                this._gtGraphType = new KJE.gType(b[f])
            }
            break;
        case 1:
            c._showItemLabel = a(b[f], c._showItemLabel);
            break;
        case 2:
            c._showItemLabelFmt = a(b[f], c._showItemLabelFmt);
            break;
        case 3:
            c._showItemLabelDecimals = a(b[f], c._showItemLabelDecimals);
            break;
        case 4:
            c._showItemLabelOnTop = a(b[f], c._showItemLabelOnTop);
            break;
        case 5:
            c._iArea = a(b[f], c._iArea);
            break;
        case 6:
            c._cBackground = a(b[f], c._cBackground);
            break;
        case 7:
            c._cGrid = a(b[f], c._cGrid);
            break;
        case 8:
            c._cGridBackground1 = a(b[f], c._cGridBackground1);
            break;
        case 9:
            c._cGridBackground2 = a(b[f], c._cGridBackground2);
            break;
        case 10:
            c._cAxisLine = a(b[f], c._cAxisLine);
            break;
        case 11:
            c._cTextColor = a(b[f], c._cTextColor);
            break;
        case 12:
            c._iLimit = a(b[f], c._iLimit);
            break;
        case 13:
            c._sGraphCategories = e(b[f]);
            break;
        case 14:
            c._sGraphCategoriesBold = e(b[f]);
            break;
        case 15:
            c._sValueLabels = e(b[f]);
            break;
        case 16:
            c._colorList = e(b[f]);
            break;
        case 17:
            c._showItemValues = a(b[f], c._showItemValues);
            break;
        case 18:
            c._bPopDetail = a(b[f], c._bPopDetail);
            break;
        case 19:
            c._bPopCat = a(b[f], c._bPopCat);
            break;
        case 20:
            c._showLabelFactor = a(b[f], c._showLabelFactor);
            break
        }
    }
};
KJE.gCanvas.prototype.getProperty = function () {
    var c = KJE.spvStringList;
    var b = this;
    var a = KJE;
    return b._gtGraphType._iGraphType + "|" + b._showItemLabel + "|" + b._showItemLabelFmt + "|" + b._showItemLabelDecimals + "|" + b._showItemLabelOnTop + "|" + b._iArea + "|" + a.spvColor(b._cBackground) + "|" + a.spvColor(b._cGrid) + "|" + a.spvColor(b._cGridBackground1) + "|" + a.spvColor(b._cGridBackground2) + "|" + a.spvColor(b._cAxisLine) + "|" + a.spvColor(b._cTextColor) + "|" + b._iLimit + "|" + c(b._sGraphCategories) + "|" + c(b._sGraphCategoriesBold) + "|" + c(b._sValueLabels) + "|" + a.spvColorList(b._colorList) + "|" + a.spvStringList2(b._showItemValues) + "|" + b._bPopDetail + "|" + b._bPopCat + "|" + b._showLabelFactor
};
KJE.gCanvas.prototype.getColor = function (a) {
    a -= 1;
    a %= this._colorList.length;
    return this._colorList[a]
};
KJE.gCanvas.prototype.blank = function () {
    this.removeAll();
    this.paint();
    if (this.wTitle) {
        this.setTitleGraph(KJE.gPleaseComplete)
    }
};
KJE.gCanvas.prototype.getDataSeriesCount = function () {
    return this._iDataSeriesCount
};
KJE.gCanvas.prototype.getDataProperties = function () {
    var a = "";
    for (var b = 0; b < this._iDataSeriesCount; b++) {
        a += "|" + this._vDataSeries[b].getProperty()
    }
    return a.substring(1)
};
KJE.gCanvas.prototype.getValueCount = function () {
    var b = this._iDataSeriesCount;
    var a = this._iLimit;
    var c = 0;
    while (b) {
        c = this._vDataSeries[b - 1].getValueCount();
        if (a > c || a == 0) {
            a = c
        }
        b--
    }
    return a
};
KJE.gCanvas.prototype.getMinValue = function () {
    if (this._vDataSeries == null) {
        return 0
    }
    var a = this._vDataSeries[0].getMinValue(this._iLimit);
    var b = a;
    for (var c = 1; c < this._iDataSeriesCount; c++) {
        b = this._vDataSeries[c].getMinValue(this._iLimit);
        if (b < a) {
            a = b
        }
    }
    return a
};
KJE.gCanvas.prototype.getMaxValue = function () {
    if (this._vDataSeries == null) {
        return 0
    }
    var d = 0;
    var f = 0;
    if (this._gtGraphType._iGraphType == KJE.gSTACKED) {
        var c = new Array();
        for (var a = 0; a < this._vDataSeries.length; a++) {
            var b = this._vDataSeries[a]._fValues;
            for (var e = 0; e < b.length; e++) {
                c[e] = b[e] + (c[e] ? c[e] : 0)
            }
        }
        return Math.max.apply(Math, c)
    } else {
        d = this._vDataSeries[0].getMaxValue(this._iLimit);
        f = d;
        for (e = 1; e < this._iDataSeriesCount; e++) {
            f = this._vDataSeries[e].getMaxValue(this._iLimit);
            if (f > d) {
                d = f
            }
        }
        return d
    }
};
KJE.gCanvas.prototype.add = function (c) {
    if (c == null) {} else {
        if (typeof c == "string") {
            if (c.trim() == "") {} else {
                var a = c.split("|");
                for (var b = 0; b < a.length; b++) {
                    this._vDataSeries[this._iDataSeriesCount++] = new KJE.gGraphDataSeries(a[b], null, null, null)
                }
            }
        } else {
            this._vDataSeries[this._iDataSeriesCount] = c;
            this._iDataSeriesCount++
        }
    }
};
KJE.gCanvas.prototype.removeAll = function () {
    this._vDataSeries = new Array();
    this._iDataSeriesCount = 0;
    this._iLimit = 0;
    this._gtGraphType.syncSetup(this);
    this._legend._cBGColor = null
};
KJE.gCanvas.prototype.paint = function (e, c) {
    if (this.sTitle) {
        this.setTitleGraph(this.sTitle)
    }
    if (!this.wCanvas.getContext) {
        return
    }
    if (!c) {
        if (!this._bShow) {
            return
        }
    }
    var b = this.wCanvas.getContext("2d");
    if (b.canvas.width == 0 || b.canvas.height == 0) {
        return
    }
    if (b) {
        this._ctx = b
    }
    var a = this._ctx.canvas.width;
    var d = this._ctx.canvas.height;
    if (this._iDataSeriesCount != 0) {
        b.fillStyle = this._cBackground;
        b.fillRect(0, 0, a, d);
        this._gtGraphType.paint(this._ctx, a, d)
    } else {
        b.fillStyle = (this._cBackground);
        b.fillRect(0, 0, a, d)
    }
};
KJE.gCanvas.prototype.setGraphCategories = function (a) {
    this._sGraphCategories = a
};
KJE.gCanvas.prototype.setBackground = function (a) {
    this.wContainer.style.backgroundColor = a;
    this._cBackground = a
};
KJE.gCanvas.prototype.setWidth = function (c, b) {
    var a = b;
    if (!b) {
        a = KJE.CalculatorWidth
    }
    a -= KJE.gWidthAdjust;
    this.wCanvas.style.width = a + "px";
    this.wContainer.style.width = a + "px";
    this.wCanvas.width = a * KJE.gSCALE;
    this.iWidth = a;
    if (c) {
        this.paint()
    }
};
KJE.gCanvas.prototype.setHeight = function (a) {
    this.wCanvas.style.height = a + "px";
    this.iGraphHeight = a;
    this.wCanvas.height = a * KJE.gSCALE
};
KJE.gCanvas.prototype.getBackground = function () {
    return this._cBackground
};
KJE.gCanvas.prototype.setTitleGraph = function (b) {
    var a = this;
    if (!(a._titleGraph.s == b)) {
        if (a.wTitle) {
            a.wTitle.innerHTML = KJE.setToggleTitleText(b, a, KJE.g, !a.InCalculator);
            if (a.InCalculator) {
                KJE.Calculator.style.height = KJE.Main.offsetHeight + "px"
            }
        }
        a._titleGraph.setText(b)
    }
};
KJE.gCanvas.prototype.setTitleTemplate = function () {
    var b = this.TT;
    for (var a = 0; a < arguments.length; a++) {
        b = b.replace("KJE" + (a + 1), arguments[a])
    }
    this.sTitle = b
};
KJE.gCanvas.prototype.getFormat = function (c, g, b) {
    var e = "";
    var d = this;
    var f = d._showItemLabelFmt;
    var a = d._showItemValues;
    if (a == null) {
        e = KJE.format[f](c / (f == KJE.FMT_PERCENT && d._showLabelFactor ? 100 : 1), d._showItemLabelDecimals)
    } else {
        if (a.length > g) {
            if (a[g].length > b) {
                e = a[g][b]
            }
        }
    }
    return e
};
KJE.gGraphDataSeries = function (j, q, l, m, g, k, d) {
    var h = this;
    h._iDecimals = (d ? d : 2);
    var e = (j instanceof Array);
    if (!e && KJE.TypedArray) {
        e = (j instanceof Float64Array)
    }
    if (e) {
        h._fValues = j;
        h._sSeriesTitle = q;
        h._cColor = l;
        h._sSeriesTitleBold = (!m ? "" : m);
        h._sSeriesPop = (!g ? q : g);
        h._bNoPopDetails = (k ? true : false)
    } else {
        var o = j.split("~");
        var p = o.length;
        var a = KJE.sgv;
        for (var b = 0; b < p; b++) {
            switch (b) {
            case 0:
                h._cColor = a(o[b], "#0000FF");
                break;
            case 1:
                h._sSeriesTitle = a(o[b], "");
                break;
            case 2:
                h._sSeriesTitleBold = a(o[b], "");
                break;
            case 3:
                h._fValues = KJE.sgvNumList(o[b]);
                break;
            case 4:
                h._sSeriesPop = a(o[b], h._sSeriesTitle);
                break;
            case 5:
                h._bNoPopDetails = a(o[b], false);
                break
            }
        }
    }
};
KJE.gGraphDataSeries.prototype.getProperty = function () {
    var a = KJE;
    return this._cColor + "~" + a.spvStr(this._sSeriesTitle) + "~" + a.spvStr(this._sSeriesTitleBold) + "~" + a.spvFloatList(this._fValues, this._iDecimals) + "~" + a.spvStr(this._sSeriesPop)
};
KJE.gGraphDataSeries.prototype.getValueCount = function () {
    if (this._fValues == null) {
        return 0
    }
    return this._fValues.length
};
KJE.gGraphDataSeries.prototype.getMinValue = function (c) {
    var a = this._fValues;
    if (a == null) {
        return 0
    }
    var b = a[0];
    var d = a.length;
    if (d > c && c != 0) {
        d = c
    }
    for (var e = 1; e < d; e++) {
        if (b > a[e]) {
            b = a[e]
        }
    }
    return b
};
KJE.gGraphDataSeries.prototype.getMaxValue = function (c) {
    var a = this._fValues;
    if (a == null) {
        return 0
    }
    var d = a.length;
    if (d > c && c != 0) {
        d = c
    }
    var b = a[0];
    for (var e = d - 1; e > 0; e--) {
        if (b < a[e]) {
            b = a[e]
        }
    }
    return b
};
KJE.gGraphTitle = function (a) {
    var b = this;
    b._iOrientation = KJE.gTitle.HORIZONTAL;
    b.s = a;
    b.f = "11pt Helvetica";
    b.c = "#404041";
    b.bShow = true;
    b.sText = ""
};
KJE.gGraphTitle.prototype.setProperty = function (a) {
    this.setText(KJE.sgv(a, ""))
};
KJE.gGraphTitle.prototype.getProperty = function () {
    return KJE.spvStr(this.s)
};
KJE.gGraphTitle.prototype.paint = function (b, a, e, c, d) {
    b.font = this.f;
    b.fillStyle = this.c;
    b.shadowBlur = "";
    b.shadowColor = "";
    b.shadowOffsetX = "";
    b.shadowOffsetY = "";
    b.textAlign = "center";
    b.textBaseline = "middle";
    if (this._iWidth != 0) {
        if (this._iOrientation == KJE.gTitle.VERTICAL) {
            b.save();
            b.rotate(-Math.PI / 2);
            b.fillText(KJE.FTR(this.sText), -e - d / 2, a + c / 2);
            b.restore()
        } else {
            b.fillText(KJE.FTR(this.sText), a + c / 2, e + d / 2)
        }
    }
};
KJE.gGraphTitle.prototype.setText = function (a) {
    this.s = a
};
KJE.gGraphTitle.prototype.setFont = function (a) {
    this.f = a
};
KJE.gGraphTitle.prototype.setColor = function (a) {
    this.c = a
};
KJE.gGraphTitle.prototype.setTitle = function (b, d) {
    var a = 0;
    var f = 0;
    var c = d || "";
    c += ((c == "" && this.s == KJE.sCurrency) ? "" : (this.s || ""));
    if (c != "" && this.bShow) {
        b.font = this.f;
        var e = f = KJE.gGetFontHeight(b) + 10;
        a = b.measureText(KJE.FTR(c)).width;
        if (this._iOrientation == KJE.gTitle.VERTICAL) {
            f = a;
            a = e
        }
    }
    this.sText = c;
    this._iHeight = f;
    this._iWidth = a
};
KJE.gGraphLegend = function (c, a) {
    this._gGraph = a;
    var b = this;
    b._iShape = KJE.gLegend.SQUARE_LEGEND;
    b._iOrientation = c;
    b._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
    b._border = false;
    b._cBGColor = null;
    b._iLegendWidth = 0;
    b.LINE_SPACE = KJE.gLegend._LINE_SPACE;
    b._bShow = true;
    b._cColor = "#404041";
    b._iXOffset = 0;
    b._iYOffset = 0;
    b._iWidthOffset = 0;
    b._iHeightOffset = 0;
    b._iMaxLegendLength = 0;
    b._iWidth = 0;
    b._iHeight = 0;
    b._iFontHeight = 0;
    b._iColorBoxYOffset = 0;
    b._iLabelOffset = 0;
    b._iColorBoxOffset = 0;
    b._iBORDER_WIDTH = 0
};
KJE.gGraphLegend.prototype.setProperty = function (d) {
    var b = d.split("|");
    var a = KJE.sgv;
    var c = this;
    for (var e = 0; e < b.length; e++) {
        switch (e) {
        case 0:
            c._cBGColor = a(b[e], c._cBGColor);
            break;
        case 1:
            c._iShape = a(b[e], c._iShape);
            break;
        case 2:
            c._iOrientation = a(b[e], c._iOrientation);
            break;
        case 3:
            c._border = a(b[e], c._border);
            break;
        case 4:
            c._iLegendWidth = a(b[e], c._iLegendWidth);
            break;
        case 5:
            c.LINE_SPACE = a(b[e], c.LINE_SPACE);
            break;
        case 6:
            c._bShow = a(b[e], c._bShow);
            break
        }
    }
};
KJE.gGraphLegend.prototype.getProperty = function () {
    var a = this;
    if (a._cBGColor == null) {
        a._cBGColor = a._gGraph.getBackground()
    }
    return a._cBGColor + "|" + a._iShape + "|" + a._iOrientation + "|" + a._border + "|" + a._iLegendWidth + "|" + a.LINE_SPACE + "|" + a._bShow
};
KJE.gGraphLegend.prototype.setVisible = function (a) {
    this._bShow = a
};
KJE.gGraphLegend.prototype.useOrientation = function (a) {
    var b = this._iOrientation;
    if (a / KJE.gSCALE < KJE.gLegendMin) {
        b = KJE.gLegend.BOTTOM
    }
    return b
};
KJE.gGraphLegend.prototype.paint = function (n, k, h, o, f, c, b, s, q) {
    var p = this;
    var r = p._iHeight;
    var m = p._iWidth;
    var e = this._iBORDER_WIDTH;
    var a = KJE.gLegend._iTOPBOTTOM_BORDER_WIDTH;
    if (!c) {
        c = 0
    }
    if (!b) {
        b = 0
    }
    if (!s) {
        s = 0
    }
    if (!q) {
        q = 0
    }
    n.textAlign = "left";
    n.textBaseline = "middle";
    var g = KJE.gLegend;
    var d = p.useOrientation(n.canvas.width);
    switch (d) {
    case g.TOP:
        f = r;
        break;
    case g.TOP_GRID_ALIGN:
        f = r;
        o = m;
        k = c;
        break;
    case g.BOTTOM:
        h += f - r;
        f = r;
        break;
    case g.LEFT:
        if (b > 0) {
            h = b
        }
        if (q > 0) {
            f = q
        }
        o = m;
        break;
    case g.RIGHT:
        if (b > 0) {
            h = b
        }
        if (q > 0) {
            f = q
        }
        k += o - m;
        o = m;
        break;
    case g.TOP_LEFT:
        f = r;
        o = m;
        break;
    case g.BOTTOM_LEFT:
        h += f - r;
        f = r;
        o = m;
        break;
    case g.TOP_RIGHT:
        k += o - m;
        f = r;
        o = m;
        break;
    case g.BOTTOM_RIGHT:
        h += f - r;
        k += o - m;
        f = r;
        o = m;
        break;
    case g.GRID_TOP_RIGHT:
        k = c - a + s - m;
        h = b + a;
        o = m;
        f = r;
        break;
    case g.GRID_TOP_LEFT:
        k = c + a;
        h = b + a;
        o = m;
        f = r;
        break;
    case g.GRID_BOTTOM_RIGHT:
        k = c - a + s - m;
        h = b - a + q - r;
        o = m;
        f = r;
        break;
    case g.GRID_BOTTOM_LEFT:
        k = c + a;
        h = b - a + q - r;
        o = m;
        f = r;
        break;
    case g.GRID_TOP:
        k = c;
        h = b + e;
        o = s;
        f = r;
        break;
    case g.GRID_BOTTOM:
        k = c;
        h = b - e + q - r;
        o = s;
        f = r;
        break;
    case g.GRID_LEFT:
        k = c + e;
        h = b;
        o = m;
        f = q;
        break;
    case g.GRID_RIGHT:
        k = c - e + s - m;
        h = b;
        o = m;
        f = q;
        break
    }
    if (this._bShow) {
        var l = k + (o / 2) - (m / 2);
        var j = h + (f / 2) - (r / 2);
        if (this._border) {
            n.fillStyle = this._cBGColor;
            n.fillRect(l - 0.5, j - 0.5, m, r);
            n.strokeStyle = this._gGraph._cTextColor;
            n.strokeRect(l - 0.5, j - 0.5, m, r)
        }
        if (this._legendType <= g.DATA_SERIES_LEGEND) {
            this.drawDataSeriesLegend(n, l, j);
            return
        }
        this.drawCategoryLegend(n, l, j)
    }
};
KJE.gGraphLegend.prototype.drawDataSeriesLegend = function (j, e, d) {
    var f = this._gGraph._vDataSeries.length;
    var h = new Array(f);
    var a = new Array(f);
    var g = new Array(f);
    var c = this._gGraph._vDataSeries;
    for (var b = 0; b < f; b++) {
        h[b] = c[b]._cColor;
        a[b] = c[b]._sSeriesTitle + (KJE.VML ? c[b]._sSeriesTitleBold : "");
        if (!KJE.VML) {
            g[b] = c[b]._sSeriesTitleBold
        }
    }
    this.drawLegend(j, e, d, h, a, g)
};
KJE.gGraphLegend.prototype.drawCategoryLegend = function (a, f, d) {
    var b = this._gGraph._sGraphCategories;
    var c = this._gGraph._sGraphCategoriesBold;
    if (KJE.VML && c != null) {
        var e = this._gGraph._sGraphCategories.length;
        var g = new Array(e);
        for (var h = 0; h < e; h++) {
            g[h] = b[h] + c[h]
        }
        c = null;
        b = g
    }
    this.drawLegend(a, f, d, this._gGraph._colorList, b, c)
};
KJE.gGraphLegend.prototype.drawLegend = function (t, m, j, y, a, q) {
    var g = KJE.gLegend;
    var v = j + g._iSIDE_BORDER_WIDTH;
    var c = (this._iShape == g.SQUARE_LEGEND);
    var u = 0;
    var d = this.LINE_SPACE + this._iFontHeight;
    var p = this._iColorBoxOffset;
    var b = this._iColorBoxYOffset;
    var h = g._iSIDE_BORDER_WIDTH;
    var z = g._PAD;
    var x = this._gGraph.FONT_LEGEND_BOLD;
    var e = this._gGraph.FONT_LEGEND;
    var f = (this._legendType == g.BANDED_LEGEND);
    var w = a.length;
    var o = KJE.FTR;
    t.font = e;
    t.lineWidth = g._LINE_WIDTH;
    t.shadowColor = g._sSHADOW_COLOR;
    t.shadowOffsetX = g._sSHADOW_BLUR_X;
    t.shadowOffsetY = g._sSHADOW_BLUR_Y;
    for (var s = 0; s < w; s++) {
        t.fillStyle = y[s];
        if (c) {
            t.fillRect(m + p, v + b, h, h)
        } else {
            var r = g._iCIR_SIDE_LENGTH;
            t.beginPath();
            t.arc(m + p + r, v + b + r, r, 0, Math.PI * 2, true);
            t.closePath();
            t.fill()
        }
        v += d;
        if (f) {
            s++
        }
    }
    t.lineWidth = g._LINE_WIDTH;
    t.shadowBlur = "0";
    t.shadowColor = g._sSHADOW_COLOR;
    t.shadowOffsetX = "0";
    t.shadowOffsetY = "0";
    t.fillStyle = this._cTextColor;
    v = j + h + b + h / 2 + z;
    var l = m + this._iLabelOffset;
    for (s = 0; s < w; s++) {
        t.fillText(o(a[s]), l, v);
        if (q && q[s]) {
            u = t.measureText(o(a[s])).width;
            t.font = x;
            t.fillText(o(q[s]), l + u, v);
            t.font = e
        }
        v += d;
        if (f) {
            s++
        }
    }
};
KJE.gGraphLegend.prototype.setSize = function (m) {
    var k = KJE.gLegend;
    var g = this;
    g._iWidth = 0;
    g._iHeight = 0;
    g._iXOffset = 0;
    g._iYOffset = 0;
    var d = g._iWidthOffset = g._iBORDER_WIDTH = KJE.gBORDER_WIDTH;
    g._iHeightOffset = 0;
    if (g._bShow) {
        var j = k._iSIDE_BORDER_WIDTH;
        var c = g._gGraph;
        var h = g.LINE_SPACE;
        var f = g._iFontHeight;
        var e = k._PAD;
        g._iColorBoxOffset = j + e;
        g._iLabelOffset = j + j + k._iBOX_TO_LABEL_SPACE + e * 2;
        var l = g._iWidth = g._iLabelOffset + g._iMaxLegendLength + j;
        var b = g._iHeight = j + (f + h) * (g._legendType == k.CATEGORY_LEGEND ? (c._sGraphCategories == null ? 0 : c._sGraphCategories.length) : c.getDataSeriesCount()) - h + j;
        g._iColorBoxYOffset = Math.ceil((f - j) / 2) + e;
        var a = g.useOrientation(m.canvas.width);
        switch (a) {
        case k.TOP:
        case k.TOP_GRID_ALIGN:
            g._iYOffset = b + d;
        case k.BOTTOM:
            g._iHeightOffset = b + d;
            break;
        case k.LEFT:
        case k.TOP_LEFT:
        case k.BOTTOM_LEFT:
            g._iXOffset = l + d;
            g._iWidthOffset = l + d + d;
            break;
        case k.RIGHT:
        case k.TOP_RIGHT:
        case k.BOTTOM_RIGHT:
            g._iWidthOffset = l + d;
            break
        }
    }
};
KJE.gGraphLegend.prototype.setINF = function (a) {
    this._cColor = this._gGraph._cTextColor;
    this._cTextColor = this._gGraph._cTextColor;
    if (this._cBGColor == null) {
        this._cBGColor = this._gGraph._cBackground
    }
    this._iMaxLegendLength = 0;
    this._iFontHeight = 0;
    this._iFontDescent = 0;
    if (this._bShow) {
        if (this._iLegendWidth > 0) {
            this._iMaxLegendLength = this._iLegendWidth
        } else {
            a.font = this._gGraph.FONT_LEGEND;
            var d = 0;
            var b = "";
            var g = this._gGraph._vDataSeries.length;
            var e = "";
            if (this._legendType != KJE.gLegend.CATEGORY_LEGEND) {
                for (var c = 0; c < g; c++) {
                    e = this._gGraph._vDataSeries[c]._sSeriesTitle;
                    b = this._gGraph._vDataSeries[c]._sSeriesTitleBold;
                    b = (b ? b : "");
                    d = a.measureText(KJE.FTR(e + (KJE.VML ? b : ""))).width;
                    if (b != "" && !KJE.VML) {
                        a.font = this.FONT_LEGEND_BOLD;
                        d += a.measureText(KJE.FTR(b)).width;
                        a.font = this._gGraph.FONT_LEGEND
                    }
                    if (d > this._iMaxLegendLength) {
                        this._iMaxLegendLength = d
                    }
                }
            } else {
                if (this._gGraph._sGraphCategories != null) {
                    var g = this._gGraph._sGraphCategories.length;
                    var f = (this._gGraph._sGraphCategoriesBold == null ? 0 : this._gGraph._sGraphCategoriesBold.length);
                    for (var h = 0; h < g; h++) {
                        e = this._gGraph._sGraphCategories[h];
                        b = (h < f ? this._gGraph._sGraphCategoriesBold[h] : "");
                        d = a.measureText(KJE.FTR(e + (KJE.VML ? b : ""))).width;
                        if (h < f) {
                            a.font = this._gGraph.FONT_LEGEND_BOLD;
                            d += a.measureText(KJE.FTR(b)).width;
                            a.font = this._gGraph.FONT_LEGEND
                        }
                        if (d > this._iMaxLegendLength) {
                            this._iMaxLegendLength = d
                        }
                    }
                }
            }
        }
        this._iFontHeight = KJE.gGetFontHeight(a)
    }
};
KJE.gValueAxis = function (a) {
    this._gGraph = a;
    this._bShow = true;
    this._cColor = "#FFFFFF";
    this._cLine = "#404041";
    this._cTextColor = "#404041";
    this._iFormat = KJE.FMT_DOLLARS;
    this._iXOffset = 0;
    this._iYOffset = 0;
    this._iLabelCount = 0;
    this._iMaxLabelLength = 0;
    this._iMaxLength = 0;
    this._iWidth = 0;
    this._iHeight = 0;
    this._iPixelsPerIncrement = 0;
    this._iDataLength = 0;
    this._fValuePerPixel = 0;
    this._iFontHeight = 0;
    this._iFormat = KJE.FMT_DOLLARS;
    this._bAutoMaximum = true;
    this._bAutoMinimum = false;
    this._axisMinimum = 0;
    this._axisMaximum = 100;
    this._sUnits = "";
    this._iUnitFactor = 1;
    this._fAbsoluteMinValue = 0;
    this._fAbsoluteMaxValue = 0;
    this._fRange = 0;
    this._fMinValue = 0;
    this._fMaxValue = 0;
    this._iIncrement = 0;
    this._iFactor = 0;
    this._fIncrement = 0;
    this._iZeroIntersects = 0
};
KJE.gValueAxis.prototype.setProperty = function (c) {
    var b = c.split("|");
    var a = KJE.sgv;
    for (var d = 0; d < b.length; d++) {
        switch (d) {
        case 0:
            this._bShow = a(b[d], this._bShow);
            break;
        case 1:
            this._iFormat = a(b[d], this._iFormat);
            break;
        case 2:
            this._bAutoMaximum = a(b[d], this._bAutoMaximum);
            break;
        case 3:
            this._bAutoMinimum = a(b[d], this._bAutoMinimum);
            break;
        case 4:
            this._axisMaximum = a(b[d], this._axisMaximum);
            break;
        case 5:
            this._axisMinimum = a(b[d], this._axisMinimum);
            break
        }
    }
};
KJE.gValueAxis.prototype.getProperty = function () {
    return this._bShow + "|" + this._iFormat + "|" + this._bAutoMaximum + "|" + this._bAutoMinimum + "|" + KJE.number(this._axisMaximum, 2) + "|" + KJE.number(this._axisMinimum, 2)
};
KJE.gValueAxis.prototype.getLabel = function (a) {
    if (this._gGraph._sValueLabels == null) {
        return KJE.format[this._iFormat](a / this._iUnitFactor, ((this._fAbsoluteMaxValue - this._fAbsoluteMinValue) <= 5) ? 2 : 0)
    } else {
        return this._gGraph._sValueLabels[Math.floor(a)]
    }
};
KJE.gValueAxis.prototype.getNextIncrement = function (b) {
    var a = this._iIncrement;
    return (this._gGraph._sValueLabels == null ? (this._fRange > 100 ? (b - (a * this._iFactor)) : Math.round((b * this._iFactor) - a) / this._iFactor) : (b - 1))
};
KJE.gValueAxis.prototype.paint = function (j, h, g) {
    if (this._bShow) {
        var f = KJE.gAxis;
        j.font = this._gGraph.FONT_PLAIN;
        var a = (this._iWidth - f.TICK_LENGTH - f.LINE_WIDTH);
        var c = (f.LABEL_SPACE_LENGTH + f.TICK_LENGTH);
        var e = 0;
        var d = this.getStartingPlotValue();
        for (var b = 0; b <= this._iLabelCount; b++) {
            j.strokeStyle = this._cTextColor;
            if (this._iPixelsPerIncrement < this._iFontHeight) {
                if ((b % 2) != 0) {
                    this.drawText(j, h, g, this.getLabel(d), c, e)
                }
            } else {
                this.drawText(j, h, g, this.getLabel(d), c, e)
            }
            j.strokeStyle = this._cColor;
            j.beginPath();
            this.drawLine(j, h, g, a, e, a + f.TICK_LENGTH, e, this._cLine);
            e += this._iPixelsPerIncrement;
            d = this.getNextIncrement(d)
        }
        this.drawLine(j, h, g, a + f.TICK_LENGTH, 0, a + f.TICK_LENGTH, this._iDataLength, this._cLine)
    }
};
KJE.gValueAxis.prototype.drawLine = function (b, e, f, a, h, c, d, g) {
    b.strokeStyle = g;
    b.moveTo(a + e + 0.5, h + f + 0.5);
    b.lineTo(c + e + 0.5, d + f + 0.5);
    b.stroke()
};
KJE.gValueAxis.prototype.drawText = function (h, e, c, j, g, f) {
    var d = h.measureText(KJE.FTR(j)).width;
    var a = f + ((this._iFontHeight) / 2);
    var b = this._iWidth - g - d;
    h.textAlign = "left";
    h.textBaseline = "bottom";
    h.font = this._gGraph.FONT_PLAIN;
    h.fillText(KJE.FTR(j), e + b, c + a)
};
KJE.gValueAxis.prototype.setSize = function (a, b) {
    a.font = this._gGraph.FONT_PLAIN;
    a.fillStyle = this._cColor;
    this._iPixelsPerIncrement = Math.floor(b / this._iLabelCount);
    this._iDataLength = this._iPixelsPerIncrement * this._iLabelCount;
    this._iMaxLength = b;
    this._iHeight = this._iDataLength;
    var f = 0;
    var d = this.getStartingPlotValue();
    for (var e = 0; e <= this._iLabelCount; e++) {
        if (d == 0) {
            this._iZeroIntersects = f;
            break
        }
        d = this.getNextIncrement(d);
        f += this._iPixelsPerIncrement
    }
    var c = KJE.gAxis;
    this._iWidth = this._iMaxLabelLength + c.LABEL_SPACE_LENGTH + c.TICK_LENGTH + c.LINE_WIDTH;
    this._iYOffset = (this._bShow ? this._iHeight : 0);
    this._iXOffset = (this._bShow ? this._iWidth : 0);
    this._fValuePerPixel = (this._iDataLength / this._fRange)
};
KJE.gValueAxis.prototype.setFormat = function (a) {
    this._iFormat = a
};
KJE.gValueAxis.prototype.setINF = function (j) {
    this._cLine = this._gGraph._cAxisLine;
    this._cColor = this._gGraph._cTextColor;
    this._cTextColor = this._gGraph._cTextColor;
    this._iFontHeight = KJE.gGetFontHeight(j);
    j.font = this._gGraph.FONT_PLAIN;
    j.strokeStyle = this._cTextColor;
    this._fAbsoluteMaxValue = (this._bAutoMaximum ? this._gGraph.getMaxValue() : this._axisMaximum);
    this._fAbsoluteMinValue = (this._bAutoMinimum ? this._gGraph.getMinValue() : this._axisMinimum);
    if (this._fAbsoluteMaxValue < 0.00001 && this._fAbsoluteMaxValue > -0.00001 && this._fAbsoluteMinValue < 0.00001 && this._fAbsoluteMinValue > -0.00001) {
        this._fAbsoluteMaxValue = 25
    } else {
        if (this._fAbsoluteMaxValue < 1 && this._fAbsoluteMaxValue > -1 && this._fAbsoluteMinValue < 1 && this._fAbsoluteMinValue > -1 && this._iFormat == KJE.FMT_DOLLARS) {
            this._fAbsoluteMaxValue = 1
        }
    }
    var d = this._fAbsoluteMaxValue - this._fAbsoluteMinValue;
    this._iFactor = 1;
    this._iIncrement = 1;
    this._fIncrement = 1;
    if (this._gGraph._sValueLabels != null) {} else {
        var g = d;
        if (g > 100) {
            while (g > 200) {
                this._iFactor *= 10;
                g = (d / this._iFactor)
            }
        } else {
            while (g <= 20) {
                this._iFactor *= 10;
                g = (d * this._iFactor)
            }
        }
        this._iIncrement = (g > 100 ? 20 : (g > 50 ? 10 : 5));
        this._fIncrement = (d > 100 ? (this._iIncrement * this._iFactor) : this._iIncrement / this._iFactor)
    }
    if (this._fAbsoluteMinValue == 0) {
        this._fMinValue = 0
    } else {
        if ((this._fAbsoluteMinValue % this._fIncrement) == 0) {
            this._fMinValue = this._fAbsoluteMinValue
        } else {
            this._fMinValue = (Math.floor(this._fAbsoluteMinValue / this._fIncrement)) * this._fIncrement
        }
    }
    if (this._fAbsoluteMaxValue == 0) {
        this._fMaxValue = 0
    } else {
        if ((this._fAbsoluteMaxValue % this._fIncrement) == 0) {
            this._fMaxValue = this._fAbsoluteMaxValue
        } else {
            this._fMaxValue = Math.ceil(this._fAbsoluteMaxValue / this._fIncrement);
            this._fMaxValue = Math.round(this._iFactor * this._fMaxValue * this._fIncrement) / this._iFactor
        }
    }
    this._fRange = this._fMaxValue - this._fMinValue;
    if (this._fRange == 0) {
        this.fRange = this._fIncrement
    }
    if (this._gGraph._sValueLabels == null) {
        this._iLabelCount = Math.round(this._fRange / this._fIncrement)
    } else {
        this._iLabelCount = this._gGraph._sValueLabels.length - 1
    }
    this.setGraphUnits(this._fMaxValue, this._fMinValue);
    if (this._bShow) {
        var a = this.getStartingPlotValue();
        var e = 0;
        var c = 0;
        var f = this._iLabelCount;
        for (var b = 0; b <= f; b++) {
            c = j.measureText(KJE.FTR(this.getLabel(a))).width;
            e = (c > e ? c : e);
            a = this.getNextIncrement(a)
        }
        var h = KJE.gAxis;
        this._iMaxLabelLength = e;
        this._iFontHeight = KJE.gGetFontHeight(j);
        this._iWidth = this._iMaxLabelLength + h.LABEL_SPACE_LENGTH + h.TICK_LENGTH + h.LINE_WIDTH
    }
};
KJE.gValueAxis.prototype.getStartingPlotValue = function () {
    return (this._gGraph._sValueLabels == null ? this._fMaxValue : this._gGraph._sValueLabels.length - 1)
};
KJE.gValueAxis.prototype.setVisible = function (a) {
    this._bShow = a
};
KJE.gValueAxis.prototype.getDataLength = function () {
    return this._iDataLength
};
KJE.gValueAxis.prototype.setGraphUnits = function (d, g) {
    var a = KJE;
    g = g || 0;
    var c = a.gScaleLabelMax;
    var e = a.gScaleLabelFactor;
    var f = c.length;
    for (var b = f - 1; b >= 0; b--) {
        if (d >= c[b] || g <= (-1) * c[b]) {
            this._sUnits = a.gScaleLabel[b];
            this._iUnitFactor = e[b];
            break
        }
    }
    return this._iUnitFactor
};
KJE.gCategoryAxis = function (a) {
    this._gGraph = a;
    this._bShow = true;
    this._cColor = "#FFFFFF";
    this._cLine = "#404041";
    this._cTextColor = "#404041";
    this._fFont = "11pt Helvetica";
    this._iXOffset = 0;
    this._iYOffset = 0;
    this._iLabelCount = 0;
    this._iMaxLabelLength = 0;
    this._iWidth = 0;
    this._iHeight = 0;
    this._iPixelsPerIncrement = 0;
    this._iDataLength = 0;
    this._iFontHeight = 0;
    this._iFontOffset = 0;
    this._fSpacingPercent = 0.25;
    this._fDataGapPercent = 0;
    this._bNoOffset = false;
    this._sCategories = new Array();
    this._iCategoryCount;
    this._iBarCount;
    this._iBarWidth;
    this._iSpaceWidth;
    this._iGapWidth;
    this._iBarsPerCategory;
    this._iAxisSegmentLength;
    this._bVertical = false
};
KJE.gCategoryAxis.prototype.setProperty = function (c) {
    var b = c.split("|");
    var a = KJE.sgv;
    for (var d = 0; d < b.length; d++) {
        switch (d) {
        case 0:
            this._bShow = a(b[d], this._bShow);
            break;
        case 1:
            this._fSpacingPercent = a(b[d], this._fSpacingPercent);
            break;
        case 2:
            this._fDataGapPercent = a(b[d], this._fDataGapPercent);
            break
        }
        d++
    }
};
KJE.gCategoryAxis.prototype.getProperty = function () {
    return this._bShow + "|" + KJE.input(this._fSpacingPercent, 2) + "|" + KJE.input(this._fDataGapPercent, 2)
};
KJE.gCategoryAxis.prototype.paint = function (m, k, h, r, u) {
    var p = this;
    if (p._bShow) {
        var t = KJE.gAxis;
        h += u;
        m.font = p._fFont;
        var c = t.TICK_LENGTH;
        var q = t.LABEL_SPACE_LENGTH;
        var e = c + q;
        var a = 0;
        var b = 0;
        var d = 1;
        var j = p._sCategories;
        var f = p._iCategoryCount;
        var n = p._bVertical;
        var o = (n ? p._iFontHeight : p._iMaxLabelLength) + q;
        if (o > p._iAxisSegmentLength && f > 2) {
            d = Math.ceil(f / (p._iDataLength / o))
        }
        m.strokeStyle = p._cLine;
        m.beginPath();
        for (var g = 0; g < f; g++) {
            b = p.getCategoryLeft(g);
            if (g == 0) {
                b -= t.LINE_WIDTH
            }
            m.moveTo(b + k + 0.5, 0 + h + 0.5);
            m.lineTo(b + k + 0.5, c + h + 0.5)
        }
        m.moveTo(k + 0.5, h + 0.5);
        m.lineTo(p._iWidth + k + 0.5, h + 0.5);
        m.stroke();
        if (j) {
            m.setStyle = p._cTextColor;
            if (n) {
                m.save();
                m.rotate(-Math.PI / 2);
                m.textAlign = "right";
                m.textBaseline = "middle"
            } else {
                m.textAlign = "center";
                m.textBaseline = "top"
            }
            p.getCatOffset = p._bNoOffset ? p.getCategoryLeft : p.getCategoryMid;
            var s = j.length;
            var l = KJE.FTR;
            for (var g = 0; g < f; g++) {
                a = p.getCatOffset(g);
                if ((d < 2 || (g % d) == 0 && g < f - (d * 0.9) && g != f - 2 || g == f - 1)) {
                    if (g < s) {
                        if (n) {
                            m.fillText(l(j[g]), -h - e - 0.5, k + a - 0.5)
                        } else {
                            m.fillText(l(j[g]), k + a + 0.5, h + e + 0.5)
                        }
                    }
                }
            }
            if (n) {
                m.restore()
            }
        }
    }
};
KJE.gCategoryAxis.prototype.drawLine = function (b, e, f, a, h, c, d, g) {
    b.beginPath();
    b.strokeStyle = g;
    b.moveTo(a + e + 0.5, h + f + 0.5);
    b.lineTo(c + e + 0.5, d + f + 0.5);
    b.stroke()
};
KJE.gCategoryAxis.prototype.setSize = function (l, d) {
    l.font = this._fFont;
    var e = this._gGraph.getValueCount() - (this._bNoOffset ? 1 : 0);
    var a = this._gGraph.getDataSeriesCount();
    var h = (a * e);
    var k = (2 * e);
    var b = ((a - 1) * e);
    this._iWidth = d;
    this._iDataLength = d;
    var c = Math.floor(this._iWidth / Math.round(((k * this._fSpacingPercent) + h + (b * this._fDataGapPercent))));
    var j = c * this._fDataGapPercent;
    var f = Math.floor((this._iDataLength - (c * h) - (j * b)) / k);
    this._iAxisSegmentLength = 2 * f + (j * (a - 1)) + (c * a);
    this._iXOffset = 0;
    this._iYOffset = 0;
    if (this._bShow) {
        var g = KJE.gAxis;
        if (this._iMaxLabelLength > this._iAxisSegmentLength && this._iMaxLabelLength > l.measureText("9999").width && this._iMaxLabelLength < l.measureText("9999999999999999999").width) {
            this._iHeight = this._iMaxLabelLength + g.TICK_LENGTH;
            this._bVertical = true
        } else {
            this._iHeight = this._iFontHeight + g.LABEL_SPACE_LENGTH + g.TICK_LENGTH + g.LINE_WIDTH;
            this._bVertical = false
        }
    } else {
        this._iHeight = 0
    }
    this._iBarsPerCategory = a;
    this._iBarWidth = c;
    this._iGapWidth = j;
    this._iSpaceWidth = f
};
KJE.gCategoryAxis.prototype.setINF = function (a) {
    this._iCategoryCount = this._gGraph.getValueCount();
    this._sCategories = this._gGraph._sGraphCategories;
    this._fFont = this._gGraph.FONT_PLAIN;
    this._cColor = this._gGraph._cTextColor;
    this._cTextColor = this._gGraph._cTextColor;
    this._cLine = this._gGraph._cAxisLine;
    this._iFontHeight = 0;
    this._iMaxLabelLength = 0;
    this._iHeight = 0;
    if (this._bShow) {
        var b = KJE.gAxis;
        if (this._sCategories) {
            this._iFontHeight = KJE.gGetFontHeight(a)
        } else {
            this._iFontHeight = -b.LABEL_SPACE_LENGTH * 2
        }
        a.font = this._fFont;
        a.strokeStyle = this._cColor;
        this._iMaxLabelLength = this.getMaximumCategoryLength(a, this._iCategoryCount, this._sCategories)
    }
};
KJE.gCategoryAxis.prototype.getCategoryLeft = function (a) {
    return Math.round(this._iWidth / (this._iCategoryCount - (this._bNoOffset ? 1 : 0)) * a)
};
KJE.gCategoryAxis.prototype.getCategoryMid = function (a) {
    return Math.round((this._iWidth / this._iCategoryCount) * a) + Math.round(((this._iBarsPerCategory * this._iBarWidth) + ((this._iBarsPerCategory - 1) * this._iGapWidth)) / 2) + this._iSpaceWidth
};
KJE.gCategoryAxis.prototype.getDataWidth = function () {
    return this._iGapWidth + this._iBarWidth
};
KJE.gCategoryAxis.prototype.getMaximumCategoryLength = function (b, e, d) {
    if (d == null) {
        return 0
    }
    if (d.length == 0) {
        return 0
    }
    var a = 0;
    var c = 0;
    for (var f = 0;
    (f < e) && (f < d.length); f++) {
        c = b.measureText(KJE.FTR(d[f])).width + 3;
        a = (c > a ? c : a)
    }
    return a
};
KJE.gCategoryAxis.prototype.setVisible = function (a) {
    this._bShow = a
};
KJE.gGrid = function (a) {
    this._gGraph = a;
    this._showYGridLines = true;
    this._showXGridLines = false;
    this._lineWidth = KJE.giGridLineWidth
};
KJE.gGrid.prototype.setProperty = function (c) {
    var b = c.split("|");
    var a = KJE.sgv;
    for (var d = 0; d < b.length; d++) {
        switch (d) {
        case 0:
            this._showYGridLines = a(b[d], this._showYGridLines);
            break;
        case 1:
            this._showXGridLines = a(b[d], this._showXGridLines);
            break;
        case 2:
            this._lineWidth = a(b[d], this._lineWidth);
            break
        }
    }
};
KJE.gGrid.prototype.getProperty = function () {
    return this._showYGridLines + "|" + this._showXGridLines + "|" + this._lineWidth
};
KJE.gGrid.prototype.paint = function (r, o, n) {
    var k = this._gGraph._axisX._iDataLength;
    var q = this._gGraph._axisY._iDataLength;
    var d = r.createLinearGradient(0, 0, 0, q);
    d.addColorStop(0, this._gGraph._cGridBackground1);
    d.addColorStop(1, this._gGraph._cGridBackground2);
    r.fillStyle = d;
    r.fillRect(o, n, k, q + 1);
    r.beginPath();
    r.strokeStyle = this._gGraph._cGrid;
    r.lineWidth = this._lineWidth;
    r.strokeRect(o, n, k + 1, q);
    r.strokeStyle = this._gGraph._cAxisLine;
    r.beginPath();
    r.moveTo(o, n + q);
    r.lineTo(o + k, n + q);
    r.closePath();
    r.strokeStyle = this._gGraph._cGrid;
    var m, j, g;
    var b = this._gGraph.getValueCount();
    if (this._showXGridLines) {
        m = 0;
        j = 0;
        g = 0;
        for (var h = 0; h < b; h++) {
            g = this._axisX.getCategoryLeft(h);
            if (h == 0) {
                m--
            }
            m = o + g;
            r.moveTo(m + 0.5, n);
            r.lineTo(m + 0.5, n + q)
        }
    }
    var f = 0;
    if (this._showYGridLines) {
        j = n;
        var a = this._gGraph._axisY._iLabelCount;
        var c = this._gGraph._axisY._iPixelsPerIncrement;
        var p = this._gGraph._axisY._iZeroIntersects;
        for (var e = 0; e < a; e++) {
            if (p + n == j) {
                f = j
            }
            r.moveTo(o, j + 0.5);
            r.lineTo(o + k, j + 0.5);
            j = j + c
        }
    }
    r.strokeStyle = this._gGraph._cGrid;
    r.stroke();
    r.closePath();
    if (f) {
        r.beginPath();
        r.strokeStyle = this._gGraph._cAxisLine;
        r.moveTo(o, f + 0.5);
        r.lineTo(o + k, f + 0.5);
        r.stroke();
        r.closePath()
    }
};
KJE.gType = function (a) {
    this._iGraphType = a;
    this.bTitleHigher = false;
    this._gGraph = null;
    this.xPopup = new Array();
    this.yPopup = new Array();
    this.xArray = new Array();
    this.yArray = new Array();
    this.sItems = new Array()
};
KJE.gType.prototype.syncSetup = function (a) {
    this._gGraph = a;
    if (a.wTitle) {
        a.wTitle.style.fontColor = a._cTextColor;
        a._titleGraph.bShow = false
    }
    a._titleGraph.setFont(a.FONT_TITLE);
    a._titleXAxis.setFont(a.FONT_BOLD);
    a._titleYAxis.setFont(a.FONT_BOLD);
    a._titleGraph.setColor(a._cTextColor);
    a._titleXAxis.setColor(a._cTextColor);
    a._titleYAxis.setColor(a._cTextColor);
    switch (this._iGraphType) {
    case KJE.gCOLUMN:
        a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
        a._axisX._fDataGapPercent = 0.05;
        this.bTitleHigher = true;
        break;
    case KJE.gCATEGORIES:
        a._legend._legendType = KJE.gLegend.CATEGORY_LEGEND;
        a._axisX._fDataGapPercent = 0.05;
        this.bTitleHigher = true;
        break;
    case KJE.gLINE:
        a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
        a._axisX._fDataGapPercent = 100;
        this.bTitleHigher = false;
        a._axisX._bNoOffset = true;
        break;
    case KJE.gPIE:
        a._legend._legendType = KJE.gLegend.CATEGORY_LEGEND;
        this.bTitleHigher = false;
        break;
    case KJE.gSTACKED:
        a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
        a._axisX._fDataGapPercent = -1;
        this.bTitleHigher = true;
        break
    }
};
KJE.gType.prototype.paint = function (t, r, E) {
    var w = this;
    var x = w._gGraph;
    var C = x._legend;
    var d = x._axisX;
    var b = x._axisY;
    var v = x._titleXAxis;
    var m = x._titleYAxis;
    var F = x._titleGraph;
    F.setTitle(t);
    C.setINF(t);
    x._axisX.setINF(t);
    x._axisY.setINF(t);
    v.setTitle(t, "");
    m.setTitle(t, x._axisY._sUnits);
    var G = w.bTitleHigher && x._showItemLabel && x._showItemLabelOnTop;
    var H = KJE.gBORDER_WIDTH;
    var A = KJE.gBORDER_WIDTH;
    var J = r - 2 * KJE.gBORDER_WIDTH;
    var z = E - 2 * KJE.gBORDER_WIDTH;
    var n = F._iHeight;
    var e = H;
    var h = A + (G ? Math.ceil(n / 2) : 0) + n + KJE.gBORDER_WIDTH;
    var f = J;
    var c = z - ((G ? Math.ceil(n / 2) : 0) + n + KJE.gBORDER_WIDTH);
    C.setSize(t);
    var D, j, q, k, K, a, y, p, L, B, l, o, g, I, s, u;
    switch (w._iGraphType) {
    case KJE.gPIE:
        D = e;
        j = h;
        q = f;
        k = c;
        K = f;
        a = c;
        y = e;
        p = h;
        L = e;
        B = h;
        l = f;
        o = c;
        g = e + C._iXOffset;
        I = h + C._iYOffset;
        s = f - C._iWidthOffset;
        u = c - C._iHeightOffset;
        break;
    default:
        D = e + C._iXOffset;
        j = h + C._iYOffset;
        q = f - C._iWidthOffset;
        k = c - C._iHeightOffset;
        K = q - m._iWidth - (KJE.gBORDER_WIDTH);
        a = k - v._iHeight - (KJE.gBORDER_WIDTH);
        d.setSize(t, K - b._iWidth);
        b.setSize(t, a - d._iHeight);
        y = D + m._iWidth + KJE.gBORDER_WIDTH;
        p = j + (b._iMaxLength - b._iHeight);
        L = y + b._iXOffset;
        B = p + d._iYOffset;
        l = d._iDataLength;
        o = b._iDataLength;
        g = L;
        I = B;
        s = l;
        u = o
    }
    switch (w._iGraphType) {
    case KJE.gPIE:
        break;
    default:
        x._grid.paint(t, L, B);
        v.paint(t, L, b._iDataLength + B + d._iHeight + v._iHeight / 2, l, v._iHeight);
        m.paint(t, D, B, m._iWidth, o);
        b.paint(t, y, p + d._iXOffset, l, o);
        d.paint(t, y + b._iXOffset, p, l, o)
    }
    switch (w._iGraphType) {
    case KJE.gCATEGORIES:
    case KJE.gCOLUMN:
        w.paintDataColumn(t, g, I, s, u);
        break;
    case KJE.gLINE:
        w.paintDataLine(t, g, I, s, u);
        break;
    case KJE.gPIE:
        w.paintDataPie(t, g, I, s, u);
        break;
    case KJE.gSTACKED:
        w.paintDataStacked(t, g, I, s, u);
        break
    }
    F.paint(t, H, A - (G ? Math.ceil(n / 4) : 0), J, n);
    C.paint(t, e, h, f, c, L, B, l, o)
};
KJE.gType.prototype.paintDataColumn = function (t, o, k, w, f) {
    var K = this._gGraph;
    var A = KJE.gGraphColumn;
    var E = this;
    var c = K._axisX._iBarWidth;
    var u = K._axisY._fValuePerPixel;
    var g = K._axisX._iSpaceWidth;
    var F = K._axisX.getDataWidth();
    var s = K._axisY._fMinValue;
    var I = K._axisY._fMaxValue;
    var b = K._axisY._iZeroIntersects;
    var B = K.getValueCount();
    t.shadowColor = A._sSHADOW_COLOR;
    t.shadowBlur = A._sSHADOW_BLUR;
    t.shadowOffsetX = (c < A._sSHADOW_BLUR_X * 3 ? 0 : A._sSHADOW_BLUR_X);
    var q = t.shadowOffsetY = (c < A._sSHADOW_BLUR_X * 3 ? 0 : A._sSHADOW_BLUR_Y);
    t.lineWidth = A._LINE_WIDTH;
    var M = new Array();
    var a = new Array();
    var d = new Array();
    var L = 0;
    t.font = K.FONT_LEGEND;
    if (!K._showItemLabelOnTop) {
        L = -KJE.gGetFontHeight(t)
    }
    t.textAlign = "center";
    t.textBaseline = "bottom";
    var H = 0;
    var j = 0;
    var z = "";
    var e = (K._legend._legendType != KJE.gLegend.CATEGORY_LEGEND);
    var p = (K._sGraphCategoriesBold != null && K._legend._legendType == KJE.gLegend.CATEGORY_LEGEND);
    var h = K._axisX._sCategories;
    for (var J = 0; J < K._vDataSeries.length; J++) {
        if (e) {
            z = K._vDataSeries[J]._sSeriesPop
        }
        var D = -9191;
        var v = -9191;
        t.fillStyle = K._vDataSeries[J]._cColor;
        var m = K._vDataSeries[J]._fValues;
        var C;
        var l, G;
        M[J] = new Array();
        a[J] = new Array();
        d[J] = new Array();
        for (var r = 0; r < B; r++) {
            C = o + K._axisX.getCategoryLeft(r) + g + (J * F);
            H = m[r];
            if (H < 0) {
                if (I < 0) {
                    l = k;
                    G = (-1) * Math.round((H + I) * u)
                } else {
                    l = k + b;
                    G = (-1) * Math.round(H * u)
                }
            } else {
                if (s > 0) {
                    G = Math.round((H - s) * u);
                    l = k + f - G
                } else {
                    G = Math.round(H * u);
                    l = k + b - G
                }
            }
            t.beginPath();
            if (K._legend._legendType == KJE.gLegend.CATEGORY_LEGEND) {
                t.fillStyle = K.getColor(r + 1)
            } else {
                t.fillStyle = K._vDataSeries[J]._cColor
            }
            t.strokeStyle = t.fillStyle;
            t.shadowOffsetY = q;
            t.fillRect(C, l, c, G);
            t.shadowOffsetY = "0";
            t.fillRect(C, l, c, G);
            if (K._iArea == KJE.gGraphColumn.LINE_ON_ALL || (K._iArea == KJE.gGraphColumn.LINE_ON_FIRST_ONLY && J == 0)) {
                t.lineWidth = KJE.gGraphLine._LINE_WIDTH;
                t.shadowOffsetY = KJE.gGraphLine._sSHADOW_BLUR_Y;
                if (v != -9191) {
                    t.beginPath();
                    t.moveTo(D + c / 2, v);
                    t.lineTo(C + c / 2, l);
                    t.stroke()
                }
                D = C;
                v = l
            }
            t.closePath();
            M[J][r] = K.getFormat(m[r], J, r);
            E.xPopup[j] = (C + c / 2) / KJE.gSCALE;
            E.yPopup[j] = (l + G) / KJE.gSCALE;
            E.xArray[j] = new Array(4);
            E.yArray[j] = new Array(4);
            E.xArray[j][0] = C / KJE.gSCALE;
            E.yArray[j][0] = l / KJE.gSCALE;
            E.xArray[j][1] = (C + c) / KJE.gSCALE;
            E.yArray[j][1] = E.yArray[j][0];
            E.xArray[j][2] = E.xArray[j][1];
            E.yArray[j][2] = (l + G) / KJE.gSCALE;
            E.xArray[j][3] = E.xArray[j][0];
            E.yArray[j][3] = E.yArray[j][2];
            E.sItems[j++] = z + " " + (h ? h[r] : "") + (p ? (K._sGraphCategoriesBold[r] ? K._sGraphCategoriesBold[r] : "") : "") + (K._bPopDetail ? KJE.Colon + " " + M[J][r] : "");
            a[J][r] = C + c / 2;
            d[J][r] = l - L
        }
    }
    E.xArray.length = j;
    E.yArray.length = j;
    E.sItems.length = j;
    t.shadowBlur = "0";
    t.shadowOffsetX = "0";
    t.shadowOffsetY = "0";
    t.fillStyle = K._cTextColor;
    if (K._showItemLabel) {
        for (J = 0; J < M.length; J++) {
            for (r = 0; r < M[J].length; r++) {
                t.beginPath();
                t.fillText(KJE.FTR(M[J][r]), a[J][r], d[J][r]);
                t.closePath()
            }
        }
    }
};
KJE.gType.prototype.paintDataLine = function (q, k, g, u, d) {
    var b = KJE;
    var l = b.gGraphLine;
    var c = KJE.gSCALE;
    var E = this._gGraph;
    var B = this;
    var r = E._axisY._fValuePerPixel;
    var p = E._axisY._fMinValue;
    var C = E._axisY._fMaxValue;
    var a = E._axisY._iZeroIntersects;
    var w = E.getValueCount();
    var f = 0;
    var s = l._CLICKABLE;
    q.shadowBlur = l._sSHADOW_BLUR;
    q.shadowColor = l._sSHADOW_COLOR;
    q.shadowOffsetX = l._sSHADOW_BLUR_X;
    q.lineWidth = l._LINE_WIDTH;
    q.shadowOffsetY = l._sSHADOW_BLUR_Y;
    var e = E._axisX._sCategories;
    for (var D = 0; D < E._vDataSeries.length; D++) {
        var v = E._vDataSeries[D]._sSeriesPop;
        var m = E._vDataSeries[D]._bNoPopDetails;
        q.fillStyle = E._vDataSeries[D]._cColor;
        q.strokeStyle = E._vDataSeries[D]._cColor;
        var j = E._vDataSeries[D]._fValues;
        var A;
        var h;
        var z = -9191;
        var t = -9191;
        for (var o = 0; o < w; o++) {
            A = k + E._axisX.getCategoryLeft(o) - 0.5;
            h = a - Math.round(j[o] * r) + 0.5;
            if (C < 0) {
                h = (-1) * Math.round((j[o] + C) * r)
            } else {
                if (p > 0) {
                    h = d - (Math.round((j[o] - p) * r))
                }
            }
            h += g;
            if (t != -9191) {
                q.beginPath();
                q.strokeStyle = E._vDataSeries[D]._cColor;
                q.fillStyle = E._vDataSeries[D]._cColor;
                if (E._iArea == l.AREA_ALL || (E._iArea == l.AREA_FIRST_ONLY && D == 0) || (E._iArea == l.AREA_SECOND_ONLY && D == 1)) {
                    q.moveTo(z, g + d);
                    q.lineTo(z, t);
                    q.lineTo(A + 0.5, h);
                    q.lineTo(A + 0.5, g + d);
                    q.lineTo(z, g + d);
                    q.fill()
                } else {
                    q.moveTo(A + 0.5, h);
                    q.lineTo(z, t);
                    q.stroke()
                }
            }
            B.xPopup[f] = (A - 5) / c;
            B.yPopup[f] = (h + 5) / c;
            B.xArray[f] = KJE.IntArray(4);
            B.yArray[f] = KJE.IntArray(4);
            B.xArray[f][0] = (A - s) / c;
            B.yArray[f][0] = (h - s) / c;
            B.xArray[f][1] = (A + s) / c;
            B.yArray[f][1] = B.yArray[f][0];
            B.xArray[f][2] = B.xArray[f][1];
            B.yArray[f][2] = (h + s) / c;
            B.xArray[f][3] = B.xArray[f][0];
            B.yArray[f][3] = B.yArray[f][2];
            B.sItems[f++] = v + (m ? "" : " " + (e ? e[o] : "") + (E._bPopDetail ? b.Colon + " " + E.getFormat(j[o], D, o) : ""));
            z = A;
            t = h
        }
    }
    B.xArray.length = f;
    B.yArray.length = f;
    B.sItems.length = f
};
KJE.gType.prototype.paintDataPie = function (r, b, a, A, d) {
    var E = 0;
    var C = this._gGraph;
    var z = this;
    var l = C._vDataSeries[0]._fValues;
    for (var q = 0; q < l.length; q++) {
        E += l[q]
    }
    var k = Math.round(A / 2 + b);
    var j = Math.round(d / 2 + a);
    var D = 0;
    if (A / d) {
        D = Math.floor(d / 24);
        j -= Math.ceil(D / 2) + 1;
        d -= Math.ceil(D) + 1
    }
    r.save();
    var g = (A > d ? A / d : 1);
    var f = (A > d ? 1 : d / A);
    k = k / g;
    j = j / f;
    r.scale(g, f);
    var c = Math.round(Math.min(A / 2, d / 2));
    var s = 0;
    var w = 0;
    r.shadowBlur = 10;
    r.shadowOffsetX = D;
    r.shadowOffsetY = D;
    r.lineWidth = KJE.gGraphPie._LINE_WIDTH;
    r.lineJoin = KJE.gGraphPie._LINE_JOIN;
    r.fillStyle = KJE.gGraphPie._LINE_COLOR;
    var h = C._axisX._sCategories;
    if (E <= 0) {
        r.fillStyle = KJE.gDarker(C.getColor(1), 0.5);
        r.shadowColor = r.fillStyle;
        r.beginPath();
        r.moveTo(k, j);
        r.arc(k, j, c, 0, Math.PI * 2, true);
        r.lineTo(k, j);
        r.closePath();
        r.stroke();
        r.fill();
        r.fillStyle = C.getColor(1);
        r.strokeStyle = KJE.gDarker(C.getColor(1), 0.6);
        r.beginPath();
        r.moveTo(k, j);
        r.arc(k, j, c, 0, Math.PI * 2, true);
        r.lineTo(k, j);
        r.closePath();
        r.stroke();
        r.fill()
    }
    if (E > 0) {
        for (var u = (l.length - 1); u >= 0; u--) {
            if (l[u] != 0) {
                w = (l[u] / E);
                r.fillStyle = KJE.gDarker(C.getColor(u + 1), 0.5);
                r.shadowColor = r.fillStyle;
                r.beginPath();
                r.moveTo(k, j);
                var v = s * Math.PI * 2;
                var t = ((u == 0 && l[u] > 0) ? 0 : (s + w) * Math.PI * 2);
                r.arc(k, j, c, v, t, false);
                r.lineTo(k, j);
                r.closePath();
                r.fill();
                s += w
            }
        }
        s = 0;
        r.shadowBlur = 0;
        r.shadowOffsetX = 0;
        r.shadowOffsetY = 0;
        var m = 0;
        for (u = (l.length - 1); u >= 0; u--) {
            if (l[u] != 0) {
                w = (l[u] / E);
                r.fillStyle = C.getColor(u + 1);
                r.strokeStyle = KJE.gDarker(C.getColor(u + 1), 0.6);
                r.beginPath();
                r.moveTo(k, j);
                var v = s * Math.PI * 2;
                var t = ((u == 0 && l[u] > 0) ? 0 : (s + w) * Math.PI * 2);
                r.arc(k, j, c, v, t, false);
                r.lineTo(k, j);
                r.closePath();
                r.stroke();
                r.fill();
                w = (l[u] / E);
                var e = Math.ceil(w * 20 + 0.01);
                z.xArray[m] = KJE.IntArray(e + 2);
                z.yArray[m] = KJE.IntArray(e + 2);
                z.xArray[m][0] = (k * g) / KJE.gSCALE;
                z.yArray[m][0] = (j * f) / KJE.gSCALE;
                var B = (w / e);
                for (var o = 0; o < e; o++) {
                    z.xArray[m][o + 1] = ((k + c * Math.cos((s + B * o) * Math.PI * 2)) * g) / KJE.gSCALE;
                    z.yArray[m][o + 1] = ((j + c * Math.sin((s + B * o) * Math.PI * 2)) * f) / KJE.gSCALE;
                    if (o == Math.floor(e / 2)) {
                        z.xPopup[m] = ((k + (c * 0.75) * Math.cos((s + B * o) * Math.PI * 2)) * g) / KJE.gSCALE - 5;
                        z.yPopup[m] = ((j + (c * 0.75) * Math.sin((s + B * o) * Math.PI * 2)) * f) / KJE.gSCALE + 10
                    }
                }
                z.xArray[m][e + 1] = ((k + c * Math.cos((s + w) * Math.PI * 2)) * g) / KJE.gSCALE;
                z.yArray[m][e + 1] = ((j + c * Math.sin((s + w) * Math.PI * 2)) * f) / KJE.gSCALE;
                z.sItems[m] = (h ? h[u] : "") + (C._bPopDetail ? KJE.Colon + " " + C.getFormat(l[u], 0, u) : "");
                s += w;
                m++
            }
        }
        z.xArray.length = m;
        z.yArray.length = m;
        z.sItems.length = m;
        z.xPopup.length = m;
        z.yPopup.length = m
    }
    r.restore()
};
KJE.gType.prototype.paintDataStacked = function (q, F, E, Q, M) {
    var C = this._gGraph;
    var d = C._axisY;
    var e = C._axisX;
    var J = KJE.gGraphColumn;
    var A = this;
    var G = e._iBarWidth;
    var a = d._fValuePerPixel;
    var z = e._iSpaceWidth;
    var s = e.getDataWidth();
    var c = d._fMinValue;
    var g = d._fMaxValue;
    var h = d._iZeroIntersects;
    var t = C.getValueCount();
    var o = new Array();
    var v = new Array();
    var l = new Array();
    var I = new Array();
    var N = A.xArray;
    var p = A.yArray;
    var u = A.sItems;
    var m = A.xPopup;
    var K = A.yPopup;
    var k = e._sCategories;
    q.shadowColor = J._sSHADOW_COLOR;
    q.shadowBlur = J._sSHADOW_BLUR;
    q.shadowOffsetX = (G < J._sSHADOW_BLUR_X * 3 ? 0 : J._sSHADOW_BLUR_X);
    var b = q.shadowOffsetY = (G < J._sSHADOW_BLUR_X * 3 ? 0 : J._sSHADOW_BLUR_Y);
    q.lineWidth = J._LINE_WIDTH;
    q.font = C.FONT_LEGEND;
    q.textAlign = "center";
    q.textBaseline = "bottom";
    var j = 5;
    if (!C._showItemLabelOnTop) {
        j = -KJE.gGetFontHeight(q)
    }
    var D = null;
    for (var H = 0; H < C._vDataSeries.length; H++) {
        D = C._vDataSeries[H]._fValues;
        for (var O = 0; O < D.length; O++) {
            o[O] = D[O] + (o[O] ? o[O] : 0)
        }
    }
    for (O = 0; O < o.length; O++) {
        v[O] = C.getFormat(o[O], H - 1, O)
    }
    var R = 0;
    var r = 0;
    for (H = 0; H < C._vDataSeries.length; H++) {
        var w = C._vDataSeries[H]._sSeriesPop;
        var P = 0;
        var B = 0;
        var f = 0;
        D = C._vDataSeries[H]._fValues;
        for (O = 0; O < t; O++) {
            P = F + e.getCategoryLeft(O) + z + (H * s);
            R = (o[O]);
            o[O] -= D[O];
            if (R < 0) {
                if (g < 0) {
                    B = E;
                    f = (-1) * Math.round((R + g) * a)
                } else {
                    B = E + h;
                    f = (-1) * Math.round(R * a)
                }
            } else {
                if (c > 0) {
                    f = Math.round((R - c) * a);
                    B = E + M - f
                } else {
                    f = Math.round(R * a);
                    B = E + h - f
                }
            }
            q.beginPath();
            q.fillStyle = C._vDataSeries[H]._cColor;
            if (H == 0) {
                q.shadowOffsetY = b;
                q.fillRect(P, B, G, f);
                l[O] = P + G / 2;
                I[O] = B - j
            }
            q.shadowOffsetY = "0";
            q.fillRect(P, B, G, f);
            var L = B + Math.floor(D[O] * a);
            m[r] = (P + G / 2) / KJE.gSCALE;
            K[r] = L / KJE.gSCALE;
            N[r] = new Array(4);
            p[r] = new Array(4);
            N[r][0] = P / KJE.gSCALE;
            p[r][0] = B / KJE.gSCALE;
            N[r][1] = (P + G) / KJE.gSCALE;
            p[r][1] = p[r][0];
            N[r][2] = N[r][1];
            p[r][2] = L / KJE.gSCALE;
            N[r][3] = N[r][0];
            p[r][3] = p[r][2];
            u[r++] = w + (C._bPopCat && k ? " " + e._sCategories[O] : "") + (C._bPopDetail ? KJE.Colon + " " + C.getFormat(D[O], H, O) : "")
        }
    }
    N.length = r;
    p.length = r;
    u.length = r;
    q.shadowBlur = "0";
    q.shadowOffsetX = "0";
    q.shadowOffsetY = "0";
    q.fillStyle = C._cTextColor;
    if (C._showItemLabel) {
        for (O = 0; O < o.length; O++) {
            q.beginPath();
            q.fillText(KJE.FTR(v[O]), l[O], I[O]);
            q.closePath()
        }
    }
};
KJE.gType.prototype.poly = function (e, f, a, k) {
    var d, b, h = 0;
    if (e) {
        var g = e.length;
        for (d = 0, b = g - 1; d < g; b = d++) {
            if ((((f[d] <= k) && (k < f[b])) || ((f[b] <= k) && (k < f[d]))) && (a < (e[b] - e[d]) * (k - f[d]) / (f[b] - f[d]) + e[d])) {
                h = !h
            }
        }
    }
    return h
};
KJE.gType.prototype.getWedgeValue = function (a, j) {
    var e = this;
    var g = e.xArray;
    var f = e.yArray;
    var d = e.sItems.length;
    for (var b = d; b > -1; b--) {
        var h = e.poly(g[b], f[b], a, j);
        if (h) {
            return {
                x: e.xPopup[b],
                y: e.yPopup[b],
                s: e.sItems[b]
            }
        }
    }
    return null
};
KJE.FTR = function (a) {
    return a
};