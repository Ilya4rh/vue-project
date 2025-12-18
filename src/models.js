export class CoffeeInfo {
  constructor(coffeeId, coffeeName, coffeeAdress, cofeeDescription) {
    this.coffeeId = coffeeId;
    this.coffeeName = coffeeName;
    this.coffeeAdress = coffeeAdress;
    this.cofeeDescription = cofeeDescription;
  }
}
export class IdeaInfo {
    constructor(ideaId, ideaName, ideaDate, ideaDescription, ideaStatus, ideaLiked){
        this.ideaId = ideaId;
        this.ideaName = ideaName;
        this.ideaDate = ideaDate;
        this.ideaDescription = ideaDescription;
        this.ideaStatus = ideaStatus;
        this.ideaLiked = ideaLiked;
    }
}