import Matter from 'matter-js';

const spawnNutrients = (nutrientType, x, y, world) => {
  let nutrient;

  const createHexagon = (x, y, sideLength) => {
    const vertices = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const vertexX = x + sideLength * Math.cos(angle);
      const vertexY = y + sideLength * Math.sin(angle);
      vertices.push({ x: vertexX * 2, y: vertexY });
    }

    return Matter.Bodies.fromVertices(x, y, [vertices], {
      // Additional options for the body
    });
  };

  switch (nutrientType) {
    case 'carbohydrates':
      nutrient = createHexagon(500, 500, 15);
      // nutrient = Matter.Bodies.polygon(x, y, 6, 20, {
      //   render: {
      //     fillStyle: 'blue',
      //   },
      // });
      break;
    case 'proteins':
      nutrient = Matter.Bodies.circle(x, y, 20, {
        render: {
          fillStyle: 'red',
        },
      });
      break;
    case 'lipids':
      nutrient = Matter.Bodies.rectangle(x, y, 40, 20, {
        render: {
          fillStyle: 'green',
        },
      });
      break;
    default:
      break;
  }
  Matter.World.add(world, nutrient);
};

export default spawnNutrients;
