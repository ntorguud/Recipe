export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, publisher, img) {
        // const like = {id: id, title: title, publisher: publisher, img: img}  gesen utgiig short bichigleleer:
        const like = {id, title, publisher, img};

        this.likes.push(like);
        return like;
    }

    deleteLike(id) {
        //1. id gedeg ID-tei like-iin indexiig array-s haij olno.
        const index = this.likes.findIndex(el => el.id === id)

        //2. Ug index deerh elementiig array-s ustgana.
        this.likes.splice(index, 1);
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
};