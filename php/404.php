<?php get_header(); ?>
<main>
        <section class="kaso-fv about-fv">
            <h1>404 Not Found</h1>
        </section>

        <section class="contact-section thanks">
            <p class="desc">ページが見つかりませんでした。<br>恐れ入りますが、<br class="sp-hide">トップページより再度アクセスをお願いいたします</p>
            <div class="button-wrapper">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="button">
                    トップページへ戻る
                </a>
            </div>
        </section>
</main>
<?php get_footer(); ?>