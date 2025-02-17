import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

let font;
let vehicles: any[] = [];

const ParticleText = ({ text = 'Kenny', color = '#ff0000', size = 192 }) => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 300 });

  useEffect(() => {
    const sketch = (p: p5) => {
      class Vehicle {
        p: p5;
        x: number;
        y: number;
        targetX: number;
        targetY: number;
        velocityX: number;
        velocityY: number;
        accelerationX: number;
        accelerationY: number;

        constructor(x: number, y: number) {
          this.p = p;
          this.x = x;
          this.y = y;
          this.targetX = x;
          this.targetY = y;
          this.velocityX = 0;
          this.velocityY = 0;
          this.accelerationX = 0;
          this.accelerationY = 0;
        }

        behaviors() {
          const mouseDistX = p.mouseX - this.x;
          const mouseDistY = p.mouseY - this.y;
          const distance = p.sqrt(mouseDistX * mouseDistX + mouseDistY * mouseDistY);
          const force = 500 / (distance + 10); // Control how strong the attraction/repulsion is

          const directionX = mouseDistX / distance;
          const directionY = mouseDistY / distance;

          // Repel the particles when too close
          if (distance < 100) {
            this.accelerationX -= directionX * force;
            this.accelerationY -= directionY * force;
          } else {
            this.accelerationX += directionX * force;
            this.accelerationY += directionY * force;
          }
        }

        update() {
          this.velocityX += this.accelerationX;
          this.velocityY += this.accelerationY;
          this.x += this.velocityX;
          this.y += this.velocityY;

          this.accelerationX = 0;
          this.accelerationY = 0;
        }

        show() {
          this.p.fill(color);
          this.p.noStroke();
          this.p.ellipse(this.x, this.y, 8, 8); // Make the particles bigger
        }
      }

      // Preload font
      p.preload = () => {
        font = p.loadFont('/AntonSC-Regular.ttf'); // Font from public folder
      };

      p.setup = () => {
        // Create canvas that dynamically resizes with parent div
        const parentDiv = canvasRef.current;
        setCanvasSize({ width: parentDiv.offsetWidth, height: parentDiv.offsetHeight });
        p.createCanvas(parentDiv.offsetWidth, parentDiv.offsetHeight);

        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(size);
        p.fill(color);
        p.noStroke();

        // Create points for the text
        let points = font.textToPoints(text, p.width / 2 - p.textWidth(text) / 2, p.height / 2, size, {
          sampleFactor: 0.2, // Spread out the points a bit more
        });

        for (let i = 0; i < points.length; i++) {
          let pt = points[i];
          let vehicle = new Vehicle(pt.x, pt.y);
          vehicles.push(vehicle);
        }
      };

      p.draw = () => {
        p.clear(); // Make background transparent
        for (let i = 0; i < vehicles.length; i++) {
          let v = vehicles[i];
          v.behaviors();
          v.update();
          v.show();
        }
      };

      p.windowResized = () => {
        // Resize canvas based on the parent div's new size
        const parentDiv = canvasRef.current;
        setCanvasSize({ width: parentDiv.offsetWidth, height: parentDiv.offsetHeight });
        p.resizeCanvas(parentDiv.offsetWidth, parentDiv.offsetHeight);
      };
    };

    const p5Instance = new p5(sketch, canvasRef.current);

    // Set up resize observer for dynamic canvas resizing when the parent container changes size
    const resizeObserver = new ResizeObserver(() => {
      const parentDiv = canvasRef.current;
    
