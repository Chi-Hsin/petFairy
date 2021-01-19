var petData = new Vue({
            el: '#petSearch',
            data: {
				allPet:[
					{"id":"1","name":"窩捲蟲","level":"1~3","species":"蝸牛","speciesDir":"體","element":"金","skillAmount":"2","str":"4","vit":"5","agi":"4","int":"4","luk":"5","chm":"4","life":"56","drop":"窩捲蟲卡 窩捲蟲娃娃 新手屠刀 修行袍 煤 青銅礦 娃娃盒","skill":"恢復、豬頭、裝死、賜福、轉換、魔刃術、裂地斬","map":"市鎮地下室、吉恩村、綠夫村、伊利村"}
					,
					{"id":"2","name":"金錢鼠","level":"4~5","species":"老鼠","speciesDir":"智","element":"金","skillAmount":"3","str":"6","vit":"6","agi":"8","int":"7","luk":"7","chm":"6","life":"59","drop":"金錢鼠卡 金錢鼠娃娃 藤棍 木盾 蘋果 桃子 雜七集卡冊","skill":"連擊、裝死、轉換、吸血、亡命一擊、魔刃術、裂地斬","map":"北綠野"}
					,
					{"id":"3","name":"金殼蛛","level":"6~7、6~12","species":"蜘蛛","speciesDir":"體","element":"金","skillAmount":"3","str":"10","vit":"8","agi":"9","int":"12","luk":"8","chm":"8","life":"62","drop":"金殼蛛卡 金殼蛛娃娃 重藤棍 小圓帽 雜魚 青銅礦 大南瓜","skill":"連擊、裝死、威脅、轉換、吸血、亡命一擊","map":"北綠野、飛魚角"}
					,
					{"id":"4","name":"狼人","level":"8~9","species":"野狼","speciesDir":"智","element":"金","skillAmount":"3","str":"12","vit":"12","agi":"12","int":"12","luk":"10","chm":"11","life":"81","drop":"狼人卡 狼人娃娃 短刀 青銅鎧甲 雞肉 豬肉 羊肉","skill":"強化、連擊、裝死、威脅、吸血、推車","map":"北綠野"}
					,
					{"id":"5","name":"金艾波","level":"10~12","species":"鳳梨","speciesDir":"體","element":"金","skillAmount":"3","str":"16","vit":"16","agi":"13","int":"15","luk":"15","chm":"15","life":"102","drop":"金艾波卡 金艾波娃娃 木斧 皮甲 竹子 桃子 薄荷","skill":"恢復、豬頭、裝死、賜福、轉換、犧牲","map":"金銀城外"}
					,
					{"id":"6","name":"錢豬","level":"13~15","species":"箭豬","speciesDir":"體","element":"金","skillAmount":"2","str":"20","vit":"20","agi":"19","int":"20","luk":"19","chm":"17","life":"130","drop":"錢豬卡 錢豬娃娃 輕木棍 銅盾 青銅礦 附貝子 金猴毛","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"金銀城外"}
					,
					{"id":"7","name":"金屬史來姆","level":"16~18","species":"史萊姆","speciesDir":"體","element":"金","skillAmount":"2","str":"22","vit":"24","agi":"19","int":"26","luk":"22","chm":"24","life":"173","drop":"金屬史來姆卡 金屬史來姆娃娃 長刀 金麻衣 青銅礦 白楊木 金剛砂","skill":"恢復、豬頭、裝死、賜福、魔刃術、裂地斬","map":"史來姆迷宮2、矮人山"}
					,
					{"id":"8","name":"高登波里","level":"19~20","species":"波里","speciesDir":"體","element":"金","skillAmount":"3","str":"25","vit":"27","agi":"23","int":"27","luk":"27","chm":"23","life":"194","drop":"高登波里卡 高登波里娃娃 長刀 金麻衣 青銅礦 白楊木 黃金蛇","skill":"裝死、賜福、威脅、轉換、吸血、亡命一擊","map":"金銀城外、鼠洞B2"}
					,
					{"id":"9","name":"金屬幽靈","level":"19~20","species":"幽靈","speciesDir":"敏","element":"金","skillAmount":"3","str":"21","vit":"21","agi":"29","int":"29","luk":"25","chm":"25","life":"171","drop":"金屬幽靈卡 金屬幽靈娃娃 褐木棒 赤銅鎧甲 豬肉 銅礦石 金猴毛","skill":"連擊、裝死、賜福、威脅、魔刃術、裂地斬","map":"金銀城外"}
					,
					{"id":"10","name":"燦金蝶","level":"19~20","species":"蝴蝶","speciesDir":"敏","element":"金","skillAmount":"3","str":"21","vit":"21","agi":"33","int":"23","luk":"25","chm":"29","life":"171","drop":"燦金蝶卡 燦金蝶娃娃 銅板斧 鹿革甲 黃蔓葵 薄荷 仙人掌","skill":"連擊、裝死、賜福、轉換、吸血、魔刃術、裂地斬","map":"矮人山"}
					,
					{"id":"11","name":"金綿羊","level":"21~23","species":"綿羊","speciesDir":"智","element":"金","skillAmount":"3","str":"28","vit":"30","agi":"28","int":"28","luk":"26","chm":"33","life":"242","drop":"金綿羊卡 金綿羊娃娃 散花棒 鐵面具 羊毛 稻米 小麥","skill":"豬頭、裝死、賜福、轉換、犧牲、魔刃術、裂地斬","map":"秘密平原"}
					,
					{"id":"12","name":"金海馬","level":"21~25","species":"海馬","speciesDir":"敏","element":"金","skillAmount":"3","str":"30","vit":"28","agi":"28","int":"33","luk":"26","chm":"26","life":"268","drop":"金海馬卡 金海馬娃娃 銅板斧 銅手套 鳳梨 優格 雜八集卡冊","skill":"強化、連擊、威脅、轉換、吸血、魔刃術、裂地斬","map":"史蓋窩克海"}
					,
					{"id":"13","name":"金獅","level":"24~25","species":"獅","speciesDir":"力","element":"金","skillAmount":"3","str":"41","vit":"36","agi":"33","int":"28","luk":"28","chm":"33","life":"292","drop":"金獅卡 金獅娃娃 輕戰斧 鹿皮鞋 鯉魚 金剛砂 羌子肉","skill":"強化、恢復、連擊、裝死、威脅、推車","map":"秘密平原"}
					,
					{"id":"14","name":"鑲金岩石","level":"26~28","species":"石怪","speciesDir":"力","element":"金","skillAmount":"2","str":"45","vit":"48","agi":"29","int":"29","luk":"31","chm":"29","life":"417","drop":"鑲金岩石卡 鑲金岩石娃娃 柚木棍 騎士盾 銅礦石 水晶原石 鐵礦石","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"金銀湖"}
					,
					{"id":"15","name":"金錦蛇","level":"26~30","species":"蛇","speciesDir":"智","element":"金","skillAmount":"3","str":"43","vit":"43","agi":"49","int":"40","luk":"34","chm":"37","life":"待補充","drop":"金綿蛇卡 金綿蛇娃娃 柚木棍 騎士盾 羊毛 水晶原石 柚木","skill":"強化、連擊、裝死、威脅、吸血、犧牲","map":"金銀城迷宮B2"}
					,
					{"id":"16","name":"金螃蟹","level":"26~30","species":"螃蟹","speciesDir":"體","element":"金","skillAmount":"3","str":"46","vit":"46","agi":"34","int":"43","luk":"34","chm":"37","life":"420","drop":"金螃蟹卡 金螃蟹娃娃 鑲銀長劍 薄鐵靴 銅礦石 金剛砂 鐵礦石","skill":"強化、恢復、連擊、裝死、威脅、犧牲","map":"彩虹城迷宮B2"}
					,
					{"id":"17","name":"黃金獸","level":"29~30","species":"阿寶","speciesDir":"力","element":"金","skillAmount":"4","str":"40","vit":"40","agi":"40","int":"37","luk":"34","chm":"37","life":"383","drop":"黃金獸卡 黃金獸娃娃 鑲銀長劍 鐵手套 銅礦石 金猴毛 紫晶原石","skill":"連擊、裝死、吸血、犧牲、亡命一擊、魔刃術、裂地斬","map":"金銀湖"}
					,
					{"id":"18","name":"金錢蛙","level":"31~33","species":"蛙","speciesDir":"敏","element":"金","skillAmount":"3","str":"37","vit":"37","agi":"47","int":"47","luk":"37","chm":"43","life":"404","drop":"金錢蛙卡 金錢蛙娃娃 鐵珠斧 細紋皮甲 水晶原石 棉花 小黃牌","skill":"強化、連擊、裝死、威脅、轉換、亡命一擊","map":"沈睡迷宮"}
					,
					{"id":"19","name":"黃金雲","level":"31~33、37~44","species":"雲","speciesDir":"敏","element":"金","skillAmount":"3","str":"37","vit":"40","agi":"50","int":"47","luk":"34","chm":"40","life":"433","drop":"黃金雲卡 黃金雲娃娃 重木棒 戰鬥鎧甲 金剛砂 小麥 貓眼石原石","skill":"連擊、裝死、賜福、轉換、亡命一擊、魔刃術、裂地斬","map":"水晶山、禿禿島空域"}
					,
					{"id":"20","name":"挖礦蜥蜴","level":"31~33","species":"蜥","speciesDir":"力","element":"金","skillAmount":"3","str":"46","vit":"50","agi":"46","int":"43","luk":"39","chm":"39","life":"544","drop":"挖礦蜥蜴卡 挖礦蜥蜴娃娃 重木棒 戰鬥鎧甲 水晶原石 紫晶原石 貓眼石原石","skill":"強化、連擊、裝死、賜福、威脅、轉換","map":"沈睡迷宮、水晶山"}
					,
					{"id":"21","name":"金猴子","level":"36~38","species":"猴","speciesDir":"敏","element":"金","skillAmount":"3","str":"42","vit":"42","agi":"61","int":"54","luk":"39","chm":"46","life":"517","drop":"金猴子卡 金猴子娃娃 紅檜棒 塔形盾 金剛砂 無根蓮 夜亭草","skill":"連擊、裝死、賜福、轉換、推車、亡命一擊","map":"糖果山、羅比特草原"}
					,
					{"id":"22","name":"金屬玩偶","level":"39~40","species":"玩偶","speciesDir":"智","element":"金","skillAmount":"3","str":"53","vit":"49","agi":"53","int":"53","luk":"45","chm":"49","life":"608","drop":"金屬玩偶卡 金屬玩偶娃娃 長彎刀 鋼靴 水晶原石 銀礦石 魅力寶石","skill":"強化、裝死、賜福、威脅、吸血、推車","map":"糖果山"}
					,
					{"id":"23","name":"卡金龍","level":"36~40","species":"龍人","speciesDir":"力","element":"金","skillAmount":"2","str":"61","vit":"61","agi":"57","int":"53","luk":"45","chm":"45","life":"757","drop":"卡金龍卡 娃娃金龍娃娃 紅檜棒 鋼靴 鹿皮 紫晶原石 螺旋貝殼","skill":"強化、恢復、豬頭、裝死、威脅、推車","map":"龍窟B1"}
					,
					{"id":"24","name":"金光骷髏","level":"36~40","species":"骷髏","speciesDir":"力","element":"金","skillAmount":"3","str":"44","vit":"47","agi":"47","int":"55","luk":"44","chm":"40","life":"577","drop":"金光骷髏卡 金光骷髏娃娃 長刀 金麻衣 芒果 求婚戒台 紫晶原石","skill":"裝死、賜福、威脅、吸血、推車、魔刃術、裂地斬","map":"巴斯密洞B1"}
					,
					{"id":"25","name":"金毛禿鷹","level":"39~40","species":"老鷹","speciesDir":"敏","element":"金","skillAmount":"3","str":"57","vit":"53","agi":"61","int":"61","luk":"45","chm":"45","life":"658","drop":"金毛禿鷹卡 金毛禿鷹娃娃 彎刃戰斧 鹿皮帽 仙人掌 棉花 高粱","skill":"強化、連擊、裝死、威脅、吸血、亡命一擊","map":"不知名迷宮"}
					,
					{"id":"26","name":"黃金虎","level":"41~45","species":"虎","speciesDir":"力","element":"金","skillAmount":"3","str":"65","vit":"56","agi":"56","int":"52","luk":"52","chm":"56","life":"785","drop":"黃金虎卡 黃金虎娃娃 血檜棒 堅硬皮甲 紫杉 竹筍 琥珀原石","skill":"強化、恢復、連擊、裝死、威脅、推車","map":"椰子島"}
					,
					{"id":"27","name":"金屬瓢蟲","level":"46~50","species":"瓢蟲","speciesDir":"敏","element":"金","skillAmount":"3","str":"61","vit":"76","agi":"71","int":"71","luk":"56","chm":"61","life":"1022","drop":"金屬瓢蟲卡 金屬瓢蟲娃娃 破甲鋼劍 天絨袍 還魂草 犀牛皮 天青石原石","skill":"連擊、裝死、賜福、吸血、犧牲、魔刃術、裂地斬","map":"哈啾島"}
					,
					{"id":"28","name":"蜂蜜熊","level":"46~50","species":"熊","speciesDir":"力","element":"金","skillAmount":"2","str":"61","vit":"66","agi":"71","int":"66","luk":"56","chm":"56","life":"1124","drop":"蜂蜜熊卡 蜂蜜熊娃娃 破甲鋼劍 貂皮手套 草莓 藍莓 傳說集卡冊","skill":"強化、恢復、豬頭、裝死、威脅、推車","map":"巴斯密洞B2"}
					,
					{"id":"29","name":"鑲金牛","level":"51~55","species":"牛","speciesDir":"體","element":"金","skillAmount":"2","str":"67","vit":"82","agi":"62","int":"67","luk":"62","chm":"62","life":"1429","drop":"鑲金牛卡 鑲金牛娃娃 紫星棒 女王之冠 象牙 黃魚 閃亮星星","skill":"強化、恢復、豬頭、裝死、犧牲、推車","map":"鬱金香島"}
					,
					{"id":"30","name":"金星","level":"51~55","species":"海星","speciesDir":"體","element":"金","skillAmount":"4","str":"72","vit":"83","agi":"61","int":"78","luk":"67","chm":"61","life":"1603","drop":"金星卡 金星娃娃 圓月彎刀 精鋼戰盔 鈦礦石 金澄水晶 羽絨毛","skill":"連擊、裝死、威脅、吸血、亡命一擊、魔刃術、裂地斬","map":"巴斯密洞B3"}
					,
					{"id":"31","name":"小金貓頭鷹","level":"56~60","species":"貓頭鷹","speciesDir":"智","element":"金","skillAmount":"4","str":"70","vit":"76","agi":"82","int":"82","luk":"64","chm":"70","life":"1542","drop":"小金貓頭鷹卡 小金貓頭鷹娃娃 破甲鋼劍 大法師之帽 犀角 紅寶石原石 神秘眼罩","skill":"連擊、裝死、賜福、吸血、犧牲、魔刃術、裂地斬","map":"趴趴迷宮B1"}
					,
					{"id":"32","name":"金蹄飛馬","level":"56~60","species":"飛馬","speciesDir":"敏","element":"金","skillAmount":"4","str":"75","vit":"69","agi":"86","int":"75","luk":"69","chm":"75","life":"1352","drop":"金蹄飛馬卡 金蹄飛馬娃娃 破甲棒 大祭司袍 月葵 犀角 黃寶石原石","skill":"連擊、裝死、賜福、推車、亡命一擊、魔刃術、裂地斬","map":"咕嚕島"}
					,
					{"id":"33","name":"金毛雪怪","level":"61~65","species":"雪怪","speciesDir":"體","element":"金","skillAmount":"2","str":"98","vit":"85","agi":"85","int":"79","luk":"79","chm":"85","life":"1973","drop":"金毛雪怪卡 金毛雪怪娃娃 合金短劍 黃金角盔 犀角 月葵 綠寶石原石","skill":"強化、恢復、豬頭、裝死、賜福、推車","map":"聽說島"}
					,
					{"id":"34","name":"金錢蟹","level":"61~65","species":"寄居蟹","speciesDir":"體","element":"金","skillAmount":"4","str":"86","vit":"92","agi":"74","int":"92","luk":"68","chm":"74","life":"2103","drop":"金錢蟹卡 金錢蟹娃娃 紫星棒 虎牙戰盔 葡萄 犀角 小箭頭","skill":"恢復、豬頭、寄生、賜福、犧牲、魔刃術、裂地斬","map":"趴趴迷宮B2"}
					,
					{"id":"35","name":"金角獸","level":"66~70","species":"獨角獸","speciesDir":"智","element":"金","skillAmount":"4","str":"86","vit":"86","agi":"93","int":"86","luk":"73","chm":"52","life":"2018","drop":"金角獸卡 金角獸娃娃 合金雙刃戰斧 黃金虎皮甲 黃鱔 破除結界的鏡子 紅寶石原石","skill":"恢復、連擊、裝死、賜福、推車、犧牲","map":"玫瑰島"}
					,
					{"id":"36","name":"金太郎","level":"66~70","species":"狗","speciesDir":"體","element":"金","skillAmount":"2","str":"99","vit":"99","agi":"106","int":"92","luk":"78","chm":"78","life":"2569","drop":"金太郎卡 金太郎娃娃 雙刃斧 大法師之帽 鱉 鈦礦石 娃娃盒","skill":"豬頭、裝死、威脅、推車、犧牲、魔刃術、裂地斬","map":"趴趴迷宮B3"}
					,
					{"id":"37","name":"金貝貝","level":"71~75","species":"蚌類","speciesDir":"體","element":"金","skillAmount":"4","str":"106","vit":"113","agi":"83","int":"98","luk":"91","chm":"76","life":"3413","drop":"金貝貝卡 金貝貝娃娃 破甲鋼劍 大祭司袍 鱉 鈦礦石 珍珠","skill":"恢復、轉換、賜福、吸血、亡命一擊、魔刃術、裂地斬","map":"史蓋窩克海B1"}
					,
					{"id":"38","name":"鎂光燈","level":"76~80","species":"燈籠魚","speciesDir":"力","element":"金","skillAmount":"4","str":"113","vit":"121","agi":"121","int":"105","luk":"89","chm":"81","life":"3974","drop":"鎂光燈卡 鎂光燈娃娃 長柄戰斧 合金手套 葡萄 犀角 雜七集卡冊","skill":"強化、連擊、裝死、威脅、犧牲、魔刃術、裂地斬","map":"史蓋窩克海B2"}
					,
					{"id":"39","name":"拾木鼠","level":"1~3","species":"老鼠","speciesDir":"智","element":"木","skillAmount":"3","str":"3","vit":"4","agi":"3","int":"2","luk":"3","chm":"3","life":"58","drop":"拾木鼠卡 拾木鼠娃娃 新手屠刀 工作帽 藤條 白楊木 厚鏡片","skill":"連擊、裝死、轉換、吸血、亡命一擊、巨木之擊、禁言","map":"市鎮地下室、吉恩村、綠夫村、伊利村"}
					,
					{"id":"40","name":"樹猴","level":"4~5","species":"猴","speciesDir":"敏","element":"木","skillAmount":"3","str":"6","vit":"6","agi":"9","int":"9","luk":"6","chm":"6","life":"58","drop":"樹猴卡 樹猴娃娃 青銅劍 青銅盔 竹子 藤條 白楊木","skill":"連擊、裝死、賜福、轉換、推車、亡命一擊","map":"微笑森林"}
					,
					{"id":"41","name":"爬樹蛇","level":"6~8","species":"蛇","speciesDir":"智","element":"木","skillAmount":"3","str":"11","vit":"11","agi":"11","int":"9","luk":"9","chm":"9","life":"74","drop":"爬樹蛇卡 爬樹蛇娃娃 青銅闊劍 青銅手套 竹子 藤條 白楊木","skill":"強化、連擊、裝死、威脅、吸血、犧牲","map":"微笑森林"}
					,
					{"id":"42","name":"啄木豬","level":"9~10","species":"箭豬","speciesDir":"體","element":"木","skillAmount":"2","str":"14","vit":"15","agi":"13","int":"14","luk":"11","chm":"11","life":"87","drop":"啄木豬卡 啄木豬娃娃 重藤棍 小圓帽 竹子 藤條 白楊木","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"微笑森林"}
					,
					{"id":"43","name":"迷你虎","level":"10~12","species":"虎","speciesDir":"力","element":"木","skillAmount":"3","str":"17","vit":"20","agi":"16","int":"16","luk":"13","chm":"13","life":"109","drop":"迷你虎卡 迷你虎娃娃 重藤棍 軟皮袍 雞肉 豬肉 鯉魚","skill":"強化、恢復、連擊、裝死、威脅、推車","map":"彩虹城外"}
					,
					{"id":"44","name":"枯葉蝶","level":"11~13","species":"蝴蝶","speciesDir":"敏","element":"木","skillAmount":"3","str":"15","vit":"15","agi":"19","int":"15","luk":"17","chm":"17","life":"106","drop":"枯葉蝶卡 枯葉蝶娃娃 單刀 尖長帽 藤條 白楊木 牛肉","skill":"連擊、裝死、賜福、轉換、吸血、巨木之擊、禁言","map":"玫瑰湖"}
					,
					{"id":"45","name":"小木偶","level":"11~13","species":"玩偶","speciesDir":"智","element":"木","skillAmount":"3","str":"16","vit":"16","agi":"17","int":"17","luk":"14","chm":"16","life":"109","drop":"小木偶卡 小木偶娃娃 手斧 工作手套 羊肉 牛皮 香腸","skill":"強化、裝死、賜福、威脅、吸血、推車","map":"史來姆迷宮1F、木偶山"}
					,
					{"id":"46","name":"暴力羊","level":"13~15","species":"綿羊","speciesDir":"智","element":"木","skillAmount":"3","str":"25","vit":"20","agi":"19","int":"19","luk":"16","chm":"16","life":"130","drop":"暴力羊卡 暴力羊娃娃 精銅短劍 銅盔 牛奶 優格 小圓盤","skill":"豬頭、裝死、賜福、轉換、犧牲、巨木之擊、禁言","map":"彩虹城、木偶山、尼克草原"}
					,
					{"id":"47","name":"木姆","level":"14~15","species":"史萊姆","speciesDir":"體","element":"木","skillAmount":"2","str":"19","vit":"19","agi":"16","int":"20","luk":"22","chm":"19","life":"126","drop":"木姆卡 木姆娃娃 單刀 僧侶袍 青銅礦 羊毛 水晶原石","skill":"恢復、豬頭、裝死、賜福、巨木之擊、禁言","map":"玫瑰湖、史來姆迷宮1"}
					,
					{"id":"48","name":"木頭波里","level":"14~15","species":"波里","speciesDir":"體","element":"木","skillAmount":"3","str":"19","vit":"19","agi":"16","int":"20","luk":"22","chm":"16","life":"130","drop":"木頭波里卡 木頭波里娃娃 手斧 硬皮甲 黃蔓葵 鯉魚 金剛砂","skill":"裝死、賜福、威脅、轉換、吸血、亡命一擊","map":"碗豆湖"}
					,
					{"id":"49","name":"樹蛙","level":"16~18","species":"蛙","speciesDir":"敏","element":"木","skillAmount":"3","str":"22","vit":"20","agi":"24","int":"24","luk":"24","chm":"20","life":"158","drop":"樹蛙卡 樹蛙娃娃 銅板斧 銅手套 雜八集卡冊 娃娃盒 雜七集卡冊","skill":"強化、連擊、裝死、威脅、轉換、亡命一擊","map":"玫瑰湖、青蛙沼澤"}
					,
					{"id":"50","name":"竹蜻蜓","level":"16~20","species":"雲","speciesDir":"敏","element":"木","skillAmount":"3","str":"18","vit":"20","agi":"25","int":"20","luk":"18","chm":"20","life":"165","drop":"竹蜻蜓卡 竹蜻蜓娃娃 長刀 厚布帽 巧克力 麵粉 水晶原石","skill":"連擊、裝死、賜福、轉換、亡命一擊、巨木之擊、禁言","map":"米夏島"}
					,
					{"id":"51","name":"木蟹","level":"19~20","species":"螃蟹","speciesDir":"體","element":"木","skillAmount":"3","str":"27","vit":"29","agi":"23","int":"25","luk":"23","chm":"25","life":"202","drop":"木蟹卡 木蟹娃娃 銅板斧 銅手套 桃子 附貝子 水晶原石","skill":"強化、恢復、連擊、裝死、威脅、犧牲","map":"玫瑰湖、青蛙沼澤"}
					,
					{"id":"52","name":"木瓢蟲","level":"21~23","species":"瓢蟲","speciesDir":"敏","element":"木","skillAmount":"3","str":"26","vit":"28","agi":"33","int":"28","luk":"28","chm":"28","life":"235","drop":"木瓢蟲卡 木瓢蟲娃娃 彎刀 牛皮帽 白楊木 仙人掌 柚木","skill":"連擊、裝死、賜福、吸血、犧牲、巨木之擊、禁言","map":"鼠洞B3、白雪森林"}
					,
					{"id":"53","name":"武得禿鷹","level":"21~25","species":"老鷹","speciesDir":"敏","element":"木","skillAmount":"3","str":"36","vit":"33","agi":"38","int":"38","luk":"28","chm":"28","life":"279","drop":"武得禿鷹卡 武得禿鷹娃娃 彎刀 鐵面具 白楊木 仙人掌 特殊軟骨","skill":"強化、連擊、裝死、威脅、吸血、亡命一擊","map":"彩虹城迷宮B1"}
					,
					{"id":"54","name":"木頭鷹","level":"24~25","species":"貓頭鷹","speciesDir":"智","element":"木","skillAmount":"4","str":"26","vit":"26","agi":"41","int":"41","luk":"33","chm":"26","life":"238","drop":"木頭鷹卡 木頭鷹娃娃 輕戰斧 銀盾 薄荷 仙人掌 柚木","skill":"連擊、裝死、賜福、吸血、犧牲、巨木之擊、禁言","map":"史來姆迷宮3F、白雪森林"}
					,
					{"id":"55","name":"幽靈","level":"26~28","species":"幽靈","speciesDir":"敏","element":"木","skillAmount":"3","str":"29","vit":"34","agi":"40","int":"37","luk":"34","chm":"31","life":"325","drop":"幽靈卡 幽靈娃娃 鑲銀長劍 銀盔 薄荷 仙人掌 鐵絲","skill":"連擊、裝死、賜福、威脅、巨木之擊、禁言","map":"白雪森林、沉睡湖"}
					,
					{"id":"56","name":"木蜥蜴","level":"29~30","species":"蜥","speciesDir":"力","element":"木","skillAmount":"3","str":"40","vit":"43","agi":"37","int":"43","luk":"37","chm":"31","life":"405","drop":"木蜥蜴卡 木蜥蜴娃娃 厚背刀 咒法衣 白楊木 金猴毛 無根蓮","skill":"強化、連擊、裝死、賜福、威脅、轉換","map":"白雪森林、沉睡湖"}
					,
					{"id":"57","name":"派艾波","level":"39~40","species":"鳳梨","speciesDir":"體","element":"木","skillAmount":"3","str":"53","vit":"53","agi":"49","int":"49","luk":"49","chm":"49","life":"658","drop":"派艾波卡 派艾波娃娃 彎刃戰斧 犀牛皮護甲 仙人掌 棉花 體質寶石","skill":"恢復、豬頭、裝死、賜福、轉換、犧牲","map":"鳳梨山"}
					,
					{"id":"58","name":"青苔岩","level":"36~40","species":"石怪","speciesDir":"力","element":"木","skillAmount":"2","str":"55","vit":"59","agi":"43","int":"55","luk":"43","chm":"43","life":"750","drop":"青苔石卡 青苔石娃娃 銅板斧 鹿革甲 優格 紫晶原石 紅色小球","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"巴斯密洞B1"}
					,
					{"id":"59","name":"木蜘蛛","level":"41~45","species":"蜘蛛","speciesDir":"體","element":"木","skillAmount":"3","str":"58","vit":"62","agi":"54","int":"50","luk":"54","chm":"46","life":"818","drop":"木蜘蛛卡 木蜘蛛娃娃 鋼劍 銀麻衣 金沙 鬼念珠 大鹿角","skill":"連擊、裝死、威脅、轉換、吸血、亡命一擊","map":"椰子島"}
					,
					{"id":"60","name":"窩木蟲","level":"46~50","species":"蝸牛","speciesDir":"體","element":"木","skillAmount":"2","str":"71","vit":"76","agi":"56","int":"71","luk":"61","chm":"56","life":"1287","drop":"窩木蟲卡 窩木蟲娃娃 雙刃斧 貂皮手套 象牙 竹筍 紳士證","skill":"恢復、豬頭、裝死、賜福、轉換、巨木之擊、禁言","map":"哈啾島"}
					,
					{"id":"61","name":"木頭寶寶","level":"46~50","species":"阿寶","speciesDir":"力","element":"木","skillAmount":"4","str":"63","vit":"63","agi":"68","int":"68","luk":"53","chm":"53","life":"1000","drop":"木頭寶寶卡 木頭寶寶娃娃 穿甲刃 白金盔甲 牛奶 芒果 小丑徽章","skill":"連擊、裝死、吸血、犧牲、亡命一擊、巨木之擊、禁言","map":"巴斯密洞B2"}
					,
					{"id":"62","name":"抹茶麻薯","level":"51~55","species":"麻糬","speciesDir":"敏","element":"木","skillAmount":"3","str":"67","vit":"77","agi":"52","int":"77","luk":"57","chm":"72","life":"1343","drop":"抹茶麻薯卡 抹茶麻薯娃娃 白銀鋼劍 鱷皮鞋 葡萄 象牙 瑪瑙原石","skill":"連擊、裝死、賜福、犧牲、巨木之擊、禁言","map":"鬱金香島"}
					,
					{"id":"63","name":"木龍人","level":"51~55","species":"龍人","speciesDir":"力","element":"木","skillAmount":"2","str":"82","vit":"76","agi":"71","int":"65","luk":"60","chm":"60","life":"1343","drop":"木龍人卡 木龍人娃娃 長柄戰斧 女王之冠 綠光水晶 象牙 瑪瑙原石","skill":"強化、恢復、豬頭、裝死、威脅、推車","map":"巴斯密洞B3"}
					,
					{"id":"64","name":"老實牛","level":"56~60","species":"牛","speciesDir":"體","element":"木","skillAmount":"2","str":"71","vit":"101","agi":"77","int":"71","luk":"71","chm":"71","life":"2179","drop":"老實牛卡 老實牛娃娃 灰龍斧 鋼鐵鎖子甲 葡萄 沾板","skill":"強化、恢復、豬頭、裝死、犧牲、推車","map":"咕嚕島"}
					,
					{"id":"65","name":"木居蟹","level":"56~60","species":"寄居蟹","speciesDir":"體","element":"木","skillAmount":"4","str":"73","vit":"85","agi":"73","int":"85","luk":"67","chm":"67","life":"1805","drop":"木居蟹卡 木居蟹娃娃 穿甲刃 白金靴 鱉 鈦礦石 黃寶石原石","skill":"恢復、豬頭、寄生、賜福、犧牲、巨木之擊、禁言","map":"趴趴迷宮B1"}
					,
					{"id":"66","name":"木乃伊","level":"61~65","species":"骷髏","speciesDir":"力","element":"木","skillAmount":"3","str":"80","vit":"80","agi":"86","int":"98","luk":"74","chm":"62","life":"1723","drop":"木乃伊卡 木乃伊娃娃 蛇形劍 大法師之帽 鱉 鈦礦石 綠寶石原石","skill":"裝死、賜福、威脅、吸血、推車、巨木之擊、禁言","map":"趴趴迷宮B2"}
					,
					{"id":"67","name":"大眼熊","level":"61~65","species":"熊","speciesDir":"力","element":"木","skillAmount":"2","str":"74","vit":"92","agi":"80","int":"86","luk":"74","chm":"74","life":"2103","drop":"大眼熊卡 大眼熊娃娃 合金短劍 虎皮護甲 鈦礦石 葡萄 大鏡框","skill":"強化、恢復、豬頭、裝死、威脅、推車","map":"聽說島"}
					,
					{"id":"68","name":"呆頭狼","level":"66~70","species":"野狼","speciesDir":"智","element":"木","skillAmount":"2","str":"93","vit":"86","agi":"86","int":"93","luk":"80","chm":"80","life":"2047","drop":"呆頭狼卡 呆頭狼娃娃 合金雙刃戰斧 白金龍鱗甲 碧幽果 紅寶石原石","skill":"強化、連擊、裝死、威脅、吸血、推車","map":"玫瑰島"}
					,
					{"id":"69","name":"木獅","level":"66~70","species":"獅","speciesDir":"力","element":"木","skillAmount":"3","str":"100","vit":"100","agi":"100","int":"80","luk":"73","chm":"67","life":"2458","drop":"木獅卡 木獅娃娃 紫杉棒 白金靴 鈦礦石 鱉 紅寶石原石","skill":"強化、恢復、連擊、裝死、威脅、推車","map":"趴趴迷宮B3"}
					,
					{"id":"70","name":"浮木烏賊","level":"71~75","species":"烏賊","speciesDir":"敏","element":"木","skillAmount":"4","str":"106","vit":"106","agi":"106","int":"106","luk":"83","chm":"86","life":"3055","drop":"浮木烏賊卡 浮木烏賊娃娃 雙刃斧 鋼鐵鎖子甲 鱉 月葵 紅玉髓原石","skill":"強化、連擊、裝死、轉換、犧牲、巨木之擊、禁言","map":"史蓋窩克海B1"}
					,
					{"id":"71","name":"木星","level":"76~80","species":"海星","speciesDir":"體","element":"木","skillAmount":"4","str":"113","vit":"121","agi":"105","int":"113","luk":"89","chm":"89","life":"3074","drop":"木星卡 木星娃娃 柳葉刀 大祭司袍 鱉 月葵 傳說集卡冊","skill":"連擊、裝死、威脅、吸血、亡命一擊、巨木之擊、禁言","map":"史蓋窩克海B2"}
					,
					{"id":"72","name":"水蜘蛛","level":"1~3","species":"蜘蛛","speciesDir":"體","element":"水","skillAmount":"3","str":"4","vit":"4","agi":"4","int":"5","luk":"4","chm":"4","life":"55","drop":"水蜘蛛卡 水蜘蛛娃娃 小手斧 軟皮手套 雞肉 豬肉 羊肉","skill":"連擊、裝死、威脅、轉換、吸血、亡命一擊","map":"市鎮地下室、吉恩村、綠夫村、伊利村"}
					,
					{"id":"73","name":"水瓢蟲","level":"11~13","species":"瓢蟲","speciesDir":"敏","element":"水","skillAmount":"3","str":"16","vit":"15","agi":"17","int":"16","luk":"16","chm":"16","life":"106","drop":"水瓢蟲卡 水瓢蟲娃娃 輕木棍 銅盾 黃蔓葵 薄荷 仙人掌","skill":"連擊、裝死、賜福、吸血、犧牲、波之舞、冰刃術","map":"玫瑰湖"}
					,
					{"id":"74","name":"游泳猴","level":"14~15","species":"猴","speciesDir":"敏","element":"水","skillAmount":"3","str":"17","vit":"17","agi":"20","int":"22","luk":"19","chm":"20","life":"122","drop":"游泳猴卡 游泳猴娃娃 輕木棍 魚鱗甲 桃子 白楊木 帥氣鏡架","skill":"連擊、裝死、賜福、轉換、推車、亡命一擊","map":"玫瑰湖"}
					,
					{"id":"75","name":"水窩蟲","level":"16~18","species":"蝸牛","speciesDir":"體","element":"水","skillAmount":"2","str":"22","vit":"26","agi":"19","int":"24","luk":"22","chm":"20","life":"177","drop":"水窩蟲卡 水窩蟲娃娃 褐木棒 方盾 豬肉 銅礦石 水晶原石","skill":"恢復、豬頭、裝死、賜福、轉換、波之舞、冰刃術","map":"玫瑰湖、青蛙沼澤"}
					,
					{"id":"76","name":"水兔兔","level":"16~20","species":"麻糬","speciesDir":"敏","element":"水","skillAmount":"3","str":"21","vit":"23","agi":"27","int":"25","luk":"23","chm":"21","life":"205","drop":"水兔兔卡 水兔兔娃娃 戰鬥短劍 鐵盔 雞蛋 牛奶 娃娃盒","skill":"連擊、裝死、賜福、犧牲、波之舞、冰刃術","map":"米夏島"}
					,
					{"id":"77","name":"水蛙","level":"19~20","species":"蛙","speciesDir":"敏","element":"水","skillAmount":"3","str":"27","vit":"25","agi":"27","int":"27","luk":"23","chm":"23","life":"187","drop":"水蛙卡 水蛙娃娃 褐木棒 方盾 半夏 鯉魚 稻米","skill":"強化、連擊、裝死、威脅、轉換、亡命一擊","map":"玫瑰湖、青蛙沼澤"}
					,
					{"id":"78","name":"水波鼠","level":"21~23","species":"老鼠","speciesDir":"智","element":"水","skillAmount":"3","str":"28","vit":"30","agi":"30","int":"30","luk":"24","chm":"28","life":"246","drop":"水波鼠卡 水波鼠娃娃 輕戰斧 旅人手套 牛皮 草蝦 新鮮玫瑰花束","skill":"連擊、裝死、轉換、吸血、亡命一擊、波之舞、冰刃術","map":"鼠洞B3"}
					,
					{"id":"79","name":"史來姆","level":"24~25","species":"史萊姆","speciesDir":"體","element":"水","skillAmount":"2","str":"28","vit":"33","agi":"26","int":"36","luk":"31","chm":"33","life":"279","drop":"史來姆卡 史來姆娃娃 散花棒 鹿皮鞋 香蕉 草莓 求婚戒台","skill":"恢復、豬頭、裝死、賜福、波之舞、冰刃術","map":"史來姆迷宮3、鼠洞B3、史蓋窩克海"}
					,
					{"id":"80","name":"水骷髏","level":"26~28","species":"骷髏","speciesDir":"力","element":"水","skillAmount":"3","str":"34","vit":"37","agi":"34","int":"34","luk":"31","chm":"37","life":"343","drop":"水骷髏卡 水骷髏娃娃 厚背刀 皮盔 羊肉 牛肉 草蝦","skill":"裝死、賜福、威脅、吸血、推車、波之舞、冰刃術","map":"金銀湖、沉睡湖"}
					,
					{"id":"81","name":"水蛇","level":"29~30","species":"蛇","speciesDir":"智","element":"水","skillAmount":"3","str":"43","vit":"40","agi":"53","int":"47","luk":"37","chm":"27","life":"383","drop":"水蛇卡 水蛇娃娃 追風斧 貂皮衣 羊肉 牛皮 雜七集卡冊","skill":"強化、連擊、裝死、威脅、吸血、犧牲","map":"沉睡湖"}
					,
					{"id":"82","name":"加油波里","level":"29~30","species":"波里","speciesDir":"體","element":"水","skillAmount":"3","str":"40","vit":"40","agi":"43","int":"40","luk":"34","chm":"31","life":"383","drop":"加油波里卡 加油波里娃娃 柚木棍 亮銀鎖子甲 薄荷 仙人掌 棉花","skill":"裝死、賜福、威脅、轉換、吸血、亡命一擊","map":"金銀湖"}
					,
					{"id":"83","name":"浮石怪","level":"31~33","species":"石怪","speciesDir":"力","element":"水","skillAmount":"3","str":"53","vit":"53","agi":"34","int":"34","luk":"31","chm":"37","life":"548","drop":"浮石怪卡 浮石怪娃娃 薄刃長刀 硬皮帽 金剛砂 貓眼石原石 圓紙盤","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"沉睡迷宮、水晶山"}
					,
					{"id":"84","name":"禿鷹","level":"31~33","species":"老鷹","speciesDir":"敏","element":"水","skillAmount":"3","str":"34","vit":"37","agi":"34","int":"34","luk":"40","chm":"34","life":"433","drop":"禿鷹卡 禿鷹娃娃 鐵珠斧 鑲皮手套 草蝦 鹿皮 敏捷寶石","skill":"強化、連擊、裝死、威脅、吸血、亡命一擊","map":"水晶山"}
					,
					{"id":"85","name":"冰箭豬","level":"31~33","species":"箭豬","speciesDir":"體","element":"水","skillAmount":"2","str":"46","vit":"50","agi":"46","int":"43","luk":"43","chm":"36","life":"544","drop":"冰箭豬卡 冰箭豬娃娃 重木棒 箏盾 金猴毛 草蝦 雜八集卡冊","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"沉睡迷宮"}
					,
					{"id":"86","name":"水貓鷹","level":"36~40","species":"貓頭鷹","speciesDir":"智","element":"水","skillAmount":"4","str":"49","vit":"53","agi":"61","int":"65","luk":"45","chm":"45","life":"658","drop":"水貓鷹卡 水貓鷹娃娃 青霜劍 銅紋袍 香草冰淇淋 求婚戒台 紅檜","skill":"連擊、裝死、賜福、吸血、犧牲、波之舞、冰刃術","map":"龍窟B1"}
					,
					{"id":"87","name":"水鬼","level":"36~40、66~70、66~70","species":"幽靈","speciesDir":"敏","element":"水","skillAmount":"3","str":"46","vit":"50","agi":"58","int":"50","luk":"46","chm":"42","life":"633","drop":"水鬼卡 水鬼娃娃 戰鬥短劍 鑲皮長靴 藍莓 雞蛋 奇妙集卡冊","skill":"連擊、裝死、賜福、威脅、波之舞、冰刃術","map":"巴斯密洞B1、冥界洞窟B2、冥界洞窟B3"}
					,
					{"id":"88","name":"戀水蝶","level":"39~40","species":"蝴蝶","speciesDir":"敏","element":"水","skillAmount":"3","str":"49","vit":"53","agi":"61","int":"53","luk":"45","chm":"45","life":"658","drop":"戀水蝶卡 戀水蝶娃娃 長彎刀 鋼盔 牛皮 續斷 祖母綠原石","skill":"連擊、裝死、賜福、轉換、吸血、波之舞、冰刃術","map":"不知名迷宮"}
					,
					{"id":"89","name":"水蟹","level":"41~45","species":"螃蟹","speciesDir":"體","element":"水","skillAmount":"3","str":"55","vit":"73","agi":"59","int":"64","luk":"55","chm":"50","life":"1055","drop":"水蟹卡 水蟹娃娃 鋼劍 犀牛皮鞋 竹筍 紫杉 琥珀原石","skill":"強化、恢復、連擊、裝死、威脅、犧牲","map":"椰子島"}
					,
					{"id":"90","name":"積雨雲","level":"46~50","species":"雲","speciesDir":"敏","element":"水","skillAmount":"3","str":"61","vit":"66","agi":"76","int":"61","luk":"71","chm":"61","life":"1124","drop":"積雨雲卡 積雨雲娃娃 破甲鋼劍 合金靴 羊絨 犀牛皮 天青石原石","skill":"連擊、裝死、賜福、轉換、亡命一擊、波之舞、冰刃術","map":"哈啾島"}
					,
					{"id":"91","name":"冰狼","level":"46~50","species":"野狼","speciesDir":"智","element":"水","skillAmount":"3","str":"65","vit":"60","agi":"65","int":"60","luk":"51","chm":"51","life":"920","drop":"冰狼卡 冰狼娃娃 血檜棒 防身巨盾 優格 香蕉 天青石原石","skill":"強化、連擊、裝死、威脅、吸血、推車","map":"巴斯密洞B2"}
					,
					{"id":"92","name":"潛水羊","level":"51~55","species":"綿羊","speciesDir":"智","element":"水","skillAmount":"3","str":"73","vit":"68","agi":"63","int":"68","luk":"68","chm":"68","life":"1200","drop":"潛水羊卡 潛水羊娃娃 紫星棒 女王之冠 露珠兒 羊絨 香草蛋糕","skill":"豬頭、裝死、賜福、轉換、犧牲、波之舞、冰刃術","map":"鬱金香島"}
					,
					{"id":"93","name":"水靈獸","level":"51~55","species":"獨角獸","speciesDir":"智","element":"水","skillAmount":"4","str":"67","vit":"72","agi":"83","int":"78","luk":"61","chm":"67","life":"1378","drop":"水靈獸卡 水靈獸娃娃 白銀鋼劍 女王之冠 鱉 月葵 娃娃盒","skill":"恢復、連擊、裝死、賜福、推車、犧牲","map":"巴斯密洞B3"}
					,
					{"id":"94","name":"水居蟹","level":"56~60","species":"寄居蟹","speciesDir":"體","element":"水","skillAmount":"4","str":"79","vit":"91","agi":"67","int":"91","luk":"67","chm":"67","life":"1956","drop":"水居蟹卡 水居蟹娃娃 血檜棒 白金靴 淡藍水晶 葡萄 黃寶石原石","skill":"恢復、豬頭、寄生、賜福、犧牲、波之舞、冰刃術","map":"趴趴迷宮B1"}
					,
					{"id":"95","name":"呆呆熊","level":"56~60","species":"熊","speciesDir":"力","element":"水","skillAmount":"2","str":"89","vit":"83","agi":"71","int":"77","luk":"71","chm":"71","life":"1743","drop":"呆呆熊卡 呆呆熊娃娃 蛇形劍 大法師之帽 鱉 鈦礦石 黃寶石原石","skill":"強化、恢復、豬頭、裝死、犧牲、推車","map":"咕嚕島"}
					,
					{"id":"96","name":"灌水牛","level":"61~65","species":"牛","speciesDir":"體","element":"水","skillAmount":"2","str":"86","vit":"74","agi":"80","int":"92","luk":"74","chm":"74","life":"1533","drop":"灌水牛卡 灌水牛娃娃 霸王斧 虎皮護甲 鱷魚皮 金屬圓環","skill":"強化、恢復、豬頭、裝死、犧牲、推車","map":"聽說島"}
					,
					{"id":"97","name":"泡泡章魚","level":"61~65","species":"章魚","speciesDir":"敏","element":"水","skillAmount":"4","str":"85","vit":"92","agi":"98","int":"85","luk":"72","chm":"79","life":"2204","drop":"泡泡章魚卡 泡泡章魚娃娃 長柄戰斧 防身巨盾 月葵 葡萄 綠寶石原石","skill":"豬頭、裝死、賜福、轉換、亡命一擊、波之舞、冰刃術","map":"趴趴迷宮B2"}
					,
					{"id":"98","name":"冰偶","level":"66~70","species":"玩偶","speciesDir":"智","element":"水","skillAmount":"3","str":"93","vit":"93","agi":"93","int":"80","luk":"80","chm":"80","life":"2290","drop":"冰偶卡卡 冰偶娃娃娃娃 赤雲棒 黃金虎皮甲 碧幽果 鎢礦石 帥氣面罩","skill":"強化、裝死、賜福、威脅、吸血、推車","map":"玫瑰島"}
					,
					{"id":"99","name":"海馬","level":"66~70","species":"海馬","speciesDir":"敏","element":"水","skillAmount":"4","str":"93","vit":"86","agi":"93","int":"100","luk":"73","chm":"76","life":"2047","drop":"海馬卡 海馬娃娃 破甲鋼劍 硬皮戎裝 月葵 葡萄 紅寶石原石","skill":"強化、連擊、威脅、轉換、吸血、波之舞、冰刃術","map":"趴趴迷宮B3"}
					,
					{"id":"100","name":"布魯鯨","level":"71~75","species":"鯨","speciesDir":"力","element":"水","skillAmount":"4","str":"110","vit":"110","agi":"95","int":"103","luk":"74","chm":"44","life":"3070","drop":"布魯鯨卡 布魯鯨娃娃 紫星棒 合金盾 月葵 葡萄 彩帶 藍寶石原石","skill":"強化、連擊、威脅、吸血、犧牲、波之舞、冰刃術","map":"史蓋窩克海B1"}
					,
					{"id":"101","name":"水精靈","level":"76~80","species":"精靈","speciesDir":"智","element":"水","skillAmount":"4","str":"91","vit":"105","agi":"129","int":"121","luk":"80","chm":"98","life":"3103","drop":"水精靈卡 水精靈娃娃 圓月彎刀 大法師之帽 月葵 葡萄 釘扣","skill":"強化、豬頭、裝死、賜福、亡命一擊、波之舞、冰刃術","map":"史蓋窩克海B2"}
					,
					{"id":"102","name":"紅瓢蟲","level":"1~3","species":"瓢蟲","speciesDir":"敏","element":"火","skillAmount":"3","str":"3","vit":"4","agi":"6","int":"5","luk":"5","chm":"4","life":"55","drop":"紅瓢蟲卡 紅瓢蟲娃娃 藤棍 木盾 生薑 黃蔓葵 紅色染料","skill":"連擊、裝死、賜福、吸血、犧牲、軟化護甲、火彈術","map":"市鎮地下室、吉恩村、綠夫村、伊利村"}
					,
					{"id":"103","name":"大紅蝶","level":"4~5、7~10、7~10","species":"蝴蝶","speciesDir":"敏","element":"火","skillAmount":"3","str":"5","vit":"6","agi":"9","int":"5","luk":"8","chm":"8","life":"56","drop":"大紅蝶卡 大紅蝶娃娃 新手屠刀 工作帽 生薑 豬肉 羊毛","skill":"連擊、裝死、賜福、轉換、吸血、軟化護甲、火彈術","map":"微笑森林、巴斯拉空域、巴格達空域"}
					,
					{"id":"104","name":"火焰羊","level":"6~8","species":"綿羊","speciesDir":"智","element":"火","skillAmount":"3","str":"10","vit":"11","agi":"10","int":"10","luk":"10","chm":"11","life":"74","drop":"火焰羊卡 火焰羊娃娃 短刀 小圓盾 生薑 半夏 羊毛","skill":"豬頭、裝死、賜福、轉換、犧牲、軟化護甲、火彈術","map":"微笑森林"}
					,
					{"id":"105","name":"火捲蟲","level":"9~10","species":"蝸牛","speciesDir":"體","element":"火","skillAmount":"2","str":"14","vit":"16","agi":"13","int":"13","luk":"13","chm":"11","life":"89","drop":"火捲蟲卡 火捲蟲娃娃 青銅闊劍 青銅手套 煤 半夏 銅礦石","skill":"恢復、豬頭、裝死、賜福、轉換、軟化護甲、火彈術","map":"微笑森林"}
					,
					{"id":"106","name":"紅牛","level":"10~12","species":"牛","speciesDir":"體","element":"火","skillAmount":"2","str":"16","vit":"16","agi":"16","int":"15","luk":"14","chm":"14","life":"102","drop":"紅牛卡 紅牛娃娃 青銅闊劍 皮甲 老薑 黃蔓葵 附貝子","skill":"強化、恢復、豬頭、裝死、推車、犧牲","map":"南綠野、彩虹城外"}
					,
					{"id":"107","name":"火焰鼠","level":"11~13","species":"老鼠","speciesDir":"智","element":"火","skillAmount":"3","str":"16","vit":"16","agi":"17","int":"17","luk":"17","chm":"14","life":"109","drop":"火焰鼠卡 火焰鼠娃娃 單刀 僧侶袍 豬肉 銅礦石 紅羽毛","skill":"連擊、裝死、轉換、吸血、亡命一擊、軟化護甲、火彈術","map":"鼠洞1F、木偶山"}
					,
					{"id":"108","name":"火焰史來姆","level":"11~13","species":"史萊姆","speciesDir":"體","element":"火","skillAmount":"2","str":"16","vit":"17","agi":"14","int":"17","luk":"19","chm":"16","life":"89","drop":"火焰史來姆卡 火焰史來姆娃娃 精銅短劍 硬皮鞋 桃子 附貝子 金猴毛","skill":"恢復、豬頭、裝死、賜福、軟化護甲、火彈術","map":"史來姆迷宮1"}
					,
					{"id":"109","name":"火旺","level":"11~15","species":"狗","speciesDir":"體","element":"火","skillAmount":"2","str":"19","vit":"16","agi":"17","int":"15","luk":"15","chm":"15","life":"131","drop":"火旺卡 火旺娃娃 青銅劍 皮甲 麵粉 草莓 紫晶原石","skill":"豬頭、裝死、威脅、推車、犧牲、軟化護甲、火彈術","map":"尼克草原"}
					,
					{"id":"110","name":"火螃蟹","level":"13~15","species":"螃蟹","speciesDir":"體","element":"火","skillAmount":"3","str":"20","vit":"22","agi":"17","int":"17","luk":"19","chm":"19","life":"134","drop":"火螃蟹卡 火螃蟹娃娃 單刀 尖長帽 桃子 羊毛 牛皮","skill":"強化、恢復、連擊、裝死、威脅、犧牲","map":"南綠野、彩虹城外"}
					,
					{"id":"111","name":"紅木偶","level":"14~15","species":"玩偶","speciesDir":"智","element":"火","skillAmount":"3","str":"20","vit":"19","agi":"19","int":"20","luk":"17","chm":"19","life":"126","drop":"紅木偶卡 紅木偶娃娃 精銅短劍 硬皮鞋 半夏 羊肉 牛皮","skill":"強化、裝死、賜福、威脅、吸血、推車","map":"木偶山"}
					,
					{"id":"112","name":"火熊","level":"21~23","species":"熊","speciesDir":"力","element":"火","skillAmount":"2","str":"28","vit":"30","agi":"30","int":"30","luk":"24","chm":"28","life":"246","drop":"火熊卡 火熊娃娃 散花棒 銀盾 薄荷 牛肉 羌子肉","skill":"強化、恢復、豬頭、裝死、威脅、推車","map":"白雪森林"}
					,
					{"id":"113","name":"火焰飛馬","level":"24~25","species":"飛馬","speciesDir":"敏","element":"火","skillAmount":"4","str":"31","vit":"31","agi":"41","int":"36","luk":"28","chm":"33","life":"265","drop":"火焰飛馬卡 火焰飛馬娃娃 鐵長劍 梅花甲 附貝子 稻米 續斷","skill":"連擊、裝死、賜福、推車、亡命一擊、軟化護甲、火彈術","map":"白雪森林"}
					,
					{"id":"114","name":"火猴","level":"26~28","species":"猴","speciesDir":"敏","element":"火","skillAmount":"3","str":"43","vit":"31","agi":"37","int":"39","luk":"29","chm":"29","life":"307","drop":"火猴卡 火猴娃娃 追風斧 鐵手套 羊毛 稻米 柚木","skill":"連擊、裝死、賜福、轉換、推車、亡命一擊","map":"白雪森林"}
					,
					{"id":"115","name":"火光蛇","level":"26~30","species":"蛇","speciesDir":"智","element":"火","skillAmount":"3","str":"49","vit":"40","agi":"43","int":"40","luk":"34","chm":"37","life":"待測試","drop":"火光蛇卡 火光蛇娃娃 厚背刀 咒法衣 鯉魚 金猴毛 續斷","skill":"強化、連擊、裝死、威脅、吸血、犧牲","map":"青鳥城迷宮B2"}
					,
					{"id":"116","name":"火蜘蛛","level":"29~30","species":"蜘蛛","speciesDir":"體","element":"火","skillAmount":"3","str":"37","vit":"40","agi":"40","int":"40","luk":"37","chm":"31","life":"383","drop":"火蜘蛛卡 火蜘蛛娃娃 鑲銀長劍 薄鐵靴 鯉魚 金剛砂 舒適頭墊","skill":"連擊、裝死、威脅、轉換、吸血、亡命一擊","map":"白雪森林"}
					,
					{"id":"117","name":"血骷髏","level":"31~33、66~70","species":"骷髏","speciesDir":"力","element":"火","skillAmount":"3","str":"43","vit":"40","agi":"40","int":"43","luk":"40","chm":"37","life":"433","drop":"血骷髏卡 血骷髏娃娃 重木棒 箏盾 牛皮 羌子肉 鹿肉","skill":"裝死、賜福、威脅、吸血、推車、軟化護甲、火彈術","map":"沉睡村、冥界洞窟B2"}
					,
					{"id":"118","name":"火幽靈","level":"34~35、66~70","species":"幽靈","speciesDir":"敏","element":"火","skillAmount":"3","str":"36","vit":"43","agi":"50","int":"46","luk":"43","chm":"43","life":"476","drop":"火幽靈卡 火幽靈娃娃 銀劍 貂皮鞋 羌子肉 亞麻 攻擊寶石","skill":"連擊、裝死、賜福、威脅、軟化護甲、火彈術","map":"沉睡村、冥界洞窟B3"}
					,
					{"id":"119","name":"火艾波","level":"36~38","species":"鳳梨","speciesDir":"體","element":"火","skillAmount":"3","str":"50","vit":"54","agi":"46","int":"46","luk":"42","chm":"46","life":"646","drop":"火艾波卡 火艾波娃娃 長彎刀 鹿皮帽 稻米 求婚戒台 鹿茸","skill":"恢復、豬頭、裝死、賜福、轉換、犧牲","map":"鳳梨山"}
					,
					{"id":"120","name":"暴龍人","level":"36~40","species":"龍人","speciesDir":"力","element":"火","skillAmount":"2","str":"65","vit":"61","agi":"57","int":"49","luk":"45","chm":"45","life":"757","drop":"暴龍人卡 暴龍人娃娃 長彎刀 犀牛皮護甲 稻米 草蝦 鹿茸","skill":"強化、恢復、豬頭、裝死、威脅、推車","map":"龍窟B2"}
					,
					{"id":"121","name":"激戰蜥蝪","level":"36~40","species":"蜥","speciesDir":"力","element":"火","skillAmount":"3","str":"53","vit":"53","agi":"53","int":"61","luk":"45","chm":"45","life":"705","drop":"激戰蜥蜴卡 激戰蜥蜴娃娃 褐木棒 赤銅鎧甲 雞蛋 草莓 娃娃盒","skill":"強化、連擊、裝死、賜福、威脅、轉換","map":"巴斯密洞B1"}
					,
					{"id":"122","name":"火焰之狼","level":"39~40","species":"野狼","speciesDir":"智","element":"火","skillAmount":"3","str":"53","vit":"49","agi":"57","int":"53","luk":"41","chm":"49","life":"608","drop":"火焰之狼卡 火焰之狼娃娃 紅檜棒 黃金盔甲 金猴毛 紅檜 力量寶石","skill":"強化、連擊、裝死、威脅、吸血、推車","map":"大野狼洞窟"}
					,
					{"id":"123","name":"熱虎","level":"39~40","species":"虎","speciesDir":"力","element":"火","skillAmount":"3","str":"61","vit":"53","agi":"57","int":"57","luk":"45","chm":"45","life":"658","drop":"熱虎卡 熱虎娃娃 紅檜棒 防禦手套 金猴毛 小麥 紅檜","skill":"強化、恢復、連擊、裝死、威脅、推車","map":"不知名迷宮"}
					,
					{"id":"124","name":"阿波羅獅","level":"41~45","species":"獅","speciesDir":"力","element":"火","skillAmount":"3","str":"59","vit":"55","agi":"59","int":"57","luk":"45","chm":"45","life":"812","drop":"阿波羅獅卡 阿波羅獅娃娃 鋼斧 粗皮方帽 鬼念珠 金沙 大熱狗","skill":"強化、恢復、連擊、裝死、威脅、推車","map":"椰子島"}
					,
					{"id":"125","name":"熱血波里","level":"46~50","species":"波里","speciesDir":"體","element":"火","skillAmount":"3","str":"71","vit":"76","agi":"61","int":"66","luk":"61","chm":"61","life":"1287","drop":"熱血波里卡 熱血波里娃娃 紫杉棒 天絨袍 竹筍 羊絨 娃娃盒","skill":"裝死、賜福、威脅、轉換、吸血、亡命一擊","map":"哈啾島"}
					,
					{"id":"126","name":"暴力蛙","level":"46~50","species":"蛙","speciesDir":"敏","element":"火","skillAmount":"3","str":"待測試","vit":"待測試","agi":"待測試","int":"待測試","luk":"待測試","chm":"待測試","life":"待測試","drop":"暴力蛙卡 暴力蛙娃娃 雙刃斧 貂皮手套 麵粉 牛奶 天青石原石","skill":"強化、連擊、裝死、威脅、轉換、亡命一擊","map":"巴斯密洞B2"}
					,
					{"id":"127","name":"熾烈鷹","level":"51~55","species":"老鷹","speciesDir":"敏","element":"火","skillAmount":"3","str":"83","vit":"78","agi":"78","int":"67","luk":"67","chm":"61","life":"1503","drop":"熾烈鷹卡 熾烈鷹娃娃 白銀鋼劍 神祕法袍 葡萄 象牙 雜八集卡冊","skill":"強化、連擊、裝死、威脅、吸血、亡命一擊","map":"鬱金香島"}
					,
					{"id":"128","name":"火蚌殼","level":"51~55","species":"蚌類","speciesDir":"體","element":"火","skillAmount":"4","str":"68","vit":"79","agi":"58","int":"63","luk":"68","chm":"58","life":"1401","drop":"火蚌殼卡 火蚌殼娃娃 紫星棒 鱷皮鞋 鐵杉 葡萄 雜七集卡冊","skill":"恢復、轉換、賜福、吸血、亡命一擊、軟化護甲、火彈術","map":"巴斯密洞B3"}
					,
					{"id":"129","name":"火箭豬","level":"56~60","species":"箭豬","speciesDir":"體","element":"火","skillAmount":"2","str":"91","vit":"67","agi":"79","int":"91","luk":"73","chm":"73","life":"1355","drop":"火箭豬卡 火箭豬娃娃 破甲棒 大祭司袍 鱉 破除結界的鏡子 傳說集卡冊","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"咕嚕島"}
					,
					{"id":"130","name":"紅豆麻薯","level":"56~60","species":"麻糬","speciesDir":"敏","element":"火","skillAmount":"3","str":"73","vit":"73","agi":"79","int":"73","luk":"62","chm":"68","life":"1406","drop":"紅豆麻薯卡 紅豆麻薯娃娃 雙刃斧 硬皮戎裝 火焰水晶 鱉 安全套環","skill":"連擊、裝死、賜福、犧牲、軟化護甲、火彈術","map":"趴趴迷宮B1"}
					,
					{"id":"131","name":"路比","level":"61~65","species":"阿寶","speciesDir":"力","element":"火","skillAmount":"4","str":"92","vit":"92","agi":"85","int":"98","luk":"72","chm":"72","life":"2169","drop":"路比卡 路比娃娃 柳葉刀 合金手套 鈦礦石 鱉 綠寶石原石","skill":"連擊、裝死、吸血、犧牲、亡命一擊、軟化護甲、火彈術","map":"趴趴迷宮B2"}
					,
					{"id":"132","name":"炙石怪","level":"61~65","species":"石怪","speciesDir":"力","element":"火","skillAmount":"2","str":"86","vit":"86","agi":"80","int":"86","luk":"68","chm":"74","life":"1913","drop":"炙石怪卡 炙石怪娃娃 快斬武士刀 白金盾 鱉 破除結界的鏡子 綠寶石原石","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"聽說島"}
					,
					{"id":"133","name":"焰層雲","level":"66~70","species":"雲","speciesDir":"敏","element":"火","skillAmount":"3","str":"92","vit":"92","agi":"106","int":"92","luk":"85","chm":"85","life":"2320","drop":"焰層雲卡 焰層雲娃娃 合金雙刃戰斧 鈦鋼靴 鎢礦石 蠶繭 奇妙集卡冊","skill":"連擊、裝死、賜福、轉換、亡命一擊、軟化護甲、火彈術","map":"玫瑰島"}
					,
					{"id":"134","name":"火爆小賊","level":"66~70","species":"烏賊","speciesDir":"敏","element":"火","skillAmount":"4","str":"92","vit":"99","agi":"106","int":"99","luk":"71","chm":"85","life":"2610","drop":"火爆小賊卡 火爆小賊娃娃 穿甲刃 鋼鐵鎖子甲 葡萄 犀角 紅寶石原石","skill":"強化、連擊、裝死、轉換、犧牲、軟化護甲、火彈術","map":"趴趴迷宮B3"}
					,
					{"id":"135","name":"燒烤寄居蟹","level":"71~75","species":"寄居蟹","speciesDir":"體","element":"火","skillAmount":"4","str":"93","vit":"107","agi":"86","int":"107","luk":"86","chm":"79","life":"3007","drop":"燒烤寄居蟹卡 燒烤寄居蟹娃娃 穿甲刃 硬皮戎裝 鈦礦石 鱉 十字徽章","skill":"恢復、豬頭、寄生、賜福、犧牲、軟化護甲、火彈術","map":"史蓋窩克海B1"}
					,
					{"id":"136","name":"章魚燒","level":"76~80","species":"章魚","speciesDir":"敏","element":"火","skillAmount":"4","str":"115","vit":"107","agi":"107","int":"99","luk":"84","chm":"84","life":"3089","drop":"章魚燒卡 章魚燒娃娃 蛇形劍 白金靴 鈦礦石 鱉 奇妙集卡冊","skill":"豬頭、裝死、賜福、轉換、亡命一擊、軟化護甲、火彈術","map":"史蓋窩克海B2"}
					,
					{"id":"137","name":"土來姆","level":"1~3","species":"史萊姆","speciesDir":"體","element":"土","skillAmount":"2","str":"4","vit":"4","agi":"3","int":"5","luk":"5","chm":"4","life":"55","drop":"土來姆卡 土來姆娃娃 青銅劍 青銅盔 雜魚 青銅礦 鯉魚","skill":"恢復、豬頭、裝死、賜福、再生術、落石術","map":"市鎮地下室、吉恩村、綠夫村、伊利村"}
					,
					{"id":"138","name":"箭豬","level":"4~5","species":"箭豬","speciesDir":"體","element":"土","skillAmount":"2","str":"9","vit":"8","agi":"7","int":"5","luk":"7","chm":"5","life":"61","drop":"箭豬卡 箭豬娃娃 藤棍 青銅胸甲 雜魚 青銅礦 厚橡皮","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"北綠野"}
					,
					{"id":"139","name":"黃褐蝶","level":"6~7、7~10、7~10","species":"蝴蝶","speciesDir":"敏","element":"土","skillAmount":"2","str":"9","vit":"8","agi":"12","int":"8","luk":"9","chm":"9","life":"63","drop":"黃褐蝶卡 黃褐蝶娃娃 木斧 圓盔 老薑 半夏 薄荷","skill":"連擊、裝死、賜福、轉換、吸血、再生術、落石術","map":"北綠野、巴斯拉空域、巴格達空域"}
					,
					{"id":"140","name":"褐土獅","level":"8~9","species":"獅","speciesDir":"力","element":"土","skillAmount":"3","str":"15","vit":"13","agi":"13","int":"10","luk":"10","chm":"12","life":"82","drop":"褐土獅卡 褐土獅娃娃 青銅闊劍 皮甲 雞肉 青銅礦 羊肉","skill":"強化、恢復、連擊、裝死、威脅、推車","map":"北綠野"}
					,
					{"id":"141","name":"土蛇","level":"10~12","species":"蛇","speciesDir":"智","element":"土","skillAmount":"3","str":"16","vit":"16","agi":"16","int":"15","luk":"14","chm":"14","life":"102","drop":"土蛇卡 土蛇娃娃 木斧 銅頭靴 雜魚 豬肉 鯉魚","skill":"強化、連擊、裝死、威脅、吸血、犧牲","map":"金銀城外、鼠洞1F"}
					,
					{"id":"142","name":"土波里","level":"11~12","species":"波里","speciesDir":"體","element":"土","skillAmount":"3","str":"13","vit":"16","agi":"13","int":"16","luk":"16","chm":"16","life":"102","drop":"土波里卡 土波里娃娃 精銅短劍 銅盔 青銅礦 鯉魚 娃娃盒","skill":"裝死、賜福、威脅、轉換、吸血、亡命一擊","map":"南綠野"}
					,
					{"id":"143","name":"土鷹","level":"13~15","species":"老鷹","speciesDir":"敏","element":"土","skillAmount":"3","str":"20","vit":"20","agi":"22","int":"20","luk":"16","chm":"16","life":"130","drop":"土鷹卡 土鷹娃娃 手斧 硬皮甲 豬肉 羊肉 水晶原石","skill":"強化、連擊、裝死、威脅、吸血、亡命一擊","map":"南綠野"}
					,
					{"id":"144","name":"土窩蟲","level":"13~15","species":"蝸牛","speciesDir":"體","element":"土","skillAmount":"2","str":"19","vit":"22","agi":"16","int":"20","luk":"20","chm":"16","life":"134","drop":"土窩蟲卡 土窩蟲娃娃 輕木棍 魚鱗甲 藤條 鯉魚 金剛砂","skill":"恢復、豬頭、裝死、賜福、轉換、再生術、落石術","map":"金銀城外、鼠洞B1"}
					,
					{"id":"145","name":"土撥鼠","level":"16~18","species":"老鼠","speciesDir":"智","element":"土","skillAmount":"3","str":"22","vit":"20","agi":"24","int":"24","luk":"22","chm":"22","life":"157","drop":"土撥鼠卡 土撥鼠娃娃 長刀 厚布帽 藤條 附貝子 金猴毛","skill":"連擊、裝死、轉換、吸血、亡命一擊、再生術、落石術","map":"金銀城外、鼠洞B2"}
					,
					{"id":"146","name":"土山羊","level":"16~18","species":"綿羊","speciesDir":"智","element":"土","skillAmount":"3","str":"22","vit":"24","agi":"22","int":"20","luk":"24","chm":"24","life":"168","drop":"土山羊卡 土山羊娃娃 戰鬥短劍 鐵盔 半夏 羊毛 仙人掌","skill":"豬頭、裝死、賜福、轉換、犧牲、再生術、落石術","map":"矮人山"}
					,
					{"id":"147","name":"岩石怪","level":"19~20","species":"石怪","speciesDir":"力","element":"土","skillAmount":"2","str":"35","vit":"29","agi":"19","int":"21","luk":"25","chm":"23","life":"202","drop":"岩石怪卡 岩石怪娃娃 長刀 厚布帽 青銅礦 銅礦石 雜八集卡冊","skill":"強化、恢復、豬頭、裝死、威脅、亡命一擊","map":"金銀城外"}
					,
					{"id":"148","name":"黃牛","level":"19~20","species":"牛","speciesDir":"體","element":"土","skillAmount":"2","str":"33","vit":"33","agi":"19","int":"19","luk":"23","chm":"25","life":"217","drop":"黃牛卡 黃牛娃娃 戰鬥短劍 鐵盔 黃蔓葵 羊毛 牛肉","skill":"強化、恢復、豬頭、裝死、推車、犧牲","map":"矮人山"}
					,
					{"id":"149","name":"挖土蜘蛛","level":"21~23","species":"蜘蛛","speciesDir":"體","element":"土","skillAmount":"3","str":"28","vit":"28","agi":"33","int":"33","luk":"26","chm":"24","life":"235","drop":"挖土蜘蛛卡 挖土蜘蛛娃娃 鐵長劍 鐵面具 銅礦石 金剛砂 特製彈簧","skill":"連擊、裝死、威脅、轉換、吸血、亡命一擊","map":"秘密平原"}
					,
					{"id":"150","name":"惡虎","level":"24~25","species":"虎","speciesDir":"力","element":"土","skillAmount":"3","str":"36","vit":"38","agi":"33","int":"26","luk":"26","chm":"31","life":"306","drop":"惡虎卡 惡虎娃娃 彎刀 旅人手套 羊肉 牛皮 草蝦","skill":"強化、恢復、連擊、裝死、威脅、推車","map":"秘密平原"}
					,
					{"id":"151","name":"土猴子","level":"26~30","species":"猴","speciesDir":"敏","element":"土","skillAmount":"3","str":"37","vit":"37","agi":"43","int":"43","luk":"46","chm":"37","life":"待測試","drop":"土猴子卡 土猴子娃娃 追風斧 鐵手套 羊肉 稻米 草蝦","skill":"連擊、裝死、賜福、轉換、推車、亡命一擊","map":"青鳥城迷宮B2、彩虹城迷宮B2、金銀城迷宮B2"}
					,
					{"id":"152","name":"熊","level":"31~33","species":"熊","speciesDir":"力","element":"土","skillAmount":"2","str":"53","vit":"53","agi":"34","int":"34","luk":"37","chm":"37","life":"548","drop":"熊卡 熊娃娃 銀劍 角盔 柚木 蜂蜜 幸運寶石","skill":"強化、恢復、豬頭、裝死、威脅、推車","map":"沉睡村"}
					,
					{"id":"153","name":"土骷髏","level":"31~33","species":"骷髏","speciesDir":"力","element":"土","skillAmount":"3","str":"43","vit":"46","agi":"43","int":"50","luk":"43","chm":"39","life":"510","drop":"土骷髏卡 土骷髏娃娃 鐵珠斧 鑲皮手套 仙人掌 鐵礦石 鹿皮","skill":"裝死、賜福、威脅、吸血、推車、再生術、落石術","map":"沉睡村、冥界洞窟"}
					,
					{"id":"154","name":"土狼","level":"36~38","species":"野狼","speciesDir":"智","element":"土","skillAmount":"3","str":"50","vit":"50","agi":"54","int":"50","luk":"39","chm":"42","life":"603","drop":"土狼卡 土狼娃娃 青霜劍 鋼盔 金猴毛 柚木 紅檜","skill":"強化、連擊、裝死、威脅、吸血、推車","map":"糖果山、鳳梨山、大野狼洞窟"}
					,
					{"id":"155","name":"泥土獸","level":"36~40","species":"阿寶","speciesDir":"力","element":"土","skillAmount":"4","str":"57","vit":"57","agi":"57","int":"53","luk":"45","chm":"45","life":"707","drop":"泥土獸卡 泥土獸娃娃 彎刃戰斧 黃金盔甲 水晶原石 鐵礦石 雜七集卡冊","skill":"連擊、裝死、吸血、犧牲、亡命一擊、再生術、落石術","map":"龍窟B2"}
					,
					{"id":"156","name":"攀岩雪怪","level":"36~40","species":"雪怪","speciesDir":"體","element":"土","skillAmount":"2","str":"55","vit":"51","agi":"47","int":"40","luk":"40","chm":"44","life":"614","drop":"攀岩雪怪卡 攀岩雪怪娃娃 銅板斧 銅手套 麵粉 鳳梨 水晶原石","skill":"豬頭、裝死、威脅、推車、犧牲","map":"巴斯密洞B1"}
					,
					{"id":"157","name":"半龍人","level":"39~40","species":"龍人","speciesDir":"力","element":"土","skillAmount":"2","str":"61","vit":"57","agi":"53","int":"53","luk":"45","chm":"49","life":"707","drop":"半龍人卡 半龍人娃娃 長彎刀 銅紋袍 牛皮 續斷 祖母綠原石","skill":"強化、恢復、豬頭、裝死、威脅、推車","map":"糖果山"}
					,
					{"id":"158","name":"土狗","level":"39~40","species":"狗","speciesDir":"體","element":"土","skillAmount":"2","str":"61","vit":"57","agi":"61","int":"53","luk":"45","chm":"45","life":"707","drop":"土狗卡 土狗娃娃 青霜劍 塔形盾 稻米 草蝦 鹿茸","skill":"豬頭、裝死、威脅、推車、犧牲、再生術、落石術","map":"不知名迷宮"}
					,
					{"id":"159","name":"土瓢蟲","level":"41~45","species":"瓢蟲","speciesDir":"敏","element":"土","skillAmount":"3","str":"58","vit":"45","agi":"67","int":"62","luk":"58","chm":"58","life":"664","drop":"土瓢蟲卡 土瓢蟲娃娃 鋼劍 銀麻衣 紫杉 竹筍 雜七集卡冊","skill":"連擊、裝死、賜福、吸血、犧牲、再生術、落石術","map":"椰子島"}
					,
					{"id":"160","name":"地縛靈","level":"46~50、66~70","species":"幽靈","speciesDir":"敏","element":"土","skillAmount":"3","str":"51","vit":"66","agi":"76","int":"71","luk":"66","chm":"66","life":"1124","drop":"地縛靈卡 地縛靈娃娃 雙刃斧 天絨袍 犀牛皮 黃魚 舌頭","skill":"連擊、裝死、賜福、威脅、再生術、落石術","map":"哈啾島、冥界洞窟B2"}
					,
					{"id":"161","name":"土貓鷹","level":"46~50","species":"貓頭鷹","speciesDir":"敏","element":"土","skillAmount":"4","str":"53","vit":"58","agi":"73","int":"73","luk":"58","chm":"53","life":"935","drop":"土貓鷹卡 土貓鷹娃娃 紫杉棒 防身巨盾 雞蛋 巧克力 天青石原石","skill":"連擊、裝死、賜福、吸血、犧牲、再生術、落石術","map":"巴斯密洞B2"}
					,
					{"id":"162","name":"厄斯飛馬","level":"51~55","species":"飛馬","speciesDir":"敏","element":"土","skillAmount":"4","str":"65","vit":"71","agi":"82","int":"76","luk":"55","chm":"65","life":"1325","drop":"厄斯飛馬卡 厄斯飛馬娃娃 蛇形劍 重型鎧甲 土質水晶 犀牛皮 花盆","skill":"連擊、裝死、賜福、推車、亡命一擊、再生術、落石術","map":"巴斯密洞B3"}
					,
					{"id":"163","name":"土炸彈","level":"51~55","species":"鳳梨","speciesDir":"體","element":"土","skillAmount":"3","str":"78","vit":"67","agi":"72","int":"78","luk":"72","chm":"67","life":"1253","drop":"土炸彈卡 土炸彈娃娃 長柄戰斧 鱷皮手套 葡萄 瑪瑙原石","skill":"恢復、豬頭、裝死、賜福、轉換、犧牲","map":"鬱金香島"}
					,
					{"id":"164","name":"捲土雲","level":"56~60","species":"雲","speciesDir":"敏","element":"土","skillAmount":"3","str":"73","vit":"79","agi":"91","int":"85","luk":"73","chm":"73","life":"1635","drop":"捲土雲卡 捲土雲娃娃 破甲棒 合金盾 鈦礦石 月葵 黃寶石原石","skill":"連擊、裝死、賜福、轉換、亡命一擊、再生術、落石術","map":"咕嚕島"}
					,
					{"id":"165","name":"泥土蛙","level":"56~60","species":"蛙","speciesDir":"敏","element":"土","skillAmount":"3","str":"79","vit":"73","agi":"79","int":"73","luk":"62","chm":"62","life":"1426","drop":"泥土蛙卡 泥土蛙娃娃 紫杉棒 大祭司袍 鱉 月葵 雜八集卡冊","skill":"強化、連擊、裝死、威脅、轉換、亡命一擊","map":"趴趴迷宮B1"}
					,
					{"id":"166","name":"花生麻薯","level":"61~65","species":"麻糬","speciesDir":"敏","element":"土","skillAmount":"3","str":"80","vit":"80","agi":"92","int":"92","luk":"68","chm":"70","life":"1723","drop":"花生麻薯卡 花生麻薯娃娃 灰龍斧 合金盾 月葵 藍寶石原石 茶壺","skill":"連擊、裝死、賜福、犧牲、再生術、落石術","map":"趴趴迷宮B2"}
					,
					{"id":"167","name":"泥娃娃","level":"61~65","species":"玩偶","speciesDir":"智","element":"土","skillAmount":"3","str":"86","vit":"74","agi":"86","int":"86","luk":"74","chm":"74","life":"1533","drop":"泥娃娃卡 泥娃娃娃娃 快斬武士刀 虎威帽 鱷魚皮 葡萄 娃娃盒","skill":"強化、裝死、賜福、威脅、吸血、推車","map":"聽說島"}
					,
					{"id":"168","name":"黏土蟹","level":"66~70","species":"螃蟹","speciesDir":"體","element":"土","skillAmount":"3","str":"86","vit":"100","agi":"86","int":"93","luk":"73","chm":"80","life":"2532","drop":"黏土蟹卡 黏土蟹娃娃 赤雲棒 白金龍鱗甲 紅豆杉 通天草 紅寶石原石","skill":"強化、恢復、連擊、裝死、威脅、犧牲","map":"玫瑰島"}
					,
					{"id":"169","name":"土居蟹","level":"66~70","species":"寄居蟹","speciesDir":"體","element":"土","skillAmount":"4","str":"99","vit":"106","agi":"78","int":"113","luk":"71","chm":"85","life":"2900","drop":"土居蟹卡 土居蟹娃娃 白銀鋼劍 虎牙戰盔 鱉 月葵 紅寶石原石","skill":"恢復、豬頭、寄生、賜福、犧牲、再生術、落石術","map":"趴趴迷宮B3"}
					,
					{"id":"170","name":"土星","level":"71~75","species":"海星","speciesDir":"體","element":"土","skillAmount":"4","str":"106","vit":"106","agi":"91","int":"91","luk":"121","chm":"83","life":"3055","drop":"土星卡 土星娃娃 血檜棒 白金靴 葡萄 犀角 紅玉髓原石","skill":"連擊、裝死、威脅、吸血、亡命一擊、再生術、落石術","map":"史蓋窩克海B1"}

				],
               },
			
})
		   
