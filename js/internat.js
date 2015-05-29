
function languageInit() {
    i18n.init({ lng: "en" }, function(language) {
            $(".controls").i18n();
            var appName = language("lang.type");
        });
}


	
	var langSwitch = false;

	function changeLanguage() {
		
		if (langSwitch === false) {
			i18n.init({ lng: "sv" }, function(t) {
  			$(".controls").i18n();
  			var appName = t("lang.type");
  			
			});
			langSwitch = true;
		} else if (langSwitch === true) {
			i18n.init({ lng: "en" }, function(language) {
  			$(".controls").i18n();
  			var appName = language("lang.type");
		});
			langSwitch = false;
		}
	}
