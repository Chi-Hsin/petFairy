var testComp  = Vue.component("xxxx", {
	
         props:[],
		 data: function () {
		  return {
			checkBoxAllSelect: false,
			element:[
				{name:"All",src:"img/icon/empty.gif"},
				{name:"金",src:"img/icon/golden.gif"},
				{name:"木",src:"img/icon/wood.gif"},
				{name:"水",src:"img/icon/water.gif"},
				{name:"火",src:"img/icon/fire.gif"},
				{name:"土",src:"img/icon/earth.gif"},
				{name:"光",src:"img/icon/light.gif"},
				{name:"闇",src:"img/icon/dark.gif"},
			],
			dir:[
				{name:"All",src:"img/icon/empty.gif"},
				{name:"力",src:"img/icon/str.gif"},
				{name:"體",src:"img/icon/vit.gif"},
				{name:"敏",src:"img/icon/agi.gif"},
				{name:"智",src:"img/icon/int.gif"},
				{name:"幸",src:"img/icon/luk.gif"},
			],
			skillOption:[
				"能學法術","肉體強化","恢復","連擊","豬頭","裝死","賜福","威脅",
				"轉換","吸血","推車","犧牲","亡命一擊","三連擊","吸魂術","拉拉舞"
			],
			nameOption:["太郎","公主","士兵","小狗","鯉魚"],
			dropOption:["幻獸營養劑","玻璃種子","生命核心","求婚","貴賓卡"],
			mapOption:["魔幣","稀有","威奇","龍宮","鬼"],
			skillSelect:[],
			elementSelect:"闇",
			speciesDirSelect:"智",
			dropSelect:"",
			mapSelect:"",
			nameSelect:"黑鼠",
		  }
		},
		computed:{
			select:function(){
				return {
					elementSelect:this.elementSelect,
					speciesDirSelect:this.speciesDirSelect,
					nameSelect:this.nameSelect,
					dropSelect:this.dropSelect,
					mapSelect:this.mapSelect,
					skillSelect:this.skillSelect
				}
			}
		},
		 template: `<div class="row" style="height:65vh;overflow:auto;">
						<div class="col-3">
							<div class="row" style="height:65vh;">
								<div>物種偏向</div>
								<p  v-for="(v,k) in dir">
								<input type="radio"  :id="'物種偏向'+v.name" :data-key="v.name" name="v.name"   :value="v.name" v-model="speciesDirSelect">
								<label :for="'物種偏向'+v.name" ><img :src="v.src">{{v.name}}</label></p>
							</div>
							
						</div>
						<div class="col-3">
							<div class="row" style="height:65vh;">
								<div>屬性選擇</div>
								<div v-for="(v,k) in element">
								<input type="radio"  :id="'屬性偏向'+v.name"  :value="v.name" :data-key="v.name" name="element"  v-model="elementSelect">
								<label :for="'屬性偏向'+v.name" ><img :src="v.src">{{v.name}}</label></div>
							</div>
							
						</div>
						<div class="col-6"  >
							<div class="row" style="height:25vh;">
								<div>名稱<input type='search' v-model="nameSelect" placeholder="輸入名稱關鍵字" list="nameInput"></div>
								<div>掉落<input type='search' v-model="dropSelect" placeholder="輸入掉落物關鍵字" list="dropInput"></div>
								<div>出處<input type='search' v-model="mapSelect" placeholder="輸入取得出處關鍵字" list="mapInput"></div>
								<datalist id="nameInput">
									<option v-for="(v,k) in nameOption" :value="v">
								</datalist>
								<datalist id="dropInput">
									<option v-for="(v,k) in dropOption" :value="v">
								</datalist>
								<datalist id="mapInput">
									<option v-for="(v,k) in mapOption" :value="v">
								</datalist>
							</div>
							<div class="row" style="height:40vh;" @contextmenu.prevent @mousedown="selectAllSkill($event)">
								<span  class="mr-3" v-for="(v,k) in skillOption">
								<label><input type="checkbox" :id="'skillOption'+v" :value="v" v-model="skillSelect">{{v}}</label>
								</span>
							</div>
							
							
						</div>
						<div class="col-1"></div>
						
					</div>`,
		methods:{
			selectAllSkill:function(event){
				// for(var i=0;i<this.skillOption.length;i++){
					 // this.skillSelect.pop();
				// }
				// for(var i=0;i<this.skillOption.length;i++){
					 // this.skillSelect.push(this.skillOption[i]);
				// }
				if(event.button !=2){return;}
				this.checkBoxAllSelect = ! this.checkBoxAllSelect;
				if(this.checkBoxAllSelect){
					this.skillSelect = JSON.parse(JSON.stringify(this.skillOption)) //這行可以
				}
				else{
					for(var i=0;i<this.skillOption.length;i++){
						this.skillSelect.pop();
					}
				}

					
			}
			
		},
		watch:{
			select:function(){
					this.$emit("update-pet",this.select);
				
			},
			nameSelect:function(){
				if(this.nameSelect == ""){return;}
				
				this.speciesDirSelect = "All";
				this.elementSelect = "All";
				this.dropSelect = "";
				this.mapSelect = "";
				this.skillSelect = [];
			},
			dropSelect:function(){
				if(this.dropSelect == ""){return;}
				
				this.speciesDirSelect = "All";
				this.elementSelect = "All";
				this.mapSelect = "";
				this.nameSelect = "";
				this.skillSelect = [];
			},
			mapSelect:function(){
				if(this.mapSelect == ""){return;}
				
				this.speciesDirSelect = "All";
				this.elementSelect = "All";
				this.dropSelect = "";
				this.nameSelect = "";
				this.skillSelect = [];
			},
			
		},
      }); 