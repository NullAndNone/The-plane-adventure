import Pool from './base/pool'

let instance

/**
 * 全局状态管理器
 */
export default class DataBus {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.pool = new Pool()
    this.reset()
  }

  reset() {
    this.frame      = 0
    this.score      = 0
    this.bullets    = []
    this.enemys     = []
    this.items      = []
    this.animations = []
    this.gameOver   = false
    this.activePool = new Pool()
  }

  /**
   * 回收敌人，进入对象池
   * 此后不进入帧循环
   */
  removeEnemey(enemy) {
    let temp = this.enemys.shift()

    temp.visible = false

    this.pool.recover('enemy', enemy)
  }

  /**
   * 回收子弹，进入对象池
   * 此后不进入帧循环
   */
  removeBullets(bullet) {
    let index = this.bullets.indexOf(bullet);
    this.bullets.splice(index, 1)
    //let temp = this.bullets.shift()
   
    bullet.visible = false

    this.pool.recover('bullet', bullet)
  }

  removeItems(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1)
    //let temp = this.bullets.shift()
   
    item.visible = false

    this.pool.recover('item', item)
  }
  /*
  createObject(type) {
    let obj = this.pool.getItemByClass(type, type)
    this.activePool.recover(type, obj)
  }
  */

  recycle(array, poolName) {
    let i = 0
    while (i < array.length) {
      let start = 0
      let count = 0
      i = 0
      for (let obj of array) {
        if (obj.recoverable()) {
          if (count == 0)
              start = i
          count++
          this.pool.recover(poolName, obj)
        } else if (count > 0){
          break
        }
        i++
      }
      if (count > 0)
        array.splice(start, count)
    }
  }
}
