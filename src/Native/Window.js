var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: document.body.getBoundingClientRect().width,
		height: document.body.getBoundingClientRect().height
	}));
});

return {
	size: size
};

}();