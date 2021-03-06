import Animation from '../base/animation'

const ITEM_IMG_SRC = 'images/box.png'
const ITEM_WIDTH   = 60
const ITEM_HEIGHT  = 60

let pool = []

export default class Item extends Animation {
    constructor() {
      super(ITEM_IMG_SRC, ITEM_WIDTH, ITEM_HEIGHT)
      
    }
    /*
    static alloc() {
      let obj = pool.length? pool.shift(): new Item()
      databus.items.push(obj)
      return obj
    }
    free() {
      return pool.push(this)
    }
    */
    init(x, y, skillID, debuffID) {
      this.x = x
      this.y = y
      this.visible = true
      this.skillID = skillID
      this.debuffID = debuffID
    }
    getSkill() {
      return this.skillID
    }
    getDebuff() {
      return this.debuffID
    }
}