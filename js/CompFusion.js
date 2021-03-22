var testComp  = Vue.component("petfusion", {
	
         props:["data","data2"],
		 data: function () {
		  return {
			fusionItem:{
				father:{id:"empty",type:"father"},
				mother:{id:"empty",type:"mother"},
				item:{id:"empty"},
			},
			itemSelect:"幻獸營養劑",
			selectOption:{
				dir:{}, //繼承能力成長父或母(營養、核心、奧秘)
				element:{},//繼承屬性父或母(核心、奧秘)
				species:{}//繼承物種父或母(核心、奧秘)
			},
			message:"",
			itemLost:"",
		  }
		},
		computed:{
			itemRequired:function(){
				if(this.itemSelect == "幻獸營養劑"){
					var name = this.selectOption.dir.name || "";
					var doll = name + "娃娃";
					var card = name + "卡";
					return [this.itemSelect,doll,card];
				}
				else if(this.itemSelect == "生命核心" ||
						this.itemSelect == "宇宙奧秘"){
					return [this.itemSelect];
				}
			},
			
		},
		 template: `<div class="row" style="height:90vh;overflow:auto;">
						<div class="col-12">
							<div class="row" style="background:rgba(222,186,114,0.5)">
								<p>請從背包裡拖曳選擇父系、母系幻獸</p>
								<p>並選擇要繼承的相對應選項</p>
							
							</div>
						</div>
						<div class="col-12">
							<div class="row">
								<div class="col-3">父系幻獸:</div>
								<div class="col-3" style="background:url('CCC.png') ;background-repeat:no-repeat;background-size:contain;"><img style="width:100%;" :src="'img/monster/'+fusionItem.father.id+'.gif'" onerror="this.src='img/icon/notFound.gif'" @drop="petDrop('father',$event)" @dragover="petDragOver($event)"></div>
								<div class="col-3">母系幻獸:</div>
								<div class="col-3" style="background:url('CCC.png');background-repeat:no-repeat;background-size:contain;"><img style="width:100%;" :src="'img/monster/'+fusionItem.mother.id+'.gif'"  onerror="this.src='img/icon/notFound.gif'" @drop="petDrop('mother',$event)" @dragover="petDragOver($event)"></div>
							</div>
						</div>
						<div class="col-12">
							<div class="row" style="color:red;">
									<div class="col-6">{{message}}</div>
							</div>
						</div>
						<div class="col-12">
							<div class="row fusionHover" :style="selectBackGround('幻獸營養劑')">
								<div class="col-2">
								<input type="radio"  id="幻獸營養劑選擇" name="itemSelect" value="幻獸營養劑" v-model="itemSelect">
								</div>
								<div class="col-10">
									<p><label for="幻獸營養劑選擇">我要繼承上一代成長能力</label></p>
									<span v-show="itemSelect == '幻獸營養劑'">成長
									<label><input type="radio"   :value="fusionItem.father" v-model="selectOption.dir">父</label>
									<label><input type="radio"   :value="fusionItem.mother" v-model="selectOption.dir">母</label>
									</span>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="row fusionHover" :style="selectBackGround('生命核心')">
								<div class="col-2"><input type="radio"  id="生命核心選擇" name="itemSelect" value="生命核心" v-model="itemSelect"></div>
								<div class="col-10">
									<p><label for="生命核心選擇">我要自由繼承上一代所有能力</label></p>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="row fusionHover" :style="selectBackGround('宇宙奧秘')">
								<div class="col-2"><input type="radio"  id="宇宙奧秘選擇" name="itemSelect" value="宇宙奧秘" v-model="itemSelect"></div>
								<div class="col-10">
									<p><label for="宇宙奧秘選擇">我要自由繼承上一代所有能力</label></p>
									<p><label for="宇宙奧秘選擇">且添加技能</label></p>
									
								</div>
							</div>
						</div>
						
						<div class="col-12">
							<div class="row" v-show="itemSelect == '生命核心' || itemSelect == '宇宙奧秘'">
								<div class="col-2"></div>
								<div class="col-10">
									<p>成長
									<label><input type="radio"   :value="fusionItem.father" v-model="selectOption.dir">父</label>
									<label><input type="radio"   :value="fusionItem.mother" v-model="selectOption.dir">母</label></p>
									<p>屬性
									<label><input type="radio"   :value="fusionItem.father" v-model="selectOption.element">父</label>
									<label><input type="radio"   :value="fusionItem.mother" v-model="selectOption.element">母</label></p>
									<p>物種
									<label><input type="radio"   :value="fusionItem.father" v-model="selectOption.species">父</label>
									<label><input type="radio"   :value="fusionItem.mother" v-model="selectOption.species">母</label></p>
								
								</div>
								
							</div>
						</div>
						
						<div class="col-12">
							<button @click="startFusion"  class="btn btn-primary">開始融合</button>
						</div>
						
						
					</div>`,
		methods:{
			selectBackGround:function(itemSelect){
				return this.itemSelect == itemSelect ? {background:"rgba(222,186,114,0.5)"} : ""
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
				
				//選項勾選檢查
				if(this.fusionItem.father.id=="empty"){this.message = "缺爸爸";return;}
				if(this.fusionItem.mother.id=="empty"){this.message = "缺媽媽";return;}
				if(!this.selectOption.dir.hasOwnProperty('id')){this.message = "選成長";return;}
				if(JSON.stringify(this.fusionItem.father) == JSON.stringify(this.fusionItem.mother))
				{this.message = "爸媽一樣";return;}
				
				//生命或奧秘 需要進行屬性與物種的勾選
				if(this.itemSelect == "生命核心" || this.itemSelect == "宇宙奧秘"){
					if(!this.selectOption.element.hasOwnProperty('id')){this.message = "選屬性";return;}
					if(!this.selectOption.species.hasOwnProperty('id')){this.message = "選物種";return;}
				}
				
				//背包道具檢查
				var box = this.data2.map(x => x.name);
				var itemLost = this.itemLost;
				itemLost = "";
				var boxCheck = this.itemRequired.every(function(v,i,a){
					if(!box.includes(v)){itemLost = v;}
					return box.includes(v);
				})
				if(!boxCheck){
						// console.log(arrLost);
						this.message = "缺少道具" + itemLost;
						return;
					}
				
				
				var obj = {
							father:this.fusionItem.father,
							mother:this.fusionItem.mother,
							item:this.itemSelect,
							selectOption:this.selectOption
						}
				this.$emit("start-fusion",obj)
			},
			
		},
		watch:{
			nameSelect:function(){
			},
			
		},
      }); 