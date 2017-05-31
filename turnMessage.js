;(function($){
	var resetLength = 30; //消息达到指定条数时清理一次
	var turnMessage = function(opts){
		var box = opts && opts.box || '#v-turnMessageBox',
			$box = $(box);
		$box.html('<ul></ul>');
		this.$box = $box;
		this.$box_ul = $box.find('ul');
	}
	turnMessage.prototype.setHtml = function(opts){
		var init_opts = {
			html : '' //[String] [必传] 用来渲染的html字符串
		};
		var that = this,
			$box = that.$box,
			$box_ul = that.$box_ul,
			opts = $.extend({}, init_opts, opts),
			html = opts.html,
			li_num = $box_ul.find("li").length,
			callback = opts.callback;
		if(!(typeof html ==='string' ? html.trim() : html))return;
		if($box.css('height') !== '30px'){
			$box.animate({
				height : '30px'
			});
		}
		if(li_num > resetLength) {
			$box_ul.empty().prepend(html).css({
				bottom: 0
			});
		}else if(li_num>0){
			$box_ul.prepend(html).animate({
				bottom : -li_num*30 + 'px'
			});
		}else{
			$box_ul.prepend(html); 
		}
		callback && callback($box,html,li_num);
		return that;
	};
	turnMessage.prototype.hideBox = function(callback){
		var that = this,
			$box = that.$box,
			$box_ul = that.$box_ul;
			$box.animate({
				height : 0
			},function(){
				$box_ul.empty().css({
					bottom : 0
				});
				callback && callback(that);
			});
		
		return that;
	};
	window.turnMessage = turnMessage;
})(jQuery);
