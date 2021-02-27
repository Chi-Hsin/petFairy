var testComp  = Vue.component("petfusion", {
	
         props:["data"],
		 data: function () {
		  return {
			fusionItem:{
				father:"img/skill/empty.gif",
				mother:"img/skill/empty.gif",
				item:"img/skill/empty.gif",
			},
			selectOtion:[
				{name:"我要繼承上一代的成長能力",item:"幻獸營養劑"},
				{name:"我要自由繼承上一代所有能力",item:"生命核心"},
				{name:"我要自由繼承上一代所有能力.且添加技能",item:"宇宙奧秘"},
			],
		  }
		},
		computed:{
			select:function(){
			
			}
		},
		 template: `<div class="" style="height:90vh;">
						<div class="row" v-for="(v,k) in selectOtion">
							<input type="radio"  name="itemSelect" :value="v.name" >
							{{v.name}}
						</div>
						<div class="row">
							<div class="col-3">父系幻獸:</div>
							<div class="col-4" style="background:url('CCC.png');no-repeat;background-size:contain;"><img style="width:100%;" :src="fusionItem.father" @drop="petDrop('father',$event)" @dragover="petDragOver($event)"></div>
						</div>
						<div class="row">
							<div class="col-3">母系幻獸:</div>
							<div class="col-4" style="background:url('CCC.png');no-repeat;background-size:contain;"><img style="width:100%;" :src="fusionItem.mother" @drop="petDrop('mother',$event)" @dragover="petDragOver($event)"></div>
						</div>
						
						<button>開始融合</button>
						
						
					</div>`,
		methods:{
			petDrop:function(type,event){
				event.preventDefault();
				if(type="item"){
					//這邊做判斷   拉過來的東西是不是道具
					//如果是幻獸就跳掉
				}
				
				this.fusionItem[type] = "img/monster/" + this.data + ".gif"
				// alert(this.data)
				
			},
			petDragOver:function(event){
				event.preventDefault();
			},
			
		},
		watch:{
			nameSelect:function(){
			},
			
		},
      }); 