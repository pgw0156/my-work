
#Tips: 在之前的BI项目中尝试使用了rem取代px作为css的度量单位，当屏幕分辨率改变时，把font-size及所有的元素size均等比例缩放以达到同样效果的目的。淘宝首页已基本采用这种方法实现布局，但其中还是会有一些坑和兼容不太好的地方。

##1. rem是相对于跟元素<html>的相对单位，而em是相对于父元素的相对单位；
##2. <html>的默认font-size值为16px，若不修改，rem将以16*x为基准，修改只需将html值设为x%；
##3. 浏览器兼容：除IE6-8外其它大多数兼容；
##4. 屏幕分辨率改变时，使用resize或者orientationchange代理事件对<html>的font-size实时变化，全局元素即可进行相应缩放，而不像流式布局需要拉长拉宽；
##5. 需要设置viewport进行缩放，<meta name="viewport" content="width=xxx,maximum-scale=xx,user-scalable=no">;
##6. 所有的margin，padding，width，height，line-height等均换算成rem比例。
##7. 必要时设置好在最小宽度以下不再进行缩放。

###参考：http://isux.tencent.com/web-app-rem.html
