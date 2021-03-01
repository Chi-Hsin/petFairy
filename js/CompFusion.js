var testComp  = Vue.component("petfusion", {
	
         props:["data"],
		 data: function () {
		  return {
			fusionItem:{
				father:{id:"empty"},
				mother:{id:"empty"},
				item:{id:"empty"},
			},
			itemSelect:"幻獸營養劑",
			selectOption:{
				inherit:{}
			},
			message:"",
		  }
		},
		computed:{
			select:function(){
			
			}
		},
		 template: `<div class="" style="height:90vh;">
						<div class="row">
							<div class="col-3">父系幻獸:</div>
							<div class="col-4" style="background:url('CCC.png');no-repeat;background-size:contain;"><img style="width:100%;" :src="'img/monster/'+fusionItem.father.id+'.gif'" @drop="petDrop('father',$event)" @dragover="petDragOver($event)"></div>
						</div>
						<div class="row">
							<div class="col-3">母系幻獸:</div>
							<div class="col-4" style="background:url('CCC.png');no-repeat;background-size:contain;"><img style="width:100%;" :src="'img/monster/'+fusionItem.mother.id+'.gif'"  @drop="petDrop('mother',$event)" @dragover="petDragOver($event)"></div>
						</div>
						<div class="row">
							<div class="col-2"><input type="radio"  name="itemSelect" value="幻獸營養劑" v-model="itemSelect"></div>
							<div class="col-10">
								<p>我要繼承上一代成長能力</p>
								<span v-show="itemSelect == '幻獸營養劑'">繼承
								<input type="radio"  name="gender" :value="fusionItem.father" v-model="selectOption.inherit">父
								<input type="radio"  name="gender" :value="fusionItem.mother" v-model="selectOption.inherit">母
								</span>
							</div>
						</div>
						<div class="row">
							<div class="col-2"><input type="radio"  name="itemSelect" value="生命核心" v-model="itemSelect"></div>
							<div class="col-10">
								<p>我要自由繼承上一代所有能力</p>
							</div>
						</div>
						<div class="row">
							<div class="col-2"><input type="radio"  name="itemSelect" value="宇宙奧秘" v-model="itemSelect"></div>
							<div class="col-10">
								<p>我要自由繼承上一代所有能力</p>
								<p>且添加技能</p>
								
							</div>
						</div>
						<div class="row" v-show="itemSelect == '宇宙奧秘'">
							<div class="col-3"></div>
							<div class="col-4" style="background:url('CCC.png');no-repeat;background-size:contain;"><img style="width:100%;" onerror="img/icon/notFound.gif" src="img/monster/empty.gif" @drop="petDrop('skillStone',$event)" @dragover="petDragOver($event)"></div>
						</div>{{message}}
						<button @click="startFusion">開始融合</button>
						
						
					</div>`,
		methods:{
			petDrop:function(type,event){
				event.preventDefault();
				
				this.fusionItem[type] = this.data
				// alert(this.data)
				
			},
			petDragOver:function(event){
				event.preventDefault();
			},
			startFusion:function(){
				this.message = "";
				
				//選象勾選  以及道具檢查
				if(this.fusionItem.father.id=="empty"){this.message = "缺爸爸";return;}
				if(this.fusionItem.mother.id=="empty"){this.message = "缺媽媽";return;}
				if(!this.selectOption.inherit.hasOwnProperty('id')){this.message = "選成長";return;}
				
				
				// var obj = {father:this.fusionItem.father,mother:this.fusionItem.mother,item:this.itemSelect,inherit:this.selectOption.inherit}
				// this.$emit("start-fusion",obj)
			},
			
		},
		watch:{
			nameSelect:function(){
			},
			
		},
      }); 