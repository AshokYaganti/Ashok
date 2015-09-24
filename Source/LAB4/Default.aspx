﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Stock quote and chart from Yahoo in C#</title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
            height: 18px;
        }
        .auto-style2 {
            font-size: x-large;
        }
        .auto-style3 {
            color: #00FFFF;
        }
        .style1
        {
            width: 55px;
        }
        .style2
        {
            color: #33CCCC;
        }
        .auto-style4 {
            width: 392px;
        }
        </style>
    <script  type="text/javascript" language="JavaScript">
        /// <summary>
        /// This function will be called when user clicks the Get Quotes button.
        /// </summary>
        /// <returns>Always return false.</returns>
        function SendRequest()
        {
            var txtSymbol = document.getElementById("txtSymbol");
            // Refresh the page.
            window.location = "default.aspx?s=" + txtSymbol.value;
            return false;
        }

        /// <summary>
        /// The functyion will be called when a keyboard key is pressed in the textbox.
        /// </summary>
        /// <param name="e">Onkeypress event.</param>
        /// <returns>Return true if user presses Enter key; otherwise false.</returns>        
        function CheckEnter(e)
        {
            if ((e.keyCode && e.keyCode == 13) || (e.which && e.which == 13))
                // Enter is pressed in the textbox.
                return SendRequest();
            return true;
        }

        /// <summary>
        /// The function will be called when user changes the chart type to another type.
        /// </summary>
        /// <param name="type">Chart type.</param>
        /// <param name="num">Stock number.</param>
        /// <param name="symbol">Stock symobl.</param>
        function changeChart(type, num, symbol)
        {
            // All the DIVs are inside the main DIV and defined in the code-behind class.
            var div1d=document.getElementById("div1d_"+num);
            var div5d = document.getElementById("div5d_" + num);
            var div3m = document.getElementById("div3m_" + num);
            var div6m = document.getElementById("div6m_" + num);
            var div1y = document.getElementById("div1y_" + num);
            var div2y = document.getElementById("div2y_" + num);
            var div5y = document.getElementById("div5y_" + num);
            var divMax = document.getElementById("divMax_" + num);
            var divChart = document.getElementById("imgChart_" + num);
            // Set innerHTML property.
            div1d.innerHTML = "1d";
            div5d.innerHTML="5d";
            div3m.innerHTML="3m";
            div6m.innerHTML="6m";
            div1y.innerHTML="1y";
            div2y.innerHTML="2y";
            div5y.innerHTML="5y";
            divMax.innerHTML="Max";
            // Use a random number to defeat cache.
            var rand_no = Math.random();
            rand_no = rand_no * 100000000;
            // Display the stock chart.
            switch(type)
            {
            case 1: // 5 days
                div5d.innerHTML="<b>5d</b>";
                divChart.src = "http://ichart.finance.yahoo.com/w?s=" + symbol + "&" + rand_no;
                break;
            case 2: // 3 months 
                div3m.innerHTML="<b>3m</b>";
                divChart.src = "http://chart.finance.yahoo.com/c/3m/" + symbol + "?" + rand_no;
                break;
            case 3: // 6 months 
                div6m.innerHTML = "<b>6m</b>";
                divChart.src = "http://chart.finance.yahoo.com/c/6m/" + symbol + "?" + rand_no;
                break;
            case 4: // 1 year
                div1y.innerHTML = "<b>1y</b>";
                divChart.src = "http://chart.finance.yahoo.com/c/1y/" + symbol + "?" + rand_no;
                break;
            case 5: // 2 years 
                div2y.innerHTML = "<b>2y</b>";
                divChart.src = "http://chart.finance.yahoo.com/c/2y/" + symbol + "?" + rand_no;
                break;
            case 6: // 5 years
                div5y.innerHTML = "<b>5y</b>";
                divChart.src = "http://chart.finance.yahoo.com/c/5y/" + symbol + "?" + rand_no;
                break;
            case 7: // Max
                divMax.innerHTML = "<b>msx</b>";
                divChart.src = "http://chart.finance.yahoo.com/c/my/" + symbol + "?" + rand_no;
                break;
            case 0: // 1 day
            default:                
                div1d.innerHTML = "<b>1d</b>";
                divChart.src = "http://ichart.finance.yahoo.com/b?s=" + symbol + "&" + rand_no;
                break;
            }
        }
    </script>    
</head>
<body>
    <form id="form1" runat="server">
    
    <div>
    <table class="auto-style1" style="background-image: url('img/logo.jpg'); font-size: 8px">
            <tr>
                <td class="auto-style2">
                    <h1 class="auto-style3">Sample Project</h1>
                </td>
            </tr>
        </table>

        <br />

    <table align="center">
    <tr>
    <td class="auto-style4">
    <asp:Label ID="Label1" Font-Size="XX-Large" runat="server" Text="Label" 
            style="color: #0000FF; text-align: center; font-size: x-large"></asp:Label>
    
    </td>
    
    </tr>
    </table>
    <br />
    </br>
        <table border="0" cellspacing="0" cellpadding="0" align="center" style="width: 18%">
            <tr valign="top">                                            
                <td style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #000; text-decoration: none;">
                    <input type="text" value="" id="txtSymbol" runat="server" onkeypress="return CheckEnter(event);" />
                    <input type="button" value="Get Quotes" onclick="return SendRequest();" 
                        style="color: #800000" />
                    <br />
                    <span style="font-family: Arial, Helvetica, sans-serif; font-size: 11px;	" 
                        class="style2">
                        e.g. "YHOO or YHOO GOOG"</span><span style="font-family: Arial, Helvetica, sans-serif; font-size: 11px;	color: #666;">
                        </span>
                    <%if (m_symbol != "") {%>                        
                        <div id="divService" runat="server" align="center">
                        <!-- Main DIV: this DIV contains contains text and DIVs that displays stock quotes and chart. -->
                        </div>
                    <%}%>                                                                                            
                </td>    
            </tr>
        </table>    
    </div>
    </form>
</body>
</html>
