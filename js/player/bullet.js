import Sprite   from '../base/sprite'
import DataBus  from '../databus'

const BULLET_IMG_SRC = 'images/bullet.png'
const BULLET_WIDTH   = 16
const BULLET_HEIGHT  = 30

const __ = {
  speedx: Symbol('speedx'),
  speedy: Symbol('speedy'),
}

let databus = new DataBus()
// let pool = []

export default class Bullet extends Sprite {
  constructor() {
    super(BULLET_IMG_SRC, BULLET_WIDTH, BULLET_HEIGHT)
    this.type = Bullet
  }
  /*
  static alloc() {
    let type = Bullet
    let obj = pool.length? pool.shift(): new type()
    databus.items.push(obj)
    return obj
  }

  free(bullet) {
    return pool.push(this)
  }
  */

  init(x, y, speedx, speedy) {
    this.x = x
    this.y = y

    this.speedx = speedx
    this.speedy = speedy
    this.visible = true
  }

  // 每一帧更新子弹位置
  update() {
    this.y -= this.speedy
    this.x -= this.speedx
  
    /*
    // 超出屏幕外回收自身
    // this.x < -this.width || this.x > canvas.width + this.width 
    if (this.y < -this.height ) {
      databus.removeBullets(this)
    }
    */
  }
}
