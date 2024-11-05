import { useEffect, useRef } from 'react';

const AnimatedComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const opts = {
      people: 15,
      radius: 200,
      personFeetDist: 5,
      personTorsoBaseY: 10,
      personTorsoFinalY: 20,
      personArmAttachmentY: 17,
      personArmLen: 8,
      personArmAddedAngle: Math.PI / 4,
      personHeadHalfSide: 4,
      wavyMultiplier: 20,
      waveAdder: 0.01,
      moveMultiplier: 8,
      moveAdder: 0.005,
      particleFinalTopY: 300,
      particleText: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
      unitCharSize: 20,
      particleBaseTime: 30,
      particleAddedTime: 30,
      particleSpawnChanceParPerson: 1 / 8,
      focalLength: 250,
      camera: { x: 0, y: 75, z: 300 },
      vanishPoint: { x: w / 2, y: h / 2 },
      rotYvel: 0.01,
      templateColor: 'hsl(hue,80%,50%)',
      templateAlphaColor: 'hsla(hue,80%,50%,alp)',
    };

    const particles: Particle[] = [];
    let tick = 0;
    const tau = Math.PI * 2;
    const calc = {
      baseAng: tau / opts.people,
      particleSpawnY: opts.personTorsoFinalY + opts.personHeadHalfSide,
      personHeadFinalY: opts.personTorsoFinalY + 2 * opts.personHeadHalfSide,
    };

    function anim() {
      tick++;
      if (!ctx) return;
      
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);

      const addedAng = opts.rotYvel * tick;
      const cosAddedAng = Math.cos(addedAng);
      const sinAddedAng = Math.sin(addedAng);

      ctx.translate(opts.vanishPoint.x, opts.vanishPoint.y);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < opts.people; i++) {
        const ang = calc.baseAng * (i + Math.sin(opts.moveMultiplier * tick * opts.moveAdder + i) / 2);
        const renderingAng = ang + addedAng;
        const waveAng = opts.personArmAddedAngle * Math.sin(renderingAng + opts.wavyMultiplier * tick * opts.waveAdder + i);
        const cos = Math.cos(renderingAng);
        const sin = Math.sin(renderingAng);

        const f1 = getPerspective(opts.radius * cos - opts.personFeetDist * sin, 0, opts.personFeetDist * cos - opts.radius * sin);
        const f2 = getPerspective(opts.radius * cos + opts.personFeetDist * sin, 0, -opts.personFeetDist * cos - opts.radius * sin);
        
        ctx.strokeStyle = opts.templateColor.replace('hue', `${(ang / tau) * 360}`);
        ctx.beginPath();
        f1.moveTo();
        f2.lineTo();
        ctx.stroke();
        
        if (Math.random() < opts.particleSpawnChanceParPerson) particles.push(new Particle(ang));
      }
      particles.forEach((particle, index) => {
        particle.step();
        if (particle.tick >= particle.time) particles.splice(index, 1);
      });

      ctx.translate(-opts.vanishPoint.x, -opts.vanishPoint.y);
      ctx.globalCompositeOperation = 'source-over';

      requestAnimationFrame(anim);
    }

    function getPerspective(x: number, y: number, z: number): Point2d {
      const scale = opts.focalLength / (z - opts.camera.z);
      return new Point2d(scale * x, scale * (y - opts.camera.y));
    }

    class Point2d {
      x: number;
      y: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
      }

      moveTo() {
        ctx?.moveTo(this.x, this.y);
      }

      lineTo() {
        ctx?.lineTo(this.x, this.y);
      }
    }

    class Particle {
      sx: number;
      sz: number;
      dy: number;
      ang: number;
      char: string;
      time: number;
      tick: number;

      constructor(ang: number) {
        this.sx = opts.radius * Math.cos(ang);
        this.sz = opts.radius * Math.sin(ang);
        this.dy = Math.random() * opts.particleFinalTopY - calc.particleSpawnY;
        this.ang = ang;
        this.char = opts.particleText[Math.floor(Math.random() * opts.particleText.length)];
        this.time = opts.particleBaseTime + Math.floor(Math.random() * opts.particleAddedTime);
        this.tick = 0;
      }

      step = () => {
        this.tick++;
        const proportion = this.tick / this.time;
        const scale = opts.focalLength / (this.sz - opts.camera.z);
        
        if (ctx) {
          ctx.fillStyle = opts.templateAlphaColor.replace('hue', `${(this.ang / tau) * 360}`).replace('alp', `${1 - proportion}`);
          ctx.font = `${opts.unitCharSize * scale}px monospace`;
          ctx.fillText(this.char, scale * this.sx - opts.unitCharSize / 2, scale * (calc.particleSpawnY + this.dy * proportion - opts.camera.y) - opts.unitCharSize / 2);
        }
      };
    }

    anim();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      opts.vanishPoint.x = w / 2;
      opts.vanishPoint.y = h / 2;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default AnimatedComponent;
