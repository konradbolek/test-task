<?php

    /**
     * Add authentication nonce to rest api for users logged in to admin panel
     */
    function my_enqueue_scripts() {
        wp_localize_script( 'wp-api', 'wpApiSettings', [ 'root' => esc_url_raw( rest_url() ), 'nonce' => wp_create_nonce( 'wp_rest' ) ] );
        wp_enqueue_script('wp-api');
    }
    add_action( 'init', 'my_enqueue_scripts' );

    /**
     * Code to enqueue parent theme styles
     */
    function enqueue_parent_styles() {
        wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    }
    add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

    /**
     * Remove wp admin bar for `wp-test` user
     */
    $current_user_login = wp_get_current_user()->user_login;
    if ( $current_user_login === 'wp-test' ) {
        add_filter( 'show_admin_bar', '__return_false' );
    }

    // Create user if not exist
    require get_stylesheet_directory() . '/inc/create-user.php';

    // Register custom post types.
    require get_stylesheet_directory() . '/inc/register-custom-post-type.php';

    // Register custom taxonomies.
    require get_stylesheet_directory() . '/inc/register-custom-taxonomies.php';

    // Register settings page
    require get_stylesheet_directory() . '/inc/register-settings-page.php';

    // Register React app
    require get_stylesheet_directory() . '/inc/react-product-page/enqueue-react-scripts.php';

    // Register custom fields for CPT: Product
    require get_stylesheet_directory() . '/inc/register-custom-fields.php';

    // Register Custom endpoint for REST API
    require get_stylesheet_directory() . '/inc/register-custom-endpoints.php';
    