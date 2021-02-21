var indexData = new Vue({
            el: '#xyz',
            data: {
				divShowStyle:{
					myBoxShow:1,
					petDetailShow:1,
					petFilterShow:1,
					petSearchShow:1,
					skillListShow:0,
					toyListShow:0,
					
				},
				allPet:petData.allPet,
				allSkill:skillData.allSkill,
				allToy:toyData.allToy,
				petFilter:[
				{"id":"1","name":"窩捲蟲","level":"1~3","species":"蝸牛","speciesDir":"體","element":"金","skillAmount":"2","str":"4","vit":"5","agi":"4","int":"4","luk":"5","chm":"4","life":"56","drop":"窩捲蟲卡 窩捲蟲娃娃 新手屠刀 修行袍 煤 青銅礦 娃娃盒","skill":"恢復、豬頭、裝死、賜福、轉換、魔刃術、裂地斬","map":"市鎮地下室、吉恩村、綠夫村、伊利村"}
				],
				detailData:{"id":"1","name":"窩捲蟲","level":"1~3","species":"蝸牛","speciesDir":"體","element":"金","skillAmount":"2","str":"4","vit":"5","agi":"4","int":"4","luk":"5","chm":"4","life":"56","drop":"窩捲蟲卡 窩捲蟲娃娃 新手屠刀 修行袍 煤 青銅礦 娃娃盒","skill":"恢復、豬頭、裝死、賜福、轉換、魔刃術、裂地斬","map":"市鎮地下室、吉恩村、綠夫村、伊利村"},
               },
			computed:{
				detailDataDrop:function(){
					return this.detailData.drop.split(" ");
					
				},
				detailDataSkill:function(){
					var  skillArray  = this.detailData.skill.split("、");
					var obj = {};
					var skill = this.allSkill;
					skillArray.forEach(function(x){
						var aaa = skill.filter(function(y){
							return y.name == x;
						})
						// console.log(aaa)
						var aaa = aaa[0].id;
						
						obj[aaa] = x;
					})
					return obj;
					
					
				},
			},
			components:{"testComp":testComp},
            methods:{
				showDiv:function(obj){
					
					this.divShowStyle = {
						myBoxShow:arguments[0],
						petDetailShow:arguments[1],
						petFilterShow:arguments[2],
						petSearchShow:arguments[3],
						skillListShow:arguments[4],
						toyListShow:arguments[5],
					}
				},
				skillSelectFilter:function(value){
					// alert(value)
					var arr=[];
					
					var arr = this.allSkill.filter(function(x){
						return x.type == value;
					})
					
					this.petFilter =  this.allPet.filter(function(x){
						
						var arr2 = x.skill.split("、");
						return arr.some(function(v){
							return arr2.includes(v.name)
						})
					})
					
					
					
				},
				
				updatepetfilter:function(val){
					this.petFilter = this.allPet.filter(function(x){
						var condition1 = x.name.includes(val.nameSelect);
						var condition2 = val.dropSelect == "" ? true 
															  :x.drop.split(" ").some(function(v){
																 return v.includes(val.dropSelect)
															  });
						var condition3 = val.elementSelect == "不限"? true : x.element == val.elementSelect;
						var condition4 = val.speciesDirSelect == "不限"? true : x.speciesDir == val.speciesDirSelect;
						return condition1 && condition2 && condition3 && condition4;
					})
				},
				showToyPets:function(v){
					var arr = this.allPet.filter(function(x){
						return x.name == v;
					})
					if(arr.length ==0){return;}
					this.detailData = arr[0];
					// console.log(arr)
					
				},
				showDetailData:function(id){
					this.detailData = this.allPet[id-1]
				},
            },
			watch:{
			},
            created() { 
            },
            mounted(){
				
            },
})
		   
