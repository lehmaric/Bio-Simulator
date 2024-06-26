import Matter from 'matter-js';

const spawnNutrients = (nutrientType, x, y, world) => {
  let nutrient;
  const categoryOther = 0x0004;
  const categoryBorders = 0x0006;

  const createHexagon = (x, y, sideLength) => {
    const vertices = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const vertexX = x + sideLength * Math.cos(angle);
      const vertexY = y + sideLength * Math.sin(angle);
      vertices.push({ x: vertexX * 2, y: vertexY });
    }

    return Matter.Bodies.fromVertices(x, y, [vertices], {
      render: {
        fillStyle: 'orange',
      },
      collisionFilter: {
        category: categoryOther,
        mask: categoryOther | categoryBorders,
      },
    });
  };

  switch (nutrientType) {
    case 'carbohydrates':
      nutrient = createHexagon(x, y, 15);
      break;
    case 'proteins':
      nutrient = Matter.Bodies.circle(x, y, 20, {
        collisionFilter: {
          category: categoryOther,
          mask: categoryOther | categoryBorders,
        },
        render: {
          fillStyle: 'red',
        },
      });
      break;

    case 'lipids':
      nutrient = Matter.Bodies.rectangle(x, y, 40, 20, {
        collisionFilter: {
          category: categoryOther,
          mask: categoryOther | categoryBorders,
        },
        render: {
          fillStyle: 'green',
        },
      });

      break;
    default:
      break;
  }
  nutrient.nutrientType = nutrientType;
  Matter.World.add(world, nutrient);
  return nutrient;
};

export default spawnNutrients;
