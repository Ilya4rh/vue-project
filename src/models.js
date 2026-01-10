export class CoffeeInfo {
  constructor(coffeeId, coffeeName, coffeeAdress, cofeeDescription) {
    this.coffeeId = coffeeId;
    this.coffeeName = coffeeName;
    this.coffeeAdress = coffeeAdress;
    this.cofeeDescription = cofeeDescription;
  }
}
export class IdeaInfo {
    constructor(ideaId, ideaName, ideaDate, ideaDescription, ideaStatus, ideaLiked, creatorName){
        this.ideaId = ideaId;
        this.ideaName = ideaName;
        this.ideaDate = ideaDate;
        this.ideaDescription = ideaDescription;
        this.ideaStatus = ideaStatus;
        this.ideaLiked = ideaLiked;
        this.creatorName = creatorName;
    }
}

export class CategoryInfo {
    constructor(id, coffeeShopId, name, description) {
        this.id = id;
        this.coffeeShopId = coffeeShopId;
        this.name = name;
        this.description = description;
    }
}