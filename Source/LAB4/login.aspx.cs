using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Login_click(object sender, EventArgs e)
        {
            string emailid = Convert.ToString(TextBox1.Text);
            string password = Convert.ToString(TextBox2.Text);
            Session["username"] = emailid;
            

            Response.Redirect("Default.aspx");
        }

        
    }
