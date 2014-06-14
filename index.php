<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Slagalica | Pocetna</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="Js/defjs.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>
    <body class="container-flow">
        <div class="header col-md-12">
            
        </div>
        <div class="col-md-12">
        <div class="sidebar col-md-3">
            
            
            <div class="btn-group col-md-2 col-md-offset-1" style="margin-top:20px;">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                  Choose picture <span class="caret"></span>
                 </button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a onclick="populate('Bear')">Bear</a></li>
                        <li><a onclick="populate('Cat')">Cat</a></li>
                    </ul>
            </div>
            </div>
        <div class="maincontain col-md-9">
            
        <div class="mainframe col-md-4 col-md-offset-3">
            <table>
                <?php 
                   for ($i=1; $i<5; $i++){
                       echo '<tr>';
                       for ($j=1; $j<5; $j++){
                           ?><td class="field" id="<?php echo $i.$j;?>" onclick="moving(this)"></td>
                           <?php
                       }
                       echo '</tr>';
                   }
                ?>
            </table>
            
            <button class="col-md-4 col-md-offset-4" onclick="shafl()" style="margin-top: 5px;">SHUFFLE!</button>
        </div>
        </div>
        </div>
        <div class="footer col-md-12">
            
        </div>
        <p hidden="true" id="kontrolni">TEST</p>
    </body>
</html>
