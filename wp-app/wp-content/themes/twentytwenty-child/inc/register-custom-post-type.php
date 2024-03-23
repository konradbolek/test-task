<?php

    /**
     * Create CPT product
     */
    function custom_post_type_product() {
        $labels = [
            'name'                => _x( 'Products', 'Post Type General Name', 'twentytwenty-child' ),
            'singular_name'       => _x( 'Product', 'Post Type Singular Name', 'twentytwenty-child' ),
            'menu_name'           => __( 'Products', 'twentytwenty-child' ),
            'parent_item_colon'   => __( 'Parent product', 'twentytwenty-child' ),
            'all_items'           => __( 'All products', 'twentytwenty-child' ),
            'view_item'           => __( 'View product', 'twentytwenty-child' ),
            'add_new_item'        => __( 'Add New product', 'twentytwenty-child' ),
            'add_new'             => __( 'Add New', 'twentytwenty-child' ),
            'edit_item'           => __( 'Edit product', 'twentytwenty-child' ),
            'update_item'         => __( 'Update product', 'twentytwenty-child' ),
            'search_items'        => __( 'Search product', 'twentytwenty-child' ),
            'not_found'           => __( 'Not Found', 'twentytwenty-child' ),
            'not_found_in_trash'  => __( 'Not found in Trash', 'twentytwenty-child' ),
        ];
                   
        $args = [
            'label'               => __( 'Products', 'twentytwenty-child' ),
            'description'         => __( 'Products in your store', 'twentytwenty-child' ),
            'labels'              => $labels,
            'supports'            => [ 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields' ],
            'taxonomies'          => [ 'categories-linked' ],
            'hierarchical'        => false,
            'public'              => true,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'show_in_nav_menus'   => true,
            'show_in_admin_bar'   => false,
            'menu_position'       => 5,
            'can_export'          => true,
            'has_archive'         => true,
            'exclude_from_search' => false,
            'publicly_queryable'  => true,
            'show_in_rest' => true,
        ];
        register_post_type( 'product', $args );
      
    }
    add_action( 'init', 'custom_post_type_product', 0 );
