<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
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
        .auto-style4 {
            width: 100%;
        }
        .auto-style5 {
            text-align: center;
            color: #FF0000;
            font-size: x-large;
        }
        .auto-style6 {
            width: 102px;
        }
        .auto-style7 {
            width: 570px;
        }
        .auto-style8 {
            width: 67px;
        }
        .auto-style9 {
            font-size: large;
            height: 36px;
        }
        .auto-style10 {
            width: 67px;
            font-size: large;
            height: 36px;
        }
        .auto-style11 {
            width: 102px;
            font-size: large;
            height: 36px;
            color: #3333CC;
        }
        .auto-style12 {
            width: 570px;
            font-size: large;
            height: 36px;
        }
        .auto-style13 {
            width: 570px;
            height: 32px;
        }
        .auto-style14 {
            width: 102px;
            height: 32px;
        }
        .auto-style15 {
            width: 67px;
            height: 32px;
        }
        .auto-style16 {
            height: 32px;
        }
        .auto-style17 {
            width: 102px;
            height: 32px;
            color: #0000CC;
        }
        </style>
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
  
    </div>
        <table class="auto-style4">
            <tr>
                <td class="auto-style5">
                    <h1>Login Page</h1>
                </td>
            </tr>
        </table>
        <table class="auto-style4">
            <tr>
                <td class="auto-style12"></td>
                <td class="auto-style11">User Name</td>
                <td class="auto-style10">:</td>
                <td class="auto-style9">
                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style9"></td>
            </tr>
            <tr>
                <td class="auto-style13"></td>
                <td class="auto-style17">Password</td>
                
                <td class="auto-style15">:</td>
                <td class="auto-style16">
                   <asp:TextBox ID="TextBox2" TextMode="Password" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style16"></td>
            </tr>
            <tr>
                <td class="auto-style13"></td>
                <td class="auto-style14"></td>
                <td class="auto-style15">
                    <asp:Button ID="Button1" runat="server" Text="Login" OnClick="Login_click" />
          
                </td>
                <td class="auto-style16">
                    <a href="register.html" >Forgot Password</a>
                </td>
                <td class="auto-style16"></td>
            </tr>
            <tr>
                <td class="auto-style7">&nbsp;</td>
                <td class="auto-style6">&nbsp;</td>
                <td class="auto-style8">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style7">&nbsp;</td>
                <td class="auto-style6">&nbsp;</td>
                <td class="auto-style8">
           <asp:Button ID="Button2" runat="server" Text="Create Account" />
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </table>
    </form>
</body>
</html>