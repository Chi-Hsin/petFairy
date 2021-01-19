var indexData = new Vue({
            el: '#xyz',
            data: {
				aaa:1,
				allPet:petData.allPet,
				petFilter:[
				{"id":"","name":"","level":"","species":"","speciesDir":"","element":"","skillAmount":"","str":"","vit":"","agi":"","int":"","luk":"","chm":"","life":"","drop":"","skill":"","map":""}
				],
				
               },
			computed:{
				testNumber:function(){
				},
			},
			components:{"testComp":testComp},
            methods:{
				updatepetfilter:function(val){
					this.petFilter = this.allPet.filter(function(x){
						var condition1 = x.name.includes(val.nameSelect);
						var condition2 = val.elementSelect == "" ? true : x.element == val.elementSelect;
						var condition3 = val.speciesDirSelect == "" ? true : x.speciesDir == val.speciesDirSelect;
						return condition1 && condition2 && condition3;
					})
				}
            },
			watch:{
			},
            created() { 
            },
            mounted(){
				
            },
})
		   
