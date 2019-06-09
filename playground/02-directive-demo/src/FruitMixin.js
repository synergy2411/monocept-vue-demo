export const FruitMixin = {
     data(){
        return {
            fruits : ["Apple", "Banana", "Melon", "Mongo"],
            filteredFruitsStatus : ""
        }
    },
    computed: {
        myFilteredFruits(){
            return this.fruits.filter(element => {
                return element.match(this.filteredFruitsStatus);
            })
        }
    },
}