
<?php
function second_presets() {
  ob_start();
  ?>
  <style media="screen">
  html, body.login {
    height: auto !important;
  }
    body.login {
      background-image: url(<?php echo plugins_url( 'img/bg2.jpg', LOGINPRESS_PLUGIN_BASENAME )  ?>);
      background-size: cover;
      display: table;
      min-height: 100vh;
      width: 100%;
      padding: 0;
    }
    .login label{
    font-size:0;
    line-height:0;
    margin-top: 0;
    display: block;
    margin-bottom:
    }
    #login form p + p:not(.forgetmenot){
    margin-top: 35px;
    }
    .login form .input, .login input[type=text]{
      background: rgba(255,255,255,.2);
      display: block;
      color: #fff;
      font-size: 16px;
      font-family: 'Open Sans';
      width:100%;
      border:0;
      height: 50px;
      padding: 0 15px;
    }
    .login form{
      background: none;
      padding: 0;
      box-shadow: none;
    }
    .login form br{
    display: none;
    }
    #login form p.submit{
      clear: both;
      padding-top: 35px;
    }
    .wp-core-ui #login  .button-primary{
      width:100% !important;
      display: block;
      float: none;
      background-color : #f78f1e;
      font-weight: 700;
      font-size: 18px;
      font-family: 'Open Sans';
      color : #ffffff;
      height: 56px;
      border-radius: 0;
      border:0;
      box-shadow: none;
    }
    .wp-core-ui #login  .button-primary:hover{
      background-color: #fff;
      color : #f78f1e;
    }
    .login form .forgetmenot label{
      font-size: 13px;
      font-family: 'Open Sans';
      color: #d5d5d5;
    }
    .login form input[type=checkbox]{
      background: none;
      border: 1px solid #d5d5d5;
      height: 13px;
      width: 13px;
      min-width: 13px;
    }
    .login #nav, .login #backtoblog {
      margin: 17px 0 0;
      padding: 0;
      font-size: 14px;
      font-family: "Open Sans";
      color: #d5d5d5;
    }
    .login #nav a, .login #backtoblog a{
      font-size: 14px;
      font-family: "Open Sans";
      color: #d5d5d5;
    }
    .login #backtoblog{
      float: left;
    }
    .login #nav{
      float: right;
    }
    .login #backtoblog a:hover, .login #nav a:hover, .login h1 a:hover{
      color: #fff;
    }
    .footer-wrapper{
    	display: table-footer-group;
    }
    .footer-cont{

    	right: 0;
    	bottom: 0;
    	left: 0;
    	text-align: center;
    	display: table-cell;
    	vertical-align: bottom;
    	height: 100px;
    }
    .copyRight{
    	text-align: center;
    	padding: 12px;
      /*background-color: #303030;*/
      color: #fff;
    }
    #login form p + p:not(.forgetmenot){
    color: #d5d5d5;
    }
    input[type=checkbox]:checked:before{
      font-size: 18px;
    }
    </style>

  <?php
  $content = ob_get_clean();
  return $content;
}
