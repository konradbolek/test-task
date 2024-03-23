<?php
    /**
     * Add custom endpoint for featured image
     */
    add_action('rest_api_init', 'register_rest_images' );
    function register_rest_images(){
        register_rest_field( ['product'],
            'fimg_url',
            [
                'get_callback'    => 'get_rest_featured_image',
                'update_callback' => null,
                'schema'          => null,
            ]
        );
    }
    function get_rest_featured_image( $object, $field_name, $request ) {
        if( $object['featured_media'] ){
            $img = wp_get_attachment_image( $object['featured_media'] );
            return $img;
        }
        return false;
    }
