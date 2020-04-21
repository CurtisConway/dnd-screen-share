<template>
  <div style="padding-bottom:56.25%;height:0;position:relative;">
    <canvas ref="pixiCanvas"></canvas>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';
import traubon from '../assets/traubon.png';

export default {
  name: 'PixiCanvas',
  data() {
    return {
      pixi: null,
    };
  },
  mounted() {
    const { pixiCanvas } = this.$refs;
    this.pixi = new PIXI.Application({
      view: pixiCanvas,
      resizeTo: pixiCanvas,
    });
    this.pixi.loader.add('bunny', traubon).load((loader, resources) => {
      // This creates a texture from a 'bunny.png' image
      const bunny = new PIXI.Sprite(resources.bunny.texture);
      bunny.interactive = true;

      // Setup the position of the bunny
      bunny.x = 100;
      bunny.y = 100;
      bunny.height = 100;
      bunny.width = 100;

      // Rotate around the center
      bunny.anchor.x = 0.5;
      bunny.anchor.y = 0.5;
      bunny.cursor = 'grab';
      // Add the bunny to the scene we are building
      this.pixi.stage.addChild(bunny);
      ['mousemove', 'touchmove'].forEach((event) => {
        bunny.on(event, (e) => {
          // console.log(e);
          const { width, height } = this.pixi.view;
          const down = e.data.originalEvent.buttons > 0 || e.data.pointerType === 'touch';
          if (down > 0) {
            const { x, y } = e.data.global;
            if (x < width) {
              if (x < 0) {
                bunny.x = 0;
              } else {
                bunny.x = x;
              }
            } else {
              bunny.x = width;
            }
            if (y < height) {
              if (y < 0) {
                bunny.y = 0;
              } else {
                bunny.y = y;
              }
            } else {
              bunny.y = height;
            }
          }
        });
      });
      // Listen for frame updates
      this.pixi.ticker.add(() => {
        // each frame we spin the bunny around a bit
        // bunny.rotation += 0.01;
      });
    });
  },
};
</script>

<style>
canvas {
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
}
</style>
