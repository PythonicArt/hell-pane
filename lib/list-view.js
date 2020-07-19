'use babel';

var SelectListView = require ('atom-space-pen-views').SelectListView

export default class ListView extends SelectListView{
    constructor(serializedState) {
        super()
        this.initialize()
    }

    initialize(){
        super.initialize()
        this.addClass('overlay from-top')
        this.setItems(['Hello', 'World']) // item shoud be string type
        this.panel = atom.workspace.addModalPanel({item: this})
    }

    // call this function to show the panel
    show(){
        this.panel.show()
        this.focusFilterEditor()
    }

    viewForItem(item){
        return `<li>${item}</li>`
    }

    confirmed(item){
        console.log(`${item} was selected`)
    }

    cancelled(){
        this.panel.hide()
        console.log('This view was cancelled')
    }

}
