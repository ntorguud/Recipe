export default class Likes {
    constructor() {
        //Local Storage deer hadgalsan zuilsiig duudna.
        this.readDataFromLocalStorage();

        if(!this.likes) this.likes = [];
    }

    addLike(id, title, publisher, img) {
        // const like = {id: id, title: title, publisher: publisher, img: img}  gesen utgiig short bichigleleer:
        const like = {id, title, publisher, img};

        this.likes.push(like);

        //Storage ruu hadgalna.
        this.saveDataToLocalStorage();

        return like;
    }

    deleteLike(id) {
        //1. id gedeg ID-tei like-iin indexiig array-s haij olno.
        const index = this.likes.findIndex(el => el.id === id)

        //2. Ug index deerh elementiig array-s ustgana.
        this.likes.splice(index, 1);

        //Storage ruu hadgalna.
        this.saveDataToLocalStorage();
    }

    isLiked(id) {
        if(this.likes.findIndex(el => el.id === id) === -1) {
            return false;
        } else {
            return true;
        }

        //return this.likes.findIndex(el => el.id === id) !== -1;
        //////deerh bol short bichiglel n ym bna.
    }

    getNumberOfLikes() {
        return this.likes.length;
    }

    saveDataToLocalStorage() {
        localStorage.setItem("Likes", JSON.stringify(this.likes));
        //Array-g JSON string bolgoj huvirgadag.
    }

    readDataFromLocalStorage() {
        ///Erguulj Local storage-aas hadgalsan like-uudaa duudahdaa JSON.stringify hiij bolgoson stringee JSON.parse-aar erguuleed array bolgono.
        this.likes = JSON.parse(localStorage.getItem("likes"));
    }
};