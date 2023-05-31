<?php
$content = "

        <!DOCTYPE html>
        <html lang=\"ru\">
        <head>
        <title>Seattle's Towncar Reservation</title>
        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" >
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" >
        <meta name=\"description\" content=\"\" >
        <meta name=\"keywords\" content=\"\" >
        <style>
            body{
            font-family:DejaVu Sans;
            }
            .header{
                display: flex;
                align-items: center;
                margin: 0 auto;
                text-align: center;
                  justify-content: center;

            }
            .header img{
                width: 100px;
                height: 50px;
                margin-right: 30px;
            }


            .container{
                width: 100%;
                max-width: 1200px;
                margin: 0 auto;
            }

            .table {
                min-width: 900px;
                margin: 0 auto;
                margin-bottom: 20px;
                border: 5px solid #fff;
                border-top: 5px solid #fff;
                border-bottom: 3px solid #fff;
                border-collapse: collapse;
                
                font-size: 15px;
                background: #fff!important;
            }
            .table th {
                font-weight: bold;
                padding: 0 7px;
                background: #eaecf9;
                border: none;
                text-align: left;
                font-size: 15px;
                
                border-bottom: 3px solid #fff;
            }
            .table td {
                padding: 7px;
                border: none;
                border-top: 3px solid #fff;
                border-bottom: 3px solid #fff;
                font-size: 15px;
            }
            .green{
                background: #f8f8f8!important;
            }
            td.in{
            font-size: 20px;
            padding: 0 7px;
        }
        td.in span{
            font-weight: 600;
        }
        </style>
        </head>
        <body>
            <div class=\"container\">
            <table class=\"table\">
                <tr>
                    <td><img src=\"https://static1.s123-cdn-static-a.com/uploads/1060783/400_filter_nobg_60816f24ab26d.jpg\"></td>
                    <td><h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>  </h2></td>
                </tr>
                <tr><td class=\"in\"><span>Dear  $login</span> </td></tr>
              <tr><td class=\"in\"><span>Welcome! </span> </td></tr>
              
                   <!-- Passenger information -->
                   <tbody>
                    <tr>
                        <th colspan=\"2\">
                        <h3>Here are your login details to your personal dashboard: </h3>
                        </th>
                    </tr>
                        
                        <tr>
                            <td>User :</td>
                            <td>$login</td>
                        </tr>";

$content .= "
                        <tr class=\"green\">
                            <td>E-mail:</td>
                            <td>$email</td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>$password</td>
                        </tr>
                        
                    </tbody>
                    <p>Link to the login page: https://www.glomapro.com </a></p>
                    <p>*if you need other colleagues to be added, please reach out to contact@glomapro.com </p>
                     <tr><td class=\"in\"><span>Best wishes,</span> </td></tr>
                     <tr><td class=\"in\"><span>Your GlomaPro Team</span> </td></tr>
                </table>
                
                
            </div>
        </body>
        </html>
    ";


?>

