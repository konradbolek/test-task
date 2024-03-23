<?php

    /**
     * Add Custom fields for CPT product
     */
    function add_custom_fields_product() {
        register_post_meta('product', 'price', [
            'type' => 'string',
            'description' => 'Set price',
            'single' => true,
            'show_in_rest' => true,
            'auth_callback' => function() {
                return current_user_can( 'edit_posts' );
            }
        ]);
        register_post_meta('product', 'sale_price', [
            'type' => 'string',
            'description' => 'Set sale price',
            'single' => true,
            'show_in_rest' => true,
        ]);
        register_post_meta('product', 'is_on_sale', [
            'type' => 'boolean',
            'description' => 'Is on sale?',
            'single' => true,
            'show_in_rest' => true,
        ]);
        register_post_meta('product', 'youtube_video', [
            'type' => 'string',
            'description' => 'Youtube video',
            'single' => true,
            'show_in_rest' => true,
        ]);
    }
    add_action('init', 'add_custom_fields_product');
