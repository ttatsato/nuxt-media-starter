<template>
  <ArticleTemplate>
    <template slot="mainContent">
      <h1>canvasを扱う</h1>
      サンプルを表示するには、描画を押してね
      <a
        @click="init()"
        class="button is-primary"
        >描画</a>
      <div>
        <h2>canvas ~短形~</h2>
        <ul>
          <li>
            fillRect(x,y,width,height) : 塗られた矩形を描く
          </li>
          <li>
            strokeRect(x,y,width,height) : 矩形の輪郭を描く
          </li>
          <li>
            clearRect(x,y,width,height) : 指定された領域を消去し、完全な透明にする
          </li>
        </ul>
      </div>
      <div>
        <pre>
          this.ctx = this.$refs.square.getContext('2d')
          this.ctx.fillRect(0, 0, 100, 100)
          this.ctx.strokeRect(0, 0, 200, 80)
          this.ctx.clearRect(50, 10, 40, 40)
        </pre>
      </div>
      <div class="canvas-container">
        <canvas
          id="square"
        ></canvas>
      </div>

      <div>
        <h2>canvas ~パスを描く~</h2>
        <ul>
          <li>beginPath() – パスの開始</li>
          <li>closePath() – パスを閉じる(始点に向けて直線を描くことで図形を閉じる)</li>
          <li>stroke() – 線でパスを描く</li>
          <li>fill() – 塗り潰しでパスを描く</li>
          <li>moveTo(x, y) – パスの始点を移動する</li>
        </ul>
      </div>
      <div class="canvas-container">
        <canvas
        id="triangle"
        ></canvas>
      </div>

      <div>
        <h2>canvas ~半円を描く~</h2>
        <ul>
          <li>arc(x, y, radius, startAngle, endAngle, anticlockwise)をつかう</li>
        </ul>
        <pre>
          this.circleCtx.beginPath()
          this.circleCtx.arc(100, 100, 100, 360, Math.PI * 2, false)
          this.circleCtx.stroke()
        </pre>
      </div>
      <div class="canvas-container">
        <canvas
          id="circle"
        ></canvas>
      </div>

      <div>
        <h2>canvas ~アニメ: 壁打ち~</h2>
      </div>
      <div class="canvas-container">
        <canvas
          id="anime1"
        ></canvas>
      </div>

      <div>
        <h2>canvas ~アニメ: 壁打ち(大量)~</h2>
      </div>
      <div class="canvas-container">
        <canvas
          id="anime2"
        ></canvas>
      </div>
    </template>
  </ArticleTemplate>
</template>
<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";
  @Component({
    components: {
      ArticleTemplate: () => import('~/components/Templates/ArticleTemplate.vue')
    }
  })
  export default class Canvas extends Vue {
    ctx: any = null
    triangleCtx: any = null
    circleCtx: any = null
    animeCtx: any = null
    animeCtx2: any = null

    speedX: number = 3
    speedY: number = 4
    locX: number = 20
    locY: number = 15

    NUM: number = 500;
    WIDTH: number = 300;
    HEIGHT: number = 300;
    speedX2: Array<number>  = [];
    speedY2: Array<number>  = [];
    locX2: Array<number>  = [];
    locY2: Array<number>  = [];
    radius: Array<number>  = [];
    r: Array<number>  = [];
    g: Array<number>  = [];
    b: Array<number> = [];

    init () {
      let canvas = <HTMLCanvasElement> window.document.getElementById('square')
      if (!canvas) return
      this.ctx = canvas.getContext('2d')
      canvas = <HTMLCanvasElement> window.document.getElementById('triangle')
      this.triangleCtx = canvas.getContext('2d')
      canvas = <HTMLCanvasElement> window.document.getElementById('circle')
      this.circleCtx = canvas.getContext('2d')
      this.ctx.fillRect(0, 0, 100, 100)
      this.ctx.strokeRect(0, 0, 200, 80)
      this.ctx.clearRect(50, 10, 40, 40)

      this.triangleCtx.beginPath()
      this.triangleCtx.moveTo(100, 0)
      this.triangleCtx.lineTo(100, 100)
      this.triangleCtx.lineTo(0, 100)
      this.triangleCtx.closePath()
      this.triangleCtx.fill()

      this.circleCtx.beginPath()
      this.circleCtx.arc(100, 100, 100, 360, Math.PI * 2, false)
      this.circleCtx.stroke()

      // 壁打ちアニメーション
      canvas = <HTMLCanvasElement> window.document.getElementById('anime1')
      this.animeCtx = canvas.getContext('2d')
      setInterval(this.anime1, 33)

      canvas = <HTMLCanvasElement> window.document.getElementById('anime2')
      this.animeCtx2 = canvas.getContext('2d')
      for (var i = 0; i < this.NUM; i++) {
        this.speedX2[i] = Math.random() * 8.0 - 4.0
        this.speedY2[i] = Math.random() * 8.0 - 4.0
        this.locX2[i] = this.WIDTH / 2
        this.locY2[i] = this.HEIGHT / 2
        this.radius[i] = Math.random() * 5.0 + 1.0
        this.r[i] = Math.floor(Math.random() * 64)
        this.g[i] = Math.floor(Math.random() * 64)
        this.b[i] = Math.floor(Math.random() * 64)
      }
      setInterval(this.anime2, 33)
    }

    anime1() {
      const boxX = 200
      const boxY = 100
      this.animeCtx.globalCompositeOperation = "source-over"
      this.animeCtx.fillStyle = "rgba(8,8,12,.2)"
      this.animeCtx.fillRect(0, 0, boxX, boxY)
      this.animeCtx.globalCompositeOperation = "lighter"

      //位置を更新
      this.locX += this.speedX
      this.locY += this.speedY

      if (this.locX < 0 || this.locX > boxX - 10) {
        this.speedX *= -1
      }

      if (this.locY < 0 || this.locY > boxY - 10) {
        this.speedY *= -1
      }

      //更新した座標で円を描く
      this.animeCtx.beginPath()
      this.animeCtx.fillStyle = 'orange'
      this.animeCtx.arc(this.locX, this.locY, 4, 0, Math.PI * 2.0, true)
      this.animeCtx.fill()
    }

    anime2() {
      this.animeCtx2.globalCompositeOperation = "source-over"
      this.animeCtx2.fillStyle = "rgba(8,8,12,.1)"
      this.animeCtx2.fillRect(0, 0, this.WIDTH, this.HEIGHT)
      this.animeCtx2.globalCompositeOperation = "lighter"

      for (var i = 0; i < this.NUM; i++) {
        //位置を更新
        this.locX2[i] += this.speedX2[i]
        this.locY2[i] += this.speedY2[i]
        if (this.locX2[i] < 0 || this.locX2[i] > this.WIDTH) {
          this.speedX2[i] *= -1.0
        }

        if (this.locY2[i] < 0 || this.locY2[i] > this.HEIGHT) {
          this.speedY2[i] *= -1.0
        }

        //更新した座標で円を描く
        this.animeCtx2.beginPath()
        this.animeCtx2.fillStyle = 'rgb(' + this.r[i] + ',' + this.g[i] + ',' + this.b[i] + ')'
        this.animeCtx2.arc(this.locX2[i], this.locY2[i], this.radius[i], 0, Math.PI * 2.0, true)
        this.animeCtx2.fill()
      }
    }
  }
</script>
<style lang="sass" scoped>
  .canvas-container
    margin-top: 5rem
    border: 0.5rem solid #ddd
    height: 300px
    width: 100%
    overflow: hidden
  canvas
    height: 290px
    width: 100%
</style>
