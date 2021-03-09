var bookComp  = Vue.component("book-tutorial", {
	
        props:[],
		data: function () {
		  return {
				nowScene:1,
				pageList:[
					{number:1,scene:"book1"},
					{number:2,scene:"book2"},
					{number:3,scene:"book3"},
					{number:4,scene:"book4"},
					{number:5,scene:"book4"},
					{number:6,scene:"book4"},
					{number:7,scene:"book4"},
					{number:8,scene:"book4"},
					{number:9,scene:"book4"},
					{number:10,scene:"book4"},
					{number:11,scene:"book5"},
					{number:12,scene:"book6"},
					{number:13,scene:"book7"},
					{number:14,scene:"book7"},
					{number:15,scene:"book7"},
					{number:16,scene:"book8"},
					{number:17,scene:"book9"},
					{number:18,scene:"book10"},
					{number:19,scene:"book11"},
					{number:20,scene:"book12"},
				],
				catalogList:{
					"關於本站":[
								{name:"導航列",sceneNumber:1},
								{name:"開頭的老鼠",sceneNumber:2},
								{name:"素材來源",sceneNumber:3},
								{name:"感謝名單",sceneNumber:4}
							   ],
					"幻獸搜尋":[
								{name:"基本介紹",sceneNumber:11},
								{name:"進階功能",sceneNumber:12}
							   ],
					"融合模擬":[
								{name:"歷史起源",sceneNumber:13},
								{name:"石頭對應",sceneNumber:16},
								{name:"基本介紹",sceneNumber:17},
								
							   ],
					"背包與詳細資訊":[
								{name:"背包介紹",sceneNumber:18},
								{name:"詳細資訊",sceneNumber:19},
								{name:"其他功能",sceneNumber:20}
							   ],			
				},
		  }
		},
		computed:{
			nowPage:function(){
				var arr = this.pageList.filter(x => x.number == this.nowScene);
				return arr[0].scene;
			},
		},
		template: ` <div class="modal" id="myModal"><!-- 活動一覽選單-->
					  <div class="modal-dialog modal-lg">
						  <div class="modal-content">
						  
							<!-- Modal Header -->
							
							<!-- Modal body -->
							<div class="modal-body">
								 <div class="container-fluid">
									<div class="row" style="height:100%;">
										<div class="col-6" style="padding:0;height:100%;justify-content:center;display:flex;flex-direction:column;">
											<div clas="row" style="overflow:auto;height:50%;display:flex">
												<div class="col-3" style="height:100%"></div>
												<div class="col-6" style="height:100%">
													<ul>
													  <li v-for="(v,k) in catalogList">{{k}}
													    <ul v-for="(v2,k2) in v">
														  <li @click="jumpPage(v2.sceneNumber)"><a href="javascript:;">{{v2.name}}</a></li>
														</ul>
													  </li>
													</ul>
												
												
												</div>
												<div class="col-3" style="height:100%"></div>
												
												
												
											</div>
											
										</div>
										<div class="col-6" style="padding:0;height:100%;justify-content:center;display:flex;flex-direction:column;">
											<div clas="row" style="overflow:auto;height:60%;display:flex">
												<div class="col-2" style="height:100%"></div>
												<div class="col-8" style="height:100%;padding:0;">
												
													<component :is="nowPage" :data="nowScene"></component>
												
												
												</div>
												<div class="col-2" style="height:100%"></div>
												
												
												
											</div>
											
										</div>
									</div>
									
								</div>
							</div>
							
							<!-- Modal footer -->
							<div class="modal-footer">
							  <span>{{nowScene}}/{{pageList.length}}</span>
							  <button type="button" @click="lastPage">上一頁</button>
							  <button type="button" @click="nextPage">下一頁</button>
							  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
							</div>
							
						  </div>
					  </div>
					</div>`,
		methods:{
			nextPage:function(v){
				if(this.nowScene +1 > this.pageList.length){
					this.nowScene = 1;
					return;
				}
				this.nowScene += 1;
				
			},
			lastPage:function(){
				if(this.nowScene  < 2){
					this.nowScene = this.pageList.length;
					return;
				}
				this.nowScene -= 1;
			},
			jumpPage:function(sceneNumber){
				this.nowScene = sceneNumber;
				console.log(sceneNumber)
			},
		},
		watch:{
			statusLimitSelect:function(){
			
			},
			
		},
      }); 
	  
	  
Vue.component("book1", {//網站介面
      props:['data'],
	  data:function(){
		  return{
			  dataList:[
				{name:"幻獸搜尋",src:"img/book/1.png",content:"依照屬性、可學習技能等條件做搜尋"},
				{name:"融合模擬",src:"img/book/2.png",content:"模擬遊戲中進行模擬的情況與結果分析"},
				{name:"技能列表",src:"img/book/3.png",content:"查看幻獸可學習或通過神殿學習的技能"},
				{name:"玩具列表",src:"img/book/5.png",content:"查找玩具製作材料與相關幻獸"},
			  ]
		  }
	  },
	  template: `<div class="row">
					
					<div class="col-12"><h3>導航列</h3></div>
					<div v-for="(v,k) in dataList">
						<p style="color:blue;">{{v.name}}</p>
						<p>{{v.content}}</p>
						<p><img :src="v.src" style="width:100%;"></p>
					</div>
					以及這本書。
				</div>`
});


Vue.component("book2", {//開頭的老鼠
      props:['data'],
	  template: `<div class="row">
					<img src="img/book/6.png" style="width:100%;">
					<p>(非當事鼠)</p>
					<p>在寫這網站的期間，家裡有不少老鼠出沒。</p>
					<p>家人是很討厭牠們的，放了很黏的板子去黏牠，而沒想到一個禮拜之後，真的抓到了。</p>
					<p>但是我希望放牠走，牠也沒做錯什麼，找食物也是牠的本能</p>
					<h3>我要說，那個板子真的超黏的</h3>
					<p>當然防疫期間，也還是要戴口罩跟手套，而我第一次沒經驗，不知道怎麼救老鼠，雖然很小力但還是有點強行掰開，聽到淒厲的叫聲當下，我真的好難過。</p>
					
					<p>還好母親於心不忍，幫我拿過來了油</p>
					<p>握著牠小小的身體，牠心臟抖得很厲害，可能以為我要對牠做什麼可怕的事吧....</p>
					<p>油對黏性很高的東西真的有用，沒弄幾下，牠就火速掙脫了</p>
					<p>但是牠真的傷太厲害，兩天後我在牠跑走的不遠處看到牠的冰冷冷身體。</p>
					
					<p>童話沒有天生的灰色老鼠，我僅以黑色老鼠代表牠</p>
					<p>至少還有人記得你存在過。可愛的小老鼠</p>
					
				</div>`
});


Vue.component("book3", {//素材來源
      props:['data'],
	  template: `<div class="row">
					<div class="col-6"><img src="img/book/7.png" style="width:100%;"></div>
					<div class="col-6"><a href="javascript:;">敗家一族</a></div>
					<div class="col-6"><img src="img/book/8.png" style="width:100%;"></div>
					<div class="col-6"><a href="javascript:;">Ironwolves</a></div>
					<div class="col-6"><img src="img/book/9.png" style="width:100%;"></div>
					<div class="col-6"><a href="javascript:;">童話Online●遊●記</a></div>
				</div>`
});


Vue.component("book4", {//感謝
      props:['data'],
	  data: function () {
		  return {
			content:[
			  {number:4,name:"米古露托普",content:"<p>謝謝你在我需要的時候給予我幫助  這個網站也因為你的鼓勵而能繼續下去，你說很漂亮的網站，我很感激有你的鼓勵</p><p>被你帶過  還教了一些遊戲上的技巧，就算半夜也不厭其煩的教我，你真的是個很溫暖的人</p>",src:"img/book/screenshot_20210222_221817.png"},
			  {number:5,name:"光創",content:"<p>謝謝你家族的引入，這麼有趣有人情味的家族。</p><p>還有為族人們提供好用的棒子，不計成本、無怨無悔的付出，家族人一定都感受的到的。</p>",src:"img/book/screenshot_20210222_222649.png"},
			  {number:6,name:"紅桃姊姊",content:"<p>第一次遇到你是在金銀城閒逛，那個時候不知道要做什麼(其實是沒有人帶)</p><p>你帶我跑去荷花池塘那邊玩，咦不對，好像是罐頭地道的樣子，那張地圖真的很有趣</p><p>之後好像就因為彩虹橋剛好有記點，越來越熟，現在想來，光使還真的是蠻好認識朋友的職業。</p>",src:"img/book/screenshot_20210222_222608.png"},
			  {number:7,name:"原石生意",content:"<p>時間是發生在蹲出彩虹橋前</p><p>地點在伊利村的地下室</p><p>你現在可能沒在玩了，不管如何，真的謝謝你幫助在地下室偶遇你的我，提供給我棒子販賣，讓我有一些錢可以買更多棒子，對沒祝福卡的我來說真的幫助太大了。</p>",src:"img/book/xyz.jpg"},
			  {number:8,name:"獵人1",content:"<p>時間是發生在蹲出彩虹橋前</p><p>地點在伊利村的地下室</p><p><p>對，我同時在地下室遇到兩個幫助我的人，這是第二個，在知道我不了解童話後，毅然決然的提出帶我的邀請。</p><p>雖然我馬上拒絕，我想要體驗遊戲(現在看來根本就是地獄難度)，但是過不久我還是請他帶我，因為威彩的經驗實在太香。</p><p>老師，我不想努力了。</p>",src:"img/book/screenshot_20210307_042753.png"},
			  {number:9,name:"鵝寶寶",content:"<p>這是關於2萬可因的故事。</p><p>我那個時候差點不想玩了，真的就差一點點，這是我第一個，玩到新手初期就開始缺錢玩不下去的遊戲，沒辦法青竹棍140可因好貴，你給我的幫助真的是及時雨，即使這點錢放在現在可能不算什麼</p><p>後來還有給你帶，還有一起蹲地下室(我是後腿的那個)，我忘不了。</p>",src:"img/book/screenshot_20210307_042731.png"},
			  {number:10,name:"黑罐仔裝醬油",content:"<p>光使很難長大，因為有你的帶練，我等級才能上去，才能去遊戲更多地圖，你真的是名副其實的醬油爸爸。</p><p>每當有團可以練的時候，你總是會問我，真的糾甘心。</p><p>你每次上Discord我都會去聽唷~因為你講話真的很風趣，沒有你在的Discord就像少了一種味道。</p><p>恩，醬油的醍醐味。</p>",src:"img/book/screenshot_20210307_042807.png"},
			]
		 }
	  },
	  computed:{
		  nowContent:function(){
			  var data = this.data || 4;//讀不到就給初始值
			  var arr = this.content.filter(function(x){
				  return x.number == data;
			  }) 
			  return arr[0]
		  },
	  },
	  template: `<div class="row">
					<img :src="nowContent.src" class="img-thumbnail" :alt="nowContent.name"
					style="width:60%;" onerror="this.src='img/icon/notFound.gif'">
					{{nowContent.name}}
					<p v-html="nowContent.content"></p>
				</div>`
});


Vue.component("book5", {//幻獸搜尋 基本介紹
      props:['data'],
	  template: `<div class="row">
					<p>屬性包含了金、木、水、火、土、光、闇七種屬性可供篩選，
					每個屬性都有他的能力走向</p>
					
					<div class="col-12 bg-warning text-dark">金屬性:力量、體質</div>
					<div class="col-12 bg-success text-light">木屬性:體質、小偏智慧</div>
					<div class="col-12 bg-info text-light">水屬性:敏捷</div>
					<div class="col-12 bg-danger text-light">火屬性:力量、小偏幸運</div>
					<div class="col-12 text-light" style="background:brown;">土屬性:幸運、體質</div>
					<div class="col-12 bg-light text-dark">光屬性:除了魅力以外平均成長</div>
					<div class="col-12 bg-dark text-light">闇屬性:智慧</div>
					<div class="col-12">而每個物種也有對應的能力偏向。</div>
					<div class="col-12">因此，寵物的能力走向是由屬性與本身物種共同決定。</div>
					<div class="col-12"><img src="img/monster/516.gif"></div>
					<div class="col-12">例如大象物種偏力量，法亞象本身為火屬性，所以成長偏向是火+力；</div>
					<div class="col-12"><img src="img/monster/207.gif"></div>
					<div class="col-12">綿羊物種偏智慧，黑綿羊是闇屬性，成長偏向是闇+智，這兩隻也分別同時是純力、純智寵。</div>
				</div>`
});


Vue.component("book6", {//幻獸搜尋 進階功能
      props:['data'],
	  template: `<div class="row">
					<dl>
						<dt>右鍵選擇全部勾選/取消勾選</dt>
						<dd><img src="img/book/20210307_012729.gif" style="width:100%;"></dd>
						<dt>如果想要尋找稀有寵</dt>
						<dd>在出沒處打上稀有兩字即可</dd>
						<dd><img src="img/book/20210307_013209.gif" style="width:100%;"></dd>
						<dt>注意事項</dt>
						<dd>● 如果所有篩選選項都是空的，是不會搜索出結果的哦~</dd>
						<dd>● 若搜尋掉落、出處時，會將其他選項預設為空白，為的是方便使用者搜尋</dd>
					</dl>  
				</div>`
});
	  
	  
	  
Vue.component("book7", {//融合模擬 歷史起源
      props:['data'],
	  data: function () {
		return {
		  content:[
			{number:13,name:"幻獸營養劑",src:"img/item/1.gif",pre:"你能想像擁有A造型的幻獸，升級走的卻是B 造型幻獸的路線這種夢幻模式嗎?",content:"<p>繼承成長能力算是挺夢幻的一種融合方式，就是保留住融合寵其中一隻的成長屬性</p><p>繼承成長能力就是這樣的一種融合方式，所要準備的材料是「兩隻幻獸、幻獸營養劑、欲保留成長路線的幻獸娃娃一個、該幻獸卡片一張」。</p><p>在這裡舉個『超體黑綿羊』的融合例子吧!首先要準備的是『黑綿羊一隻、派艾波一隻、幻獸營養劑、派艾波卡一張、派艾波娃娃一個』，因為我希望保留住派艾波的純體成長路線，而又是闇系屬性，這樣會變成黑綿羊走的卻是跟派艾波一樣的純體路線，變成一隻超強的體鎧寵，不用擔心會被任何屬性剋，只是這種融合方式有可能會失敗。</p>",footer:"又失敗了的一位玩家默默說道"},
			{number:14,name:"生命核心",src:"img/item/2.gif",pre:"看清楚了!這就是童話中比四封還要珍貴的超級寶物",content:"<p>何謂究極融合？就是隨心所欲融出自己想要的寵，看著繼承屬性、物種、成長能力的舉例，老是有許多的失敗成分在裡面</p><p>這種究極融法就是將三種的優點合在一起的 究極融合法，所需要的材料當然就是傳說中的生命核心和兩隻寵囉!</p><p>使用生命核心融寵前一定要好好的思考，可不要隨隨便便拿來融呀</p><p>譬如說寶石獸 + 火熊利用生命核心是可以輕輕鬆鬆融出四封寵路比火寶石獸，但是這麼一來生命核心的價值就變得跟一顆四封一樣了。</p><p>『闇貝貝』的融合例子， 所準備的材料有『木頭貝貝一隻、黑狗一隻、生命核心』，至於為什麼用黑狗，因為要融闇系的一定要有隻闇系寵，而黑狗又是屬於三封等級比較高的寵，剛抓到的數值比較好，融出來的闇貝貝起始值會比較高一點。</p>",footer:"某位遺跡開到寶物的玩家說道"},
			{number:15,name:"宇宙奧秘",src:"img/item/3.gif",pre:"在米斯特里亞平原上，因為對寵物有著無限的熱愛，許多人投身研發寵物相關道具",content:"<p>在經過無數次的實驗與失敗，終於這道具備研發了出來—宇宙奧秘!</p><p>此項突破是由奧茲國幻獸店的裘家四兄妹所發展出來的。他們發現了一種特殊稀有的晶石，可以帶來比生命核心還有效的控制，更強大的融合範圍，以及一出生即可學習到一樣技能。這種晶石被取名為「宇宙奧秘」。</p><p>因為「宇宙奧秘」的研發成功，一些連生命核心都做不到的融合已被證明是可能的了。因此研發者裘家四兄妹在翡翠城裡的幻獸店開設了這一項進階幻獸融合的服務。</p><p>不過要注意的是，宇宙奧秘一樣無法隔代遺傳</p><p>如果經由宇宙奧秘融合出來的幻獸被拿去再次融合，所有宇宙奧秘的效果都會被遺傳的力量洗掉喔～利用宇宙奧秘得來的技能如果該幻獸的物種不會的話，是無法去升級的。</p><p>也就是說，一開始就給學最高等級的技能吧!</p>",footer:"一位吟遊詩人說著遙久前的故事"},
		  ]
	  }},
	  computed:{
		  nowContent:function(){
			  var data = this.data || 13;//讀不到就給初始值
			  var arr = this.content.filter(function(x){
				  return x.number == data;
			  }) 
			  return arr[0]
		  },
	  },
	  template: `<div class="row">
					
						<blockquote class="blockquote text-center" style="border-left:5px solid #ccc;">
						{{nowContent.pre}}
						  <footer class="blockquote-footer">{{nowContent.footer}}</footer>
						</blockquote>
						<img :src="nowContent.src">
						<p v-html="nowContent.content"></p>
						
						
						
				</div>`
});
Vue.component("book8", {//宇宙奧秘石頭
      props:['data'],
	  data: function () {
		return {
			stoneList:[
				{stone:"妖魔石",skill:"寄生",stoneSrc:"img/item/37.gif",skillSrc:"img/skill/18.gif"},
				{stone:"天使石",skill:"賜福",stoneSrc:"img/item/xx.gif",skillSrc:"img/skill/13.gif"},
				{stone:"綠玉髓",skill:"狂亂",stoneSrc:"img/item/yy.gif",skillSrc:"img/skill/3.gif"},
				{stone:"元素結晶",skill:"回春",stoneSrc:"img/item/38.gif",skillSrc:"img/skill/5.gif"},
				{stone:"黑曜石",skill:"亡命一擊",stoneSrc:"img/item/zz.gif",skillSrc:"img/skill/21.gif"},
				{stone:"靈魂石",skill:"犧牲",stoneSrc:"img/item/39.gif",skillSrc:"img/skill/20.gif"},
				{stone:"路娜晶石",skill:"三連擊",stoneSrc:"img/item/40.gif",skillSrc:"img/skill/22.gif"},
				{stone:"狄米斯晶石",skill:"吸魂術",stoneSrc:"img/item/41.gif",skillSrc:"img/skill/23.gif"},
				{stone:"約書亞晶石",skill:"拉拉舞",stoneSrc:"img/item/42.gif",skillSrc:"img/skill/24.gif"},
				{stone:"血卵石",skill:"推車",stoneSrc:"img/item/XY.gif",skillSrc:"img/skill/19.gif"},
			],
		}
	  },
	  template: `<div class="row table-responsive">
						<p>以下僅列出常用、<span class="text-danger">最高學習等級</span>技能對應的石頭。</p>
						<table class="table table-striped">
							<thead>
							  <tr>
								<th>增加技能</th>
								<th></th>
								<th>對應石頭</th>
								<th></th>
							  </tr>
							</thead>
							<tbody>
							<tr  v-for="(v,k) in stoneList">
							   <td><img :src="v.skillSrc"></td>
							   <td>{{v.skill}}</td>
							   <td><img :src="v.stoneSrc"></td>
							   <td>{{v.stone}}</td>
							</tr>
							</tbody>
						</table>
						<p>※注意：推車技能在設定上屬於稀有技能，機率僅為<span class="text-danger">10%</span></p>
					</div>`
});

Vue.component("book9", {//融合模擬 基本介紹
      props:['data'],
	  template: `<div class="row">
					<dl>
						<dt>父、母的幻獸選擇
						拖曳背包裡的幻獸</dt>
						<dd>- <img src="img/book/20210307_035646.gif" style="width:100%;"></dd>
						<dt>各項選擇，需要背包裡有相對應的道具</dt>
						<dt>點擊幻獸可以直接查看詳細資訊</dt>
						
					</dl>  
				</div>`
});



Vue.component("book10", {//背包與詳細資訊 背包介紹
      props:['data'],
	  template: `<div class="row">
					<div class="col-12">在背包裡</div>
					<div class="col-6"><img src="img/book/screenshot_20210307_032418.png" style="width:100%;"></div>
					<div class="col-6">娃娃的圖會是彩色</div>
					<div class="col-6"><img src="img/book/screenshot_20210307_032429.png" style="width:100%;"></div>
					<div class="col-6">幻獸則是黑白顯示</div>
					<div class="col-6"><img src="img/book/screenshot_20210307_032452.png" style="width:100%;"></div>
					<div class="col-6">卡片則統一這樣顯示</div>
					
					<p>在進行融合模擬的時候，可能需要這些道具。</p>
				</div>`
});


Vue.component("book11", {//背包與詳細資訊 詳細資訊
      props:['data'],
	  template: `<div class="row">
					<dl>
						<dt>而這些道具要怎麼取得呢?</dt>
						<dd>對著幻獸點擊或對物品點右鍵，都可以讓他們移動到背包</dd>
						<dd>- <img src="img/book/screenshot_20210307_200539.png" style="width:100%;"></dd>
						<dt>相關技能搜索</dt>
						<dd>點擊技能名稱即可查閱相關技能資訊</dd>
					</dl>  
				</div>`
});

Vue.component("book12", {//背包與詳細資訊 進階功能
      props:['data'],
	  template: `<div class="row">
					<dl>
						<dt>右鍵取消</dt>
						<dd><img src="img/book/20210307_035200.gif" style="width:100%;"></dd>
						<dt>點擊背包內幻獸</dt>
						<dd>可以直接查看詳細資訊</dd>
						<dt>詳細資訊單一篩選</dt>
						<dd>點擊可篩選出特定物種、屬性等資料</dd>
						<dd><img src="img/book/screenshot_20210310_003530.png" style="width:100%;"></dd>
						<dd><img src="img/book/screenshot_20210310_003840.png" style="width:100%;"></dd>
						<dt>注意事項</dt>
						<dd>背包有格子數量限制</dd>
					</dl>  
				</div>`
});


