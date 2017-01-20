<?php
/**
* Plugin Name: LoginPress - Customizing the WordPress Login
* Plugin URI: http://www.WPBrigade.com/wordpress/plugins/loginpress/
* Description: LoginPress is the best Login Page Customizer in WordPress which allows you to completely change the layout of login, register and forgot password forms.
* Version: 1.0.6
* Author: WPBrigade
* Author URI: http://www.WPBrigade.com/
* Requires at least: 4.0
* Tested up to: 4.7.1
* Text Domain: loginpress
* Domain Path: /languages
*
* @package loginpress
* @category Core
* @author WPBrigade
*/



if ( ! class_exists( 'LoginPress' ) ) :

  final class LoginPress {

    /**
    * @var string
    */
    public $version = '1.0.2';

    /**
    * @var The single instance of the class
    * @since 1.0.0
    */
    protected static $_instance = null;

    /**
    * @var WP_Session session
    */
    public $session = null;

    /**
    * @var WP_Query $query
    */
    public $query = null;

    /**s
    * @var WP_Countries $countries
    */
    public $countries = null;

    /* * * * * * * * * *
    * Class constructor
    * * * * * * * * * */
    public function __construct() {

      $this->define_constants();
      $this->includes();
      $this->_hooks();
    }

    /**
    * Define LoginPress Constants
    */
    private function define_constants() {

      $this->define( 'LOGINPRESS_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
      $this->define( 'LOGINPRESS_ROOT_PATH',  dirname( __FILE__ ) );
      $this->define( 'LOGINPRESS_VERSION', $this->version );
    }

    /**
    * Include required core files used in admin and on the frontend.
    */
    public function includes() {
      include_once( plugin_dir_path( __FILE__ ) . '/custom.php' );
    }

    /**
    * Hook into actions and filters
    * @since  1.0.0
    */
    private function _hooks() {

      add_action( 'admin_menu',       array( $this, 'register_options_page' ) );
      add_action( 'plugins_loaded',   array( $this, 'textdomain' ) );
      add_filter( 'plugin_row_meta',  array( $this, '_row_meta'), 10, 2 );
    }

    /**
    * Main Instance
    *
    * @since 1.0.0
    * @static
    * @see loginPress_loader()
    * @return Main instance
    */
    public static function instance() {
      if ( is_null( self::$_instance ) ) {
        self::$_instance = new self();
      }
      return self::$_instance;
    }


    /**
    * Load Languages
    * @since 1.0.0
    */
    public function textdomain() {

      $plugin_dir =  dirname( plugin_basename( __FILE__ ) ) ;
      load_plugin_textdomain( 'loginpress', false, $plugin_dir . '/languages/');
    }

    /**
    * Define constant if not already set
    * @param  string $name
    * @param  string|bool $value
    */
    private function define( $name, $value ) {
      if ( ! defined( $name ) ) {
        define( $name, $value );
      }
    }

    /**
    * Include required ajax files.
    */
    public function ajax_includes() {
      // Ajax functions for admin and the front-end
    }
    /**
    * Init WPBrigade when WordPress Initialises.
    */
    public function init() {
      // Before init action
    }
    /**
    * Add new page in Apperance to customize Login Page
    */
    public function register_options_page() {
      add_theme_page( __( 'LoginPress', 'loginpress' ),
      __( 'LoginPress', 'loginpress' ),
      'manage_options',
      "abw",
      '__return_null' );
    }
    public function _row_meta( $links, $file ) {

      if ( strpos( $file, 'loginpress.php' ) !== false ) {

        // Set link for Reviews.
        $new_links = array('<a href="https://wordpress.org/support/view/plugin-reviews/loginpress" target="_blank"><span class="dashicons dashicons-thumbs-up"></span> ' . __( 'Vote!', 'loginpress' ) . '</a>',
        );

        $links = array_merge( $links, $new_links );
      }

      return $links;
    }
}
endif;

/**
* Returns the main instance of WP to prevent the need to use globals.
*
* @since  1.0.0
* @return LoginPress
*/
function loginPress_loader() {
  return LoginPress::instance();
}

// Call the function
loginPress_loader();

/**
* Create the Object of Custom Login Entites.
*
* @since  1.0.0
*/
new LoginPress_Entities();
?>
