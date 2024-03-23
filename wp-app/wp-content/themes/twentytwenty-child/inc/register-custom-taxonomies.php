<?php

    /**
     * Create Taxonomy categories linked
     */
    function taxonomy_categories_linked() {
        $args = [
            'label' => __('Categories linked', 'twentytwenty-child'),
            'hierarchical' => true,
            'rewrite' => ['slug' => 'categories_linked'],
            'show_admin_column' => true,
            'show_in_rest' => true,
            'labels' => [
                'singular_name' => __('Categories linked', 'twentytwenty-child'),
                'all_items' => __('All Categories linked', 'twentytwenty-child'),
                'edit_item' => __('Edit Category', 'twentytwenty-child'),
                'view_item' => __('View Category linked', 'twentytwenty-child'),
                'update_item' => __('Update Category', 'twentytwenty-child'),
                'add_new_item' => __('Add New Category', 'twentytwenty-child'),
                'new_item_name' => __('New Category linked Name', 'twentytwenty-child'),
                'search_items' => __('Search Categories linked', 'twentytwenty-child'),
                'parent_item' => __('Parent Category', 'twentytwenty-child'),
                'parent_item_colon' => __('Parent Category:', 'twentytwenty-child'),
                'not_found' => __('No Categories linked found', 'twentytwenty-child'),
            ]
        ];
        register_taxonomy( 'categories_linked', ['product'], $args );
        register_taxonomy_for_object_type('categories_linked', 'product');
    }
    add_action( 'init', 'taxonomy_categories_linked', 0);
