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
		 template: `<div class="row pt-3" style="height:65vh;overflow:auto;">
						<div class="col-3">
							<p>物種偏向</p>
							<p v-for="(v,k) in dir">
							<input type="radio"  :id="'物種偏向'+v.name" :data-key="v.name" name="v.name"   :value="v.name" v-model="speciesDirSelect">
							<label :for="'物種偏向'+v.name" >{{v.name}}<img :src="v.src"></label></p>
							
						</div>
						<div class="col-3">
							<p>屬性</p>
							<div class="col" v-for="(v,k) in element">
							<input type="radio"  :id="'屬性偏向'+v.name"  :value="v.name" :data-key="v.name" name="element"  v-model="elementSelect">
							<label :for="'屬性偏向'+v.name" >{{v.name}}<img :src="v.src"></label></div>
							
						</div>
						<div class="col-6" @contextmenu.prevent @mousedown="selectAllSkill($event)">
							<div>名稱<input type='search' v-model="nameSelect" placeholder="輸入名稱關鍵字"></div>
							<div>掉落<input type='search' v-model="dropSelect" placeholder="輸入掉落物關鍵字"></div>
							<div>出處<input type='search' v-model="mapSelect" placeholder="輸入取得出處關鍵字"></div>
							<span  class="mr-3" v-for="(v,k) in skillOption">
								<label><input type="checkbox" :id="'skillOption'+v" :value="v" v-model="skillSelect">{{v}}</label>
							</span>
							
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
			
		},
      }); 