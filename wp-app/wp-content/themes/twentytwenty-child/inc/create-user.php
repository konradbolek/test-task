<?php
    /**
     * Create user if not exists with editor role
     */
    $user_id = wp_create_user('wp-test', '123456789', 'wptest@elementor.com');
    if(is_wp_error($user_id)){
        $error = $user_id->get_error_message();
    }else{
        $user_id_role = new WP_User($user_id);
        $user_id_role->set_role('editor');
    }
    