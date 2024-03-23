<?php
    /**
     * Register React script to product page
     */
    function enqueue_admin_scripts(){
        global $screen_id_options;
        if ( $screen_id_options == $screen_id_options ) {
            wp_enqueue_script('react-settings-page-menu-options',
                get_stylesheet_directory_uri() . '/inc/react-product-page/app/build/index.js',
                array('wp-element', 'wp-api-fetch'),
                '1.00',
                true);
        }
    }
    add_action( 'admin_enqueue_scripts', 'enqueue_admin_scripts' );

    /**
     * Add bootstrap styles
     */
    function bootstrap_styles() {
        global $pagenow;
        if ($pagenow === 'admin.php' && $_GET['page'] === 'products-page-options') {
            wp_enqueue_style('custom-admin-styles', get_stylesheet_directory_uri() . '/inc/react-product-page/style.css');
        }
    }
    add_action('admin_enqueue_scripts', 'bootstrap_styles');