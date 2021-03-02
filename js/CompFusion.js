var testComp  = Vue.component("petfusion", {
	
         props:["data"],
		 data: function () {
		  return {
			fusionItem:{
				father:{id:"empty",type:"father"},
				mother:{id:"empty",type:"mother"},
				item:{id:"empty"},
			},
			itemSelect:"幻獸營養劑",
			selectOption:{
				dir:{},
				element:{},
				species:{}
			},
			message:"",
		  }
		},
		computed:{
			select:function(){
			
			}
		},
		 template: `<div class="" style="height:90vh;overflow:auto;">
						<div class="row">
							<div class="col-3">父系幻獸:</div>
							<div class="col-4" style="background:url('CCC.png');no-repeat;background-size:contain;"><img style="width:100%;" :src="'img/monster/'+fusionItem.father.id+'.gif'" @drop="petDrop('father',$event)" @dragover="petDragOver($event)"></div>
						</div>
						<div class="row">
							<div class="col-3">母系幻獸:</div>
							<div class="col-4" style="background:url('CCC.png');no-repeat;background-size:contain;"><img style="width:100%;" :src="'img/monster/'+fusionItem.mother.id+'.gif'"  @drop="petDrop('mother',$event)" @dragover="petDragOver($event)"></div>
						</div>
						<div class="row">
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
						<div class="row">
							<div class="col-2"><input type="radio"  id="生命核心選擇" name="itemSelect" value="生命核心" v-model="itemSelect"></div>
							<div class="col-10">
								<p><label for="生命核心選擇">我要自由繼承上一代所有能力</label></p>
							</div>
						</div>
						<div class="row">
							<div class="col-2"><input type="radio"  id="宇宙奧秘選擇" name="itemSelect" value="宇宙奧秘" v-model="itemSelect"></div>
							<div class="col-10">
								<p><label for="宇宙奧秘選擇">我要自由繼承上一代所有能力</label></p>
								<p><label for="宇宙奧秘選擇">且添加技能</label></p>
								
							</div>
						</div>
						<div class="row" v-show="itemSelect == '宇宙奧秘'">
							<div class="col-3"></div>
							<div class="col-4" style="background:url('CCC.png');background-repeat: no-repeat;background-size:contain;"><img style="width:100%;" onerror="img/icon/notFound.gif" src="img/monster/empty.gif" @drop="petDrop('skillStone',$event)" @dragover="petDragOver($event)"></div>
						</div>
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
								<label><input type="radio"   :value="fusionItem.father" v-model="selectOption.species"></label>父
								<label><input type="radio"   :value="fusionItem.mother" v-model="selectOption.species">母</label></p>
							
							</div>
							
						</div>
						
						{{message}}
						<button @click="startFusion">開始融合</button>
						
						
					</div>`,
		methods:{
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
				
				//選項勾選  以及道具檢查
				if(this.fusionItem.father.id=="empty"){this.message = "缺爸爸";return;}
				if(this.fusionItem.mother.id=="empty"){this.message = "缺媽媽";return;}
				if(!this.selectOption.dir.hasOwnProperty('id')){this.message = "選成長";return;}
				if(JSON.stringify(this.fusionItem.father) == JSON.stringify(this.fusionItem.mother))
				{this.message = "爸媽一樣";return;}
				
				//如果生命或奧秘 需要進行屬性與物種的勾選
				if(this.itemSelect == "生命核心" || this.itemSelect == "宇宙奧秘"){
					if(!this.selectOption.element.hasOwnProperty('id')){this.message = "選屬性";return;}
					if(!this.selectOption.species.hasOwnProperty('id')){this.message = "選物種";return;}
					
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