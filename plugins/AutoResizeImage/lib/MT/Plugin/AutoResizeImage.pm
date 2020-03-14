package MT::Plugin::AutoResizeImage;

use strict;
use warnings;
use utf8;

use File::Basename qw(basename dirname);

sub component {
    __PACKAGE__ =~ m/::([^:]+)\z/;
}

sub plugin {
    MT->component(component());
}

sub insert_after {
    my ($tmpl, $id, $tokens) = @_;

    my $before = $id ? $tmpl->getElementById($id) : undef;

    if (!ref $tokens) {
        $tokens = plugin()->load_tmpl($tokens)->tokens;
    }

    foreach my $t ( @$tokens ) {
        $tmpl->insertAfter( $t, $before );
        $before = $t;
    }
}

sub template_param_async_asset_upload {
    my ($cb, $app, $param, $tmpl) = @_;

    my $blog = $app->blog
        or return 1;

    my $size = plugin()->get_config_value('autoresizeimage_size', "blog:@{[$blog->id]}");
    my $quality = plugin()->get_config_value('autoresizeimage_quality', "blog:@{[$blog->id]}");
    my $autoresizeimage_static_path = do {
        my $plugin = plugin();
	    my $static = $app->static_path;
	    my $plugin_name = basename($plugin->{full_path});
	    my $dir = basename(dirname($plugin->{full_path}));
        "$static$dir/$plugin_name";
    };

    insert_after($tmpl, 'normalize_orientation', 'async_asset_upload.tmpl');
    insert_after($tmpl, 'normalize_orientation', [
        $tmpl->createElement('var', {
            name => 'autoresizeimage_size',
            value => $size,
        }),
        $tmpl->createElement('var', {
            name => 'autoresizeimage_quality',
            value => $quality,
        }),
        $tmpl->createElement('var', {
            name => 'autoresizeimage_static_path',
            value => $autoresizeimage_static_path,
        }),
    ]);
    insert_after($tmpl, undef, 'async_asset_upload_modal.tmpl');
}

1;
