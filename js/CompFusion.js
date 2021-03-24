var testComp  = Vue.component("petfusion", {
	
         props:["data","data2"],
		 data: function () {
		  return {
			fusionItem:{
				father:{id:"empty",type:"father"},
				mother:{id:"empty",type:"mother"},
				itemSelect:"幻獸營養劑",
				dir:{id:"empty",type:"father"},
				element:{id:"empty",type:"father"},
				species:{id:"empty",type:"father"},
				
				
			},
			message:"",
			itemLost:[],
		  }
		},
		computed:{
			
			itemRequired:function(){
				var require = [
								{name:"父系幻獸",check:false},
								{name:"母系幻獸",check:false},
								{name:"父母成長選擇",check:false},
								{name:this.fusionItem.itemSelect,check:false}
							];
				if(this.fusionItem.itemSelect == "幻獸營養劑"){
					if(this.fusionItem.dir.id != "empty"){
						var name = this.fusionItem.dir.name;
						var doll = {name:name + "娃娃",check:false};
						var card = {name:name + "卡",check:false};
						require.push(card,doll);
					}
					return require;
				}
				else if(this.fusionItem.itemSelect == "生命核心" ||
						this.fusionItem.itemSelect == "宇宙奧秘"){
					require.push(
									{name:"父母屬性選擇",check:false},
									{name:"父母物種選擇",check:false}
								);		
					return require;
				}
			},
			itemHave:function(){
				var that = this;
				var box = this.data2.map(x => x.name);
				
				var itemRequired = JSON.parse(JSON.stringify(this.itemRequired));
				var requireKey = itemRequired.map(x => x.name);
				
				//背包
				box.forEach(function(v,i,a){
					var index = requireKey.indexOf(v);
					if(index > -1){
						itemRequired[index].check = true;
					}
				})
				//融合介面
				itemRequired.forEach(function(v,i,a){
					if(v.name == "父系幻獸"){
						if(that.fusionItem.father.id=="empty"){
							v.check = false;
						}
						else{v.check = true;}
					}
					else if(v.name == "母系幻獸"){
						if(that.fusionItem.mother.id=="empty"){
							v.check= false;
						}
						else{v.check = true;}
					}
					else if(v.name == "父母成長選擇"){
						if(that.fusionItem.dir.id=="empty"){
							v.check = false;
						}
						else{v.check = true;}
					}
					else if(v.name == "父母屬性選擇"){
						if(that.fusionItem.element.id=="empty"){
							v.check = false;
						}
						else{v.check = true;}
					}
					else if(v.name == "父母物種選擇"){
						if(that.fusionItem.species.id=="empty"){
							v.check = false;
						}
						else{v.check = true;}
					}
				})
				
				
				return itemRequired;
			},
			itemCheckImage:function(){
				var arr = [];
				var src;
				this.itemHave.forEach(function(v,i,a){
					src = v.check ? "img/icon/itemCheckOK.gif": "img/icon/itemCheckBuOK.gif";
					arr.push(src)
				})
				return arr;
			},
		},
		 template: `<div class="row" id="fusionDiv">
						<div class="col-12">
							<div class="row" style="background:rgba(222,186,114,0.5);height:10vh;">
								<p>請從背包裡拖曳選擇父系、母系幻獸</p>
								<p>並選擇要繼承的相對應選項</p>
							
							</div>
						</div>
						<!--父母幻獸放置區-->
						<div class="col-6" >
							<div class="row" style="height:40vh;">
								<div class="col-6">父系幻獸:</div>
								<div class="col-6" style="background:url('CCC.png') ;background-repeat:no-repeat;background-size:contain;"><img style="width:100%;" :src="'img/monster/'+fusionItem.father.id+'.gif'" onerror="this.src='img/icon/notFound.gif'" @drop="petDrop('father',$event)" @dragover="petDragOver($event)"></div>
							
								<div class="col-6">母系幻獸:</div>
								<div class="col-6" style="background:url('CCC.png');background-repeat:no-repeat;background-size:contain;"><img style="width:100%;" :src="'img/monster/'+fusionItem.mother.id+'.gif'"  onerror="this.src='img/icon/notFound.gif'" @drop="petDrop('mother',$event)" @dragover="petDragOver($event)"></div>
							</div>
						</div>
						
						<!--材料需求清單-->
						<div class="col-6">
							<div class="row" style="height:40vh;">
								<div class="col-12" v-for="(v,k) in itemRequired" >
									<img :src="itemCheckImage[k]">{{v.name}}
								</div>
								<div class="col-12" style="color:red;">{{message}}</div>
							</div>
						</div>
						
						<!--能力繼承選項-->
						<div class="col-6">
							<p class="fusionHover">
								<label><input type="radio"  id="幻獸營養劑選擇" name="fusionItem.itemSelect" value="幻獸營養劑" v-model="fusionItem.itemSelect">我要繼承上一代成長能力</label>
							</p>
							
							<p class="fusionHover">
								<label><input type="radio"  id="生命核心選擇" name="fusionItem.itemSelect" value="生命核心" v-model="fusionItem.itemSelect">我要自由繼承上一代所有能力</label>
							</p>
							
							<p class="fusionHover">
								<label><input type="radio"  id="宇宙奧秘選擇" name="fusionItem.itemSelect" value="宇宙奧秘" v-model="fusionItem.itemSelect">我要自由繼承上一代所有能力.且添加技能</label>
							</p>
							
						</div>
						
						<!--成長能力選擇-->
						<div class="col-6">
							<div class="row" v-show="fusionItem.itemSelect == '幻獸營養劑'">
								<div class="col-4">成長</div>
								<div class="col-4">
									<label><input type="radio"   :value="fusionItem.father" v-model="fusionItem.dir">父</label>
								</div>
								<div class="col-4">
									<label><input type="radio"   :value="fusionItem.mother" v-model="fusionItem.dir">母</label>
								</div>
								
							</div>
							<div class="row" v-show="fusionItem.itemSelect == '生命核心' || 
													fusionItem.itemSelect == '宇宙奧秘'">
													
								<div class="col-4">成長</div>
								<div class="col-4">
									<label><input type="radio"   :value="fusionItem.father" 
										v-model="fusionItem.dir">父</label>
								</div>
								<div class="col-4">
									<label><input type="radio"   :value="fusionItem.mother" 
										v-model="fusionItem.dir">母</label>
								</div>
								<div class="col-4">屬性</div>
								<div class="col-4">
									<label><input type="radio"   :value="fusionItem.father" v-model="fusionItem.element">父</label>
								</div>
								<div class="col-4">
									<label><input type="radio"   :value="fusionItem.mother" v-model="fusionItem.element">母</label>
								</div>
								<div class="col-4">物種</div>
								<div class="col-4">
									<label><input type="radio"   :value="fusionItem.father" v-model="fusionItem.species">父</label>
								</div>
								<div class="col-4">
									<label><input type="radio"   :value="fusionItem.mother" v-model="fusionItem.species">母</label>
								</div>
								
							</div>
						
						</div>
						
						<div class="col-12">
							<button @click="startFusion"  class="btn btn-primary">開始融合</button>
						</div>
						
						
					</div>`,
		methods:{
			selectBackGround:function(itemSelect){
				return this.fusionItem.itemSelect == itemSelect ? {background:"rgba(222,186,114,0.5)"} : ""
			},
			petDrop:function(type,event){
				event.preventDefault();
				if(!this.data.hasOwnProperty("id")){return;}
				this.fusionItem[type] = this.data
				// alert(this.data)
				
			},
			petDragOver:function(event){
				event.preventDefault();
			},
			startFusion:function(){
				this.message = "";
				
				//背包道具檢查
				var check = this.itemHave.every(x => x.check);
				if(!check){
					this.message = "缺少相對應材料";
					return;
				}
				
				var obj = {
							father:this.fusionItem.father,
							mother:this.fusionItem.mother,
							item:this.fusionItem.itemSelect,
							selectOption:this.fusionItem
						}
				this.$emit("start-fusion",obj)
			},
			
		},
		watch:{
			itemHave:function(){
				var check = this.itemHave.every(x => x.check);
				if(check){this.message = "";}
				
			},
			
		},
      }); 