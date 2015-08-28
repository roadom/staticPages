(function(){
	
	/**
	 * 用于初始化页面中的include标签。
	 */
	$(".includeSpan").each(function(){
		var src = $(this).attr("src");
		$(this).load(src);
	});
	
})();