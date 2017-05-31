# turnMessage
a message turn 
一条接一条的出现信息的过渡动画

浏览地址：https://liuyuxi520.github.io/turnMessage/

使用方法简单：

1，需要一个html容器，如<div id="v-turnMessageBox" class="turnMessageBox pos"></div>

2，初始化：var t = new TurnPrepend({box:"#idName"});

3, 传入每一条信息 t.setHtml({html:'text'});

4, 如需关闭信息框时 t.hideBox();
