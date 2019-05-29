import {observable, action, computed} from 'mobx';

export class TimelineStore {
    @observable count = 0 // For Testing MobX
    @observable timeline = [] //List of Timeline Objects


    clear(){
        this.timeline = []
        this.count = 0
    }
}

export default new TimelineStore();