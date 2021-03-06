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
				],
				catalogList:{
					"關於本站":[
								{name:"導航列",sceneNumber:1},
								{name:"開頭的老鼠",sceneNumber:2},
								{name:"素材來源",sceneNumber:3},
								{name:"感謝有你們",sceneNumber:4}
							   ],
					"幻獸搜尋":[
								{name:"基本介紹",sceneNumber:11},
								{name:"進階功能",sceneNumber:12}
							   ],
					"融合模擬":[
								{name:"歷史起源",sceneNumber:1},
								{name:"基本介紹",sceneNumber:1}
								
							   ],
					"技能列表":[
								{name:"基本介紹",sceneNumber:1},
								{name:"其他功能",sceneNumber:1}
							   ],
					"玩具列表":[
								{name:"基本介紹",sceneNumber:1},
								{name:"進階功能",sceneNumber:1}
							   ],	
					"背包與詳細資訊":[
								{name:"基本介紹",sceneNumber:1},
								{name:"進階功能",sceneNumber:1}
							   ],
					"物種列表":[
								{name:"A",sceneNumber:1},
								{name:"B",sceneNumber:1},
								{name:"C",sceneNumber:1},
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
	  template: `<div class="row">
					<h3>導航列</h3>
					<div>包含了六個功能</div>
					<div v-for="i in 5">
						<p>幻獸搜尋  依照條件做搜尋</p>
						<p><img :src="'img/book/'+ i +'.png'" style="width:100%;"></p>
					</div>
					以及這本書。
				</div>`
});


Vue.component("book2", {//開頭的老鼠
      props:['data'],
	  template: `<div class="row">
					<img src="img/book/6.png" style="width:100%;">
					簡劇必開理錢眼後認近龍支商曾近你老。意身人老論過益在是：指應起斷但傳們行：國到道晚能吃數太樂與我此去效車一海得有演成學眾個回。回物現代便顯學法斷字石：灣決洲少金相室女、基養一風世合我一生聞或大開任候！他太教後引可笑怎來參，室須斷進生；去學。
				</div>`
});


Vue.component("book3", {//素材來源
      props:['data'],
	  template: `<div class="row">
					<div class="col-6"><img src="img/book/7.png" style="width:100%;"></div>
					<div class="col-6"><a href="javascript:;">室須斷進生</a></div>
					<div class="col-6"><img src="img/book/8.png" style="width:100%;"></div>
					<div class="col-6"><a href="javascript:;">室須斷進生</a></div>
					<div class="col-6"><img src="img/book/9.png" style="width:100%;"></div>
					<div class="col-6"><a href="javascript:;">室須斷進生</a></div>
				</div>`
});


Vue.component("book4", {//感謝
      props:['data'],
	  data: function () {
		  return {
			content:[
			  {number:4,name:"米古露托普",content:"<p>謝謝你在我需要的時候給予我幫助  這個網站也因為你的鼓勵而能繼續下去，你說很漂亮的網站，我很感激有你的鼓勵</p><p>被你帶過  還教了一些遊戲上的技巧，就算半夜也不厭其煩的教我，你真的是個很溫暖的人</p>"},
			  {number:5,name:"光創",content:"<p>謝謝你家族的引入，這麼有趣有人情味的家族。</p><p>還有為族人們提供好用的棒子，不計成本、無怨無悔的付出，家族人一定都感受的到的。</p>"},
			  {number:6,name:"紅桃姊姊",content:"<p>第一次遇到你是在金銀城閒逛，那個時候不知道要做什麼(其實是沒有人帶)</p><p>你帶我跑去荷花池塘那邊玩，咦不對，好像是罐頭地道的樣子，那張地圖真的很有趣</p><p>之後好像就因為彩虹橋剛好有記點，越來越熟，現在想來，光使還真的是蠻好認識朋友的職業。</p>"},
			  {number:7,name:"原石生意",content:"<p>時間是發生在蹲出彩虹橋前</p><p>地點在伊利村的地下室</p><p>你現在可能沒在玩了，不管如何，真的謝謝你幫助在地下室偶遇你的我，提供給我棒子販賣，讓我有一些錢可以買更多棒子，對沒祝福卡的我來說真的幫助太大了。</p>"},
			  {number:8,name:"獵人1",content:"<p>時間是發生在蹲出彩虹橋前</p><p>地點在伊利村的地下室</p><p><p>對，我同時在地下室遇到兩個幫助我的人，這是第二個，在知道我不了解童話後，毅然決然的提出帶我的邀請。</p><p>雖然我馬上拒絕，我想要體驗遊戲(現在看來根本就是地獄難度)，但是過不久我還是請他帶我，因為威彩的經驗實在太香。</p><p>老師，我不想努力了。</p>"},
			  {number:9,name:"鵝寶寶",content:"<p>這是關於2萬可因的故事。</p><p>我那個時候差點不想玩了，真的就差一點點，這是我第一個，玩到新手初期就開始缺錢玩不下去的遊戲，沒辦法青竹棍140可因好貴，你給我的幫助真的是及時雨，即使這點錢放在現在可能不算什麼</p><p>後來還有給你帶，還有一起蹲地下室(我是後腿的那個)，我忘不了。</p>"},
			  {number:10,name:"黑罐仔裝醬油",content:"<p>光使很難長大，因為有你的帶練，我等級才能上去，才能去遊戲更多地圖，你真的是名副其實的醬油爸爸。</p><p>每當有團可以練的時候，你總是會問我，真的糾甘心。</p><p>你每次上Discord我都會去聽唷~因為你講話真的很風趣，沒有你在的Discord就像少了一種味道。</p><p>恩，醬油的醍醐味。</p>"},
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
					<img src="img/book/screenshot_20210222_221817.png" class="img-thumbnail" alt="Cinque Terre">
					{{nowContent.name}}
					<p v-html="nowContent.content"></p>
				</div>`
});


Vue.component("book5", {//幻獸搜尋 基本介紹
      props:['data'],
	  template: `<div class="row">
					<p>屬性包含了金、木、水、火、土、光、闇七種屬性可供篩選，
					每個屬性都有他的能力走向</p>
					
					<p>金屬性:力量、體質</p>
					<p>木屬性:體質、小偏智慧</p>
					<p>水屬性:敏捷</p>
					<p>火屬性:力量、小偏幸運</p>
					<p>土屬性:幸運、體質</p>
					<p>光屬性:除了魅力以外平均成長</p>
					<p>闇屬性:智慧</p>
					<p>而每個物種也有對應的能力偏向。</p>
					<p>因此，寵物的能力走向是由屬性與本身物種共同決定。</p>
					<p><img src="img/monster/516.gif"></p>
					<p>例如大象物種偏力量，法亞象本身為火屬性，所以成長偏向是火+力；</p>
					<p><img src="img/monster/207.gif"></p>
					<p>綿羊物種偏智慧，黑綿羊是闇屬性，成長偏向是闇+智，這兩隻也分別同時是純力、純智寵。</p>
				</div>`
});


Vue.component("book6", {//幻獸搜尋 進階功能
      props:['data'],
	  template: `<div class="row">
					<dl>
						<dt>右鍵選擇全部勾選/取消勾選</dt>
						<dd>- <img src="img/book/20210307_012729.gif"></dd>
						<dt>如果想要尋找稀有寵</dt>
						<dd>- <img src="img/book/20210307_013209.gif"></dd>
						<dt>注意事項</dt>
						<dd>- 如果所有篩選選項都是空的，是不會搜索出結果的哦~</dd>
					</dl>  
				</div>`
});
	  
	  
	  
Vue.component("book7", {//幻獸模擬 歷史起源
      props:['data'],
	  template: `<div class="row">
					<h3></h3>
					<img src="">
					<p>123</p>
				</div>`
});