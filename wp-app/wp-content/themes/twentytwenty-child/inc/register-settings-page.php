<?php

    /**
     * Create options page called products
     */
    function me_add_admin_menu() {
        add_menu_page(
            esc_html__( 'Products', 'react-settings-page' ),
            esc_html__( 'Products page', 'react-settings-page' ),
            'manage_options',
            'products-page-options',
            'prodcuts_menu_options'
        );    
    }
    add_action( 'admin_menu', 'me_add_admin_menu');

    function prodcuts_menu_options() {
        if ( ! current_user_can( 'manage_options' ) ) {
            wp_die( esc_html__( 'You do not have sufficient capabilities to access this page.', 'react-settings-page' ) );
        }
        echo '<div class="wrap"><div id="prodcuts-react-app"></div></div>';
    }
