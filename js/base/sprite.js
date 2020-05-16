/**
 * 游戏基础的精灵类
 */
export default class Sprite {
  constructor(imgSrc = '', width=  0, height = 0, x = 0, y = 0, imgWidth=null, imgHeight=null, imgX=null, imgY=null) {
    this.img     = new Image()
    this.img.src = imgSrc

    this.width  = width
    this.height = height

    this.x = x
    this.y = y

    this.visible = true

	if (imgWidth != null &&
		imgHeight != null &&
		imgX != null &&
		imgY != null) 
	{
		this.imgWidth = imgWidth
		this.imgHeight = imgHeight
		this.imgX = imgX
		this.imgY = imgY
	}
  }

  /**
   * 将精灵图绘制在canvas上
   */
  drawToCanvas(ctx) {
    if ( !this.visible )
      return

	if (this.imgWidth ==null ) {
		ctx.drawImage(
	      this.img,
	      this.x,
	      this.y,
	      this.width,
	      this.height
	    )
	} else {
	    ctx.drawImage(
	      this.img,
	      this.imgX,
	      this.imgY,
	      this.imgWidth,
	      this.imgHeight,
	      this.x,
	      this.y,
	      this.width,
	      this.height
	    )
	}
  }

  /**
   * 简单的碰撞检测定义：
   * 另一个精灵的中心点处于本精灵所在的矩形内即可
   * @param{Sprite} sp: Sptite的实例
   */
  isCollideWith(sp) {
    let spX = sp.x + sp.width / 2
    let spY = sp.y + sp.height / 2

    if ( !this.visible || !sp.visible )
      return false

    return !!(   spX >= this.x
              && spX <= this.x + this.width
              && spY >= this.y
              && spY <= this.y + this.height  )
  }
}
