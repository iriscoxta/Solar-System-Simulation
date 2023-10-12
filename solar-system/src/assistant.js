
export function orbitObjectAround(centerObject, orbitingObject, radius, speed) {
    const time = performance.now() * speed;
    const angle = time % (2 * Math.PI); // Um ciclo completo (360 graus) em radianos

    const x = centerObject.position.x + radius * Math.cos(angle);
    const z = centerObject.position.z + radius * Math.sin(angle);

    orbitingObject.position.set(x, orbitingObject.position.y, z);
}