var testComp  = Vue.component("xxxx", {
	
         props:[],
		 data: function () {
		  return {
			count: 48763,
			element:["不限","金","木","水","火","土","光","闇"],
			dir:["不限","力","體","敏","智","幸"],
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
		 template: `<div>
						<div >名稱<input type='search' v-model="nameSelect"></div>
						<div >掉落<input type='search' v-model="dropSelect"></div>
						<div >屬性
						<span v-for="(v,k) in element">
						<input type="radio"  :id="'屬性偏向'+v"  :value="element[k]" :data-key="k" name="element"  v-model="elementSelect">
						<label :for="'屬性偏向'+v" >{{v}}<img src="img/icon/tttt.png"></label></span>
						</div>
						<div >物種偏向
						<span v-for="(v,k) in dir">
						<input type="radio"  :id="'物種偏向'+v" :data-key="k" name="dir"   :value="v" v-model="speciesDirSelect">
						<label :for="'物種偏向'+v" >{{v}}</label></span>
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