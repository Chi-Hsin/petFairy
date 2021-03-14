var speciesData = new Vue({
            data: {
				allSpecies:[
					{"ID":1,"type":"蝸牛","magic":1},
					{"ID":2,"type":"老鼠","magic":1},
					{"ID":3,"type":"蜘蛛","magic":0},
					{"ID":4,"type":"野狼","magic":0},
					{"ID":5,"type":"鳳梨","magic":0},
					{"ID":6,"type":"箭豬","magic":0},
					{"ID":7,"type":"史萊姆","magic":1},
					{"ID":8,"type":"波里","magic":0},
					{"ID":9,"type":"幽靈","magic":1},
					{"ID":10,"type":"蝴蝶","magic":1},
					{"ID":11,"type":"綿羊","magic":1},
					{"ID":12,"type":"海馬","magic":1},
					{"ID":13,"type":"石怪","magic":0},
					{"ID":14,"type":"蛇","magic":0},
					{"ID":15,"type":"螃蟹","magic":0},
					{"ID":16,"type":"阿寶","magic":1},
					{"ID":17,"type":"蛙","magic":0},
					{"ID":18,"type":"雲","magic":1},
					{"ID":19,"type":"蜥","magic":0},
					{"ID":20,"type":"猴","magic":0},
					{"ID":21,"type":"玩偶","magic":0},
					{"ID":22,"type":"龍人","magic":0},
					{"ID":23,"type":"骷髏","magic":1},
					{"ID":24,"type":"老鷹","magic":0},
					{"ID":25,"type":"虎","magic":0},
					{"ID":26,"type":"瓢蟲","magic":1},
					{"ID":27,"type":"熊","magic":0},
					{"ID":28,"type":"牛","magic":0},
					{"ID":29,"type":"海星","magic":1},
					{"ID":30,"type":"貓頭鷹","magic":1},
					{"ID":31,"type":"飛馬","magic":1},
					{"ID":32,"type":"雪怪","magic":0},
					{"ID":33,"type":"寄居蟹","magic":1},
					{"ID":34,"type":"獨角獸","magic":0},
					{"ID":35,"type":"狗","magic":1},
					{"ID":36,"type":"蚌類","magic":1},
					{"ID":37,"type":"燈籠魚","magic":1},
					{"ID":38,"type":"麻糬","magic":1},
					{"ID":39,"type":"烏賊","magic":1},
					{"ID":40,"type":"章魚","magic":1},
					{"ID":41,"type":"鯨","magic":1},
					{"ID":42,"type":"精靈","magic":1},
					{"ID":43,"type":"獅","magic":0},
					{"ID":44,"type":"龜","magic":1},
					{"ID":45,"type":"喵喵","magic":1},
					{"ID":46,"type":"雷爵獸","magic":1},
					{"ID":47,"type":"鳳凰鳥","magic":1},
					{"ID":48,"type":"卡拉龍","magic":1},
					{"ID":49,"type":"渡渡鳥","magic":1},
					{"ID":50,"type":"向日葵","magic":1},
					{"ID":51,"type":"兔","magic":1},
					{"ID":52,"type":"撲克牌","magic":1},
					{"ID":53,"type":"毛蟲","magic":1},
					{"ID":54,"type":"鈴蘭","magic":1},
					{"ID":55,"type":"貓咪","magic":1},
					{"ID":56,"type":"玫瑰","magic":1},
					{"ID":57,"type":"蝎","magic":1},
					{"ID":58,"type":"駱駝","magic":0},
					{"ID":59,"type":"Q獸","magic":1},
					{"ID":60,"type":"象","magic":0},
					{"ID":61,"type":"神燈","magic":1},
					{"ID":62,"type":"魔女","magic":1},
					{"ID":63,"type":"獅鳩","magic":1},
					{"ID":64,"type":"惡魔","magic":1},
					{"ID":65,"type":"小天使","magic":1},
					{"ID":66,"type":"蜜蜂","magic":1},
					{"ID":67,"type":"樹","magic":1},
					{"ID":68,"type":"南瓜","magic":1},
					{"ID":69,"type":"摳拉","magic":1},
					{"ID":70,"type":"女妖","magic":1},
					{"ID":71,"type":"企鵝","magic":1},
					{"ID":72,"type":"鴨嘴獸","magic":1},
					{"ID":73,"type":"番茄","magic":1},
					{"ID":74,"type":"飛猿","magic":1},
					{"ID":75,"type":"稻草人","magic":1},
					{"ID":76,"type":"豹","magic":1},
					{"ID":77,"type":"河豚","magic":1},
					{"ID":78,"type":"啤酒","magic":1},
					{"ID":79,"type":"鼬","magic":1},
					{"ID":80,"type":"雀","magic":1},
					{"ID":81,"type":"死神","magic":1},
					{"ID":82,"type":"鱷魚","magic":1},
					{"ID":83,"type":"機器人","magic":1},
					{"ID":84,"type":"麋鹿","magic":1},
					{"ID":85,"type":"小狗托托","magic":1},
					{"ID":86,"type":"紳士獅子","magic":1},
					{"ID":87,"type":"布丁","magic":1},
					{"ID":88,"type":"斯瓦諾","magic":1},
					{"ID":89,"type":"蜻蜓","magic":1},
					{"ID":90,"type":"蘑菇","magic":1},
					{"ID":91,"type":"獨角仙","magic":1},
					{"ID":92,"type":"哥布林","magic":0},
					{"ID":93,"type":"劍妖","magic":1},
					{"ID":94,"type":"寶箱","magic":1},
					{"ID":95,"type":"大嘴鴨","magic":1},
					{"ID":96,"type":"河童","magic":1},
					{"ID":97,"type":"水母","magic":1},
					{"ID":98,"type":"劍客","magic":1},
					{"ID":99,"type":"狐忍","magic":1},
					{"ID":100,"type":"天邪鬼","magic":0},
					{"ID":101,"type":"鯉魚","magic":1},
					{"ID":102,"type":"天狗","magic":1},
					{"ID":103,"type":"小鬼","magic":0},
					{"ID":104,"type":"桃太郎","magic":1},
					{"ID":105,"type":"和服公主","magic":1},
					{"ID":106,"type":"浦島太郎","magic":1},
					{"ID":107,"type":"魔術師","magic":1},
					{"ID":108,"type":"山貓","magic":0},
					{"ID":109,"type":"雪人","magic":1},
					{"ID":110,"type":"河馬","magic":1},
					{"ID":111,"type":"薑餅人","magic":1},
					{"ID":112,"type":"汽水","magic":1},
					{"ID":113,"type":"甜甜圈","magic":1},
					{"ID":114,"type":"蛋糕","magic":1},
					{"ID":115,"type":"老公公","magic":1},
					{"ID":116,"type":"姑婆","magic":1},
					{"ID":117,"type":"龐克豬","magic":0},
					{"ID":118,"type":"士兵","magic":0},
					{"ID":119,"type":"外星人","magic":1},
					{"ID":120,"type":"西洋公主","magic":1},
					{"ID":121,"type":"胖達","magic":0},
					{"ID":122,"type":"好女巫","magic":1},
					{"ID":123,"type":"女神","magic":1},
					{"ID":124,"type":"仙女","magic":1},
					{"ID":125,"type":"花妖精","magic":1},
					{"ID":126,"type":"花仙子","magic":1},
					{"ID":127,"type":"桃樂蒂","magic":1},
					{"ID":128,"type":"拇指姑娘","magic":1},
					{"ID":129,"type":"王子","magic":1},
					{"ID":130,"type":"天使","magic":1},
					{"ID":131,"type":"採蘋果精靈","magic":1},
					{"ID":132,"type":"壞女巫","magic":1},
					{"ID":133,"type":"上校","magic":1}
				],
               },
			
})
		   
