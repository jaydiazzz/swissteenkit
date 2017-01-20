jQuery( document ).ready( function() {

    /* === Checkbox Multiple Control === */

    jQuery( '.customize-control-checkbox-multiple input[type="radio"]' ).on(
        'change',
        function() {

            checkbox_values = jQuery( this ).parents( '.customize-control' ).find( 'input[type="radio"]:checked' ).val();

            style_values = jQuery( this ).parents( '.customize-control' ).find( 'input[type="radio"]:checked' ).data('style');

            // console.log(style_values);
            // console.log(checkbox_values);
            var val = [];
            val.push(checkbox_values);
            val.push(style_values);
            console.log(val);
            jQuery( this ).parents( '.customize-control' ).find( 'input[type="hidden"]' ).val( checkbox_values ).delay(500).trigger( 'change' );
            // jQuery( this ).parents( '.customize-control' ).find( 'input[type="hidden"]' ).trigger( 'change' );

        }
    );

} ); // jQuery( document ).ready


( function( $ ) {

  // function for change LoginPress background-image in real time...
	function loginpress_background_img( setting, target ) {
    wp.customize( setting, function( value ) {
  		value.bind( function( loginPressVal ) {
        if( loginPressVal == '' ) {
          $('#customize-preview iframe').contents().find( target ).css( 'background-image', '' );
        } else {
          $('#customize-preview iframe').contents().find( target ).css( 'background-image', 'url(' + loginPressVal + ')' );
        }
  		} );
  	} );
  }

  // function for change LoginPress CSS in real time...
  function loginpress_css_property( setting, target, property ){
    // Update the login logo width in real time...
  	wp.customize( setting, function( value ) {
      value.bind( function( loginPressVal ) {

        if( loginPressVal == '' ) {
          $('#customize-preview iframe').contents().find( target ).css( property, '' );
        } else {
          $('#customize-preview iframe').contents().find( target ).css( property,  loginPressVal );
        }
      } );
  	} );
  }
  // function for change LoginPress attribute in real time...
  function loginpress_attr_property( setting, target, property ) {
  	wp.customize( setting, function( value ) {
      value.bind( function( loginPressVal ) {

        if( loginPressVal == '' ) {
          $('#customize-preview iframe').contents().find( target ).attr( property, '' );
        } else {
          $('#customize-preview iframe').contents().find( target ).attr( property, loginPressVal );
        }
      } );
  	} );
  }
  // function for change LoginPress inout fiels in real time...
  function loginpress_input_property( setting, property ) {
    wp.customize( setting, function( value ) {
      value.bind( function( loginPressVal ) {
        if( loginPressVal == '' ) {
          $('#customize-preview iframe').contents().find('.login input[type="text"]').css( property, ''  );
          $('#customize-preview iframe').contents().find('.login input[type="password"]').css( property, ''  );
        } else {
          $('#customize-preview iframe').contents().find('.login input[type="text"]').css( property, loginPressVal  );
          $('#customize-preview iframe').contents().find('.login input[type="password"]').css( property, loginPressVal  );
        }
      } );
    } );
  }

  // function for change LoginPress error and welcome messages in real time...
  function loginpress_text_message( errorlog, target ) {
    wp.customize( errorlog, function( value ) {
      value.bind( function( loginPressVal ) {

        if( loginPressVal == '' ) {
          $('#customize-preview iframe').contents().find( target ).text( '' );
        } else {
          $('#customize-preview iframe').contents().find( target ).text( loginPressVal );
        }
      } );
    } );
  }


  // function for change LoginPress CSS in real time...
  function loginpress_display_control( setting ){
    // Update the login logo width in real time...
  	wp.customize( setting, function( value ) {
      value.bind( function( loginPressVal ) {

        // Control on footer text.
        if ( 'loginpress_customization[footer_display_text]' == setting && 'none' == loginPressVal ) {

          $('#customize-control-login_footer_text_decoration').css('display', 'none');
          $('#customize-control-login_footer_color').css('display', 'none');
          $('#customize-control-login_footer_color_hover').css('display', 'none');
          $('#customize-control-login_footer_font_size').css('display', 'none');
          $('#customize-control-login_footer_bg_color').css('display', 'none');

        } else if ( 'loginpress_customization[footer_display_text]' == setting && 'block' == loginPressVal ) {

          $('#customize-control-login_footer_text_decoration').css('display', 'list-item');
          $('#customize-control-login_footer_color').css('display', 'list-item');
          $('#customize-control-login_footer_color_hover').css('display', 'list-item');
          $('#customize-control-login_footer_font_size').css('display', 'list-item');
          $('#customize-control-login_footer_bg_color').css('display', 'list-item');

        }

        // Control on footer back link text.
        if ( 'loginpress_customization[back_display_text]' == setting && 'none' == loginPressVal ) {

          $('#customize-control-login_back_text_decoration').css('display', 'none');
          $('#customize-control-login_back_color').css('display', 'none');
          $('#customize-control-login_back_color_hover').css('display', 'none');
          $('#customize-control-login_back_font_size').css('display', 'none');
          $('#customize-control-login_back_bg_color').css('display', 'none');

        } else if ( 'loginpress_customization[back_display_text]' == setting && 'block' == loginPressVal ) {

          $('#customize-control-login_back_text_decoration').css('display', 'list-item');
          $('#customize-control-login_back_color').css('display', 'list-item');
          $('#customize-control-login_back_color_hover').css('display', 'list-item');
          $('#customize-control-login_back_font_size').css('display', 'list-item');
          $('#customize-control-login_back_bg_color').css('display', 'list-item');

        }
      } );
  	} );
  }

  // function for change LoginPress error and welcome messages in real time...
  function loginpress_footer_text_message( errorlog, target ) {
    wp.customize( errorlog, function( value ) {
      value.bind( function( loginPressVal ) {

        if( loginPressVal == '' ) {
          $('#customize-preview iframe').contents().find( target ).text( '' );
          if ( errorlog == 'loginpress_customization[login_footer_copy_right]') {
            $('#customize-preview iframe').contents().find( target ).css( 'display', 'none' );
          }
        } else {
          $('#customize-preview iframe').contents().find( target ).text( loginPressVal );
          if ( errorlog == 'loginpress_customization[login_footer_copy_right]') {
            $('#customize-preview iframe').contents().find( target ).css( 'display', 'block' );
          }
        }
      } );
    } );
  }

  // loginpress_display_control( 'loginpress_customization[footer_display_text]' );
  // loginpress_display_control( 'loginpress_customization[back_display_text]' );

  // Update the login logo in real time...
	wp.customize( 'loginpress_customization[setting_logo]', function( value ) {
    value.bind( function( loginPressVal ) {

      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('#login h1 a').css( 'background-image', 'url(' + admin_url.template_url + '/images/wordpress-logo.svg)' );
      } else {
        $('#customize-preview iframe').contents().find('#login h1 a').css( 'background-image', 'url(' + loginPressVal + ')' );
      }
    } );
	} );

  loginpress_css_property( 'loginpress_customization[customize_logo_width]', '#login h1 a', 'width' );
  loginpress_css_property( 'loginpress_customization[customize_logo_height]', '#login h1 a', 'height' );
  loginpress_css_property( 'loginpress_customization[customize_logo_padding]', '#login h1 a', 'padding-bottom' );

  loginpress_attr_property( 'loginpress_customization[customize_logo_hover]', '#login h1 a', 'href' );
  loginpress_attr_property( 'loginpress_customization[customize_logo_hover_title]', '#login h1 a', 'title' );

  loginpress_background_img( 'loginpress_customization[setting_background]', 'body.login' );

  loginpress_css_property( 'loginpress_customization[setting_background_color]', 'body.login', 'background-color' );
  loginpress_css_property( 'loginpress_customization[background_repeat_radio]', 'body.login', 'background-repeat' );
  loginpress_css_property( 'loginpress_customization[background_image_size]', 'body.login', 'background-size' );

  loginpress_background_img( 'loginpress_customization[setting_form_background]', '#loginform' );

  loginpress_css_property( 'loginpress_customization[customize_form_width]', '#login', 'max-width' );
  loginpress_css_property( 'loginpress_customization[customize_form_height]', '#loginform', 'min-height' );
  loginpress_css_property( 'loginpress_customization[customize_form_padding]', '#loginform', 'padding' );
  loginpress_css_property( 'loginpress_customization[customize_form_border]', '#loginform', 'border' );

  loginpress_input_property( 'loginpress_customization[textfield_width]', 'width' );
  loginpress_input_property( 'loginpress_customization[textfield_margin]', 'margin' );
  loginpress_input_property( 'loginpress_customization[textfield_background_color]', 'background' );
  loginpress_input_property( 'loginpress_customization[textfield_color]', 'color' );


  loginpress_css_property( 'loginpress_customization[form_background_color]', '#loginform', 'background-color' );

  loginpress_css_property( 'loginpress_customization[textfield_label_color]', '.login label', 'color' );

  loginpress_background_img( 'loginpress_customization[forget_form_background]',    '#lostpasswordform' );
  loginpress_css_property( 'loginpress_customization[forget_form_background_color]','#lostpasswordform', 'background-color' );

  //Buttons starts.
  // Update the login form button background in real time...
  var loginPressBtnClr;
  var loginPressBtnHvr;
  wp.customize( 'loginpress_customization[custom_button_color]', function( value ) {
    value.bind( function( loginPressVal ) {
      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').css('background', '');
        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').on('mouseover', function(){

          if( typeof loginPressBtnHvr !== "undefined" || loginPressBtnHvr === null ){
            $(this).css('background', loginPressBtnHvr);
          }else{
            $(this).css('background', '');
          }
        }).on('mouseleave',function () {
          $(this).css('background', '');
        });
      } else {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login .button-primary').css( 'background', loginPressVal );
        loginPressBtnClr = loginPressVal;

        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').on('mouseover', function(){

          if( typeof loginPressBtnHvr !== "undefined" || loginPressBtnHvr === null ){
            $(this).css('background', loginPressBtnHvr);
          }else{
            $(this).css('background', '');
          }
        }).on('mouseleave',function () {
          $(this).css('background', loginPressVal);
        });
      }
    } );
  } );

  var loginPressBtnBrdrClr;
  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[button_border_color]', function( value ) {
    value.bind( function( loginPressVal ) {
      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').css( 'border-color', ''  );
      } else {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').css( 'border-color', loginPressVal  );
        loginPressBtnBrdrClr = loginPressVal;
      }
    } );
  } );

  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[button_hover_color]', function( value ) {
    value.bind( function( loginPressVal ) {
      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').css('background', '');
        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').on('mouseover', function(){
          $(this).css('background', '');
        }).on('mouseleave',function () {

          if( typeof loginPressBtnClr !== "undefined" || loginPressBtnClr === null ){
            $(this).css('background', loginPressBtnClr);
          }else{
            $(this).css('background', '');
          }
        });
      } else {

        loginPressBtnHvr = loginPressVal;

        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').on('mouseover', function(){

        $(this).css('background', loginPressVal);
          }).on('mouseleave',function () {

            if( typeof loginPressBtnClr !== "undefined" || loginPressBtnClr === null ){
              $(this).css('background', loginPressBtnClr);
            }else{
              $(this).css('background', '');
            }
          });
      }
    } );
  } );

  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[button_hover_border]', function( value ) {
    value.bind( function( loginPressVal ) {
      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').css( 'border-color', ''  );
      } else {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login  .button-primary').on('mouseover', function(){
          $(this).css('border-color', loginPressVal);
        }).on('mouseleave',function () {

          if( typeof loginPressBtnBrdrClr !== "undefined" || loginPressBtnBrdrClr === null ){
            $(this).css('border-color', loginPressBtnBrdrClr);
          }else{
            $(this).css('border-color', '');
          }
        });
      }
    } );
  } );

  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[custom_button_shadow]', function( value ) {
    value.bind( function( loginPressVal ) {
      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login .button-primary').css( 'box-shadow', ''  );
      } else {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login .button-primary').css( 'box-shadow', loginPressVal  );
      }
    } );
  } );

  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[button_text_color]', function( value ) {
    value.bind( function( loginPressVal ) {
      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login .button-primary').css( 'color', ''  );
      } else {
        $('#customize-preview iframe').contents().find('.wp-core-ui #login .button-primary').css( 'color', loginPressVal  );
      }
    } );
  } );

  loginpress_text_message( 'loginpress_customization[login_footer_text]', '.login #nav a:nth-child(2)' );

  loginpress_css_property( 'loginpress_customization[footer_display_text]', '.login #nav', 'display' );
  loginpress_css_property( 'loginpress_customization[login_footer_text_decoration]', '.login #nav a', 'text-decoration' );

  var loginPressFtrClr;
  var loginPressFtrHvr;
  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[login_footer_color]', function( value ) {
    value.bind( function( loginPressVal ) {

      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('.login #nav a').css( 'color', '' );
        $('#customize-preview iframe').contents().find('.login #nav a').on( 'mouseover', function(){

          if( typeof loginPressFtrHvr !== "undefined" || loginPressFtrHvr === null ){
            $(this).css('color', loginPressFtrHvr);
          }else{
            $(this).css('color', '');
          }
        }).on('mouseleave',function () {
          $(this).css('color', '');
        });
      } else {
        loginPressFtrClr = loginPressVal;
        $('#customize-preview iframe').contents().find('.login #nav a').css( 'color', loginPressVal );
        $('#customize-preview iframe').contents().find('.login #nav a').on('mouseover', function(){

          if( typeof loginPressFtrHvr !== "undefined" || loginPressFtrHvr === null ){
            $(this).css('color', loginPressFtrHvr);
          }else{
            $(this).css('color', '');
          }
        }).on('mouseleave',function () {
          $(this).css('color', loginPressVal);
        });
      }
    } );
  } );

  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[login_footer_color_hover]', function( value ) {
    value.bind( function( loginPressVal ) {

      if( loginPressVal == '' ) {

        $('#customize-preview iframe').contents().find('.login #nav a').css( 'color', ''  );

        $('#customize-preview iframe').contents().find('.login #nav a').on('mouseover', function(){
          $(this).css('color', '');
        }).on('mouseleave',function () {

          if( typeof loginPressFtrClr !== "undefined" || loginPressFtrClr === null ){
            $(this).css('color', loginPressFtrClr);
          }else{
            $(this).css('color', '');
          }
        });
      } else {
        loginPressFtrHvr = loginPressVal;
        $('#customize-preview iframe').contents().find('.login #nav a').on('mouseover', function(){
          $(this).css('color', loginPressVal);
        }).on('mouseleave',function () {

          if( typeof loginPressFtrClr !== "undefined" || loginPressFtrClr === null ){
            $(this).css('color', loginPressFtrClr);
          }else{
            $(this).css('color', '');
          }
        });
      }
    } );
  } );

  loginpress_css_property( 'loginpress_customization[login_footer_font_size]', '.login #nav a', 'font-size' );
  loginpress_css_property( 'loginpress_customization[login_footer_bg_color]', '.login #nav', 'background-color' );

  loginpress_css_property( 'loginpress_customization[back_display_text]', '.login #backtoblog', 'display' );
  loginpress_css_property( 'loginpress_customization[login_back_text_decoration]', '.login #backtoblog a', 'text-decoration' );

  var loginPressFtrBackClr;
  var loginPressFtrBackHvr;
  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[login_back_color]', function( value ) {
    value.bind( function( loginPressVal ) {

      if( loginPressVal == '' ) {
        $('#customize-preview iframe').contents().find('.login #backtoblog a').css( 'color', '' );
        $('#customize-preview iframe').contents().find('.login #backtoblog a').on( 'mouseover', function(){

          if( typeof loginPressFtrBackHvr !== "undefined" || loginPressFtrBackHvr === null ){
            $(this).css('color', loginPressFtrBackHvr);
          }else{
            $(this).css('color', '');
          }
        }).on('mouseleave',function () {
          $(this).css('color', '');
        });
      } else {
        loginPressFtrBackClr = loginPressVal;
        $('#customize-preview iframe').contents().find('.login #backtoblog a').css( 'color', loginPressVal );
        $('#customize-preview iframe').contents().find('.login #backtoblog a').on('mouseover', function(){

          if( typeof loginPressFtrBackHvr !== "undefined" || loginPressFtrBackHvr === null ){
            $(this).css('color', loginPressFtrBackHvr);
          }else{
            $(this).css('color', '');
          }
        }).on('mouseleave',function () {
          $(this).css('color', loginPressVal);
        });
      }
    } );
  } );

  // Update the login form button border-color in real time...
  wp.customize( 'loginpress_customization[login_back_color_hover]', function( value ) {
    value.bind( function( loginPressVal ) {

      if( loginPressVal == '' ) {

        $('#customize-preview iframe').contents().find('.login #backtoblog a').css( 'color', ''  );

        $('#customize-preview iframe').contents().find('.login #backtoblog a').on('mouseover', function(){
          $(this).css('color', '');
        }).on('mouseleave',function () {

          if( typeof loginPressFtrBackClr !== "undefined" || loginPressFtrBackClr === null ){
            $(this).css('color', loginPressFtrBackClr);
          }else{
            $(this).css('color', '');
          }
        });
      } else {
        loginPressFtrBackHvr = loginPressVal;
        $('#customize-preview iframe').contents().find('.login #backtoblog a').on('mouseover', function(){
          $(this).css('color', loginPressVal);
        }).on('mouseleave',function () {

          if( typeof loginPressFtrBackClr !== "undefined" || loginPressFtrBackClr === null ){
            $(this).css('color', loginPressFtrBackClr);
          }else{
            $(this).css('color', '');
          }
        });
      }
    } );
  } );

  loginpress_css_property( 'loginpress_customization[login_back_font_size]', '.login #backtoblog a', 'font-size' );
  loginpress_css_property( 'loginpress_customization[login_back_bg_color]', '.login #backtoblog', 'background-color' );
  loginpress_footer_text_message( 'loginpress_customization[login_footer_copy_right]', '.copyRight' );

  loginpress_text_message( 'loginpress_customization[incorrect_username]', '#login_error' );
  loginpress_text_message( 'loginpress_customization[incorrect_password]', '#login_error' );
  loginpress_text_message( 'loginpress_customization[empty_username]', '#login_error' );
  loginpress_text_message( 'loginpress_customization[empty_password]', '#login_error' );
  loginpress_text_message( 'loginpress_customization[invalid_email]', '#login_error' );
  loginpress_text_message( 'loginpress_customization[empty_email]', '#login_error' );
  loginpress_text_message( 'loginpress_customization[invalidcombo_message]', '#login_error' );

  loginpress_text_message( 'loginpress_customization[lostpwd_welcome_message]', '.login .custom-message' );
  loginpress_text_message( 'loginpress_customization[welcome_message]', '.login .custom-message' );
  loginpress_text_message( 'loginpress_customization[register_welcome_message]', '.login .custom-message' );
  loginpress_text_message( 'loginpress_customization[logout_message]', '.login .custom-message' );

  loginpress_css_property( 'loginpress_customization[message_background_border]', '.login .custom-message', 'border' );
  loginpress_css_property( 'loginpress_customization[message_background_color]', '.login .custom-message', 'background-color' );

} )( jQuery );
