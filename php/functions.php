<?php
function my_setup()
{
 add_theme_support('post-thumbnails'); 
 add_theme_support('automatic-feed-links'); 
 add_theme_support('title-tag'); 
 add_theme_support(
   'html5',
   array( 
     'search-form',
     'comment-form',
     'comment-list',
     'gallery',
     'caption',
   )
 );
}
add_action('after_setup_theme', 'my_setup');

function my_script_init()
{
wp_enqueue_style('my', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0', 'all');
wp_enqueue_script('my', get_template_directory_uri() . '/assets/js/main.js', array( 'jquery' ), '1.0.0', false);
}
add_action('wp_enqueue_scripts', 'my_script_init');

function my_menu_init()
{
register_nav_menus(
array(
'global' => 'ヘッダーメニュー',
'footer' => 'フッターメニュー',
)
);
}
add_action('init', 'my_menu_init');

// wp_nav_menuのliにclass追加
function add_additional_class_on_li($classes, $item, $args)
{
 if (isset($args->add_li_class)) {
   $classes['class'] = $args->add_li_class;
 }
 return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);

// wp_nav_menuのaにclass追加
function add_additional_class_on_a($classes, $item, $args)
{
 if (isset($args->add_li_class)) {
   $classes['class'] = $args->add_a_class;
 }
 return $classes;
}
add_filter('nav_menu_link_attributes', 'add_additional_class_on_a', 1, 3);


// 投稿のアーカイブページを作成する
function post_has_archive($args, $post_type)
{
   if ('post' == $post_type) {
       $args['rewrite'] = true; // リライトを有効にする
       $args['has_archive'] = 'news'; // 任意のスラッグ名
   }
   return $args;
}
add_filter('register_post_type_args', 'post_has_archive', 10, 2);
