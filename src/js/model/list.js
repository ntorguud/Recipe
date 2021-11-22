import uniqid from "uniqid";

export default class List {
    constructor() {
        this.items = [];
    }

    deleteItemBasket(id) {
        //1. id gedeg ID-tei ortsiin indexiig array-s haij olno.
        const index = this.items.findIndex(el => el.id === id)

        //2. Ug index deerh elementiig ustgana.
        this.items.splice(index, 1);
    }

    addItem (item) {
        let newItem = {
            id: uniqid(),
            item ///// ===== item: item
        };

        this.items.push(newItem);

        return newItem;
    }
};