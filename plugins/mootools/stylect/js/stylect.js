/* Contao Open Source CMS, (C) 2005-2012 Leo Feyer, LGPL license */
var Stylect={convertSelects:function(){$$("select").each(function(a){if(Browser.ie6||Browser.ie7||Browser.ie8)return;if(a.get("multiple"))return;if(a.hasClass("tl_chosen"))return;if((active=a.getElement("option[selected]"))!=null)var b=active.get("html");else var b=a.getElement("option").get("html");var c=a.getComputedSize().totalWidth||a.getStyle("width").toInt()+a.getStyle("border-left-width").toInt()+a.getStyle("border-right-width").toInt(),d=(new Element("div",{id:a.get("id")+"_styled","class":"styled_select",html:"<span>"+b+"</span><b><i></i></b>",styles:{width:c-(Browser.safari||Browser.chrome?6:8)}})).inject(a,"before");a.hasClass("right-aligned")&&d.setStyle("left",a.getPosition().x),a.hasClass("active")&&d.addClass("active"),a.addEvent("change",function(){var b=a.getElement('option[value="'+a.value+'"]');d.getElement("span").set("html",b.get("html"))}).addEvent("keydown",function(b){setTimeout(function(){a.fireEvent("change")},100)}).addEvent("focus",function(){d.addClass("focused")}).addEvent("blur",function(){d.removeClass("focused")}).setStyle("opacity",0),Browser.Engine.webkit&&a.setStyle("margin-bottom","4px"),(Browser.Engine.webkit||Browser.Engine.trident)&&d.setStyle("width",d.getStyle("width").toInt()-4)})}};window.addEvent("domready",function(){Stylect.convertSelects()}),window.addEvent("ajax_change",function(){Stylect.convertSelects()});