var _webbhuset$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: Math.round(document.body.getBoundingClientRect().width),
		height: window.innerHeight
	}));
});

return {
	size: size
};

}();
