//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

	// マップ上にウィンドウ表示するよ宣言
	var _Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        _Scene_Menu_create.call(this);
        this.createInfoWindow();
    }

    Scene_Menu.prototype.createInfoWindow = function() {
        this._InfoWindow = new Window_Info();
        this.addWindow(this._InfoWindow);
    };
    
    var _Scene_Menu_update = Scene_Menu.prototype.update;
    Scene_Menu.prototype.update = function() {
        _Scene_Menu_update.call(this);
        this._InfoWindow.setText();
    };
	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 0;
		var y = 578;
	    var width = 238;
	    var height = 70;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
		this.changeTextColor(this.textColor(0));
        this.drawIcon(7, 1, 1);
		this.drawText("淫堕值　　" + $gameVariables.value(26),40, 1);
		this.resetTextColor();
	};
	
	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
    	return 200;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 18;
	};
	// ウィンドウの色調
	Window_Info.prototype.updateTone = function() {
    	this.setTone(-100, -100, -100);
	};
	
})();