var testComp  = Vue.component("xxxx", {
	
         props:[],
		 data: function () {
		  return {
			count: 48763,
			element:[
				{name:"不限",src:"img/icon/empty.gif"},
				{name:"金",src:"img/icon/golden.gif"},
				{name:"木",src:"img/icon/wood.gif"},
				{name:"水",src:"img/icon/water.gif"},
				{name:"火",src:"img/icon/fire.gif"},
				{name:"土",src:"img/icon/earth.gif"},
				{name:"光",src:"img/icon/light.gif"},
				{name:"闇",src:"img/icon/dark.gif"},
			],
			dir:[
				{name:"不限",src:"img/icon/empty.gif"},
				{name:"力",src:"img/icon/str.gif"},
				{name:"體",src:"img/icon/vit.gif"},
				{name:"敏",src:"img/icon/agi.gif"},
				{name:"智",src:"img/icon/int.gif"},
				{name:"幸",src:"img/icon/luk.gif"},
			],
			elementSelect:"闇",
			speciesDirSelect:"智",
			dropSelect:"",
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
				}
			}
		},
		 template: `<div class="pt-5">
						<div >名稱<input type='search' v-model="nameSelect" placeholder="輸入名稱關鍵字"></div>
						<div >掉落<input type='search' v-model="dropSelect" placeholder="輸入掉落物關鍵字"></div>
						<div >屬性<p>
						<span v-for="(v,k) in element">
						<input type="radio"  :id="'屬性偏向'+v.name"  :value="v.name" :data-key="v.name" name="element"  v-model="elementSelect">
						<label :for="'屬性偏向'+v.name" >{{v.name}}<img :src="v.src"></label></span>
						</div>
						<div >物種偏向<p>
						<span v-for="(v,k) in dir">
						<input type="radio"  :id="'物種偏向'+v.name" :data-key="v.name" name="v.name"   :value="v.name" v-model="speciesDirSelect">
						<label :for="'物種偏向'+v.name" >{{v.name}}<img :src="v.src"></label></span>
						</div>
					</div>`,
		methods:{
			
			
		},
		watch:{
			nameSelect:function(){
				this.select.nameSelect = this.nameSelect;
			},
			dropSelect:function(){
				this.select.dropSelect = this.dropSelect;
				this.elementSelect = "不限";
				this.speciesDirSelect = "不限";
			},
			elementSelect:function(){
				this.select.elementSelect = this.elementSelect;
			},
			speciesDirSelect:function(){
				this.select.speciesDirSelect = this.speciesDirSelect;
			},
			select:function(){
					// alert("select update")
					// console.log(this.select);
					this.$emit("update-pet",this.select);
				
			},
			
		},
      }); 