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
					fusionShow:0,
					fusionResultShow:0
					
				},
				allPet:petData.allPet,
				allSkill:skillData.allSkill,
				allToy:toyData.allToy,
				allSpecies:speciesData.allSpecies,
				boxContent:[],
				petDropData:{},//從BOX拉過來的物品資料
				fusionResult:{},
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
					var obj = {id:"",name:""};
					var arr = [];
					var skill = this.allSkill;
					skillArray.forEach(function(x){
						var aaa = skill.filter(function(y){
							return y.name == x;
						})
						// console.log(aaa)
						var aaa = aaa[0].id;
						
						obj.id = aaa;
						obj.name = x;
						arr.push(obj);
						obj = {id:"",name:""};
					})
					return arr;
					
					
				},
			},
			components:{"testComp":testComp},
            methods:{
				fusionResultSend:function(obj){
					var arr = [obj.father,obj.mother];
					var newArr,inherit;
					if(obj.item == "幻獸營養劑"){
					//營養一般融合
						var inherit = obj.selectOption.dir.element + 
									"+" + obj.selectOption.dir.speciesDir;
						var arrNormal = this.allPet.filter(function(v){
							return v.species + v.element == obj.father.species + obj.mother.element
								|| v.species + v.element == obj.mother.species + obj.father.element
						})
						arrNormal.forEach(function(v,i,a){
							a[i] = Object.assign(v,{type:"monster"});
							arr.push(a[i]);
						})
						
						//排除重複結果
						newArr = arr.filter(function(v,i,a){
							return a.indexOf(v) == i;
						})
						
						if(JSON.stringify(newArr[0]) == JSON.stringify(newArr[1])){
							//基本上如果符合這情況就是  父母物種屬性完全一模一樣
							newArr = [newArr[0]]
						}
					}
					
					
					//生命. 奧秘融合
					if(obj.item == "生命核心" || obj.item == "宇宙奧秘"){
						var arrExtra = this.allPet.filter(function(v,i,a){
							return v.element == obj.selectOption.element.element &&
								  v.species == obj.selectOption.species.species
						})
						newArr = [arrExtra[0]];
						inherit = obj.selectOption.dir.element + 
								"+" +  obj.selectOption.dir.speciesDir
					
					}
					
					
					this.fusionResult = {
						allResult:newArr,
						item:obj.item,
						inherit:inherit,
						father:obj.father,
						mother:obj.mother
					};
					
					
				},
				petDrag:function(obj){
					// alert(id)
					// alert(id)
					this.petDropData = obj;
				},
				boxAdded:function(obj){
					// console.log(obj)
					if(obj.species == "monster"){
						arr = this.allPet.filter(function(x){
							return x.id == obj.id;
						});
						var newObj = Object.assign(arr[0],{type:'monster'});
						this.boxContent.push(newObj);
					}
					else{//傳物品
						this.boxContent.push(obj)
					}
					
					
				},
				boxDeleted:function(id){
					
					var index = this.boxContent.findIndex(function(v){
						return v.id == id;
					})
					
					
				    this.boxContent.splice(index,1);
					
					
				},
				showDiv:function(...args){
					
					var obj = this.divShowStyle;
					Object.keys(obj).forEach(function(v,i,a){
						obj[v] = 0;
					})
					
					args.forEach(function(v,i,a){
						obj[v] = 1;
					})
					
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
					if(val.nameSelect == "" && val.mapSelect == "" && val.dropSelect == "" && 
						val.elementSelect == "All" && val.speciesDirSelect == "All" && 
						val.skillSelect.length == 0){this.petFilter = [];return;}
					
					
					
					var arr = JSON.parse(JSON.stringify(val.skillSelect));
					var magicIndex = arr.indexOf("能學法術");
					if(magicIndex != -1){
						var arr2 = this.allSpecies.filter(function(x){
							return x.magic == 1;
						})
						arr.splice(magicIndex,1);
					}
					
					this.petFilter = this.allPet.filter(function(x){
						var condition1 = x.name.includes(val.nameSelect);
						var condition2 = val.mapSelect == "" ? true 
															  :x.map.split("、").some(function(v){
																 return v.includes(val.mapSelect)
															  });
						var condition3 = val.dropSelect == "" ? true 
															  :x.drop.split(" ").some(function(v){
																 return v.includes(val.dropSelect)
															  });
						var condition4 = val.elementSelect == "All"? true : x.element == val.elementSelect;
						var condition5 = val.speciesDirSelect == "All"? true 
																	  : x.speciesDir == val.speciesDirSelect;
						
						
						
						var condition6 = val.skillSelect.length == 0 ? true //技能比對
														: arr.every(function(v,i,a){	
															return x.skill.split("、").includes(v)
														})
						//法術是否能學習比對
						var condition7 = magicIndex == -1 ? true  
														: arr2.some(function(v){
															return v.type == x.species;
														}); 								
						return condition1 && condition2 && condition3 &&
								condition4 && condition5 && condition6 && condition7;
					})
				},
				showToyPets:function(v){
					var arr = this.allPet.filter(function(x){
						return x.name == v;
					})
					if(arr.length ==0){return;}//若沒找到該幻獸 就不往下執行  這行DEBUG用
					this.detailData = arr[0];
					// console.log(arr)
					
				},
				showDetailData:function(id){
					
					// var arr = this.allPet.filter(function(v){
						// return v.id == id;
					// })
					
					//改用已經篩選過的陣列  再進行篩選  加快速度
					var arr = this.petFilter.filter(function(v){
						return v.id == id;
					})
					this.detailData = arr[0];
					
				},
				showBoxDetailData:function(id){
					
					
					//改用已經篩選過的陣列  再進行篩選  加快速度
					var arr = this.boxContent.filter(function(v){
						return v.id == id;
					})
					this.detailData = arr[0];
					
				},
				testttt:function(){
					alert()
				},
            },
			watch:{
			},
            created() { 
            },
            mounted(){
				
            },
})
		   
