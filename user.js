// user_pref("", true);

// enable smooth scrolling
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 750);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 500);
user_pref("mousewheel.acceleration.factor", 6);
user_pref("mousewheel.acceleration.start", 6);

// hardware acceleration
// user_pref("layers.acceleration.force-enabled", true);
user_pref("gfx.webrender.all", true);
user_pref("media.ffmpeg.vaapi.enabled", true);

// custom search engines
user_pref("browser.urlbar.update2.engineAliasRefresh", true);

// enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);

// Open PDFs in browser by default
user_pref("browser.download.open_pdf_attachments_inline", true);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Disable Activity Stream
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// // ArcWTF specific settings
// user_pref("uc.tweak.context-menu.hide-firefox-account", true);
// // user_pref("uc.tweak.hide-forward-button", true);
// user_pref("uc.tweak.longer-sidebar", true);
// user_pref("uc.tweak.newtab-background", true);
// user_pref("uc.tweak.popup-search", true);

// ShyFox specific settings
user_pref("shyfox.larger.context.menu", true);
user_pref("shyfox.enable.ext.mono.toolbar.icons", true);
user_pref("shyfox.enable.ext.mono.context.icons", true);
user_pref("shyfox.enable.context.menu.icons", true);

// CSS's `:has()` selector
user_pref("layout.css.has-selector.enabled", true);

// GTK rounded corners
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// Who is bogus? (fixes Sidebery tab dragging on Linux)
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);
