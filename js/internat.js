//set language to english in the beginning
var SET_LANGUAGE = "en";

function languageInit() {
    i18n.init({ lng: SET_LANGUAGE }, function() {
        $(".controls").i18n();
    });
}
//executes the internationalization, connected to key 'L'
//if english, change to swedish, vice versa
function changeLanguage() {
	
	if (SET_LANGUAGE === "en") {
		i18n.init({ lng: "sv" }, function() {
			$(".controls").i18n();
		});
		SET_LANGUAGE = "sv";
	} else if (SET_LANGUAGE === "sv") {
		i18n.init({ lng: "en" }, function() {
			$(".controls").i18n();
		});
		SET_LANGUAGE = "en";
	}
}
