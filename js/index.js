var indexData = new Vue({
            el: '#xyz',
            data: {
				petDetailShow:true,
				skillListShow:false,
				petSearchShow:true,
				
				allPet:petData.allPet,
				allSkill:skillData.allSkill,
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
						console.log(aaa)
						var aaa = aaa[0].id;
						
						obj[aaa] = x;
					})
					return obj;
					
					
				},
			},
			components:{"testComp":testComp},
            methods:{
				goToSkillList:function(){
					this.skillListShow = true;
					this.petSearchShow = false;
				},
				updatepetfilter:function(val){
					this.petFilter = this.allPet.filter(function(x){
						var condition1 = x.name.includes(val.nameSelect);
						var condition2 = val.elementSelect == "" ? true : x.element == val.elementSelect;
						var condition3 = val.speciesDirSelect == "" ? true : x.speciesDir == val.speciesDirSelect;
						return condition1 && condition2 && condition3;
					})
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
		   
