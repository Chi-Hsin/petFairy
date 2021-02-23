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
				boxContent:[],
				petFilter:[
					{"id":212,"name":"黑鼠","level":"10~12","species":"老鼠","speciesDir":"智","element":"闇","skillAmount":3,"str":"14","vit":"14","agi":"16","int":"16","luk":"16","chm":"14","life":"97","drop":"黑鼠卡 黑鼠娃娃 重藤棍 青銅鎧甲 煤 青銅礦 黑色鈕釦","skill":"連擊、裝死、轉換、吸血、亡命一擊、詛咒術、毒擊術","map":"青鳥城外","圖片":"V"}
				],
				detailData:{"id":212,"name":"黑鼠","level":"10~12","species":"老鼠","speciesDir":"智","element":"闇","skillAmount":3,"str":"14","vit":"14","agi":"16","int":"16","luk":"16","chm":"14","life":"97","drop":"黑鼠卡 黑鼠娃娃 重藤棍 青銅鎧甲 煤 青銅礦 黑色鈕釦","skill":"連擊、裝死、轉換、吸血、亡命一擊、詛咒術、毒擊術","map":"青鳥城外","圖片":"V"},
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
				boxAdded:function(obj){
					
					var arr = this.allPet.filter(function(x){
						return x.id == obj.id;
					});
					this.boxContent = this.boxContent.concat(arr)
					
					
				},
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
		   
