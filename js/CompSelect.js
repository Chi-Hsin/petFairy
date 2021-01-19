var testComp  = Vue.component("xxxx", {
	
         props:[],
		 data: function () {
		  return {
			count: 48763,
			element:["金","木","水","火","土","光","闇"],
			dir:["力","體","敏","智","幸"],
			elementSelect:"",
			speciesDirSelect:"",
			nameSelect:"",
			optionChecked:{
				element:[false,false,false,false,false,false,false],
				dir:[false,false,false,false,false],
			}
		  }
		},
		computed:{
			select:function(){
				return {
					elementSelect:this.elementSelect,
					speciesDirSelect:this.speciesDirSelect,
					nameSelect:this.nameSelect
				}
			}
		},
		 template: `<div>
						<div >名稱<input type='search' v-model="nameSelect"></div>
						<div >屬性
						<span v-for="(v,k) in element">
						<input type="radio" :id="v" :data-key="k" name="element"  :value="v" v-model="elementSelect">
						<label :for="v" >{{v}}</label></span>
						</div>
						<div >物種偏向
						<span v-for="(v,k) in dir">
						<input type="radio"  :id="v" :data-key="k" name="dir"   :value="v" v-model="speciesDirSelect">
						<label :for="v" >{{v}}</label></span>
						</div>
						
					</div>`,
		methods:{
			// testMethod:function(){
				// var aaa = petData.allPet;
				// console.log(aaa[0]);
			// },
			// elementFilter:function(e){
				// this.select.element = e.target.getAttribute("data-dataInfo")
			// },
			// dirFilter:function(e){
				
				// this.select.speciesDir = e.target.getAttribute("data-dataInfo");
			// },
			
		},
		watch:{
			nameSelect:function(){
				this.select.nameSelect = this.nameSelect;
			},
			elementSelect:function(){
				this.select.elementSelect = this.elementSelect;
			},
			speciesDirSelect:function(){
				this.select.speciesDirSelect = this.speciesDirSelect;
			},
			select:function(){
					// alert("select update")
					console.log(this.select);
					this.$emit("update-pet",this.select);
				
			},
			
		},
      }); 