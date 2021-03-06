define(['forum/accountheader'], function(header) {
	var	Following = {};

	Following.init = function() {
		header.init();

		var followingCount = ajaxify.variables.get('followingCount');

		if (parseInt(followingCount, 10) === 0) {
			$('#no-following-notice').removeClass('hide');
		}

		utils.addCommasToNumbers($('.account .formatted-number'));
	};

	return Following;
});
